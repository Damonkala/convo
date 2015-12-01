'use strict';

var express = require('express');
var router = express.Router();

var Conversation = require('../models/conversation');
var User = require('../models/user');
// USERS

router.get('/:id', function(req, res) {
  Conversation.findById(req.params.id, function(err, conversation){
    res.send(conversation)
    console.log("Returned conversation", conversation)
    console.log("Params id", req.params.id)
  })
});
router.post('/', function(req, res) {
  var conversation = {};
  conversation.messages = req.body.messages;
  conversation.user1Name = req.body.name1;
  conversation.user2Name = req.body.name2;
  var newConversation = new Conversation(conversation);
  newConversation.save(function(err, savedConversation){
  Conversation.find(function(err, conversations){
    res.json(conversations)
  })
  User.findOneAndUpdate({displayName: req.body.name1}, {$push: {conversations: savedConversation}}, {safe: true, upsert: true},
    function(err, data){
      console.log(data)
    })
  User.findOneAndUpdate({displayName: req.body.name2}, {$push: {conversations: savedConversation}}, {safe: true, upsert: true},
    function(err, data){
      console.log(data)
    })
    console.log(savedConversation)
  })
});
router.put('/', function(req, res) {
  Conversation.findByIdAndUpdate(req.body.id, {$push: {messages: req.body.message}}, {safe: true, upsert: true},
    function(err, message){
    res.send(message)
  })
});


module.exports = router;
