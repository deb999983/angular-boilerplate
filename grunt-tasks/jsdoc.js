/**
 * Created by debasishmohapatra on 27/06/17.
 */

var jsdoc =  {
	src: ['<%= sourceDir %>**/*.js'],
		'options': {
		'destination': 'doc'
	}
};

module.exports = function (grunt) {
	return jsdoc;
};