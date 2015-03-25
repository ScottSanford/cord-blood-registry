angular.module('cbrAPP')

	.controller('scientificExperienceCtrl', function($scope, folderData){

		$scope.viewClass = "scientific-experience";

		folderData.getTopFolders().then(function(data){
			var id = data[3]['id'];
			var name = data[3]['name'];
			folderData.getItemNameInFolder(id).then(function(data){
				$scope.title = name;
			});
		})

		folderData.getScientificExperience().then(function(data){
			$scope.folder = data;
		});

		$scope.openFolder = function(folderID) {
			folderData.getCBRPartnership().then(function(data){
					folderData.openFolder(folderID);
			});
		}


	})