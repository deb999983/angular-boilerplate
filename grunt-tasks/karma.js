/**
 * Created by debasishmohapatra on 27/06/17.
 */

var karma = {
	development: {
		configFile: 'karma.conf.js',
		options: {
			'files': [
				'<%= jsFilesForTesting %>',
				'source/**/*.js'
			]
		}
	},

	dist: {
		configFile: 'karma.conf.js',
		options: {
			files: [
				'<%= jsFilesForTesting %>',
				'<%= build.dir %>/js/<%= build.buildFilePrefix %>-<%= versions.js %>.js'
			]
		}
	},

	minified: {
		configFile: 'karma.conf.js',
		options: {
			files: [
				'<%= jsFilesForTesting %>',
				'<%= build.dir %>/js/<%= build.buildFilePrefix %>-<%= versions.js %>.min.js'
			]
		}
	}
};

module.exports = function (grunt) {
	return karma;
};