/**
 * Created by debasishmohapatra on 28/06/17.
 */

var copy = {
	appHtmls: {
		files: [
			{
				expand: true,
				cwd: '<%= sourceDir %>',
				src: ['views/**/*.html'],
				dest: "<%= build.dir %>"
			},
			{
				expand: true,
				cwd: '<%= sourceDir %>',
				src: ['assets/**/*'],
				dest: "<%= build.dir %>"
			}
		]
	}
};

module.exports = function (grunt) {
	return copy;
};
