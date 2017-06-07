angular.module('springapp', ['accountService']);

angular.module('springapp').controller('accountController', ['$scope', 'accountRequest', accountController]);
function accountController ($scope, accountRequest){

    var updateMode = false;

    $scope.account = {};
    $scope.accounts = {};

    $scope.getAllAccounts = function(){
        accountRequest.getAll().success(function(data){
            $scope.accounts = data;            
        });
    };

    $scope.delete = function(id_account){
        var account = {};
        account.id_account = id_account;

        accountRequest.delete(account).success(function(data){
            $scope.getAllAccounts();
        });
        
    }

    $scope.update = function(id_account){
        

         accountRequest.getOne(id_account).success(function(data){
           $scope.account = data;
         });

        updateMode = true;
    }

    $scope.save = function(){

        if (updateMode){
            accountRequest.update($scope.account).success(function(data){
                $scope.getAllAccounts();
            });            
        }else{
            accountRequest.insert($scope.account).success(function(data){
                $scope.getAllAccounts();
            });
        }        

        $scope.cancel();        
    }

    $scope.cancel = function(){
        $scope.account = {};

        updateMode = false;
    }

    $scope.getAllAccounts();

}