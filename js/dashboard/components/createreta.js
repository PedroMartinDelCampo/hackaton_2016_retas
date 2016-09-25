(function() {
    'use strict'
    angular
        .module('sporticedashboard')
        .component('createReta', {
            controller: createRetaCtrl,
            controllerAs: 'vm',
            templateUrl: '/js/dashboard/components/createreta.html'
        })

        function createRetaCtrl($scope, dataService, $rootScope, NgMap, $location){
            var vm = this;
            
            vm.addMap = addMap;
            vm.saveReta = saveReta;
            vm.teamId = null;
              
            navigator.geolocation.getCurrentPosition(function(position) {
                vm.latitude = position.coords.latitude;
                vm.longitude = position.coords.longitude;
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
                }});
            }

            function saveReta(){
                 Materialize.toast('Se ha creado una nueva reta!', 3500, 'toastContent');
                 $location.path("#newsfeed");

            }
        }
})();