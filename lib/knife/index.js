var lodash = require('lodash');

// import all the js files in the directory
var utilExports = {
	'apply_rules':       require('./apply_rules'),
	'attr_parse':        require('./attr_parse'),
	'boolean_attrs':     require('./boolean_attrs'),
	'get_format_test':   require('./get_format_test'),
	'is_labeable':       require('./is_labeable'),
	'is_void_element':   require('./is_void_element'),
	'lang_tag':          require('./lang_tag'),
	'match_filter':      require('./match_filter'),
	'relative_line_col': require('./relative_line_col'),
	'shred':             require('./shred'),
	'tag_utils':         require('./tag_utils')
};
var utils = {};

// mixin all the functions from the exports into utils
lodash.values(utilExports).forEach(function (u) {
    lodash.mixin(utils, u);
});

// export utils
module.exports = utils;
