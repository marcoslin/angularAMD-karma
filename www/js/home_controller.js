define(['app', 'angularAMD'], function (app, angular, amd) {
  app.controller('HomeController', function ($scope) {
    $scope.message = 'This is a test message to see if it exists!';
  });
});
