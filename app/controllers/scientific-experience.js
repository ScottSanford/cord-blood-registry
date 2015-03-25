angular.module('cbrAPP')

	.controller('scientificExperienceCtrl', function($scope, folderData){

		$scope.viewClass = "scientific-experience";

		folderData.getTopFolders().then(function(data){
			var id = data[3]['id'];
			var name = data[3]['name'];
			folderData.getItemNameInFolder(id).then(function(data){
				$scope.folder = data;
				$scope.title = name
			});
		})


	})