/**
 * Created by debasishmohapatra on 27/06/17.
 */

/**
 * Restangular based data service, fetches user data
 * from the backend
 *
 * @see https://github.com/mgonto/restangular
 */

var services = angular
	.module('ExampleApp.services', [])
	.factory('UserDataService', ['Restangular', '$q', function (Restangular, $q) {
		function UserDataService (Restangular, $q) {
		}
		/**
		 * @function getFirstUsername
		 * @returns a Promise that eventually resolves to the username of the first user
		 */
		UserDataService.prototype.getFirstUsername = function () {
			var firstUsernameDeffered = $q.defer();
			var response = Restangular
				.one('users')
				.getList()
				.then (function (response) {
					firstUsernameDeffered.resolve(response[0].name);
				}
			);

			return firstUsernameDeffered.promise;
		};

		return new UserDataService();
	}]);