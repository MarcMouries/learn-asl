api.controller = function () {
  var c = this;

  c.busy = false;

  // Open a lesson: re-run the server script with a lesson_id so it returns that
  // lesson's signs along with the user's learned flags.
  c.openLesson = function (lessonId) {
    c.busy = true;
    c.data.action = null;
    c.data.lesson_id = lessonId;
    c.server.update().then(function () {
      c.busy = false;
    });
  };

  c.backToLessons = function () {
    c.busy = true;
    c.data.action = null;
    c.data.lesson_id = null;
    c.server.update().then(function () {
      c.busy = false;
    });
  };

  // Flip the learned state of one sign and persist it.
  c.toggleLearned = function (sign) {
    if (!c.data.loggedIn || c.busy) {
      return;
    }
    c.busy = true;
    c.data.action = 'toggle';
    c.data.sign_id = sign.sys_id;
    c.data.learned = !sign.learned;
    c.server.update().then(function () {
      c.data.action = null;
      c.busy = false;
    });
  };
};
