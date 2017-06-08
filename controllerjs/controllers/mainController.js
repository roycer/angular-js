var app = angular.module('main_sigabook',['mainService']);

app.controller('mainController', ['$scope', 'mainRequest', mainController]);

function mainController($scope,mainRequest){

	var id = 1;
	$scope.myPublications=[];
	$scope.myNewPublication={"id":id,"publi_description":""};

	mainRequest.getMyPublication(id).success(function(data){
	    $scope.myPublications=data;
	    console.log(data)
	});

	$scope.actMyPublication = function(){
		mainRequest.getMyPublication(id).success(function(data){
        	$scope.myPublications=data;
	   		console.log(data)  
        });
	}

	$scope.actFriendPublication = function(){
		mainRequest.getFriendPublication(id).success(function(data){
			$scope.myPublications=data;
        	console.log(data);    
        });
	}
	$scope.insertNewPublication = function(){
		
		mainRequest.insertPublication(id,$scope.myNewPublication).success(function(data){
	    	mainRequest.getMyPublication(id).success(function(data){
			    $scope.myPublications=data;
			});
		});
	}

	
}