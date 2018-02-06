'use strict';

angular.module('myApp.task2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task2', {
    templateUrl: 'task2/task2.html',
    controller: 'Task2Ctrl'
  });
}])

.controller('Task2Ctrl', ['$scope','$http', function($scope, $http) {
  $scope.source ="";
  $scope.buttons = ['checkin', 'save', 'discard', 'accept', 'decline'];  
  var url = "https://testing.smashdocs.net/documents/12345/";

  $scope.post = function(obj){
    var data = JSON.stringify({
      content: $scope.source
    });

    var config = {
      headers : {
        'Content-Type': 'application/json'
      }
    };   

    $http.post(url+obj.action, data, config)
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
  };
}]);