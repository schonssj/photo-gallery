angular.module('myServices', ['ngResource'])
	.factory('photoResource', function($resource) {
		return $resource('/v1/photos/:photoId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("addPhoto", function(photoResource, $q, $rootScope) {
		var event = 'addedPhoto';

		var service = {};

		service.create = function(photo) {
			return $q(function(resolve, reject) {
				if(photo._id) {
					photoResource.update({photoId: photo._id}, photo, function() {
						$rootScope.$broadcast(event);
						resolve({
							message: 'Photo ' + photo.title + ' updated successfully!',
							include: false
						});
					}, function(error) {
						console.log(error);
						reject({
							message: 'Sorry, it was not possible to update the photo ' + photo.title
						});
					});
				} else {
					photoResource.save(photo, function() {
						$rootScope.$broadcast(event);
						resolve({
							message: 'Photo ' + photo.title + ' added successfully!',
							include: true
						});
					}, function(error) {
						console.log(error);
						reject({
							message: 'Sorry, it was not possible to include the photo ' + photo.title
						});
					});
				}
			});
		};
		return service;
    });