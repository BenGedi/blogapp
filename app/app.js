(function () {

	'use strict';
	var app = angular.module('Blogapp', ['ngRoute']);

	app.config(['$routeProvider' , function($routeProvider){
		$routeProvider
		.when('/',{
			redirectTo: '/posts'
		})
		.when('/posts/:page?', {
			templateUrl : 'app/posts/posts.view.html',
			controller : 'PostsCtrl'
		})
		.when('/post', {
			templateUrl : 'app/post/post.view.html',
			controller : 'postCtrl'
		})
		.otherwise({
        	redirectTo: '/'
      });
	}]);

}());
