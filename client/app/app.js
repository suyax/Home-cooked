angular.module('homecooked', [
  // 'homecooked.services',
  'homecooked.meals',
  // 'homecooked.create',
  'homecooked.auth',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/meals');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'app/meals/meals.html',
            controller: 'MealsController',
        })

        .state('meals', {
            url: '/meals',
            templateUrl: 'app/meals/meals.html',
            controller: 'MealsController',
            authenticate: true
        })
        
        .state('signin', {
            url: '/signin',
            templateUrl: 'app/auth/signin.html',
            controller: 'AuthController'
        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'app/auth/signup.html',
            controller: 'AuthController'
        })

        .state('cook', {
            url: '/cook',
            templateUrl: 'app/meals/create.html',
            controller: 'CookController',
            authenticate: true
        })

        .state('logout', {
            url: '/logout',
            templateUrl: 'app/auth/signin.html',
            controller: 'AuthController'
        })
})

.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('home.cooked');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $state, $location, Auth) {
  $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {
    if (toState.authenticate && !Auth.isAuth()) {
      $state.transitionTo('signin');
      evt.preventDefault();
      //$location.path('/signin');
    }
  });
});
