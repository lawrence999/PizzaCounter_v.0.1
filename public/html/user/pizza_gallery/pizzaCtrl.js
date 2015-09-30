function pizzaCtrl($scope,$location,pizzaListServ){
    var vm = this;
      $scope.pageClass = 'page-home';
        vm.details =pizzaListServ.getPizzaList();
        vm.details.success(function(data) {
          vm.details = data;
          console.log(vm.details);
        });

        vm.check=function(){
          if(vm.user=="admin"&&vm.password=="admin"){
            $location.path("login");
          }else {
            alert("invalid username or password");
          }
        }
        pizzaCtrl.$inject = ['$scope','$location','pizzaListServ'];
}
angular
  .module('user')
  .controller('pizzaCtrl',pizzaCtrl);
