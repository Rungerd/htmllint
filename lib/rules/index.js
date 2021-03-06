// Export an array of all rules.

var rulesExport = {
	'attr-bans': require('./attr-bans'),
	'attr-name-style': require('./attr-name-style'),
	'attr-new-line': require('./attr-new-line'),
	'attr-no-dup': require('./attr-no-dup'),
	'attr-no-unsafe-char': require('./attr-no-unsafe-char'),
  'attr-order': require('./attr-order'),
	'attr-quote-style': require('./attr-quote-style'),
	'attr-req-value': require('./attr-req-value'),
  'attr-validate': require('./attr-validate'),
	'attr': require('./attr'),
  'button-req-content': require('./button-req-content'),
  'class-no-dup': require('./class-no-dup'),
  'class-style': require('./class-style'),
	'class': require('./class'),
	'doctype-first': require('./doctype-first'),
	'doctype-html5': require('./doctype-html5'),
	'dom': require('./dom'),
  'fieldset-contains-legend': require('./fieldset-contains-legend'),
	'fig-req-figcaption': require('./fig-req-figcaption'),
	'focusable-tabindex-style': require('./focusable-tabindex-style'),
  'free-options': require('./free-options'),
  'head-req-title': require('./head-req-title'),
  'head-valid-content-model': require('./head-valid-content-model'),
	'href-style': require('./href-style'),
  'html-valid-content-model': require('./html-valid-content-model'),
	'id-class-no-ad': require('./id-class-no-ad'),
	'id-no-dup': require('./id-no-dup'),
	'id-style': require('./id-style'),
	'img-req-alt': require('./img-req-alt'),
	'img-req-src': require('./img-req-src'),
	'indent-style': require('./indent-style'),
  'input-btn-req-value-or-title': require('./input-btn-req-value-or-title'),
	'input-radio-req-name': require('./input-radio-req-name'),
	'input-req-label': require('./input-req-label'),
  'label-no-enc-textarea-or-select': require('./label-no-enc-textarea-or-select'),
	'label-req-for': require('./label-req-for'),
	'lang': require('./lang'),
	'line-end-style': require('./line-end-style'),
	'line-max-len': require('./line-max-len'),
  'line-no-trailing-whitespace': require('./line-no-trailing-whitespace'),
	'line': require('./line'),
  'link-min-length-4': require('./link-min-length-4'),
  'link-req-noopener': require('./link-req-noopener'),
	'spec-char-escape': require('./spec-char-escape'),
	'table-req-caption': require('./table-req-caption'),
	'table-req-header': require('./table-req-header'),
	'tag-bans': require('./tag-bans'),
	'tag-close': require('./tag-close'),
	'tag-name-lowercase': require('./tag-name-lowercase'),
  'tag-req-attr': require('./tag-req-attr'),
	'tag': require('./tag'),
  'title-max-len': require('./title-max-len'),
  'title-no-dup': require('./title-no-dup'),
  'title': require('./title')
};

module.exports = Object.values(rulesExport);
