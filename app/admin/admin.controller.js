(function () {

	'use strict';
	var app = angular.module('Blogapp');

	app.controller('AdminCtrl',	function ($scope, $routeParams, $location, navStates) {
		navStates.activeTab = 'admin';
		console.log(navStates.activeTab);

		$scope.$on('$destroy', function handleDestroyEvent() {
			navStates.activeTab = null;
        });
	});

}());
