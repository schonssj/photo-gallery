angular.module('photogallery').controller('PhotosController', function($scope, photoResource) {
	$scope.photos = [];
	$scope.filter = '';
	$scope.message = '';

	photoResource.query(function(photos) {
		$scope.photos = photos;
	}, function(error) {
		console.log(error);
	});

	$scope.remove = function(photo) {
		photoResource.delete({photoId: photo._id}, function() {
			var photoIndex = $scope.photos.indexOf(photo);
			$scope.photos.splice(photoIndex, 1);
			$scope.message = 'Photo ' + photo.title + ' removed successfully!';
		}, function(error) {
			console.log(error);
			$scope.message = 'Sorry, it was not possible to remove the photo ' + photo.title;
		});
	};
});