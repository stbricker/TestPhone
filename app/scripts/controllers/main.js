'use strict';
// to generate a service yo angular:service
/**
 * @ngdoc function
 * @name testPhoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testPhoneApp
 */
angular.module('testPhoneApp')
  .controller('MainCtrl', function ($scope, $http, alert, softphone) {

    $scope.register = function()
    {
      alert('success', 'OK!', 'You are in register');
      softphone.register('server', 'deviceid', 'password');
    };

    $scope.stopService = function()
    {
      alert('success', 'OK!', 'You are in stop');
      softphone.stop();
    };

    $scope.getStatus = function()
    {
      alert('success', 'OK!', 'You are in get status');
      softphone.inComing();
    };

  });
