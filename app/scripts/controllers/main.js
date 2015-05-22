'use strict';

/**
 * @ngdoc function
 * @name testPhoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testPhoneApp
 */
angular.module('testPhoneApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
