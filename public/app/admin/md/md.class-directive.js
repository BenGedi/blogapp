(function () {

	'use strict';
	var app = angular.module('Blogapp');

	app.directive('markdown', function($window) {
		return {
			restrict: 'C',
			templateUrl:'/app/admin/md/md.template.html',
			link: function(scope, element, attrs) {

				// scope.initFromUrl(attrs.url);
			}
		};
	});

}());


