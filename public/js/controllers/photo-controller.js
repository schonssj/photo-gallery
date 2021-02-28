angular.module('photogallery').controller('PhotoController', ['$scope', 'photoResource', '$routeParams', 'addPhoto', function($scope, photoResource, $routeParams, addPhoto) {
		$scope.photo = {};
		$scope.message = '';

		if($routeParams.photoId) {
			photoResource.get({photoId: $routeParams.photoId}, function(photo) {
				$scope.photo = photo; 
			}, function(error) {
				console.log(error);
				$scope.message = 'Sorry, it was not possible to get the photo.';
			});
		}

		$scope.submit = function() {
			if ($scope.form.$valid) {
				addPhoto.create($scope.photo)
				.then(function(data) {
					$scope.message = data.message;
					if (data.include)
						$scope.photo = {};
				})
				.catch(function(error) {
					$scope.message = error.message;
				});
			}
		};
	}]);