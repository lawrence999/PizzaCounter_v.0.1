        var pApp = angular.module('pApp', ['ngRoute']);
          pApp.config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'pizza_gallery.html',
                    controller: 'pizzaCtrl'
                })
                .when('/cart', {
                    templateUrl:'pizza_cart.html',
                    controller: 'pizzaorderCtrl'
                })
                .when('/login', {
                    templateUrl:'admin_view.html',
                    controller: 'loginCtrl'
                })
                .when('/delivered/:Contactno', {
                    templateUrl:'admin_view.html',
                    controller: 'deliverCtrl'
                })
                .when('/placeorder', {
                    templateUrl:'confirm_order.html',
                    controller: 'placeorderCtrl'
                })
                .when('/:pizzaName', {
                    templateUrl: 'pizza_details.html',
                    controller: 'pizzaDetailsCtrl'
                })
                . otherwise({
                    redirectTo: '/'
                });
        });

        pApp.service('DataService', function (){
        var plist = [];
        var total=0;
            this.order_d = function(user) {          
                plist.push(user);
                total=total+user.cost;
            };

            this.view_order = function(){
                return plist;
            };

            this.grand_total=function(){
                return total;
            }

        });

        pApp.controller('pizzaCtrl', function ($scope, $http){
            $http.get('/pizza').success(function(data) {
            $scope.details = data;
            console.log($scope.details);
            });
        });

        pApp.controller('deliverCtrl', function ($scope, $http,$routeParams){
            $scope.Contactno=$routeParams.Contactno;
            $scope.postcontact={};
            $scope.postcontact.Contactno=$scope.Contactno;
            $http({
                method  : 'POST',
                url     : '/update',
                data    : $scope.postcontact, //forms user object
                headers : {'Content-Type': 'application/json'} 
            })
            .success(function(data) {
                alert("successfully delivered");

                if (data.errors) {
                  // Showing errors.
                    $scope.errorName = data.errors.name;
                    $scope.errorUserName = data.errors.username;
                    $scope.errorEmail = data.errors.email;

                } else {
                    $scope.message = data.message;

                }
            });

            $http.get('/pizzaview').success(function(data) {
                $scope.details = data;
            }); 
        });

        pApp.controller('pizzaDetailsCtrl', function ($scope, $routeParams, $http,DataService){
            $scope.name = $routeParams.pizzaName;

            $http.get('/pizza').success(function(data) {

                $scope.pizza = data.filter(function(entry){
                    return entry.name === $scope.name;
                })[0];

                var user={};

                $scope.enter=function(){
                    user.pname=$scope.pizza.name;
                    user.rate=$scope.pizza.rate;
                    user.pic=$scope.pizza.image;
                    user.qty=$scope.user.qty;
                    user.cost=user.rate*user.qty;
                    DataService.order_d(user);
                }
            });
        });

        pApp.controller('pizzaorderCtrl', function ($scope, $http,DataService){
              $scope.details = DataService.view_order();
              $scope.total=DataService.grand_total();
              console.log($scope.details);

        });

        pApp.controller('placeorderCtrl', function ($scope,$http,DataService){
            $scope.message=function(){
                alert("order placed");
                var postdata=DataService.view_order();
                $scope.user.order=postdata;
                $scope.user.deliverystatus=true;
                $http({
                    method  : 'POST',
                    url     : '/pizzaorder',
                    data    : $scope.user, 
                    headers : {'Content-Type': 'application/json'} 
                })

              .success(function(data) { 
                    if (data.errors) {
                        $scope.errorName = data.errors.name;
                        $scope.errorUserName = data.errors.username;
                        $scope.errorEmail = data.errors.email;
                    } else {
                        $scope.message = data.message;
                    }

              });

           };
        });

        pApp.controller('loginCtrl', function ($scope, $http,DataService){
            $http.get('/pizzaview').success(function(data) {
              $scope.details = data;
            });
            $scope.delivery=function(){
                console.log();
            }
        });

