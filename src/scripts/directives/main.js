export default /* @ngInject */ function (AngularFire) {

  return {
    templateUrl : '/templates/main.html',
    link : function (scope, ele, attrs, ctrl) {

    },
    controller : ['$scope','$firebaseObject','$firebaseArray',
    function($scope,$fire,$fireArray){
      $scope.data = $fireArray(AngularFire.messages);
      $scope.add = function(mex){
        $scope.data.$add({
          text: mex
        });
      }
    }]
  }

}