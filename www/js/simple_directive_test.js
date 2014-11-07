define(['app', 'angularAMD', 'text!templates/simpleDirective.html', 'simple_directive'], function (app, angularAMD, simpleDirective_html) {
    describe('simpleDirective', function () {
        console.log('### Running simple_directive_test.js');
        var compile, scope;
        beforeEach(function () {
            angularAMD.inject(function ($compile, $rootScope, $templateCache) {
                compile = $compile;
                scope = $rootScope.$new();
                $templateCache.put('js/templates/simpleDirective.html', simpleDirective_html);
            });
        });
        
        it('test message attribute', function () {
            var id_string = 'Qy3marXUsk',
            	elem = angular.element('<simple-directive message="' + id_string + '"></simple-directive>');
            compile(elem)(scope);
            scope.$digest();
            expect(elem.text()).toBe(id_string);
        });
        
    });
});