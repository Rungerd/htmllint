/* This file exports a map whose values are all of the
 * exported rules (with the rule names as their keys).
 */

var rulesExport = {
	'attr-bans': require('./attr-bans'),
	'attr-name-style': require('./attr-name-style'),
	'attr-new-line': require('./attr-new-line'),
	'attr-no-dup': require('./attr-no-dup'),
	'attr-no-unsafe-char': require('./attr-no-unsafe-char'),
	'attr-quote-style': require('./attr-quote-style'),
	'attr-req-value': require('./attr-req-value'),
	'attr': require('./attr'),
	'class': require('./class'),
	'doctype-first': require('./doctype-first'),
	'doctype-html5': require('./doctype-html5'),
	'dom': require('./dom'),
	'fig-req-figcaption': require('./fig-req-figcaption'),
	'focusable-tabindex-style': require('./focusable-tabindex-style'),
	'href-style': require('./href-style'),
	'id-class-no-ad': require('./id-class-no-ad'),
	'id-no-dup': require('./id-no-dup'),
	'id-style': require('./id-style'),
	'img-req-alt': require('./img-req-alt'),
	'img-req-src': require('./img-req-src'),
	'indent-style': require('./indent-style'),
	'input-radio-req-name': require('./input-radio-req-name'),
	'input-req-label': require('./input-req-label'),
	'label-req-for': require('./label-req-for'),
	'lang': require('./lang'),
	'line-end-style': require('./line-end-style'),
	'line-max-len': require('./line-max-len'),
	'line': require('./line'),
	'page-title': require('./page-title'),
	'spec-char-escape': require('./spec-char-escape'),
	'table-req-caption': require('./table-req-caption'),
	'table-req-header': require('./table-req-header'),
	'tag-bans': require('./tag-bans'),
	'tag-close': require('./tag-close'),
	'tag-name-lowercase': require('./tag-name-lowercase'),
	'tag': require('./tag')
};

// loop over the exported rules to get a map of
// (rule name) -> (rule)
Object.keys(rulesExport)
    .forEach(function (key) {
        // retrieve the rule
        var rule = rulesExport[key];

        // export the rule under the rule.name property
        module.exports[rule.name] = rule;
    });
