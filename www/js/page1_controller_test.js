define(['app', 'angularAMD', 'page1_controller'], function (app, angularAMD) {

  describe('page1_controller.js', function () {
    console.log('### Running page1_controller_test.js');
    var scope, ctrl;
    
    beforeEach(function () {
      angularAMD.inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('Page1Controller', {
          $scope: scope
        });
      });
    });
    
    it('app should be defined.', function () {
      expect(app).toBeDefined();
    });

    it('should have scope.message string in controller', function () {
      expect(scope.message).toBeDefined();
    });
  });
});
