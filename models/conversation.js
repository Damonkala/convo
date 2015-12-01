'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Conversation;

var conversationSchema = Schema({
	user1Name: String,
	user2Name: String,
	messages: Array
});


Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;
