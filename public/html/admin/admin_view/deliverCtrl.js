function deliverCtrl($scope,OrderViewServ,updateServ){
      var vm = this;
      $scope.pageClass = 'page-about';
        vm.delFunction = function(id){
          vm.postcontact={};
          vm.postcontact.id=id;
          vm.status=updateServ.changeStatus(vm.postcontact);
          vm.status.success(function(data) {
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
            console.log("hiii",data);
            if(data == 'empty') {
              // alert('All caught up!!');
              vm.details = {};
            } else {
              vm.details = data;
            }
          });
        }
      vm.details=OrderViewServ.getOrderDetails();
      vm.details.success(function(data) {
        if(data == 'empty') {
          // alert('All caught up!!');
          vm.details = {};
        } else {
          vm.details = data;
        }
      });

      deliverCtrl.$inject = ['$scope','OrderViewServ','updateServ'];
}
angular
.module('admin')
.controller('deliverCtrl',deliverCtrl);
