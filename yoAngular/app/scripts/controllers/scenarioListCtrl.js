angular.module('yoAngularApp')
  .controller('scenarioListCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.showBox = false;
    $scope.scenarioToConfig = null;
    $scope.itemToConfig = null;
    $scope.scenarioList = [
      {
        id : 1,
        name : '机构挂靠老师',
        isSelected : true,
        isConfig : false,
        scenarioObj : {name:'机构挂靠老师',type:'tool'},
        subjectObj : {name : '机构',type:'subject'},
        objectObj : {name : '老师',type:'object'},
        resourceObj : [],
      },
      {
        id : 2,
        name : '老师开课',
        isSelected : true,
        isConfig : false,
        scenarioObj : {name:'老师开课',type:'tool'},
        subjectObj : {name : '老师',type:'subject'},
        objectObj : {},
        resourceObj : [],
      },
      {
        id : 3,
        name : '学生订课',
        isSelected : true,
        isConfig : false,
        scenarioObj : {name:'学生订课',type:'tool'},
        subjectObj : {name : '学生',type:'subject'},
        objectObj : {name : '老师',type:'object'},
        resourceObj : [{name:'时间',type:'time'},{name:'地点',type:'location'}],
      },
      {
        id : 4,
        name : '老师查课',
        isSelected : true,
        isConfig : false,
        scenarioObj : {name:'老师查课',type:'tool'},
        subjectObj : {name : '老师',type:'subject'},
        objectObj : {},
        resourceObj :[]
      },
      {
        id : 5,
        name : '老师打分',
        isSelected : true,
        isConfig : false,
        scenarioObj : {name:'老师打分',type:'tool'},
        subjectObj : {name : '老师',type:'subject'},
        objectObj : {name : '学生',type:'object'},
        resourceObj :[]
      }];
    $scope.selectStatus = function(scenario) {
      scenario.isSelected = !scenario.isSelected;
    }
    $scope.save = function () {
      //collect data and save
    }
    $scope.saveScenarioConf = function() {
      //save the scenarioToConfig
      $scope.showBox = false;
      $scope.scenarioToConfig = null;
      $scope.itemToConfig = null;
    }
    $scope.showScenarioBox = function(id) {
      $scope.showBox = true;
      $scope.scenarioToConfig = $scope.scenarioList[id-1];
    }
    $scope.closeScenarioBox = function() {
      $scope.showBox = false;
      $scope.scenarioToConfig = null;
      $scope.itemToConfig = null;
    }
    $scope.config = function (item) {
      $scope.itemToConfig = item;
    }
  }])
