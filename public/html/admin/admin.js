angular
    .module('admin', ['ngRoute', 'ngAnimate'])
    .config(function($routeProvider) {
        $routeProvider
          .when('/login', {
              templateUrl:'admin/admin_view/admin_view.html',
              controller: 'deliverCtrl',
              controllerAs:'deliver'
          })
          .when('/delivered/:Contactno', {
            templateUrl:'admin/admin_view/admin_view.html',
            controller: 'deliverCtrl',
            controllerAs:'deliver'
          })
          . otherwise({
            redirectTo: '/'
          });
    });
