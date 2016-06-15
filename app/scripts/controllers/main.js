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
      title: "",
      structure: "6-6",
      rows: [{
        columns: [{
          styleClass: "col-md-6",
          widgets: [{
            type: "markdown",
            config: {
              content: "No Alarms Found"
            },
            title: "Alarms"
          },{
            type: "markdown",
            config: {
              content: "No Content to display"
            },
            title: "TextArea"
          }, {
            type: "markdown",
            config: {
              content: "No Tasks Scheduled"
            },
            title: "Recently Scheduled Tasks"
          },{
            type: "markdown",
            config: {
              content: "No Alerts Found"
            },
            title: "Capacity Monitor Alerts"
          }, {
            type: "markdown",
            config: {
              content: "No Alerts Found"
            },
            title: "Service Monitor Alerts"
          }]
        }, {
          styleClass: "col-md-6",
          widgets: [{
            type: "markdown",
            config: {
              content: "No Alarms Found"
            },
            title: "Historical Alarms"
          },{
            type: "markdown",
            config: {
              content: "No updates"
            },
            reload:true,
            title: "Dynamic updates"
          }]
        }]
      }]
    };
  }
  $scope.name = name;
  $scope.model = model;
  $scope.collapsible = false;
  $scope.editMode = true;

  $scope.$on('adfDashboardChanged', function (event, name, model) {
    localStorageService.set(name, model);
  });
});
