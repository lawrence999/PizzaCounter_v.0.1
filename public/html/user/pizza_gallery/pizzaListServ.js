function pizzaListServ($http){
        this.getPizzaList = function(){
                return $http.get('/pizza');
        }
        pizzaListServ.$inject = ['$http'];

}
angular
   .module('user')
   .service('pizzaListServ', pizzaListServ);
