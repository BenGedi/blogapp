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
		.when('/post/:title?', {
			templateUrl : 'app/post/post.view.html',
			controller : 'PostCtrl'
		})
		.when('/admin/:param?', {
			templateUrl : 'app/posts/posts.view.html',
			controller : 'AdminCtrl'
		})
		.otherwise({
        	redirectTo: '/posts'
      });
	}]);

	app.service('urlFix', function(){
		return function(item){

			item = item.replace(/[, ]+/g ,'');

			return item;
		};
	});

}());
