(function() {
    'use strict'
    angular
        .module('sporticedashboard')
        .component('joinReta', {
            controller: joinRetaCtrl,
            controllerAs: 'vm',
            templateUrl: '/js/dashboard/components/joinreta.html'
        })

        function joinRetaCtrl($scope, dataService, $rootScope){
            var vm = this;
            
            vm.joinTeam = joinTeam;
            vm.teamId = null;

            vm.teamOne = [];
            vm.teamTwo = [];
            vm.showMap = false;
console.log($rootScope.username);

    
            function joinTeam(id){
                if (id == 1){
                    vm.teamOne.push({"name": $rootScope.username});
                    $("#teamone").prop('disabled', true);
                    $("#teamtwo").prop('disabled', true);

                } else{
                    vm.teamTwo.push({"name": $rootScope.username});
                    $("#teamone").prop('disabled', true);
                    $("#teamtwo").prop('disabled', true);
                }
            }

        }
})();