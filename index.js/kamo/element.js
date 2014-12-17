(function() {
    'use strict';

    var m = angular.module('kamo', ['mouseAction']);


    m.directive('kamo', function($interval) {
        return {
            restrict: 'E',
            templateUrl: 'index.js/kamo/partial.html',
            replace: true,
            scope: {},
            compile: function($element, $attr) {
                $element.css('left', '500px');
                $element.css('top', '0px');
                return function($scope, $element, $attr) {
                    var dragging = false;
                    var timer = $interval(function() {
                        if(!dragging) {
                            $element.css('left', (parseInt($element.css('left')) + 10) + 'px');
                        }
                    }, 100);
                    var gap = {
                        x: 0,
                        y: 0
                    };

                    $scope.startDrag = function(currentPoint, pastPoint) {
                        gap = {
                            x: currentPoint.x - parseInt($element.css('left')),
                            y: currentPoint.y - parseInt($element.css('top'))
                        };
                        dragging = true;
                    };
                    $scope.endDrag = function() {
                        dragging = false;
                    };
                    $scope.move = function(currentPoint, pastPoint) {
                        $element.css('left', (currentPoint.x - gap.x) + 'px');
                        $element.css('top', (currentPoint.y - gap.y) + 'px');
                    };
                };
            }
        };
    });
}());
