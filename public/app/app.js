(function () {

	'use strict';
	var app = angular.module('Blogapp', ['ngRoute','ngSanitize']);

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
		.when('/admin', {
			templateUrl : 'app/admin/admin.view.html',
			controller : 'AdminCtrl'
		})
		.when('/admin/new/post',{
			templateUrl: 'app/admin/edit.view.html',
			controller: 'NewCtrl'
		})
		.when('/admin/edit/post/:title',{
			templateUrl: 'app/admin/edit.view.html',
			controller: 'EditCtrl'
		})
		.otherwise({
        	redirectTo: '/posts'
      });
	}]);
	marked.setOptions({
		// GitHub Flavored Markdown
		gfm: true,
		// GFM tables
		tables: true,
		// GFM line breaks
		breaks: true,
		// Better lists handling
		smartLists: true,
		// Better punctuation handling
		smartypants: true,
		// Code blocks language prefix (reset default)
		langPrefix: '',
		// Prefix for headings ID's
		headerPrefix: 'hid-',
		highlight: false
	});

}());
