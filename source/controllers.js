/**
 * Created by debasishmohapatra on 27/06/17.
 */

/**
 * This is an example controller
 * It triggers the UserdataService and puts the returned
 * value on the scope.
 *
 * @see services
 */

var controllers = angular
	.module('ExampleApp.controllers', [])
	.controller('ExampleController', ['$scope', 'UserDataService', function ($scope, UserDataService) {
		UserDataService.getFirstUsername()
		.then(function (firstUsername) {
				$scope.firstUsername = firstUsername;
			}
		);
	}]);

console.log(controllers);
