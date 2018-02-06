'use strict';

angular.module('myApp.task3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task3', {
    templateUrl: 'task3/task3.html',
    controller: 'Task3Ctrl'
  });
}])

.controller('Task3Ctrl', ['$scope','$http', function($scope, $http) {
  $scope.source =" This is some <del>deleted and hidden</del> text";
}]);