(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.controller('PostCtrl', function ($scope, $routeParams, $location , postsService ,navStates,urlFix){

		$routeParams.title = urlFix($routeParams.title);


		postsService.success(function(data,status){
			$scope.postsData = data.posts;

			for(var post in $scope.postsData){
				if ($scope.postsData.hasOwnProperty(post)){
					var postObj = urlFix($scope.postsData[post].title);
					if(postObj === $routeParams.title){
						// console.log(postObj);
						$scope.post = $scope.postsData[post];
					}
				}
			}

			$scope.$apply( $location.path( '/post/'+ $routeParams.title) );
		})
		.error(function(data , status){
			console.erorr(status, data);
		});



	});

}());

