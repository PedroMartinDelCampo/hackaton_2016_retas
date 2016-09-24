(function() {
    'use strict'
    

    angular
        .module('sporticedashboard')
        .service('dataService', dataService)

    function dataService(){
        var svc = this;
 
        firebase.auth().signInWithEmailAndPassword(localStorage.getItem('email'), localStorage.getItem('password')).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

        svc.addEvent = function(event) {
            firebase.database().ref('/events/').push(event);
        };

        svc.addNotification = function(notification) {
            firebase.database().ref('/notifications/').push(notification);
        };
        
        svc.events = function(then) {
            firebase.database().ref('/events/').on('value', function(snapshot) {
                then(snapshot);
            });
        }

    }
})();