api.controller = function () {
  var c = this;

  // The token -> sign map now comes from the Sign table (c.data.signs), built by
  // the server script. Adding a sign record is all that is needed to make a new
  // character spellable — no code change.
  c.text = '';
  c.signs = [];

  c.update = function () {
    var map = c.data.signs || {};
    var chars = (c.text || '').toUpperCase().split('');

    c.signs = chars
      .map(function (ch) {
        var sign = map[ch];
        if (!sign) {
          return null;
        }
        return {
          token: ch,
          label: sign.label,
          image_url: sign.image_url,
          description: sign.description,
          category: sign.category,
          isSpace: ch === ' ',
          hasImage: !!sign.image_url,
        };
      })
      .filter(function (entry) {
        return entry !== null;
      });
  };

  c.clear = function () {
    c.text = '';
    c.signs = [];
  };
};
