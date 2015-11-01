var md = require('mkdirp');
var getDirName = require("path").dirname;

module.exports = function(results){
	results.forEach(function(r){
		md.sync(getDirName(r.path));
	});
	return results;
}
