// Export an array of all rules.

function importAll (r) {
  r.keys().forEach(r);
}

// All modules in this directory excluding this file
var rulesExport = require.context('./', true, /^(?!.*index.js)((.*\.(js\.*))[^.]*$)/im);

importAll(rulesExport);

module.exports = Object.values(rulesExport);
