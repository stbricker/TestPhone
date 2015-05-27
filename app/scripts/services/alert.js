'use strict';
// to generate a service yo angular:service
/**
 * @ngdoc service
 * @name testPhoneApp.alert
 * @description
 * # alert
 * Service in the testPhoneApp.
 */
angular.module('testPhoneApp')
  .service('alert', function alert($rootScope, $timeout) {
      var alertTimeout;
      return function(type, title, message, timeout){
        $rootScope.alert = {
            hasBeenShown: true,
            show: true,
            type: type,
            message: message,
            title: title
        };
        $timeout.cancel(alertTimeout);
        alertTimeout = $timeout(function(){
          $rootScope.alert.show = false;
        }, timeout || 2000);
      };
  });
