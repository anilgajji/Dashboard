'use strict';

/**
 * @ngdoc overview
 * @name sampleDemoApp
 * @description
 * # sampleDemoApp
 *
 * Main module of the application.
 */
angular
  .module('sample', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    "adf",
    "sampleDemoApp",
    "sample.widgets.markdown"
  ])
  .config(function ($routeProvider,localStorageServiceProvider) {
  	localStorageServiceProvider.setPrefix('adf');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
