angular.module('sigbook', ['registroService']);

angular.module('sigbook').controller('registroController', ['$scope', 'registroRequest', registroController]);
function registroController ($scope, registroRequest){

    var updateMode = false;

    $scope.userObjeto = {};
    $scope.userObjetos = {};

    $scope.getAllUser = function(){
        registroRequest.getAll().success(function(data){
            $scope.userObjetos = data;            
        });
    };

    $scope.delete = function(user_id){
        var userObjeto = {};
        userObjeto.user_id = user_id;

        registroRequest.delete(user_id).success(function(data){
            $scope.getAllUser();
        });
        
    }

    $scope.update = function(user_id){
        

         registroRequest.getOne(user_id).success(function(data){
           $scope.userObjeto = data;
         });

        updateMode = true;
    }

    $scope.save = function(){

        if (updateMode){
            registroRequest.update($scope.userObjeto).success(function(data){
                $scope.getAllUser();

            });            
        }else{
            registroRequest.insert($scope.userObjeto).success(function(data){
                $scope.getAllUser();
            });
        }        

        $scope.cancel();        
    }

    $scope.cancel = function(){
        $scope.userObjeto = {};

        updateMode = false;
    }

    $scope.getAllUser();

}