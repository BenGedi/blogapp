(function () {

	'use strict';
	var app = angular.module('Blogapp');

	app.directive('cdMdPreview', function() {
		return {
			templateUrl: '/app/admin/md/md.template.html',
			restrict: 'C',
			controller:'NewCtrl',
			scope: {},
			link: function(scope, element, attrs) {
				if (attrs.url) {
					scope.initFromUrl(attrs.url);
				}
			}
		};
	});

}());


