/**
 * Created by debasishmohapatra on 27/06/17.
 */

var jshint = {
	'beforeConcat': ['<%= sourceDir %>**/*.js']
};

module.exports = function (grunt) {
	return jshint;
};