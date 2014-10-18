'use strict';

var allTestFiles = [],
    TEST_REGEXP = /(spec|test)\.js$/i;

Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(file);
  }
});

require.config({
    baseUrl: "/base",
    
    paths: {
      'angular': 'bower_components/angular/angular',
      'angularAMD': 'bower_components/angularAMD/angularAMD',
      'app': 'www/js/app'
    },
    
    shim: {
      'angularAMD': ['angular']
    },
    
    deps: allTestFiles,
    
    callback: window.__karma__.start
});
