(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.controller('PostCtrl', function ($scope, $routeParams, $location , postsService ,navStates, utils){

		postsService.success(function(data,status){

			$scope.postsData = data.posts;

			for(var post in $scope.postsData){

				if ($scope.postsData.hasOwnProperty(post)){

					var postTitle = utils.cleanTitle($scope.postsData[post].title);

					if(postTitle === $routeParams.title){

						$scope.post = $scope.postsData[post];
					}
				}
			}

		})
		.error(function(data , status){
			console.erorr(status, data);
		});



	});

}());

