(function () {

	'use strict';
	var app = angular.module('Blogapp');

	app.controller('NewCtrl',
		function ($scope, $routeParams, $location,$http, $window,$sce){

		$scope.md2Html = function() {
			$scope.html = $window.marked($scope.markdown);
			$scope.htmlSafe = $sce.trustAsHtml($scope.html);
		};
		$scope.initFromUrl = function(url) {
        	$http.get(url).success(function(data) {
        		$scope.markdown = data;
        		return $scope.md2Html();
        });
      };
		$scope.adminState = $location.path().indexOf('new') > -1? 'new':null;
		console.log('active tab:',$scope.adminState);
	});
}());


