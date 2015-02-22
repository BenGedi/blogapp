(function () {

	'use strict';
	var app = angular.module('Blogapp');

	app.controller('EditCtrl',
		function ($scope, $routeParams, $location, $http ,$window,$sce, postsService ,navStates, utils){

		//postsService return the posts data JSON
		postsService.success(function(data,status){

			// initialize the scope with the JSON data object
			$scope.postsData = data.posts;

			for(var post in $scope.postsData){

				if ($scope.postsData.hasOwnProperty(post)){

					var postTitle = utils.cleanTitle($scope.postsData[post].title);

					if(postTitle === $routeParams.title){

						$scope.post = $scope.postsData[post];

						$http.get($scope.post.mdPath)
							.success(function (data) {
								$scope.mdPath = data;
								$scope.mdData=$scope.mdPath;
								$scope.html = $window.marked($scope.mdData);
							}).error(function(data , status){
								console.erorr(status, data);
								$scope.mdData='';
							});
					}
				}
			}


		})
		.error(function(data , status){
			console.erorr(status, data);
		});

			$scope.md2Html = function() {
				$scope.html =  $sce.trustAsHtml($window.marked($scope.mdData));
				// $scope.htmlSafe = $sce.trustAsHtml($scope.html);
				// console.log('$scope.htmlSafe: ',$scope.htmlSafe);
			};
			$scope.initFromUrl = function(url) {

				console.log('url',url);

	        	// $http.get(url).success(function(mdData) {
	        	// 	$scope.mdData = mdData;
	        	// 	return $scope.md2Html();
	        	// });

	      	};
		$scope.adminState = $location.path().indexOf('edit') > -1? 'edit':null;
		console.log('active tab:',$scope.adminState);
	});
}());


