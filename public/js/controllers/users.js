'use strict';

angular.module('socialLogin')
.controller('usersCtrl', function($scope, $auth, $state, $http) {
  if(!$auth.isAuthenticated()){
    return $state.go('home');
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
