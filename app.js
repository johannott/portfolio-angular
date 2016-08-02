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

  $scope.class1 = "box-1";
  $scope.class2 = "box-2";
  $scope.class3 = "box-3";
  $scope.class4 = "box-4";
    $scope.changeClass1= function(){
      if ($scope.class1 === "box-1")
        $scope.class1 = "big-box-1";
      else
        $scope.class1 = "box-1";
    };
    $scope.changeClass2 = function(){
      if ($scope.class2 === "box-2")
        $scope.class2 = "big-box-2";
      else
        $scope.class2 = "box-2";
    };
    $scope.changeClass3 = function(){
      if ($scope.class3 === "box-3")
        $scope.class3 = "big-box-3";
      else
        $scope.class3 = "box-3";
    };
    $scope.changeClass4 = function(){
      if ($scope.class4 === "box-4")
        $scope.class4 = "big-box-4";
      else
        $scope.class4 = "box-4";
    };

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
