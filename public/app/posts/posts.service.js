(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.factory('postsService', function ($http){

		// var getPosts = $http.get('data/posts.json');

		// return {
		// 	getPosts: getPosts
		// };

		$http.get('/posts').
		success(function(data,status){
			console.log(data);
		});

		return $http.get('/posts');
	});

}());


