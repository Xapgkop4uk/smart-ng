angular.module('myApp.contentEdit.contentEdit-filter', [])

.filter('tagsFilter', function(){
    return function(source){
        var newString="";
        var cleanText = source.replace(/<\/?[^>]+(>|$)/g, "");
        let arr = cleanText.split(' ').filter(element=>element!='');

        arr.forEach(item => {
          item = '<inc>'+item+'</inc>';
          newString+=" "+item;
        })
        return newString;     
    }
})