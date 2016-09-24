(function() {
    'use strict'
    angular
        .module('sporticedashboard')
        .component('mapaCmp', {
            controller: mapaCtrl,
            controllerAs: 'vm',
            templateUrl: '/js/dashboard/components/mapa.html'
        })

        function mapaCtrl(dataService){
            var vm = this;

            vm.notifications = dataService.notifications;
            vm.events = dataService.events;

            $("#miseventos-tab").removeClass("active");
            $("#newsfeed-tab").addClass("active");
            vm.modalAddEvent = modalAddEvent;
            vm.viewEvent = viewEvent;
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

            

        }
})();