api.controller = function () {
  var c = this;

  // American Sign Language fingerspelling images.
  // Uses the ORIGINAL SVG files on Wikimedia Commons (no /thumb, no width).
  // The previous app used fixed-width thumbnail URLs (e.g. 323px-...png) which
  // Wikimedia now rejects with HTTP 400 ("Use thumbnail sizes listed on…"),
  // so the signs stopped rendering. The original .svg files have no size
  // restriction and render fine in an <img>.
  var BASE = 'https://upload.wikimedia.org/wikipedia/commons/';
  var ASL_IMAGE_URLS = {
    A: BASE + '2/27/Sign_language_A.svg',
    B: BASE + '1/18/Sign_language_B.svg',
    C: BASE + 'e/e3/Sign_language_C.svg',
    D: BASE + '0/06/Sign_language_D.svg',
    E: BASE + 'c/cd/Sign_language_E.svg',
    F: BASE + '8/8f/Sign_language_F.svg',
    G: BASE + 'd/d9/Sign_language_G.svg',
    H: BASE + '9/97/Sign_language_H.svg',
    I: BASE + '1/10/Sign_language_I.svg',
    J: BASE + 'b/b1/Sign_language_J.svg',
    K: BASE + '9/97/Sign_language_K.svg',
    L: BASE + 'd/d2/Sign_language_L.svg',
    M: BASE + 'c/c4/Sign_language_M.svg',
    N: BASE + 'e/e6/Sign_language_N.svg',
    O: BASE + 'e/e0/Sign_language_O.svg',
    P: BASE + '0/08/Sign_language_P.svg',
    Q: BASE + '3/34/Sign_language_Q.svg',
    R: BASE + '3/3d/Sign_language_R.svg',
    S: BASE + '3/3f/Sign_language_S.svg',
    T: BASE + '1/13/Sign_language_T.svg',
    U: BASE + '7/7c/Sign_language_U.svg',
    V: BASE + 'c/ca/Sign_language_V.svg',
    W: BASE + '8/83/Sign_language_W.svg',
    X: BASE + 'b/b7/Sign_language_X.svg',
    Y: BASE + '1/1d/Sign_language_Y.svg',
    Z: BASE + '0/0a/Sign_language_Z.svg'
  };

  c.text = '';
  c.signs = [];

  // Rebuild the sign list from the current text: one entry per known letter.
  c.update = function () {
    var letters = (c.text || '').toUpperCase().split('');
    c.signs = letters
      .map(function (letter) {
        return ASL_IMAGE_URLS[letter]
          ? { letter: letter, image_url: ASL_IMAGE_URLS[letter] }
          : null;
      })
      .filter(function (entry) { return entry !== null; });
  };

  c.clear = function () {
    c.text = '';
    c.signs = [];
  };
};
