const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');

var webpackConf = require(path.join(process.cwd(),'webpack.config.js'));


function wrapPackedFile(packedFile) {
	return [
		'(function __htmllint_cut(){})',
		'define(function(require, exports, module) {',
		'module.exports='+packedFile.replace(/^var\s+\w+\s*=/, ''),
		'});',
		'(function __htmllint_cut_end(){})'
	].join('\n');
}

//fs.mkdir(webpackConf.output.path);

exec('webpack', function(err){
	if ( err ) {
		console.error(`exec error: ${err}`);
		return;
	}
	var fileName = webpackConf.output.filename;

	var packedFile = fs.readFileSync(path.join(webpackConf.output.path, fileName));



	fs.writeFile(path.join(webpackConf.output.path,'htmllint.js'), wrapPackedFile(packedFile+''));
	console.log('Done!');
});