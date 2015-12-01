'use strict';

angular.module('socialLogin')
.controller('convoCtrl', function($scope, $auth, $state, $http, $stateParams) {
  if(!$auth.isAuthenticated()){
    return $state.go('home');
  }
  $http.get('/conversations/' + $stateParams.id)
  .then(function(res) {
    $scope.conversation = res.data;
    console.log('convo:', res);
  }, function(err) {
    console.error(err);
  });

  $scope.updateConvo = function(message){
    var upd8 = {}
    upd8.message = message
    upd8.id = $scope.conversation._id
    $http.put('/conversations', upd8)
    .then(function(res) {
      $scope.messageInput = ""
      $http.get('/conversations/' + $stateParams.id)
      .then(function(res) {
        $scope.conversation = res.data;
        console.log('convo:', res);
      }, function(err) {
        console.error(err);
      });
    })
  }

});
