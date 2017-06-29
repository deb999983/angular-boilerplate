/**
 * Created by debasishmohapatra on 29/06/17.
 */

var cssmin = {
	options: {
		keepSpecialComments: 0
	},

	sourceFiles: {
		files: [
			{
				src: '<%= build.dir %>/css/<%= build.buildFilePrefix %>-<%= versions.css %>.css',
				dest: '<%= build.dir %>/css/<%= build.buildFilePrefix %>-<%= versions.css %>.min.css'
			}
		]
	},

	libFiles: {
		files: [
			{
				src: '<%= build.dir %>/css/<%= build.libsFilePrefix %>-<%= versions.libs %>.css',
				dest: '<%= build.dir %>/css/<%= build.libsFilePrefix %>-<%= versions.libs %>.min.css'
			}
		]
	}
};

module.exports = function (grunt) {
	return cssmin;
};