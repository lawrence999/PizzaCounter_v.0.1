function OrderViewServ($http){
  var vm=this;
        vm.getOrderDetails = function(){
                return $http.get('/pizzaview');
        }
        OrderViewServ.$inject = ['$http'];

}
angular
   .module('user')
   .service('OrderViewServ', OrderViewServ);
