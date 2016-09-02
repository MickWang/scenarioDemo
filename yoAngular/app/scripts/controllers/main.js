'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('MainCtrl', ['$scope','$state','$http',function ($scope,$state,$http) {

    $scope.selectedBizType = [];
    $scope.availableTypes = [{value:'4', text:'音乐'},
      {value:'5', text:'家教'},];

    $scope.bizTypes = [
      {value:'1', text:'教育'},
      {value:'2', text:'电商'}
    ];
    $scope.funcAsync = function (query) {

      console.log(query);
      if(query != '') {
        $http.get('/api/queryScenario/',{params:{query:query}}).then(
          function (response) {
            $scope.availableTypes = response.data.data;
            console.log(response)
          },
          function () {
            console.log('ERROR!!!');
          }
        );
      }

    };


    $scope.selectBizType = function () {
      //call service to get scenario list than render page
      var selectedType = $scope.selectedBizType;
      var scenarioList = [
        {
          id : 1,
          name : '机构挂靠老师',
          isSelected : true,
          isConfig : true
        },
        {
          id : 2,
          name : '老师开课',
          isSelected : true,
          isConfig : true
        },
        {
          id : 3,
          name : '学生选课',
          isSelected : true,
          isConfig : true
        },
        {
          id : 4,
          name : '老师查课',
          isSelected : true,
          isConfig : true
        },
        {
          id : 5,
          name : '老师打分',
          isSelected : true,
          isConfig : true
        }
      ]
      $state.go('scenarioList');
    }
  }]);

