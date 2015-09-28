function pizzaDetailsCtrl($scope,$routeParams,DataService,pizzaDetailsServ){
    var vm = this;
      $scope.pageClass = 'page-contact';
        vm.name = $routeParams.pizzaName;
        vm.details=pizzaDetailsServ.getDetails();
        vm.details.success(function(data) {
            vm.pizza = data.filter(function(entry){
                return entry.name === vm.name;
            })[0];

            var user={};

            vm.enter=function(){
                user.pname=vm.pizza.name;
                user.rate=vm.pizza.rate;
                user.pic=vm.pizza.image;
                user.qty=vm.user.qty;
                user.cost=user.rate*user.qty;
                DataService.order_d(user);
            }
        });
        pizzaDetailsCtrl.$inject = ['$scope','$routeParams','DataService','pizzaDetailsServ'];

}

angular
  .module('user')
  .controller('pizzaDetailsCtrl',pizzaDetailsCtrl);
