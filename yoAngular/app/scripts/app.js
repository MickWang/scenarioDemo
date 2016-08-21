'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */
angular
  .module('yoAngularApp', ['ui.select2',
    'ui.router',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('main', {
      url : '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
      .state('about',{
      url : '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
      .state('scenarioList',{
      url : '/scenarioList',
      templateUrl : 'views/scenarioList.html',
      controller : 'scenarioListCtrl'
    })
  });
