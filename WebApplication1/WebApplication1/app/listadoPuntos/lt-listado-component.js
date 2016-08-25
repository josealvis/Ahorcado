(function () {
    'use strict'

    function Controller(services) {
        var vm = this;
        vm.players = [];
       

        Activate();

        function Activate() {
           
            services.getScore().then(function (data) {
                vm.players = data;

            }, function (error) { alert(error) });
        }



    }


    angular.module('letras')
           .component('ltListado', {
               templateUrl: 'app/listadoPuntos/lt-listado-component.html',
               controller: Controller,
               controllerAs: 'vm'
          

           });


})();