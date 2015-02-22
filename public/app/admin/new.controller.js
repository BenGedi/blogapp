(function () {

	'use strict';
	var app = angular.module('Blogapp');

	app.controller('NewCtrl',
		function ($scope, $routeParams, $location,$http, $window,$sce,$q){

  //       var title = 'Grunt - Intro';
  //       var postObj = {
  //           description: '*** TESTING ***'
  //       };

		// var defer = $q.defer();

		// $http.post('/posts', {
	 //        title: title,
	 //        data: postObj
	 //    })
	 //        .success(function (data, status) {
	 //            defer.resolve(data);
	 //        });

		// dataService.save(title, postObj)
		//             .then(function (post) {
		//                 console.log(post);
		//             });
		$scope.adminState = $location.path().indexOf('new') > -1? 'new':null;
		console.log('active tab:',$scope.adminState);
	});
}());


