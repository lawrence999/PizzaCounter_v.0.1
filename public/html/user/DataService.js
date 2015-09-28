 function DataService(){
    var plist = [];
    var total=0;
        this.order_d = function(user) {
            plist.push(user);
            total=total+user.cost;
            console.log(total);
        };

        this.view_order = function(){
            return plist;
        };

        this.grand_total=function(){
            return total;
            console.log(total);

        }
}

angular
.module('user')
.service('DataService', DataService);
