// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('homecooked.auth', [])

.controller('AuthController', function ($scope, $location, $window, Auth) {
  $scope.user = {};

  $scope.signup = function () {
  	Auth.signup($scope.user).then(function afterSignup(token){
  		$window.localStorage.setItem('home.cooked', token);
      $window.localStorage.setItem('home.cooked.user', $scope.user.username);
      $location.path('/meals');
  	})
  };
  $scope.signin = function () {
  	Auth.signin($scope.user).then(function afterSignin(token){
  		$window.localStorage.setItem('home.cooked', token);
      $window.localStorage.setItem('home.cooked.user', $scope.user.username);
      $location.path('/meals');
  	});
  };
  if ($location.$$path === '/logout'){
    Auth.signout();
  }
  
});
