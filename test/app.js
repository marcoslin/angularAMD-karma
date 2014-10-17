define(['angularAMD'], function (angularAMD) {
    'use strict';
    
    var app_name = "app",
        app = angular.module(app_name, []),
        elem = document.createElement('div');
    
    app.__appname = app_name;
    
    return angularAMD.bootstrap(app, false, elem);
});
