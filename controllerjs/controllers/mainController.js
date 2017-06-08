var app = angular.module('sigabook',['mainService']);

app.controller('mainController', ['$scope', 'mainRequest', mainController]);

function mainController($scope,mainRequest){

	var id = 2;
	
	$scope.user_full_name = "";
	$scope.user_email = "7722b29d3b056e12ee620471726d6610";
	
	$scope.myPublications=[];
	$scope.myFriends=[];
	$scope.myNewPublication={"id":id,"publi_description":""};
	$scope.myNewFriend={"user_id":id,"friend_user_id":0};
	$scope.ruta="Mi Muro";
	$scope.friend_username="";
	
	getUser = function (){
		mainRequest.getUser(id).success(function(data){
			$scope.user_full_name = data.user_fullname;
		});
	}
	
	getMyFriends = function(){
		mainRequest.getMyFriends(id).success(function(data){
			$scope.myFriends=data;
		});
	}

	$scope.actMyPublication = function(){
		mainRequest.getMyPublication(id).success(function(data){
        	$scope.myPublications=data;
        	$scope.ruta="Mi Muro"
        });
	}

	$scope.actFriendPublication = function(){
		mainRequest.getFriendPublication(id).success(function(data){
			$scope.myPublications=data;
			$scope.ruta="Noticias"
        });
	}

	$scope.insertNewPublication = function(){	
		mainRequest.insertPublication(id,$scope.myNewPublication).success(function(data){
	    	$scope.actMyPublication();
		});
		getMyFriends();
	}

	$scope.insertNewFriend = function(){
		mainRequest.insertNewFriend($scope.myNewFriend).success(function(data){
	    	$scope.actFriendPublication();
		});
	}	

	$scope.actMyPublication();
	getUser();
	getMyFriends();
}