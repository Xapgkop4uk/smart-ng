'use strict';

angular.module('myApp.contentEdit.contentEdit-directive', [])

.directive('contentEdit', function($filter) {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, element, attrs, ngModel) {
        
     var timer;
     
     function read() {
        const item = element[0].querySelector('del');
        if(!!item) return;
        let filterResult = $filter('tagsFilter')(element.html());    
        ngModel.$setViewValue(filterResult);  
        element.html(filterResult);
        moveCaret();
      }
      
      ngModel.$render = function () {
        element.html(ngModel.$viewValue || "");
      };
      
      element.bind("keyup paste", function () {
        window.clearTimeout(timer);
        timer = setTimeout(function(){scope.$apply(read);},500);
      });
      
      element.bind("focus", function () {
        const item = element[0].querySelector('del');
        if (!!item) item.style.display = 'none';
      });
      
      element.bind("blur", function () {
        const item = element[0].querySelector('del');
        if (!!item) item.style.display= 'unset';
        scope.$apply(read);       
      });

      function moveCaret(){

        let range = document.createRange();
        let sel = window.getSelection();
        
        range.setStart(element[0].lastChild, 1);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  };
});
