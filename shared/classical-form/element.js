(function() {
    'use strict';

    var m = angular.module('classicalForm', []);

    m.directive('mailLikeForm', function() {
        return {
            restrict: 'E',
            templateUrl: 'shared/classical-form/partial.html',
            replace: true,
            scope: {},
            link: function($scope, $element, $attr) {
            }
        };
    });

}());
