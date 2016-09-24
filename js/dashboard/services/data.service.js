(function() {
    'use strict'
    

    angular
        .module('sporticedashboard')
        .service('dataService', dataService)

    function dataService (){
        var svc = this;
        // Initialize Firebase
        

        firebase.database().ref('/events/').on('value', function(snapshot) {
            console.log(snapshot.val());
        });
    

        svc.notifications = [];
        svc.events = [];
    }
})();