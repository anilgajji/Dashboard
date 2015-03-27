'use strict';

/**
 * @ngdoc function
 * @name sampleDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sampleDemoApp
 */
angular.module('sampleDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
