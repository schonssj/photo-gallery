angular.module('myDirectives', [])
	.directive('myPanel', function() {
		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;

		ddo.scope = {
            title: '@'
        };

        ddo.templateUrl = 'js/directives/my-panel.html';

		return ddo;
	})
    .directive('myPhoto', function() {
        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            title: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{title}}">';           
        
        return ddo;
    })
    .directive('myDangerButton', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            name: '@',
            action : '&'
        }
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="action()">{{name}}</button>';

        return ddo;
    })
    .directive('myFocus', function() {
        var ddo = {};
        ddo.restrict = "A";
       
        ddo.link = function(scope, element) {
             scope.$on('addedPhoto', function() {
                 element[0].focus();
             });
        };

        return ddo;
    })
    .directive('myTitles', function() {
        var ddo = {};
        ddo.restrict = 'E';
        ddo.template = '<ul><li ng-repeat="title in titles">{{title}}</li></ul>';
        ddo.controller = function($scope, photoResource) {
            photoResource.query(function(photos) {
                $scope.titles = photos.map(function(photo) {
                    return photo.title;
                });    
            });
        };
        return ddo;
    });