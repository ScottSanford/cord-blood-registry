angular.module('cbrAPP',[
		'ngRoute', 
		'ngAnimate'
	])

	.config(function ($routeProvider) {
	        $routeProvider
	        	.when('/', {
	        		templateUrl: "partials/landing-page.html"
	        	})
	            .when('/scientific-experience', {
	                templateUrl: "partials/scientific-experience.html", 
	                controller: "scientificExperienceCtrl", 
	                resolve: {
	                			folderData: function(mainNavService){
	                				return mainNavService;
	                			}
	                		}
	            })
	            .when('/patient-counseling', {
	                templateUrl: "partials/patient-counseling.html", 
	                controller: "patientCouselingCtrl", 
	                resolve: {
	                			folderData: function(mainNavService){
	                				return mainNavService;
	                			}
	                		}
	            })
	            .when('/clinical-resources', {
	                templateUrl: "partials/clinical-resources.html", 
	                controller: "clinicalResourcesCtrl", 
	                resolve: {
	                			folderData: function(mainNavService){
	                				return mainNavService;
	                			}
	                		}
	            })
	            .when('/cbr-partnership', {
	                templateUrl: "partials/cbr-partnership.html", 
	                controller: "cbrPartnershipCtrl", 
	                resolve: {
	                			folderData: function(mainNavService){
	                				return mainNavService;
	                			}
	                		}
	            })
	            .otherwise({
	                redirectTo: '/'
	            });
	})

