(function() {
    'use strict'
    angular
        .module('sporticedashboard')
        .component('newsFeed', {
            controller: newsfeedCtrl,
            controllerAs: 'vm',
            templateUrl: '/js/dashboard/components/newsfeed.html'
        })

        function newsfeedCtrl($scope, dataService, $firebaseObject, $firebaseAuth, $rootScope, NgMap){
            var vm = this;

            $("#miseventos-tab").removeClass("active");
            $("#newsfeed-tab").addClass("active");
            vm.modalAddEvent = modalAddEvent;
            vm.viewEvent = viewEvent;
            vm.joinEvent = joinEvent;
            vm.addMap = addMap;
            vm.showMap = false;
            vm.addEvent = addEvent;
            
            navigator.geolocation.getCurrentPosition(function(position) {
                vm.latitude = position.coords.latitude;
                vm.longitude = position.coords.longitude;
            });

            
            
            firebase.auth().onAuthStateChanged(function (user){
                if (user){
                    vm.userId = firebase.auth().currentUser.uid;
                    firebase.database().ref('/events/').on('value', function(snapshot) {
                        vm.eventObj = snapshot.val();
                        var myObj = snapshot.val();
                        vm.keys = Object.keys(vm.eventObj)
                        vm.events = $.map(myObj, function(value, index) {
                            return [value];
                        });
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
                }
            });
            

            function addMap(){
                $("#modal-map").openModal();
                vm.showMap = true;
                NgMap.getMap('mapModal').then(function(map) {
                vm.map = map;
                vm.markerMove = function(e) {
                    vm.latitude = vm.map.markers[0].getPosition().lat();
                    vm.longitude = vm.map.markers[0].getPosition().lng();
                    console.log(vm.latitude, vm.longitude);
                }
            });
                // NgMap.initMap('modalMap');
            }

            function addEvent(){
                dataService.addEvent({
                    "title": vm.eventname,
                    "description": vm.eventdescription,
                    "category": vm.eventcategory,
                    "date": vm.fecha,
                    "time": vm.hora,
                    "tags": vm.tags,
                    "latitude": vm.latitude,
                    "longitude": vm.longitude
                });
                Materialize.toast('Se ha creado un nuevo evento!', 3500, 'toastContent');
            }

            function modalAddEvent (){
                $("#modal-add-event").openModal();
            }

            function viewEvent (index){
                $("#modal-view-event").openModal();
            }

            function joinEvent (index, title) {
                var event = index;
                var database = firebase.database();
                var eventsRef = database.ref('profiles/' + vm.userId + '/events');
                eventsRef.push({events: event});
                dataService.addNotification({
                    "message": "Te has unido a ",
                    "title": title,
                    "description": "testDesc"
                });
                Materialize.toast('Se ha agregado este evento a tu lista!', 3500, 'toastContent');
            }

        }
})();