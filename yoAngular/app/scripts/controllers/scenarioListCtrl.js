angular.module('yoAngularApp')
  .controller('scenarioListCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.showBox = false;
    $scope.scenarioList = [
      {
        id : 1,
        name : '机构挂靠老师',
        isSelected : true,
        isConfig : false
      },
      {
        id : 2,
        name : '老师开课',
        isSelected : true,
        isConfig : false
      },
      {
        id : 3,
        name : '学生选课',
        isSelected : true,
        isConfig : false
      },
      {
        id : 4,
        name : '老师查课',
        isSelected : true,
        isConfig : false
      },
      {
        id : 5,
        name : '老师打分',
        isSelected : true,
        isConfig : false
      }];
    $scope.selectStatus = function(scenario) {
      scenario.isSelected = !scenario.isSelected;
    }
    $scope.save = function () {
      //collect data and save
    }
    $scope.showScenarioBox = function() {
      $scope.showBox = true;
    }
    $scope.closeScenarioBox = function() {
      $scope.showBox = false;
    }
  }])
