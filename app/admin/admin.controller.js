(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.controller('AdminCtrl',
		function ($scope, $routeParams, $location , postsService ,navStates , utils){

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
			}



		})
		.error(function(data , status){
			console.erorr(status, data);
		});

		// initialize active tab state
		navStates.activeTab = 'admin';

		// initialize table default order by predicate
		$scope.predicate = 'date';
		$scope.reverse = false;

		$scope.$watch('predicate', function() {
			$scope.reverse = true;
		});

		$scope.$on('$destroy', function handleDestroyEvent() {
			navStates.activeTab = null;
        });
	});

}());
