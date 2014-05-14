'use strict';

angular
  .module('decisiveUigithubioApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'decisiveUigithubioApp.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
