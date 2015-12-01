'use strict';

let app = angular.module('socialLogin', ['satellizer', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', { url: '/', templateUrl: 'partials/home.html', controller: 'homeCtrl'})
    .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl'})

    .state('profile', { url: '/profile', templateUrl: 'partials/profile.html', controller: 'profileCtrl'})
    .state('users', { url: '/users', templateUrl: 'partials/users.html', controller: 'usersCtrl'})
    .state('conversation', { url: '/conversation/:id', templateUrl: 'partials/conversation.html', controller: 'convoCtrl'})

    $authProvider.github({
      clientId: '5e3631a8a1ee5593737d'
    });
    $authProvider.google({
      clientId: '574928256749-mo33o87rihmsnh6ko6flvasjs670pe04.apps.googleusercontent.com'
    });
    $authProvider.facebook({
    clientId: '1673113099637819'
  });
    $authProvider.twitter();
});
