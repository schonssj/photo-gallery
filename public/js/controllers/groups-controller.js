angular.module('photogallery').controller('GroupsController', function($scope, $http) {
		$http.get('/v1/groups')
			.success(function(groups) {
			$scope.groups = groups;
		})
		.error(function(error) {
			console.log(error);
		});
	}
);