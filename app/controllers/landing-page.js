angular.module('cbrAPP')
	.controller('landingPageCtrl', function($scope, $location, mainNavService){
		
		$scope.viewClass = "landing-page";

		$scope.closeApp = function() {
			mainNavService.showControlBars();
		}

		mainNavService.getTopFolders().then(function(data){
			$scope.folders = data.map(function(item){
				item.class = item.name.replace(' ', '-').toLowerCase();
				item.inactive = false;
				return item;
			});
		});

		$scope.toggleClass = function(index) {
			$scope.folders.forEach(function(folder){
				folder.inactive = true;
			})
			$scope.folders[index].inactive = false;
		}

		$scope.makeAllActiveClasses = function() {
			$location.url('/');
			$scope.folders.forEach(function(folder){
				folder.inactive = false;
			})
		}

		$scope.openMainFolder = function(index) {
			$location.url("/" + $scope.folders[index].class);
		}
	})