/*
 * Lessons widget — browse the sign library by lesson.
 *
 * The app does not offer sign-in, so there is no per-user progress here: with
 * every visitor anonymous there would be nobody to attribute a "learned" flag
 * to. Lessons are presented as a study reference instead of a tracked course.
 *
 * All reads use plain GlideRecord, which does not evaluate ACLs — that is why
 * the content tables need no public ACLs for this to work anonymously.
 */
(function () {
  data.title = options.title || 'Lessons';

  data.lessons = getLessons();
  data.selectedLesson = null;
  data.signs = [];

  var lessonId = input && input.lesson_id ? input.lesson_id : null;
  if (lessonId) {
    data.selectedLesson = getLesson(lessonId);
    if (data.selectedLesson) {
      data.signs = getSigns(lessonId);
    }
  }

  // ------------------------------------------------------------------ helpers

  function getLessons() {
    var out = [];
    var gr = new GlideRecord('x_snc_asl_lesson');
    gr.addQuery('active', true);
    gr.orderBy('order');
    gr.setLimit(50);
    gr.query();
    while (gr.next()) {
      var lessonId = gr.getUniqueValue();

      var count = new GlideAggregate('x_snc_asl_sign');
      count.addQuery('lesson', lessonId);
      count.addAggregate('COUNT');
      count.query();
      var total = count.next() ? parseInt(count.getAggregate('COUNT'), 10) || 0 : 0;

      out.push({
        sys_id: lessonId,
        title: gr.getValue('title'),
        description: gr.getValue('description') || '',
        total: total,
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

  function getSigns(lessonId) {
    var out = [];
    var gr = new GlideRecord('x_snc_asl_sign');
    gr.addQuery('lesson', lessonId);
    gr.orderBy('order');
    gr.setLimit(500);
    gr.query();
    while (gr.next()) {
      var imageUrl = gr.getValue('image_url') || '';
      var referenceUrl = gr.getValue('reference_url') || '';
      out.push({
        sys_id: gr.getUniqueValue(),
        label: gr.getValue('label'),
        token: gr.getValue('token'),
        description: gr.getValue('description') || '',
        image_url: imageUrl,
        hasImage: imageUrl !== '',
        attribution: gr.getValue('attribution') || '',
        reference_url: referenceUrl,
        hasReference: referenceUrl !== '',
      });
    }
    return out;
  }
})();
