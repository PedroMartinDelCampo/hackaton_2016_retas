(function () {
    'use strict'

    function config($routeProvider) {
        $routeProvider

            .when('/login',{
                template:'<log-in></log-in>'
            })
    }

   angular
        .module('sportice')
        .config(config)

})();