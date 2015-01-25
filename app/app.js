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

	app.factory('navStates', function () {
		return {
			activeTab: null
		};
	});

	app.controller('NavCtrl', function ($scope, navStates) {
		console.log(navStates);

		$scope.states = navStates;
	});

	app.controller('AdminCtrl',	function ($scope, $routeParams, $location, navStates) {
		navStates.activeTab = 'admin';
		console.log(navStates.activeTab);

		$scope.$on('$destroy', function handleDestroyEvent() {
			navStates.activeTab = null;
        });
	});

}());
