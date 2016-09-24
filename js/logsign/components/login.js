(function() {
    'use strict'
    angular
        .module('sportice')
        .component('logIn', {
            controller: logInCtrl,
            controllerAs: 'vm',
            templateUrl: '/js/logsign/components/login.html'
        })

        function logInCtrl(){
            var vm = this;
            
            vm.login = login;

            function login (){
                firebase.auth().signInWithEmailAndPassword(vm.email, vm.password).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                
                });

                localStorage.setItem('email', vm.email);
                localStorage.setItem('password', vm.password);
                window.location.href = "/dashboard.html"
            }
            

        }
})();