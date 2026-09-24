/*
 * Play widget — "Spell your name".
 *
 * Views: name -> reveal -> quiz -> results.
 *
 * SECURITY MODEL
 *
 * The leaderboard is only meaningful if a score cannot be forged, so:
 *
 *  1. When a round starts, the correct answers are written to
 *     x_snc_asl_quiz_session and only an opaque token goes to the browser.
 *  2. The questions sent to the client carry an image and four options —
 *     no sign sys_id, no letter. There is nothing in the payload to look up.
 *  3. Scoring reads the answers back from the session and compares them to the
 *     submitted letters BY POSITION. The client cannot influence which sign it
 *     was answering, nor how many questions the round had.
 *  4. The session is marked consumed before scoring, so a round cannot be
 *     replayed to farm the leaderboard.
 *  5. x_snc_asl_score and x_snc_asl_sign have no ACLs, so neither a forged
 *     insert nor an answer-key read is possible through the Table/REST API.
 *     This script still works because server-side GlideRecord does not evaluate
 *     ACLs (verified by impersonation test).
 *
 * The app does not offer sign-in; every player is anonymous.
 */
(function () {
  var QUESTION_COUNT = 10;
  var MAX_NAME_LENGTH = 20;

  // ORDERING MATTERS: both lookup tables are declared here, above the action
  // dispatch. `var` hoists the declaration but not the assignment, so having
  // these at the end of the IIFE left them `undefined` when start() ran —
  // which produced 'Cannot read property "M" from undefined' on the first
  // letter of the player's name. Do not move them below the dispatch.

  // Visually similar handshape groups, used to pick meaningful distractors.
  var SIMILAR = {
    A: ['S', 'T', 'E', 'N'],
    B: ['F', 'W', 'C'],
    C: ['O', 'E', 'B'],
    D: ['G', 'L', 'I', 'F'],
    E: ['A', 'S', 'O', 'C'],
    F: ['B', 'D', 'W'],
    G: ['Q', 'L', 'D'],
    H: ['U', 'V', 'N', 'P'],
    I: ['J', 'Y', 'D'],
    J: ['I', 'Y'],
    K: ['V', 'U', 'P', 'R'],
    L: ['G', 'D', 'Y'],
    M: ['N', 'T', 'S', 'A'],
    N: ['M', 'T', 'S', 'A'],
    O: ['E', 'C', 'A'],
    P: ['K', 'Q', 'H'],
    Q: ['P', 'G'],
    R: ['U', 'V', 'K'],
    S: ['A', 'T', 'E', 'N'],
    T: ['A', 'S', 'N', 'M'],
    U: ['V', 'R', 'H', 'K'],
    V: ['U', 'R', 'K', 'W'],
    W: ['B', 'F', 'V'],
    X: ['D', 'G', 'I'],
    Y: ['I', 'J', 'L'],
    Z: ['D', 'G', 'I'],
  };

  // Fold accented Latin characters onto the letters the ASL alphabet can spell,
  // so José, Renée and Zoë work instead of silently rendering nothing.
  var FOLD = {
    '\u00C0': 'A', '\u00C1': 'A', '\u00C2': 'A', '\u00C3': 'A', '\u00C4': 'A', '\u00C5': 'A',
    '\u00C6': 'AE', '\u00C7': 'C',
    '\u00C8': 'E', '\u00C9': 'E', '\u00CA': 'E', '\u00CB': 'E',
    '\u00CC': 'I', '\u00CD': 'I', '\u00CE': 'I', '\u00CF': 'I',
    '\u00D0': 'D', '\u00D1': 'N',
    '\u00D2': 'O', '\u00D3': 'O', '\u00D4': 'O', '\u00D5': 'O', '\u00D6': 'O', '\u00D8': 'O',
    '\u00D9': 'U', '\u00DA': 'U', '\u00DB': 'U', '\u00DC': 'U',
    '\u00DD': 'Y', '\u00DE': 'TH', '\u00DF': 'SS',
    '\u0152': 'OE', '\u0160': 'S', '\u0178': 'Y', '\u017D': 'Z', '\u0141': 'L',
  };

  data.title = options.title || 'Spell your name in ASL';
  data.view = 'name';
  data.questionCount = QUESTION_COUNT;
  data.error = '';
  data.playerName = '';
  data.spelled = [];
  data.skipped = '';
  data.questions = [];
  data.sessionToken = '';
  data.review = [];
  data.score = 0;
  data.accuracy = 0;
  data.leaderboard = [];

  var action = input ? input.action : null;

  if (action === 'start') {
    start(input.player_name);
  } else if (action === 'score') {
    scoreRound(input.player_name, input.session_token, input.chosen);
  } else {
    data.leaderboard = leaderboard();
  }

  // --------------------------------------------------------------------- flow

  function start(rawName) {
    var display = safeName(rawName);
    if (!display) {
      data.error = 'Please enter your first name.';
      data.leaderboard = leaderboard();
      return;
    }

    var pool = letterPool();
    var normalised = normalise(rawName);

    var letters = [];
    var skipped = '';
    for (var i = 0; i < normalised.length; i++) {
      var ch = normalised.charAt(i);
      if (pool[ch]) {
        letters.push(ch);
      } else if (ch !== ' ') {
        skipped += ch;
      }
    }

    if (!letters.length) {
      data.error =
        'We could not fingerspell that name with the ASL alphabet. Try the Latin spelling of your name.';
      data.leaderboard = leaderboard();
      return;
    }

    var built = buildQuestions(letters, pool);

    // Persist the answer key server-side, hand back only a token.
    var token = gs.generateGUID();
    var answers = [];
    for (var q = 0; q < built.length; q++) {
      answers.push({ s: built[q].sign_id, a: built[q].answer });
    }

    var sess = new GlideRecord('x_snc_asl_quiz_session');
    sess.initialize();
    sess.setValue('token', token);
    sess.setValue('answers', JSON.stringify(answers));
    sess.setValue('consumed', false);
    sess.insert();

    sweepOldSessions();

    data.playerName = display;
    data.skipped = skipped;
    data.spelled = letters.map(function (letter) {
      return { label: pool[letter].label, image_url: pool[letter].image_url };
    });

    // Strip everything the client does not need. No sign_id, no answer.
    data.questions = built.map(function (item) {
      return {
        image_url: item.image_url,
        options: item.options,
        from_name: item.from_name,
      };
    });
    data.sessionToken = token;
    data.view = 'reveal';
  }

  function scoreRound(rawName, token, chosen) {
    var display = safeName(rawName) || 'Anonymous';
    var picks = chosen || [];

    var sess = new GlideRecord('x_snc_asl_quiz_session');
    sess.addQuery('token', (token || '').toString());
    sess.addQuery('consumed', false);
    sess.setLimit(1);
    sess.query();

    if (!sess.next()) {
      // No valid session: expired, already scored, or never existed. Nothing is
      // recorded — this is the path a replay or a forged submission lands on.
      data.error = 'That round has already been scored or has expired. Please play again.';
      data.view = 'name';
      data.leaderboard = leaderboard();
      return;
    }

    var stored = [];
    try {
      stored = JSON.parse(sess.getValue('answers') || '[]');
    } catch (e) {
      stored = [];
    }

    // Consume first, so a concurrent duplicate submission cannot double-score.
    sess.setValue('consumed', true);
    sess.update();

    var correct = 0;
    var review = [];

    for (var i = 0; i < stored.length; i++) {
      var expected = (stored[i].a || '').toUpperCase();
      var got = (picks[i] || '').toString().toUpperCase();
      var ok = got !== '' && got === expected;
      if (ok) {
        correct++;
      }
      var sign = signById(stored[i].s);
      review.push({
        image_url: sign ? sign.image_url : '',
        correct_label: sign ? sign.label : expected,
        chosen: got || '—',
        ok: ok,
      });
    }

    var total = stored.length;
    data.score = correct;
    data.accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    data.review = review;
    data.playerName = display;
    data.view = 'results';

    if (total > 0) {
      var gr = new GlideRecord('x_snc_asl_score');
      gr.initialize();
      gr.setValue('player_name', display);
      gr.setValue('score', correct);
      gr.setValue('total_questions', total);
      gr.setValue('accuracy', data.accuracy);
      gr.insert();
    }

    data.leaderboard = leaderboard();
  }

  // ------------------------------------------------------------------ helpers

  // Letters that have an image. Numbers and word signs are description-only, so
  // they cannot be used as recognition questions.
  function letterPool() {
    var pool = {};
    var gr = new GlideRecord('x_snc_asl_sign');
    gr.addQuery('category', 'letter');
    gr.addNotNullQuery('image_url');
    gr.orderBy('order');
    gr.setLimit(60);
    gr.query();
    while (gr.next()) {
      var token = (gr.getValue('token') || '').toUpperCase();
      if (token && gr.getValue('image_url')) {
        pool[token] = {
          sys_id: gr.getUniqueValue(),
          label: gr.getValue('label'),
          image_url: gr.getValue('image_url'),
        };
      }
    }
    return pool;
  }

  function signById(sysId) {
    if (!sysId) {
      return null;
    }
    var gr = new GlideRecord('x_snc_asl_sign');
    if (!gr.get(sysId)) {
      return null;
    }
    return {
      label: gr.getValue('label'),
      image_url: gr.getValue('image_url') || '',
    };
  }

  // Their name first (the warm-up, and the emotional hook), then random letters
  // up to a fixed count so every score on the leaderboard is comparable.
  function buildQuestions(letters, pool) {
    var tokens = Object.keys(pool);
    var questions = [];

    for (var i = 0; i < letters.length && questions.length < QUESTION_COUNT; i++) {
      questions.push(question(letters[i], pool, tokens, true));
    }
    while (questions.length < QUESTION_COUNT && tokens.length) {
      var pick = tokens[Math.floor(Math.random() * tokens.length)];
      questions.push(question(pick, pool, tokens, false));
    }
    return questions;
  }

  function question(token, pool, tokens, fromName) {
    var options = [token];
    var similar = shuffle((SIMILAR[token] || []).slice());

    // Prefer visually similar handshapes as distractors so the quiz teaches real
    // discrimination rather than rewarding a lucky guess.
    for (var i = 0; i < similar.length && options.length < 4; i++) {
      if (pool[similar[i]] && options.indexOf(similar[i]) === -1) {
        options.push(similar[i]);
      }
    }
    var guard = 0;
    while (options.length < 4 && tokens.length >= 4 && guard < 100) {
      var pick = tokens[Math.floor(Math.random() * tokens.length)];
      if (options.indexOf(pick) === -1) {
        options.push(pick);
      }
      guard++;
    }

    return {
      sign_id: pool[token].sys_id,
      image_url: pool[token].image_url,
      options: shuffle(options),
      from_name: fromName,
      answer: token,
    };
  }

  // Housekeeping so consumed sessions do not accumulate forever.
  function sweepOldSessions() {
    var cutoff = new GlideDateTime();
    cutoff.addSeconds(-3600);
    var old = new GlideRecord('x_snc_asl_quiz_session');
    old.addQuery('sys_created_on', '<', cutoff);
    old.setLimit(200);
    old.query();
    while (old.next()) {
      old.deleteRecord();
    }
  }

  function leaderboard() {
    var out = [];
    var gr = new GlideRecord('x_snc_asl_score');
    gr.orderByDesc('score');
    gr.orderByDesc('accuracy');
    gr.orderBy('sys_created_on');
    gr.setLimit(10);
    gr.query();
    var rank = 0;
    while (gr.next()) {
      rank++;
      out.push({
        rank: rank,
        player_name: gr.getValue('player_name'),
        score: parseInt(gr.getValue('score'), 10) || 0,
        total: parseInt(gr.getValue('total_questions'), 10) || 0,
        accuracy: parseInt(gr.getValue('accuracy'), 10) || 0,
        when: gr.getDisplayValue('sys_created_on'),
      });
    }
    return out;
  }

  // Display name: capped, and restricted to characters that can legitimately
  // appear in a name. Rendered with {{ }} bindings only, never ng-bind-html.
  function safeName(raw) {
    var s = (raw || '').toString().replace(/[^A-Za-z\u00C0-\u024F '\-]/g, '');
    s = s.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
    if (s.length > MAX_NAME_LENGTH) {
      s = s.substring(0, MAX_NAME_LENGTH);
    }
    return s;
  }

  function normalise(raw) {
    var s = (raw || '').toString().toUpperCase();
    if (s.length > MAX_NAME_LENGTH) {
      s = s.substring(0, MAX_NAME_LENGTH);
    }
    var out = '';
    for (var i = 0; i < s.length; i++) {
      var ch = s.charAt(i);
      out += FOLD[ch] !== undefined ? FOLD[ch] : ch;
    }
    return out.replace(/[^A-Z ]/g, '');
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }
})();
