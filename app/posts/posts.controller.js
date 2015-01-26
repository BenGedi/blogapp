(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.controller('PostsCtrl',
		function ($scope, $routeParams, $location , postsService ,navStates , utils){

		// console.log(postsService);
		// console.log($routeParams.page);
		// console.log($location.search());
		postsService.success(function(data,status){
			$scope.postsData = data.posts;
		})
		.error(function(data , status){
			console.erorr(status, data);
		});

		navStates.activeTab = 'posts';
		console.log(navStates.activeTab);

		$scope.$on('$destroy', function handleDestroyEvent() {
			navStates.activeTab = null;
        });
		console.log(utils);
        $scope.cleanTitle = utils.cleanTitle;
	});

}());

