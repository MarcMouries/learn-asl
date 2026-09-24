api.controller = function () {
  var c = this;

  c.busy = false;
  c.nameInput = '';
  c.index = 0;
  c.chosen = [];

  // Step 1 -> 2: the server validates the name, builds the round, stores the
  // answer key, and returns questions plus an opaque session token.
  c.begin = function () {
    if (!c.nameInput || c.busy) {
      return;
    }
    c.busy = true;
    c.data.action = 'start';
    c.data.player_name = c.nameInput;
    c.server.update().then(function () {
      c.data.action = null;
      c.busy = false;
    });
  };

  // Step 2 -> 3: questions are already loaded, so this needs no round trip.
  c.startQuiz = function () {
    c.index = 0;
    c.chosen = [];
    c.data.view = 'quiz';
  };

  // Record one pick and advance. There is nothing to evaluate here — the client
  // has no answer key, and no sign identifiers to look one up with.
  c.choose = function (letter) {
    if (c.busy) {
      return;
    }
    c.chosen.push(letter);

    if (c.index + 1 < c.data.questions.length) {
      c.index++;
    } else {
      c.submit();
    }
  };

  c.submit = function () {
    c.busy = true;
    c.data.action = 'score';
    c.data.session_token = c.data.sessionToken;
    c.data.chosen = c.chosen;
    c.server.update().then(function () {
      c.data.action = null;
      c.data.chosen = null;
      c.busy = false;
    });
  };

  c.playAgain = function () {
    c.nameInput = '';
    c.index = 0;
    c.chosen = [];
    c.data.error = '';
    c.data.view = 'name';
  };

  c.progressPercent = function () {
    var total = (c.data.questions || []).length;
    if (!total) {
      return 0;
    }
    return Math.round((c.index / total) * 100);
  };
};
