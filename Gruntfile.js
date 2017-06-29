/**
 * Created by debasishmohapatra on 27/06/17.
 */
var appJsFiles = [
	'controllers.js',
	'services/UserDataService.js',
	'app.js'
];

var appCssFiles =  [
	'css/style.css'
];


function prependBase(base, files) {
	for (var i = 0; i < files.length; ++i) {
		files[i] = base + files[i];
	}
}

prependBase('source/', appJsFiles);
prependBase('source/', appCssFiles);



module.exports = function (grunt) {
	var path = require('path');

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'grunt-tasks'),
		data: {
			pkg: grunt.file.readJSON('package.json'),

			libsJSFilesToBuild: [
				'bower_components/lodash/lodash.js',
				'bower_components/jquery/dist/jquery.js',
				'bower_components/bootstrap/dist/js/bootstrap.js',
				'bower_components/angular/angular.js',
				'bower_components/angular-ui-router/release/angular-ui-router.js',
				'bower_components/angular-sanitize/angular-sanitize.js',
				'bower_components/restangular/dist/restangular.js'
			],
			libsCSSFilesToBuild: [
				'bower_components/bootstrap/dist/css/bootstrap.css'
			],

			appJSFilesToBuild: appJsFiles,
			appCSSFilesToBuild: appCssFiles,

			jsFilesForTesting: ['<%= libsJSFilesToBuild %>', 'bower_components/angular-mocks/angular-mocks.js', 'test/**/*Spec.js'],

			build: {
				dir: 'dist',
				buildFilePrefix: 'bundle',
				libsFilePrefix: 'vendor'
			},

			sourceDir: 'source',
			versions: {
				js: '0.0.1',
				css: '0.0.1',
				libs: '0.0.1'
			}

		}
	});

	grunt.registerTask('test', ['karma:development']);

	grunt.registerTask('start-prod-server', [
		'run:copy_middleware',
		'run:start_prod_server'
	]);

	grunt.registerTask('build', [
		'jshint',
		'karma:development',
		'concat',
		'copy',
		'karma:dist',
		'cssmin',
		'uglify',
		'karma:minified',
		'jsdoc',
		'processhtml',
		'start-prod-server'
	]);

	grunt.registerTask('start-dev-server', [
		'run:copy_middleware',
		'run:start_dev_server'
	]);


};

