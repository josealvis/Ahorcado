(function () {
    'use strict'

    function Controller( services) {
        var vm = this;
        vm.nombre = ''
        vm.guardarScore = guardarScore;
        vm.player = { Nombre: '', Puntuacion: 0 }
     
     

        function guardarScore() {
            vm.player.Nombre = vm.nombre;
            vm.player.Puntuacion = vm.puntuacion;

            services.setScore(vm.player).then(function () {

                alert('guardado');
            }, function (error) { alert(error) });
        }

    }


    angular.module('letras')
           .component('ltPuntuacion', {
               templateUrl: 'app/puntuacion/lt-puntuacion-component.html',
               controller: Controller,
               controllerAs: 'vm',
               bindings: {
                puntuacion: '='
            }

           });


})();