(function() {
    'use strict'
    angular
        .module('sportice')
        .component('interesSignup', {
            controller: interesSignup,
            controllerAs: 'vm',
            templateUrl: '/js/logsign/components/interesSignup.html'
        })

        function interesSignup(){
            var vm = this;
            
            vm.gotoDashboard = gotoDashboard;


            function gotoDashboard() {
                window.location.href = "/dashboard.html";
            }
            

        }
})();