(function() {
    'use strict'
    angular
        .module('sporticedashboard')
        .component('newsFeed', {
            controller: newsfeedCtrl,
            controllerAs: 'vm',
            templateUrl: '/js/dashboard/components/newsfeed.html'
        })

        function newsfeedCtrl(dataService, $firebaseObject, $firebaseAuth){
            var vm = this;

            vm.notifications = dataService.notifications;
            vm.events = dataService.events;

            $("#miseventos-tab").removeClass("active");
            $("#newsfeed-tab").addClass("active");
            vm.modalAddEvent = modalAddEvent;
            vm.viewEvent = viewEvent;
            vm.joinEvent = joinEvent;
            vm.addEvent = addEvent;

            

            function addEvent(){
                dataService.events.push({
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
                dataService.notifications.push({
                    "message": "Te has unido a ",
                    "title": title,
                    "description": "testDesc"
                });
            
                Materialize.toast('Se ha agregado este evento a tu lista!', 3500, 'toastContent');
            }

        }
})();