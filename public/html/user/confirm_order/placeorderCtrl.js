function placeorderCtrl($scope,DataService,postServ){
      var vm=this;
      $scope.pageClass = 'page-about';
      vm.user={};
        vm.message=function(){
          var postdata=DataService.view_order();
          vm.user.order=postdata;
          vm.user.deliverystatus=true;
          vm.insert = postServ.postCartDtls(vm.user);
          alert("order placed");
          vm.insert.success(function(data) {
              if (data.errors) {
                  vm.errorName = data.errors.name;
                  vm.errorUserName = data.errors.username;
                  vm.errorEmail = data.errors.email;
              } else {
                  vm.message = data.message;
              }
          });
       };
      //  vm.user={};
    placeorderCtrl.$inject = ['$scope','DataService','postServ'];
    // DataService.clear_plist();


}
angular
.module('user')
.controller('placeorderCtrl',placeorderCtrl);
