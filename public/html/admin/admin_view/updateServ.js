function updateServ($http) {
  var vm = this;
       vm.changeStatus = function(obj){
         return $http({
           method  : 'POST',
           url     : '/update',
           data    : obj, //forms user object
           headers : {'Content-Type': 'application/json'}
          })
       }
       updateServ.$inject = ['$http'];
}
angular
  .module('user')
  .service('updateServ',updateServ);
