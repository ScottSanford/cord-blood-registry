angular.module('cbrAPP')

	.controller('patientCouselingCtrl', function($scope, folderData){
		
		$scope.viewClass = "patient-counseling";

		var id = "18aa7e1c119f4a7ebe701418b07230bfproduct169221";

		folderData.getFolder(id).then(function(data){
			$scope.folder = data;
		})

		folderData.getItem(id).then(function(data){
			$scope.title = data.name;
		})

		$scope.openFolder = function(id) {
			folderData.openFolder(id);
		}
		
	})