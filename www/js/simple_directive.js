define(['app'], function (app) {
    app.directive('simpleDirective', function () {
        return {
            restrict: 'E',
            scope: {
            	'message': '@message'
            },
            templateUrl: 'js/templates/simpleDirective.html'
        };
    });
});