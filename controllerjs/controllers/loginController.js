angular.module('sigbook', ['loginService', 'mainService']);

angular.module('sigbook').controller('loginController', ['$scope', '$window', 'loginRequest', 'mainRequest', loginController]);
function loginController($scope, $window, loginRequest, mainRequest){
	
	$scope.user = {};
	
	$scope.checkLogin = function(){
		console.log('CheckLogin');
		
		loginRequest.checkLogin($scope.user).success(function(data){
						
			if (data){
				/*mainRequest.setId(data.user_id);*/
				
				$window.location.href = 'main.html';
			}
		});
	};
}