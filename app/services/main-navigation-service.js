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

                getItemNameInFolder: function(folderID) {
                    var deferred = $q.defer();
                    mflyCommands.getFolder(folderID)
                            .done(function(data){        
                                deferred.resolve(data);
                            })
                        return deferred.promise;
                }, 

                openItem: function(itemID) {
                    var deferred = $q.defer();
                    mflyCommands.openItem(itemID)
                            .done(function(data){        
                                deferred.resolve(data);
                            })
                        return deferred.promise;                    
                }

            }
});