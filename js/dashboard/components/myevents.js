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

            

        }
})();