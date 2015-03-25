angular.module('cbrAPP')

	.controller('clinicalResourcesCtrl', function($scope, folderData){

		$scope.viewClass = "clinical-resources";

		folderData.getTopFolders().then(function(data){
			var id = data[1]['id'];
			var name = data[1]['name'];
			folderData.getItemNameInFolder(id).then(function(data){
				$scope.title = name;
			});
		})

		folderData.getClinicalResources().then(function(data){
			$scope.folder = data;
		})

		$scope.openFolder = function(folderID) {
			folderData.getCBRPartnership().then(function(data){
					folderData.openFolder(folderID);
			});
		}
	})
