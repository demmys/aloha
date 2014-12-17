(function(){
    'use strict';

    var m = angular.module('mouseAction', []);

    m.factory('Mouse', function(){
        return {
            mouseDowned: false,
            dragging: false,
            point: {},
        };
    });

    m.directive('mouseArea', function(Mouse){
        return {
            restrict: 'A',
            link: function($scope, $element){
                // broadcast dragging information via Mouse model
                $element.on('mousedown', function(){
                    $scope.$apply(Mouse.mouseDowned = true);
                });
                $element.on('mousemove', function(event){
                    if(Mouse.mouseDowned){
                        Mouse.mouseDowned = false;
                        Mouse.dragging = true;
                    }
                    $scope.$apply(Mouse.point = {
                        x: event.clientX,
                        y: event.clientY
                    });
                    event.preventDefault();
                });
                $element.on('mouseup mouseout', function(){
                    $scope.$apply(function(){
                        Mouse.mouseDowned = false;
                        Mouse.dragging = false;
                    });
                });
            }
        };
    });

    m.directive('draggable', function(Mouse){
        return {
            restrict: 'A',
            scope: {
                dragCallback: '&ondragging',
                dragStartCallback: '&ondragstart',
                dragEndCallback: '&ondragend'
            },
            link: function($scope, $element, attr){
                // detect whether the dragging object is this or not
                var mouseDowned = false, dragging = false;

                $element.on('mousedown', function(){
                    mouseDowned = true;
                    $scope.$apply(Mouse.mouseDowned = true);
                    event.stopPropagation();
                });

                $element.on('mouseup', function(){
                    mouseDowned = false;
                });
                $scope.$watch(function(){
                    return Mouse.dragging;
                }, function(parentDragging){
                    if(!parentDragging){
                        if(dragging){
                            $scope.dragEndCallback({
                                element: $element
                            });
                        }
                        mouseDowned = false;
                        dragging = false;
                    }
                });

                $scope.$watch(function(){
                    return Mouse.point;
                }, function(currentPoint, pastPoint){
                    if(mouseDowned){
                        mouseDowned = false;
                        dragging = true;
                        $scope.dragStartCallback({
                            currentPoint: currentPoint,
                            pastPoint: pastPoint
                        });
                    }
                    if(dragging){
                        $scope.dragCallback({
                            currentPoint: currentPoint,
                            pastPoint: pastPoint
                        });
                    }
                });
            }
        };
    });

}());
