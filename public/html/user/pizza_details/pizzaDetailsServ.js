function pizzaDetailsServ($http){
  var vm = this;
        vm.getDetails = function(){
                return $http.get('/pizza');
        }
        pizzaDetailsServ.$inject = ['$http'];

}
angular
   .module('user')
   .service('pizzaDetailsServ', pizzaDetailsServ);
