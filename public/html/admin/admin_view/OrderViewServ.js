function OrderViewServ($http){
        this.getOrderDetails = function(){
                return $http.get('/pizzaview');
        }
        OrderViewServ.$inject = ['$http'];

}
angular
   .module('user')
   .service('OrderViewServ', OrderViewServ);
