(function() {
    'use strict';

    var m = angular.module('indexApplication', [
        'kamo'
    ]);

    m.factory('Kamos', function($window) {
        return {
            generate: function(n) {
                var screen = {
                    width: $window.document.documentElement.clientWidth,
                    height: $window.document.documentElement.clientHeight
                };
                var kamos = [];
                for(var i = 0; i < n; ++i) {
                    kamos.push({
                        x: screen.width * Math.random(),
                        y: screen.height * Math.random(),
                        xstep: 10 * Math.random() - 5,
                        ystep: 10 * Math.random() - 5
                    });
                }
                return kamos;
            }
        }
    });

    m.controller('KamosController', function($scope, Kamos) {
        $scope.kamos = Kamos.generate(10);
    });

}());
