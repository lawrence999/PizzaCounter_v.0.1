function pizzaorderCtrl($scope,DataService){
    var vm = this;
      $scope.pageClass = 'page-home';
          vm.details = DataService.view_order();
          vm.total=DataService.grand_total();
          console.log(vm.details);
          pizzaorderCtrl.$inject = ['$scope','DataService'];

}
angular
  .module('user')
  .controller('pizzaorderCtrl',pizzaorderCtrl);
