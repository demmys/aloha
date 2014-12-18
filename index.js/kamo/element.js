(function() {
    'use strict';

    var m = angular.module('kamo', ['mouseAction', 'classicalWindow']);


    m.directive('kamo', function($interval) {
        return {
            restrict: 'E',
            templateUrl: 'index.js/kamo/partial.html',
            replace: true,
            scope: {
                x: '@',
                y: '@',
                xstep: '@',
                ystep: '@',
                onClick: '&onclick'
            },
            link: function($scope, $element, $attr) {
                $element.css('left', $scope.x + 'px');
                $element.css('top', $scope.y + 'px');
                var dragging = false;
                var xstep = Number($scope.xstep);
                var ystep = Number($scope.ystep);
                $interval(function() {
                    if(!dragging) {
                        var left = parseFloat($element.css('left'));
                        var top = parseFloat($element.css('top'));
                        $element.css('left', (left + xstep) + 'px');
                        $element.css('top', (top + ystep) + 'px');
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

                $element.on('click', function() {
                    $scope.onClick();
                });
            }
        };
    });
}());
