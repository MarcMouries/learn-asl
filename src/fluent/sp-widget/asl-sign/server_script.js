(function () {
  data.title = options.title || 'American Sign Language';

  // Build the token -> sign map from the Sign table. Only single-character
  // tokens (letters, numbers, punctuation) are spellable as the user types;
  // multi-character word signs are lesson content.
  data.signs = {};

  var gr = new GlideRecord('x_snc_asl_sign');
  gr.addQuery('category', 'IN', 'letter,number,punctuation');
  gr.orderBy('order');
  gr.setLimit(200);
  gr.query();

  while (gr.next()) {
    var token = gr.getValue('token');
    if (token === null || token === '') {
      continue;
    }
    data.signs[token.toUpperCase()] = {
      label: gr.getValue('label'),
      image_url: gr.getValue('image_url') || '',
      description: gr.getValue('description') || '',
      category: gr.getValue('category'),
    };
  }
})();
