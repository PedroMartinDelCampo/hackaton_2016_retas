(function() {
    'use strict'
    

    angular
        .module('sporticedashboard')
        .service('dataService', dataService)

    function dataService (){
        var svc = this;
 
        firebase.auth().signInWithEmailAndPassword(localStorage.getItem('email'), localStorage.getItem('password')).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

        svc.notifications = [];
        
    }
})();