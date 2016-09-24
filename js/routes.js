(function () {
    'use strict'

    function config($routeProvider) {
        $routeProvider
            .when('/login',{
                template:'<log-in></log-in>'
            })

            .when('/signup',{
                template:'<sign-up></sign-up>'
            })
        
            .otherwise({
                redirectTo:'/login'
            });
    }

        
    angular
        .module('sportice')
        .config(config)
})();