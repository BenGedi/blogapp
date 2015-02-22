(function () {

	'use strict';
	var app = angular.module('Blogapp');

	app.directive('markdown', function($window,$sce) {
		return {
			restrict: 'EA',
			templateUrl:'/app/admin/md/md.template.html',
			link: function(scope, element, attrs) {

			   	scope.$watch(function() {
					return scope.mdData;
				}, function(){
					var init = '';
					if (scope.mdData) {
						init = $sce.trustAsHtml($window.marked(scope.mdData));
					}
					scope.html=init;
				});
			}
		};
	});

}());


