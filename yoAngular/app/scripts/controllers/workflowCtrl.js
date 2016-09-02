angular.module('yoAngularApp').controller('workflowCtrl',['scenarioList','$scope', '$state','$http', function(scenarioList,$scope, $state, $http) {
  $scope.scenarios = scenarioList.data.data;

  $scope.remove = function (id) {
    for(var i=0; i<$scope.scenarios.length;i++) {
      if($scope.scenarios[i]._id == id) {
        $scope.scenarios.splice(i,1);
      }
    }
    $http.get('/api/remove',{params:{query:id}}).then(function (response) {
      if(response.data.success) {

        alert('删除成功。');
      }
    })
  }
}])
