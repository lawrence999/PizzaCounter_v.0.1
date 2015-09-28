function placeorderCtrl($scope,$http,DataService){
      var vm=this;
      $scope.pageClass = 'page-about';

        vm.message=function(){
            alert("order placed");
            var postdata=DataService.view_order();
            vm.user.order=postdata;
            vm.user.deliverystatus=true;
            $http({
                method  : 'POST',
                url     : '/pizzaorder',
                data    : vm.user,
                headers : {'Content-Type': 'application/json'}
            })

          .success(function(data) {
                if (data.errors) {
                    vm.errorName = data.errors.name;
                    vm.errorUserName = data.errors.username;
                    vm.errorEmail = data.errors.email;
                } else {
                    vm.message = data.message;
                }

          });

       };
       placeorderCtrl.$inject = ['$scope','$http','DataService'];

}
angular
.module('user')
.controller('placeorderCtrl',placeorderCtrl);
