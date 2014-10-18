define(['angularAMD'], function (angularAMD) {
    'use strict';
    
    var app = angular.module("angularAMD-karma-app", []);
    return angularAMD.bootstrap(app);
});
