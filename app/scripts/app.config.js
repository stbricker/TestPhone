/**
 * Created by Steven on 5/20/2015.
 */

angular.module('testPhoneApp').config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main',{
      url: '/',
      templateUrl: '/views/main.html'
    })

    .state('phone',{
    url: '/phone',
    templateUrl: '/views/phone.html',
    controller: 'PhoneCtrl'
  });
})
