(function() {
    'use strict'
    angular
        .module('sporticedashboard')
        .component('mapaCmp', {
            controller: mapaCtrl,
            controllerAs: 'vm',
            templateUrl: '/js/dashboard/components/mapa.html'
        })

        function mapaCtrl($scope, dataService){
            var vm = this;

            firebase.database().ref('/events/').on('value', function(snapshot) {
                        vm.events = snapshot.val();
                        var phase = $scope.$root.$$phase;
                        if(phase == '$apply' || phase == '$digest')
                            $scope.$eval();
                        else{
                            $scope.$apply();
                        }
                    });



            firebase.database().ref('/notifications/').on('value', function(snapshot) {
                        vm.notifications = snapshot.val();
                        var phase = $scope.$root.$$phase;
                        if(phase == '$apply' || phase == '$digest')
                            $scope.$eval();
                        else{
                        $scope.$apply();
                        }
                    });

            $("#miseventos-tab").removeClass("active");
            $("#newsfeed-tab").addClass("active");
            vm.modalAddEvent = modalAddEvent;
            vm.viewEvent = viewEvent;
            vm.addEvent = addEvent;
            navigator.geolocation.getCurrentPosition(function(position) {
                vm.latitude = position.coords.latitude;
                vm.longitude = position.coords.longitude;
            });

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