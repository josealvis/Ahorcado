(function () {
    'use strict'

    function Controller(services ) {
        var vm = this;
        vm.letra = '';
        vm.palabra = { Nombre: '', imgUrl: '', letras: [] };
        vm.player = { intentos: 0, lose: false, score: 0 };
        vm.validar = validar;

        Activate();

        function Activate(){
            services.getLetras().then(function (data) {
                
                var ramNum = Math.floor((Math.random() * (data.length - 1)) + 0);
              
                vm.palabra = data[ramNum];
                vm.palabra.letras = [];

                // cantidad de letras
                for (var x = 0 ; x < vm.palabra.Nombre.length; x++) {
                    vm.palabra.letras.push('_');
                }
                
            }, function (err) {
                alert(err);
            });

          

        
            vm.player.intentos = 0;
            vm.player.win = false;
            vm.player.lose = false;

        }
              
        function validarIntentos(){
            if(vm.player.intentos == 5)
                return false;
            else  return true;
        
        }

        function validarPalabra(letra) {

            var win = false;
            if (letra == vm.palabra.Nombre)
            {
                win = true;
            } else vm.player.intentos += 1;

            var palabra = (vm.palabra.Nombre.split('')).toString();
            var letras = vm.palabra.letras.toString();

            if (win || palabra == letras) {
                vm.player.score += 100;
                alert('Has ganado!!!!');
                Activate();
            }
        }

        function validar(letra) {
            if (validarIntentos()) {
                 if (letra.length == 1) {

                    var palabra = vm.palabra.Nombre.split('');
                    var punto = false;


                    for (var x = 0 ; x < palabra.length ; x++) {
                        if (palabra[x] == letra) {
                            vm.palabra.letras[x] = letra;
                            punto = true;
                        }
                    }

                    if (!punto) {
                        vm.player.intentos += 1;
                    }
                    validarPalabra();

                
                 } else validarPalabra(letra);
            } else vm.player.lose = true;
          
            vm.letra = '';
    }
 
  
}


    angular.module('letras')
           .component('ltJugar', {
templateUrl: 'app/jugar/lt-jugar-component.html',
controller: Controller,
controllerAs: 'vm'

});


})();