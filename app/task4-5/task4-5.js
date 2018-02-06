'use strict';

angular.module('myApp.task4-5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task4-5', {
    templateUrl: 'task4-5/task4-5.html'
  });
}]);
