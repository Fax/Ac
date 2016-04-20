export default /* @ngInject */ function (AngularFire,dataService,authenticationService) {

  return {
    templateUrl : '/templates/main.html',
    link : function (scope, ele, attrs, ctrl) {
      scope.messages = dataService.messages;
      
      scope.user = authenticationService.user;
      
    },
    controller : ['$scope','$firebaseObject','$firebaseArray',
    function($scope,$fire,$fireArray){
      
      $scope.add = function(mex){
        $scope.messages.$add({
          text: mex
        });
      };
      $scope.loginWithGoogle = function(){
        authenticationService.googleAuth();
      };
    }]
  }

}