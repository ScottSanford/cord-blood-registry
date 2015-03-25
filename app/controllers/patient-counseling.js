angular.module('cbrAPP')

	.controller('patientCouselingCtrl', function($scope, folderData){
		
		$scope.viewClass = "patient-counseling";

		folderData.getTopFolders().then(function(data){
			var id = data[2]['id'];
			var name = data[2]['name'];
			folderData.getItemNameInFolder(id).then(function(data){
				$scope.folder = data;
				$scope.title = name;
			});
		})
	})