(function () {
  data.title = options.title || 'Lessons';
  data.loggedIn = gs.isLoggedIn();

  var action = input ? input.action : null;

  // Toggle "learned" for one sign. Only meaningful for signed-in users; the ACLs
  // also restrict progress rows to their owner.
  if (action === 'toggle' && data.loggedIn && input.sign_id) {
    setLearned(input.sign_id, input.learned === true || input.learned === 'true');
  }

  var learned = learnedSet();

  data.lessons = getLessons(learned);
  data.selectedLesson = null;
  data.signs = [];

  var lessonId = input && input.lesson_id ? input.lesson_id : null;
  if (lessonId) {
    data.selectedLesson = getLesson(lessonId);
    if (data.selectedLesson) {
      data.signs = getSigns(lessonId, learned);
    }
  }

  // ------------------------------------------------------------------ helpers

  // sys_id set of signs the current user has marked learned.
  function learnedSet() {
    var set = {};
    if (!data.loggedIn) {
      return set;
    }
    var p = new GlideRecord('x_snc_asl_progress');
    p.addQuery('user', gs.getUserID());
    p.addQuery('learned', true);
    p.setLimit(1000);
    p.query();
    while (p.next()) {
      set[p.getValue('sign')] = true;
    }
    return set;
  }

  function getLessons(learnedMap) {
    var out = [];
    var gr = new GlideRecord('x_snc_asl_lesson');
    gr.addQuery('active', true);
    gr.orderBy('order');
    gr.setLimit(50);
    gr.query();
    while (gr.next()) {
      var lessonId = gr.getUniqueValue();
      var total = 0;
      var done = 0;

      var s = new GlideRecord('x_snc_asl_sign');
      s.addQuery('lesson', lessonId);
      s.setLimit(500);
      s.query();
      while (s.next()) {
        total++;
        if (learnedMap[s.getUniqueValue()]) {
          done++;
        }
      }

      out.push({
        sys_id: lessonId,
        title: gr.getValue('title'),
        description: gr.getValue('description') || '',
        total: total,
        learned: done,
        percent: total > 0 ? Math.round((done / total) * 100) : 0,
      });
    }
    return out;
  }

  function getLesson(lessonId) {
    var gr = new GlideRecord('x_snc_asl_lesson');
    if (!gr.get(lessonId)) {
      return null;
    }
    return {
      sys_id: gr.getUniqueValue(),
      title: gr.getValue('title'),
      description: gr.getValue('description') || '',
    };
  }

  function getSigns(lessonId, learnedMap) {
    var out = [];
    var gr = new GlideRecord('x_snc_asl_sign');
    gr.addQuery('lesson', lessonId);
    gr.orderBy('order');
    gr.setLimit(500);
    gr.query();
    while (gr.next()) {
      var id = gr.getUniqueValue();
      var imageUrl = gr.getValue('image_url') || '';
      var referenceUrl = gr.getValue('reference_url') || '';
      out.push({
        sys_id: id,
        label: gr.getValue('label'),
        token: gr.getValue('token'),
        description: gr.getValue('description') || '',
        image_url: imageUrl,
        hasImage: imageUrl !== '',
        attribution: gr.getValue('attribution') || '',
        reference_url: referenceUrl,
        hasReference: referenceUrl !== '',
        learned: learnedMap[id] === true,
      });
    }
    return out;
  }

  // Upsert one progress row per (user, sign).
  function setLearned(signId, isLearned) {
    var userId = gs.getUserID();
    var p = new GlideRecord('x_snc_asl_progress');
    p.addQuery('user', userId);
    p.addQuery('sign', signId);
    p.setLimit(1);
    p.query();

    if (p.next()) {
      p.setValue('learned', isLearned);
      p.update();
      return;
    }

    if (isLearned) {
      var ins = new GlideRecord('x_snc_asl_progress');
      ins.initialize();
      ins.setValue('user', userId);
      ins.setValue('sign', signId);
      ins.setValue('learned', true);
      ins.insert();
    }
  }
})();
