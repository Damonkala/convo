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
});
