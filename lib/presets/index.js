var lodash = require('lodash');

function importAll (r) {
  r.keys().forEach(r);
}

// All modules in this directory excluding this file
// var presets = require.context('./', true, /^(?!.*index.js)((.*\.(js\.*))[^.]*$)/im);
//
// importAll(presets);

var presets = {
	'accessibility': require('./accessibility'),
	'default': require('./default'),
	'validate': require('./validate')
};

presets.none = lodash.mapValues(presets.default, function(){return false;});
module.exports.presets = presets;

module.exports.flattenOpts = function (optList) {
    var options = {};

    optList.forEach(function (opt) {
        if (lodash.isString(opt)) {
            opt = presets[opt];
        }

        lodash.assign(options, opt);
    });

    return options;
};
