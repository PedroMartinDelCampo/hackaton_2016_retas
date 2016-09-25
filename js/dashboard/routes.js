(function () {
    'use strict'

    function config($routeProvider) {
        $routeProvider
            .when('/newsfeed',{
                template:'<news-feed></news-feed>'
            })

            .when('/myevents',{
                template:'<my-events></my-events>'
            })

            .when('/mapa',{
                template:'<mapa-cmp></mapa-cmp>'
            })

            .when('/joinreta',{
                template:'<join-reta></join-reta>'
            })

            .when('/createreta',{
                template:'<create-reta></create-reta>'
            })

            .otherwise({
                redirectTo:'/newsfeed'
            });
    }

        
    angular
        .module('sporticedashboard')
        .config(config)
})();