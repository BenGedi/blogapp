(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.factory('postsService', function ($http){

		return $http.get('data/posts.json');

	});

}());


