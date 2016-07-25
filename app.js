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
portfolioApp.directive('textFiller', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/text-filler.html'
  };
});
