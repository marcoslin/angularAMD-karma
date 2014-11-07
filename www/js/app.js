define(['angularAMD', 'angular-route'], function (angularAMD) {
    'use strict';
    
    var app = angular.module("angularAMD-karma-app", ['ngRoute']);
    
    app.config(['$routeProvider', function ($routeProvider) {
    	$routeProvider
            .when('/home', angularAMD.route({
            	templateUrl: 'views/home.html', controller: 'HomeController', controllerUrl: 'home_controller'
        	}))
            .when('/page1', angularAMD.route({
            	templateUrl: 'views/page1.html', controller: 'Page1Controller', controllerUrl: 'page1_controller'
        	}))
            .otherwise({redirectTo: '/home'})
        ;
    }]);
    
    return angularAMD.bootstrap(app);
});
