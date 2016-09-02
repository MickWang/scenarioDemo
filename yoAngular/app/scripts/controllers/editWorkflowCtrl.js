angular.module('yoAngularApp').controller('editWorkflowCtrl', ['scenario','$scope', '$http','$state',function (scenario,$scope,$http,$state) {
  var property={
    width:1000,
    height:500,
    toolBtns:["start","end","subject","tool","object","resource"],
    haveHead:false,
    initLabelText : '',
    headBtns:["new","open","save","undo","redo","reload"],//如果haveHead=true，则定义HEAD区的按钮
    haveTool:true,
    haveGroup:false,
    useOperStack:true
  };
  var remark={
    cursor:"选择指针",
    direct:"转换连线",
    start:"开始结点",
    end:"结束结点",
    subject:"主语结点",
    tool:"场景结点",
    object:"宾语结点",
    resource:"资源结点"
  };
  var demo = new GooFlow($("#demo"),property);
  demo.$max=9;
  demo.setNodeRemarks(remark);
  demo.onItemDel=function(id,type){
    return confirm("确定要删除该单元吗?");
  };
  // var jsondata={
  //   title:"aaa",
  //   bizType : '',
  //   nodes:[
  //     {id:'demo_node_1',name:"开始",left:67,top:69,type:"start",width:40,height:40},
  //     {id:'demo_node_2',name:"机构",left:219,top:71,type:"subject",width:120,height:40},
  //     {id:'demo_node_5',name:"机构开课",left:480,top:71,type:"tool",width:120,height:40},]
  //   ,
  //   lines:[
  //     {id:'demo_line_3',type:"sl",from:"demo_node_1",to:"demo_node_2",name:"",marked:false},
  //     {id:'demo_line_6',type:"sl",from:"demo_node_2",to:"demo_node_5",name:"",marked:false}
  //   ]
  // };
  // demo.$max=9;
  //
  var jsondata = scenario.data;
  demo.loadData(jsondata);
  $scope.demo = demo;
  $scope.title = jsondata.title;
  $scope.bizType = jsondata.bizType;

  $scope.saveWorkflow = function() {
    var dataObj = $scope.demo.exportData();
    var workflow = {nodes:[],lines:[]};
    if(jsondata._id) workflow._id=jsondata._id;
    workflow.title= $scope.title;
    workflow.bizType=$scope.bizType;
    for(line in dataObj.lines) {
      workflow.lines.push(dataObj.lines[line]);
    }
    for(node in dataObj.nodes) {
      workflow.nodes.push(dataObj.nodes[node]);
    }
    if (jsondata._id) {//update
      var url = '/api/updateWorkflow';
      $http({
          url : url,
          data : workflow,
          method : 'POST'
        }
      ).then(function (response) {
        var success = response.data.success;
        if (success) {
          $state.go('workflowList');
        }
      })
    } else {// save
      var url = '/api/saveWorkflow';
      $http({
          url : url,
          data : workflow,
          method : 'POST'
        }
      ).then(function (response) {
        var success = response.data.success;
        if (success) {
          $state.go('workflowList');
        }
      })
    }

  }
}])
