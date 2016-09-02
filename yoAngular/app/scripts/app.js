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
  .module('yoAngularApp', ['ngSanitize', 'ui.select',
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
      .state('workflowList',{
        url : '/workflowList',
        templateUrl : 'views/workflowList.html',
        controller : 'workflowCtrl',
        resolve : {
          scenarioList : function($http) {
             return $http.get('/api/scenarioList');
          }
        }
      })
      .state('editWorkflow', {
        url : '/workflow/:id',
        templateUrl : 'views/editWorkflow.html',
        controller : 'editWorkflowCtrl',
        resolve : {
          scenario : function($stateParams, $http) {
            if ($stateParams.id) {
              return $http.get('/api/scenario/',{params:{query:$stateParams.id}});
            } else {
              return {data:{title:'',bizType:'',nodes:[],lines:[]}};
            }
          }
        }
      })
  });
