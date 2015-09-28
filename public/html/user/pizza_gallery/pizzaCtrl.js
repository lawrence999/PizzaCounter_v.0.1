function pizzaCtrl($scope,pizzaListServ){
    var vm = this;
      $scope.pageClass = 'page-home';
        vm.details =pizzaListServ.getPizzaList();
        vm.details.success(function(data) {
          vm.details = data;
          console.log(vm.details);
        });
        pizzaCtrl.$inject = ['$scope','pizzaListServ'];
}
angular
  .module('user')
  .controller('pizzaCtrl',pizzaCtrl);
