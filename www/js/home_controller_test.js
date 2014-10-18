define(['app', 'angularAMD', 'www/js/home_controller'], function (app, angularAMD) {

  describe('home-controller.js', function () {
    var scope, ctrl;
    
    beforeEach(function () {
      angularAMD.inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('HomeController', {
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
