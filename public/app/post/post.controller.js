(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.controller('PostCtrl',
	function ($scope, $routeParams, $location, $http , $sanitize , postsService ,navStates, utils){

		//postsService return the posts data JSON
		postsService.success(function(data,status){

			// initialize the scope with the JSON data object
			$scope.postsData = data.posts;


			for(var post in $scope.postsData){

				if ($scope.postsData.hasOwnProperty(post)){

					var postTitle = utils.cleanTitle($scope.postsData[post].title);

					if(postTitle === $routeParams.title){

						$scope.post = $scope.postsData[post];
						$http.get($scope.post.htmlPath)
							.success(function (data) {
								$scope.postHtml = $sanitize(data);
						});
					}
				}
			}

		})
		.error(function(data , status){
			console.erorr(status, data);
		});


		$scope.cleanTitle = utils.cleanTitle;

	});

}());

