function pizzaDetailsServ($http){
        this.getDetails = function(){
                return $http.get('/pizza');
        }
        pizzaDetailsServ.$inject = ['$http'];

}
angular
   .module('user')
   .service('pizzaDetailsServ', pizzaDetailsServ);
