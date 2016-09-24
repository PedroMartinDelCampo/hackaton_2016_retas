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
                firebase.auth().createUserWithEmailAndPassword(vm.email, vm.password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                
                // ...
                });

                localStorage.setItem('email', vm.email);
                localStorage.setItem('password', vm.password);
                $location.path("interesSignup");
            }
            

        }
})();