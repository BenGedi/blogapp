(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.controller('PostsCtrl', function ($scope, $routeParams, $location , postsService){

		// console.log(postsService);
		// console.log($routeParams.page);
		// // console.log($location.search());
		postsService.success(function(data,status){
			$scope.postData = data.posts;
		})
		.error(function(data , status){
			console.erorr(status, data);
		});


	});

}());

