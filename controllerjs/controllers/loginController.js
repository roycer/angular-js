angular.module('sigbook', ['loginService']);

angular.module('sigbook').controller('loginController', ['$scope', '$window', 'loginRequest', loginController]);
function loginController($scope, $window, loginRequest, mainRequest){
	
	$scope.user = {};
	
	$scope.checkLogin = function(){
		console.log('CheckLogin');
		
		loginRequest.checkLogin($scope.user).success(function(data){
						
			if (data){
				$window.location.href = 'main.html';
			}
		});
	};
}