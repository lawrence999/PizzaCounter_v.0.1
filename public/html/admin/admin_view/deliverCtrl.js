function deliverCtrl($scope,$http,$routeParams,OrderViewServ){
      var vm = this;
      $scope.pageClass = 'page-about';
      vm.Contactno=$routeParams.Contactno;
      vm.postcontact={};
      vm.postcontact.Contactno=vm.Contactno;
      $http({
          method  : 'POST',
          url     : '/update',
          data    : vm.postcontact, //forms user object
          headers : {'Content-Type': 'application/json'}
      })
      .success(function(data) {
          alert("successfully delivered");
          if (data.errors) {
            // Showing errors.
              vm.errorName = data.errors.name;
              vm.errorUserName = data.errors.username;
              vm.errorEmail = data.errors.email;
          } else {
              vm.message = data.message;
          }
      });
      vm.details=OrderViewServ.getOrderDetails();
      vm.details.success(function(data) {
          vm.details = data;
      });
      deliverCtrl.$inject = ['$scope','$http','$routeParams','OrderViewServ'];
}
angular
.module('admin')
.controller('deliverCtrl',deliverCtrl);
