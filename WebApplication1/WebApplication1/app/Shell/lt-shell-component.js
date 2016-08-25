(function () {
    'use strict'

    function Controller() {
        var vm = this;

        vm.pantallaSelected = {  juego: true, puntuacion: false, selected: 'juego' }
        vm.SeleccionarPantalla = SeleccionarPantalla;
        


        function SeleccionarPantalla(pantalla) {
            var selected = vm.pantallaSelected.selected;
             vm.pantallaSelected.selected = pantalla;
            vm.pantallaSelected[selected] = false;
            vm.pantallaSelected[pantalla] = true;
        }

    }


    angular.module('letras')
           .component('ltShell', {
               templateUrl: 'app/shell/lt-shell-component.html',
               controller: Controller,
               controllerAs: 'vm'

           });


})();