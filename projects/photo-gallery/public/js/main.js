angular.module('photogallery', ['myDirectives','ngAnimate', 'ngRoute', 'ngResource', 'myServices'])
	.config(function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider.when('/photos', {
			templateUrl: 'partials/main.html',
			controller: 'PhotosController'
		});

		$routeProvider.when('/photos/new', {
			templateUrl: 'partials/photo.html',
			controller: 'PhotoController'
		});

		$routeProvider.when('/photos/edit/:photoId', {
			templateUrl: 'partials/photo.html',
			controller: 'PhotoController'
		});

		$routeProvider.otherwise({redirectTo: '/photos'});
	}
);