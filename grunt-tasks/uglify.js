/**
 * Created by debasishmohapatra on 27/06/17.
 */

var uglify = {
	options: {
		sourceMap:true,
		sourceMapIncludeSources : true
	},

	sourceFiles: {
		options: {
			sourceMapIn: '<%= build.dir %>/js/<%= build.buildFilePrefix %>-<%= versions.js %>.js.map'
		},
		files: [
			{
				src: '<%= build.dir %>/js/<%= build.buildFilePrefix %>-<%= versions.js %>.js',
				dest: '<%= build.dir %>/js/<%= build.buildFilePrefix %>-<%= versions.js %>.min.js'
			}
		]
	},

	libFiles: {
		options: {
			sourceMapIn: '<%= build.dir %>/js/<%= build.libsFilePrefix %>-<%= versions.libs %>.js.map'
		},
		files: [
			{
				src: '<%= build.dir %>/js/<%= build.libsFilePrefix %>-<%= versions.libs %>.js',
				dest: '<%= build.dir %>/js/<%= build.libsFilePrefix %>-<%= versions.libs %>.min.js'
			}
		]
	}
};

module.exports = function (grunt) {
	return uglify;
};