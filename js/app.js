angular.module('sportice', ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'AuthController'
	});
});