(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.factory('postsService', function ($http){

		// var getPosts = $http.get('data/posts.json');

		// return {
		// 	getPosts: getPosts
		// };
		return $http.get('data/posts.json');
	});

}());


