(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.controller('PostCtrl', function ($scope, $routeParams, $location , postsService ,navStates){

		postsService.success(function(data,status){
			$scope.postsData = data.posts;

			for(var post in $scope.postsData){

				if($scope.postsData[post].title === $routeParams.title){
					console.log($scope.postsData[post].title);
					console.log($routeParams.title);
					$scope.post = $scope.postsData[post];
				}
			}
		})
		.error(function(data , status){
			console.erorr(status, data);
		});



	});

}());

