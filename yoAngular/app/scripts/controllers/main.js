'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('MainCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.selectedBizType = [];
    $scope.select2Options = {
      'multiple': true,
      'simple_tags': true
    };
    $scope.bizType = [
      {value:'1', text:'教育'},
      {value:'2', text:'电商'},
      {value:'3', text:'艺术'},
      {value:'4', text:'音乐'},
      {value:'5', text:'家教'},
      {value:'6', text:'餐饮'},
      {value:'7', text:'咖啡'}

    ];

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

