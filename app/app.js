'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.task1',
  'myApp.task2',
  'myApp.task3',
  'myApp.task4-5',
  'myApp.contentEdit'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/task1'});
}]);
