(function() {
    'use strict'
    angular
        .module('sporticedashboard')
        .component('myEvents', {
            controller: myEventsCtrl,
            controllerAs: 'vm',
            templateUrl: '/js/dashboard/components/myevents.html'
        })

        function myEventsCtrl($scope){
            var vm = this;
            vm.events = [];
            vm.ranLoad = false;
            $("#miseventos-tab").addClass("active");
            $("#newsfeed-tab").removeClass("active");

            vm.verEvento= verEvento;
            vm.salirEvento = salirEvento;

            function verEvento(index, title, description, date, time){
                vm.viewTitle = title;
                vm.viewDescription = description;
                vm.viewDate = date;
                vm.viewTime = time;
                vm.viewIndex = index;
                $("#modal-view-event").openModal();
            }

            function salirEvento(index){
                firebase.database().ref('/profiles/' + vm.userId + '/events/' + index).remove();
            }

            firebase.auth().onAuthStateChanged(function (user){
                if (user){
                    vm.userId = firebase.auth().currentUser.uid;
                    firebase.database().ref('/profiles/' + vm.userId + '/events').on('value', function(snapshot) {
                        vm.eventObj = snapshot.val();
                        var myObj = snapshot.val();
                        vm.keys = Object.keys(vm.eventObj)
                        vm.eventList = $.map(myObj, function(value, index) {
                            return [value];
                        });

                        if (!vm.ranLoad) {
                            for (var event in vm.eventList){
                                firebase.database().ref('/events/' + vm.eventList[event].events).on('value', function(snapshot) {
                                vm.events.push(snapshot.val());
                                });
                            }
                        }

                        vm.ranLoad = true;
                        
                        

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