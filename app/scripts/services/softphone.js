'use strict';

/**
 * @ngdoc service
 * @name testPhoneApp.softphone
 * @description
 * # softphone
 * Service in the testPhoneApp.
 */
angular.module('testPhoneApp')
  .service('softphone', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return{
      initialize: function() {
        var request;
        return request = $http.get('https://localhost:9802/init');
      },
      register: function(server, deviceId, sipPassword) {
        var request;
        request = $http.get('http://localhost:9802/register', {
          params: {
            sipRegistrar: server,
            authorizationId: deviceId,
            sipPassword: sipPassword
          }
        });
      },
      call: function(phoneNumber) {
        var request;
        return request = $http.get("http://localhost:9802/makeCall?phoneNumber=" + phoneNumber);
      },
      hold: function() {
        var request;
        return request = $http.get("http://localhost:9802/hold");
      },
      accept: function() {
        var request;
        return request = $http.get("http://localhost:9802/accept");
      },
      hangup: function() {
        var request;
        return request = $http.get("http://localhost:9802/hangUp");
      },
      sendDTMF: function(dtmfChar) {
        var request;
        return request = $http.get("http://localhost:9802/dtmf?character=" + dtmfChar);
      },
      reject: function() {
        var request;
        return request = $http.get("http://localhost:9802/reject");
      },
      mute: function() {
        var request;
        return request = $http.get("http://localhost:9802/mute");
      },
      stopService: function() {
        var request;
        return request = $http.get("http://localhost:9802/stop");
      },
      status: function() {
        var request;
        request = $http.get("http://localhost:9802/status");
        return request.then((function(response) {
          return console.log("good");
        }), (function(err) {
          return console.log(err);
        }));
      },
      inComing: function() {
        var request;
        request = $http.get("http://localhost:9802/inComing");
        return request.then((function(response) {
          return console.log("good");
        }), (function(err) {
          return console.log(err);
        }));
      }
    };

  });
