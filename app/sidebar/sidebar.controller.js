(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.controller('SidebarController',
		function ($scope, $routeParams, $location , postsService ,utils,$filter){

		$scope.search = function(query){
			$location.search('');
			$location.search('search',query);
		};
		//postsService return the posts data JSON
		postsService.success(function(data,status){

			// initialize the scope with the JSON data object
			$scope.postsData = data.posts;

			// Object to storage and count the amonut of tags in the post data json
			var tags = [],authors=[],months=[],years =[],allPostCounter=0;

			$scope.postsData.forEach(function(post){

				// initialize the tags array with tag objects
				for(var i=0 ; i< post.tags.length ;i++){
					utils.initArrayOfObjects(tags, post.tags[i]);
				}

				// initialize the authors array with author objects
				utils.initArrayOfObjects(authors, post.author);

				var year = $filter('date')(post.date,'yyyy');

				// initialize the years array with year objects
				utils.initArrayOfObjects(years, year);

				var month = $filter('date')(post.date,'MMMM');

				// initialize the months array with month objects
				utils.initArrayOfObjects(months, month);
			});

			// adding months array to years object
			for (var i = 0; i < years.length; i++) {
				years[i].months = months[i];
		    }

		    for (var j = 0; j < tags.length; j++) {
		    	allPostCounter+=tags[j].count;
		    }
		    $scope.allPostCount = allPostCounter;
		    $scope.dates = years;
			$scope.tags = tags;
			$scope.authors = authors;
			$scope.cleanTitle = utils.cleanTitle;
		})
		.error(function(data , status){
			console.erorr(status, data);
		});



	});

}());

