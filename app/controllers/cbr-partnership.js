angular.module('cbrAPP')

	.controller('cbrPartnershipCtrl', function($scope, folderData){
		$scope.viewClass = "cbr-partnership";

		folderData.getTopFolders().then(function(data){
			var id = data[0]['id'];
			var name = data[0]['name'];
			folderData.getItemNameInFolder(id).then(function(data){
				$scope.folder = data;
				$scope.title = name;
			});
		})

		$scope.openItem = function() {
			folderData.getTopFolders().then(function(data){
				var id = data[0]['id'];
				var name = data[0]['name'];
				folderData.getItemNameInFolder(id).then(function(data){
					$scope.folder = data;
					$scope.title = name;
				});
			})
		}

	})