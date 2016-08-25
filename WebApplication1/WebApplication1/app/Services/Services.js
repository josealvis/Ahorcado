(function () {

    'use strict'

    function Services($q, $http) {
         
        var provider = {
            getLetras: Getletras,
            setScore: SetScore,
            getScore: GetScore,

        }


        return provider;

        function Getletras() {
            var deferred = $q.defer();

            $http({
                url: 'Data/GetPalabras/',
                method: "GET",
                data: null

            }).success(function (resultado) {

                deferred.resolve(resultado);

            }).error(function (error) {
            
                deferred.reject(error);

            });

            return deferred.promise;

        }

        function SetScore(scoreObjs) {
            var deferred = $q.defer();

            $http({
                url: 'Data/SetScore/',
                method: "POST",
                data: scoreObjs

            }).success(function (resultado) {

                deferred.resolve(resultado);

            }).error(function (error) {

                deferred.reject(error);

            });

            return deferred.promise;
        }

        function GetScore() {
            var deferred = $q.defer();

            $http({
                url: 'Data/GetScore/',
                method: "GET",
                data: null

            }).success(function (resultado) {

                deferred.resolve(resultado);

            }).error(function (error) {

                deferred.reject(error);

            });

            return deferred.promise;

        }

    }


    angular.module('letras')
           .factory('services', Services);

   
})();