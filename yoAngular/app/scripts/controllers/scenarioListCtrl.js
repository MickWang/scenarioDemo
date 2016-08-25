angular.module('yoAngularApp')
  .controller('scenarioListCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.showBox = false;
    $scope.scenarioToConfig = null;
    $scope.itemToConfig = null;
    $scope.scenarioList = [
      {
        id : 1,
        name : '机构开课',
        isSelected : true,
        isConfig : false,
        scenarioObj : {id:1,name:'机构开课',type:'tool', config:{schedule:true, description:true, description_editable:true}},
        subjectObj : {id:2,name : '机构',type:'subject', config:{biz_industry:'教育,电商', application:'品音'}},
        objectObj : {id:3,name : '老师',type:'object', config:{biz_industry:'音乐,教师'}},
        resourceObj : [],
      },
      {
        id : 2,
        name : '老师查课',
        isSelected : true,
        isConfig : false,
        scenarioObj : {name:'老师查课',type:'tool',config:{schedule:false, description:false, description_editable:false}},
        subjectObj : {name : '老师',type:'subject',config:{biz_industry:'音乐,教师'}},
        objectObj : {},
        resourceObj : [],
      },
      {
        id : 3,
        name : '购买乐器',
        isSelected : true,
        isConfig : false,
        scenarioObj : {name:'购买乐器',type:'tool',config:{schedule:false, description:false, description_editable:false}},
        subjectObj : {name : '学生',type:'subject',config:{biz_industry:'音乐,学生'}},
        objectObj : {name : '老师',type:'object',config:{biz_industry:'音乐,教师'}},
        resourceObj : [],
      },
      {
        id : 4,
        name : '学生订课',
        isSelected : true,
        isConfig : false,
        scenarioObj : {name:'学生订课',type:'tool',config:{schedule:false, description:false, description_editable:false}},
        subjectObj : {name : '学生',type:'subject',config:{biz_industry:'音乐,学生'}},
        objectObj : {name : '机构',type:'subject', config:{biz_industry:'教育,电商', application:'品音'}},
        resourceObj :[]
      },
      {
        id : 5,
        name : '支付方式配置',
        isSelected : true,
        isConfig : false,
        scenarioObj : {name:'支付方式配置',type:'tool',config:{schedule:false, description:false, description_editable:false}},
        subjectObj : {name : '机构',type:'subject',config:{biz_industry:'教育,电商', application:'品音'}},
        objectObj : {},
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
