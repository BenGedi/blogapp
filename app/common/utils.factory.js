(function () {

	'use strict';
	var app = angular.module('Blogapp');

	app.factory('utils', ['$filter',function(filter){
		return {

			cleanTitle: function(title){

				// title = title.replace(/[ ]+/g ,'-');

				// if(title.indexOf(',') > -1){
				// 	title = title.replace(',', '-');
				// }
				title = title.replace(/[ \-,\,]+/g, '-');
				return title;
			},
			initArrayOfObjects: function(arrObjs , data){
				var newObj;

				if(arrObjs.length !== 0){

					// pos returns the index of the object in arrObjs array by the data name
					var pos = arrObjs.map(function(e) { return e.name; }).indexOf(data);

					// if exist then update the counter
					if (pos > -1 ){
						arrObjs[pos].count++;
					}
					else{
						newObj = {'name' : data , 'count' : 1 };
						arrObjs.push(newObj);
					}
				}
				else{
					newObj = {'name' : data , 'count' : 1 };
					arrObjs.push(newObj);
				}
			},
			/**
			 * adding posts by url paranmeters to an empty
			 * - checking which parameter is passed.
			 * - going over on the data json.
			 * - adding the posts accorddingly by the passed parameter to the 'storageData' posts arr
			 * @param {[object]} paramObj    [parameter from url]
			 * @param {[object]} jsonData    [posts data]
			 * @param {[type]} storageData [empty array]
			 */
			addPostsByParam: function(paramObj ,jsonData, storageData){
				var that = this;
				console.log(paramObj);
				if(paramObj.category){
					jsonData.forEach(function(post){

						if(post.tags.indexOf(paramObj.category) > -1){
							storageData.push(post);
						}
					});
					return;
				}
				if(paramObj.author){
					jsonData.forEach(function(post){

						if(that.cleanTitle(post.author) === paramObj.author){
							storageData.push(post);
						}
					});
					return;
				}
				if(paramObj.date){
					jsonData.forEach(function(post){

						if(filter('date')(post.date,'MMMM') === paramObj.date){
							storageData.push(post);
						}
					});
					return;
				}
					storageData = jsonData;
					return;
			}
		};

	}]);

}());
