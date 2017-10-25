var lodash = require('lodash');

function importAll (r) {
  r.keys().forEach(r);
}

// import all the js files in the directory
var utilExports = require.context('./', true, /^(?!.*index.js)((.*\.(js\.*))[^.]*$)/im);

importAll(utilExports);

var utils = {};

// mixin all the functions from the exports into utils
lodash.values(utilExports).forEach(function (u) {
    lodash.mixin(utils, u);
});

// export utils
module.exports = utils;
