/**
 * Created by debasishmohapatra on 27/06/17.
 */

var concat = {
	options: {
		sourceMap: true
	},
	sourcefiles: {
		files: [
			{
				src: ['<%= appJSFilesToBuild %>'],
				dest: '<%= build.dir %>/js/<%= build.buildFilePrefix %>-<%= versions.js %>.js'
			},
			{
				src: ['<%= appCSSFilesToBuild %>'],
				dest: '<%= build.dir %>/css/<%= build.buildFilePrefix %>-<%= versions.css %>.css'
			},
		]
	},
	libFiles: {
		files: [
			{
				src: ['<%= libsJSFilesToBuild %>'],
				dest: '<%= build.dir %>/js/<%= build.libsFilePrefix %>-<%= versions.libs %>.js'
			},
			{
				src: ['<%= libsCSSFilesToBuild %>'],
				dest: '<%= build.dir %>/css/<%= build.libsFilePrefix %>-<%= versions.libs %>.css'
			},
		]
	}
};

module.exports = function (grunt) {
	return concat;
};