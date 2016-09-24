(function() {
    'use strict'
    angular
        .module('sporticedashboard')
        .component('newsFeed', {
            controller: newsfeedCtrl,
            controllerAs: 'vm',
            templateUrl: '/js/dashboard/components/newsfeed.html'
        })

        function newsfeedCtrl($scope, dataService, $firebaseObject, $firebaseAuth, $rootScope){
            var vm = this;

            $("#miseventos-tab").removeClass("active");
            $("#newsfeed-tab").addClass("active");
            vm.modalAddEvent = modalAddEvent;
            vm.viewEvent = viewEvent;
            vm.joinEvent = joinEvent;
            vm.addEvent = addEvent;
            
            
            firebase.auth().onAuthStateChanged(function (user){
                if (user){
                    firebase.database().ref('/events/').on('value', function(snapshot) {
                        vm.events = snapshot.val();
                    });
                    firebase.database().ref('/events/').on('value', function(snapshot) {
                        vm.notifications = snapshot.val();
                    });
                }
            })
            
            function addEvent(){
                dataService.addEvent({
                    "title": vm.eventname,
                    "description": vm.eventdescription,
                    "category": vm.eventcategory,
                    "date": vm.fecha,
                    "time": vm.hora,
                    "tags": vm.tags
                });
                Materialize.toast('Se ha creado un nuevo evento!', 3500, 'toastContent');
            }

            function modalAddEvent (){
                $("#modal-add-event").openModal();
            }

            function viewEvent (){
                $("#modal-view-event").openModal();
            }

            function joinEvent (title) {
                dataService.addNotification({
                    "message": "Te has unido a ",
                    "title": title,
                    "description": "testDesc"
                });
            
                Materialize.toast('Se ha agregado este evento a tu lista!', 3500, 'toastContent');
            }

        }
})();