(function () {
	'use strict';
	var app = angular.module('Blogapp');

	app.filter('postsLimit' , function(postsService){



		return function(postsData, limit,pageNum){
			// pageNum is One-Based...
			var end = pageNum *limit,
				start = end - limit;
			return postsData.slice(start,end);

			// return postsData.filter(function(post,inx){
			// 	inx++;
			// 	return inx >= start && inx <= end;
			// });

		};
	});

}());

