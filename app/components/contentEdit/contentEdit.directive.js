'use strict'

angular.module('myApp.contentEdit.contentEdit-directive', [])

.directive('contentEdit', function($filter) {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, element, attrs, ngModel) {
        
     function read() {
        const item = element[0].querySelector('del');
        if(!item)
        {
          var filterResult = $filter('tagsFilter')(element.html())    
          ngModel.$setViewValue(filterResult);  
          element.html(filterResult);
        }
      }
      
      ngModel.$render = function () {
        element.html(ngModel.$viewValue || "");
      };
      
      element.bind("blur", function () {
        const item = element[0].querySelector('del');
        if (!!item) item.style.display= 'unset';
        scope.$apply(read);       
      });
      
      element.bind("focus", function () {
        const item = element[0].querySelector('del');
        if (!!item) item.style.display = 'none';
      });
    }
  }
});