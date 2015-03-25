angular.module('cbrAPP')

	.controller('clinicalResourcesCtrl', function($scope, folderData){

		$scope.viewClass = "clinical-resources";

		folderData.getTopFolders().then(function(data){
			var id = data[1]['id'];
			var name = data[1]['name'];
			folderData.getItemNameInFolder(id).then(function(data){
				$scope.folder = data;
				$scope.title = name;
			});
		})

	})
