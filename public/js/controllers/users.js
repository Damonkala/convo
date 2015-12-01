'use strict';

angular.module('socialLogin')
.controller('usersCtrl', function($scope, $auth, $state, $http) {
  if(!$auth.isAuthenticated()){
    return $state.go('home');
  }
  $http.get('/users/me')
  .then(function(res) {
    $scope.user = res.data;
  }, function(err) {
    console.error(err);
  });
  $scope.createConvo = function(info, notherthing){
    var data = {};
    data.name2 = info.displayName
    data.name1 = $scope.user.displayName
    data.messages = notherthing
    $http.post('/conversations', data)
    .then(function(res) {
      console.log(res)
    })
  }

  $http.get('/users/list')
  .then(function(res) {
    $scope.userlist = res.data;
    console.log('res:', res);
    console.log('resData:', res.data);
  }, function(err) {
    console.error(err);
  });
});
