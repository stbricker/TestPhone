'use strict';

/**
 * @ngdoc function
 * @name testPhoneApp.controller:PhoneCtrl
 * @description
 * # PhoneCtrl
 * Controller of the testPhoneApp
 */
angular.module('testPhoneApp')
  .controller('PhoneCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.submit = function () {

      var url = '/';
      var user = {};

      $http.post(url, user)
        .success(function (res) {
          alert('success', 'OK!', 'You are now registered');
        })
        .error(function (err) {
          alert('warning', 'Opps!', 'Could not register');
        });
    }

    $scope.regTest = function(){
      alert('success', 'OK!', 'You are in regTest');
    }
  });
