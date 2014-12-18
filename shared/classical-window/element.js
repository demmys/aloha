(function() {
    'use strict';

    var m = angular.module('classicalWindow', []);

    m.directive('classicalWindow', function() {
        return {
            restrict: 'E',
            templateUrl: 'shared/classical-window/partial.html',
            replace: true,
            scope: {},
            link: function($scope, $element, $attr) {
            }
        };
    });

}());
