 function DataService(){
    var plist = [];
    var total=0;
    var vm = this;
        vm.order_d = function(user) {
            plist.push(user);
            total=total+user.cost;
        };
        vm.view_order = function(){
            return plist;
        };
        vm.grand_total=function(){
            return total;
        };
        vm.clear_plist=function(){
          plist.splice(0,plist.length);
          total=0;
        };

}

angular
.module('user')
.service('DataService', DataService);
