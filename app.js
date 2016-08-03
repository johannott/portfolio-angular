// MODULE
var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource', 'ngAnimate']);

// ROUTES
portfolioApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when('/skills', {
        templateUrl: 'pages/skills.htm',
        controller: 'skillsController'
    })

    .when('/projects', {
        templateUrl: 'pages/projects.htm',
        controller: 'projectsController'
    })

    .when('/interests', {
        templateUrl: 'pages/interests.htm',
        controller: 'interestsController'
    })

    .when('/contact', {
        templateUrl: 'pages/contact.htm',
        controller: 'contactController'
    })

});

// CONTROLLERS
portfolioApp.controller('homeController', ['$scope', function($scope) {
  $scope.pageClass = 'page-home';
}]);

portfolioApp.controller('skillsController', ['$scope', function($scope) {
  $scope.pageClass = 'page-skills';

  $scope.toggleClass1 = false;
  $scope.toggleClass2 = false;
  $scope.toggleClass3 = false;
  $scope.toggleClass4 = false;
  $scope.toggleClasses = function(num){
    if (num === 1){
      if (!$scope.toggleClass1) {
        $scope.toggleClass1 = true;
        $scope.toggleClass2 = false;
        $scope.toggleClass3 = false;
        $scope.toggleClass4 = false;
      } else {
        $scope.toggleClass1 = false;
        $scope.toggleClass2 = false;
        $scope.toggleClass3 = false;
        $scope.toggleClass4 = false;
      }
    } else if (num === 2){
      if (!$scope.toggleClass2) {
        $scope.toggleClass1 = false;
        $scope.toggleClass2 = true;
        $scope.toggleClass3 = false;
        $scope.toggleClass4 = false;
      } else {
        $scope.toggleClass1 = false;
        $scope.toggleClass2 = false;
        $scope.toggleClass3 = false;
        $scope.toggleClass4 = false;
      }
    } else if (num === 3){
      if (!$scope.toggleClass3) {
        $scope.toggleClass1 = false;
        $scope.toggleClass2 = false;
        $scope.toggleClass3 = true;
        $scope.toggleClass4 = false;
      } else {
        $scope.toggleClass1 = false;
        $scope.toggleClass2 = false;
        $scope.toggleClass3 = false;
        $scope.toggleClass4 = false;
      }
    } else if (num === 4){
      if (!$scope.toggleClass4) {
        $scope.toggleClass1 = false;
        $scope.toggleClass2 = false;
        $scope.toggleClass3 = false;
        $scope.toggleClass4 = true;
      } else {
        $scope.toggleClass1 = false;
        $scope.toggleClass2 = false;
        $scope.toggleClass3 = false;
        $scope.toggleClass4 = false;
      }
    }
  }


}]);

portfolioApp.controller('projectsController', ['$scope', function($scope) {
  $scope.pageClass = 'page-projects';
}]);

portfolioApp.controller('interestsController', ['$scope', function($scope) {
  $scope.pageClass = 'page-interests';
}]);

portfolioApp.controller('contactController', ['$scope', function($scope) {
  $scope.pageClass = 'page-contact';
}]);

//DIRECTIVES
portfolioApp.directive('joFooter', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/footer.html'
  };
});
