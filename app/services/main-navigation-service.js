angular.module('cbrAPP').factory("mainNavService", function($q) {
    return  {

                getTopFolders: function() {
                    var deferred = $q.defer();
                    mflyCommands.search('@mainNavigation')
                        .done(function(data){
                            deferred.resolve(data);
                        })
                        return deferred.promise;
                },

                getScientificExperience: function() {
                    var deferred = $q.defer();
                    mflyCommands.search('@ScientificExperience')
                        .done(function(data){
                            deferred.resolve(data);
                        })
                        return deferred.promise;
                },

                getPatientCounseling: function() {
                    var deferred = $q.defer();
                    mflyCommands.search('@PatientCounseling')
                        .done(function(data){
                            deferred.resolve(data);
                        })
                        return deferred.promise;
                },

                getClinicalResources: function() {
                    var deferred = $q.defer();
                    mflyCommands.search('@ClinicalResources')
                        .done(function(data){
                            deferred.resolve(data);
                        })
                        return deferred.promise;
                },

                getCBRPartnership: function() {
                    var deferred = $q.defer();
                    mflyCommands.search('@CBRPartnership')
                        .done(function(data){
                            deferred.resolve(data);
                        })
                        return deferred.promise;
                },

                getItemNameInFolder: function(folderID) {
                    var deferred = $q.defer();
                    mflyCommands.getFolder(folderID)
                            .done(function(data){        
                                deferred.resolve(data);
                            })
                        return deferred.promise;
                }, 

                openFolder: function(folderID) {
                    console.log("folderID :: " + folderID);
                    window.location = 'mfly://folder/' + folderID;          
                    // mflyCommands.openFolder(folderID);
                }, 

                showControlBars: function() {
                    mflyCommands.showControlBars();
                }

            }
});