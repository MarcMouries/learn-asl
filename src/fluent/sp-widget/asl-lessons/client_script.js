api.controller = function () {
  var c = this;

  c.busy = false;

  // Open a lesson: re-run the server script with a lesson_id so it returns that
  // lesson's signs.
  c.openLesson = function (lessonId) {
    c.busy = true;
    c.data.lesson_id = lessonId;
    c.server.update().then(function () {
      c.busy = false;
    });
  };

  c.backToLessons = function () {
    c.busy = true;
    c.data.lesson_id = null;
    c.server.update().then(function () {
      c.busy = false;
    });
  };
};
