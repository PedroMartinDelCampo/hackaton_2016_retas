(function() {
    'use strict'
    angular
        .module('sportice')
        .component('signUp', {
            controller: signUpCtrl,
            controllerAs: 'vm',
            templateUrl: '/js/logsign/components/signup.html'
        })

        function signUpCtrl($location){
            var vm = this;
            vm.interesSignup = interesSignup;

            function interesSignup(){
                $location.path("interesSignup");
            }
            

        }
})();