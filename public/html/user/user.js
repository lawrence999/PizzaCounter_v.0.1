angular
  .module('user', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'user/pizza_gallery/pizza_gallery.html',
                    controller: 'pizzaCtrl',
                    controllerAs:'pizzaGlry'
                })
                .when('/cart', {
                    templateUrl:'user/pizza_cart/pizza_cart.html',
                    controller: 'pizzaorderCtrl',
                    controllerAs:'pizzaCrt'
                })
                .when('/placeorder', {
                    templateUrl:'user/confirm_order/confirm_order.html',
                    controller: 'placeorderCtrl',
                    controllerAs:'confirmOrdr'
                })
                .when('/:pizzaName', {
                    templateUrl: 'user/pizza_details/pizza_details.html',
                    controller: 'pizzaDetailsCtrl',
                    controllerAs:'pizzaDtls'
                })
                . otherwise({
                    redirectTo: '/'
                });
        });
