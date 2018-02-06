'use strict';

angular.module('myApp.task1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task1', {
    templateUrl: 'task1/task1.html',
    controller: 'Task1Ctrl'
  });
}])

.controller('Task1Ctrl', ['$scope', function($scope) {
  $scope.actions ="";

  $scope.create = function(){
    $scope.buttons =[];
    $scope.actions.trim().split('|').forEach(element=>{
      $scope.buttons.push(element);
    });
    console.log($scope.buttons);
  }
}]);