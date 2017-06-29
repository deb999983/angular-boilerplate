/**
 * Created by debasishmohapatra on 27/06/17.
 */

/**
 * Setup of main AngularJS application, with Restangular being defined as a dependency.
 *
 * @see controllers
 * @see services
 */
angular.module('ExampleApp', [
		'restangular',
		'ui.router',
		'ExampleApp.controllers',
		'ExampleApp.services'
	]
);

angular.module('ExampleApp').config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "RestangularProvider",
	function ($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {

		$stateProvider.state('error', {
			url: '/catalog/s/error',
			templateUrl: 'views/error.html'
		}).state('home', {
			url: '/',
			templateUrl: 'views/home.html'
		});

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});


		$urlRouterProvider.otherwise('/');
	}
]);

