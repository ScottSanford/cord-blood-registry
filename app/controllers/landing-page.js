angular.module('cbrAPP')
	.controller('landingPageCtrl', function($scope, $location, mainNavService){
		
		$scope.viewClass = "landing-page";

		mainNavService.getTopFolders().then(function(data){
			$scope.folders = data.map(function(item){
				item.class = item.name.replace(' ', '-').toLowerCase();
				item.inactive = false;
				return item;
			}).reverse();
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
	})