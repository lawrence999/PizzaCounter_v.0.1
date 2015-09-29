function pizzaListServ($http){
  var vm = this;
        vm.getPizzaList = function(){
                return $http.get('/pizza');
        }
        pizzaListServ.$inject = ['$http'];

}
angular
   .module('user')
   .service('pizzaListServ', pizzaListServ);
