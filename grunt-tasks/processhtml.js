/**
 * Created by debasishmohapatra on 29/06/17.
 */

// App specific html process task obj for both admin and dtr.com. //
var processHtmls = {
	options: {
		data: {
			build: '<%= build %>',
			versions: '<%= versions %>'
		}
	},
	dist: {
		files: [
			{
				src: '<%= sourceDir %>/index.html',
				dest: '<%= build.dir %>/index.html'
			}
		]
	}
};

module.exports = function (grunt) {
	return processHtmls;
};