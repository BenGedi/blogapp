(function () {

	'use strict';
	var app = angular.module('Blogapp', ['ngRoute']);

	app.config(['$routeProvider' , function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl : 'allpost.html',
			controller : 'allpostCtrl'
		})
		.when('/post', {
			templateUrl : 'post.html',
			controller : 'postCtrl'
		});
	}]);

}());
