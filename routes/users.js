'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');

// USERS

router.get('/me', ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user){
    res.send({
      displayName: user.displayName,
      picture: user.picture,
      conversations: user.conversations
    });
  })
});

router.get('/list', ensureAuthenticated, function(req, res) {
  User.find(function(err, data){
    res.send(data);
  })
});

module.exports = router;
