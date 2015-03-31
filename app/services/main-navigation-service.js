angular.module('cbrAPP').factory("mainNavService", function($q) {
    return  {

                getFolder: function(folderID) {
                    var deferred = $q.defer();
                    mflyCommands.getFolder(folderID)
                        .done(function(data){
                            deferred.resolve(data);
                        })
                        return deferred.promise;
                },

                getItem: function(folderID) {
                    var deferred = $q.defer();
                    mflyCommands.getItem(folderID)
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