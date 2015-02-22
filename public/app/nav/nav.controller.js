(function () {

	'use strict';
	var app = angular.module('Blogapp');

	app.controller('NavCtrl', function ($scope, navStates) {

		$scope.states = navStates;
	});

}());
