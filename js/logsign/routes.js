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

            .when('/interesSignup',{
                template:'<interes-signup></interes-signup>'
            })
            
        
            .otherwise({
                redirectTo:'/signup'
            });
    }

        
    angular
        .module('sportice')
        .config(config)
})();