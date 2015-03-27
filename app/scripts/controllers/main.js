'use strict';

/**
 * @ngdoc function
 * @name sampleDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleDemoApp
 */
angular.module('sampleDemoApp', ['adf', 'LocalStorageModule'])
.controller('MainCtrl', function($scope, localStorageService){
  var name = 'sample-01';
  var model = localStorageService.get(name);
  if (!model) {
    // set default model for demo purposes
    model = {
      title: "Sample 01",
      structure: "2-10",
      rows: [{
        columns: [{
          styleClass: "col-md-2",
          widgets: [{
            title: 'Description',
            type: 'markdown',
            config: {
              content: 'This sample uses a widget filter, to restrict the widget selection on the "add dialog".'
            }
          }]
        }, {
          styleClass: "col-md-10",
          widgets: [{
            type: "markdown",
            config: {
              content: "![Adtran logo](/images/AdtranLogo.png)\n\n ![AOE logo](/images/AOELogo.png)\n\n Welcome to sample dashboard appliction of AOE"
            },
            title: "Markdown"
          }]
        }]
      }]
    };
  }
  $scope.name = name;
  $scope.model = model;
  $scope.collapsible = false;

  $scope.$on('adfDashboardChanged', function (event, name, model) {
    localStorageService.set(name, model);
  });
});
