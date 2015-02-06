(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.controller('PostsCtrl',
		function ($scope, $routeParams, $location , postsService ,navStates , utils){

		$scope.pageNum = parseInt($routeParams.page,10) || 1;

		console.log($scope.pageNum);
		var url  = $location.url();

		$scope.queryParams = (url.indexOf('?')> -1) ? url.slice(url.indexOf('?')) : '';

		$scope.searchInput = $location.search().search;

		postsService.success(function(data,status){
			$scope.postsData = data.posts;
			var urlParam = $location.search();

			// if url has a parameter
			if(Object.keys(urlParam).length>0){
				var postsParam = [];

				// initialize postsParam with post accordingly to the parameter
				utils.addPostsByParam(urlParam,$scope.postsData,postsParam);

				if(postsParam.length>0){
					$scope.postsData = postsParam;
				}
				// parameter is invalide
				// else{
				// 	$location.path('#/posts');
				// }
			}
		})
		.error(function(data , status){
			console.erorr(status, data);
		});

		navStates.activeTab = 'posts';
		$scope.quantity = 3;
		$scope.$on('$destroy', function handleDestroyEvent() {
			navStates.activeTab = null;
        });
        $scope.cleanTitle = utils.cleanTitle;
	});

}());

