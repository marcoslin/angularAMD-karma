!function () {
    'use strict';

   	/*
    Create list of file to run in test.  Making sure that app_test.js is
    always the first to run
    */
    var firstFile, firstFileREGEXP = /app_test\.js$/i,
        testFiles = [], testFilesREGEXP = /(spec|test)\.js$/i
    ;

    Object.keys(window.__karma__.files).forEach(function (file) {    
        if (firstFileREGEXP.test(file)) {
            firstFile = file;
        } else if (testFilesREGEXP.test(file)) {
            testFiles.push(file);
        }
    });

    if (firstFile) {
        testFiles.unshift(firstFile);
    }

    require.config({
        baseUrl: '/base/www/js',

        paths: {
            'angular': 'lib/angular/angular',
            'angular-route': 'lib/angular-route/angular-route',
            'angular-mocks': 'lib/angular-mocks/angular-mocks',
            'angularAMD': 'lib/angularAMD/angularAMD',
            'text': 'lib/requirejs-text/text'
        },

        shim: {
            'angularAMD': ['angular'],
            'angular-route': ['angular'],
            'angular-mocks': ['angular']
        },

        deps: testFiles,

        callback: window.__karma__.start,
    });
}();

