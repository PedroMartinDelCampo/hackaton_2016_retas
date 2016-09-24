(function() {
    'use strict'
    angular
        .module('sporticedashboard')
        .component('myEvents', {
            controller: myEventsCtrl,
            controllerAs: 'vm',
            templateUrl: '/js/dashboard/components/myevents.html'
        })

        function myEventsCtrl(){
            var vm = this;

            $("#miseventos-tab").addClass("active");
            $("#newsfeed-tab").removeClass("active");

            
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
                    
                }
            });

        }
})();