const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({}, {strict: false});

const Chat = mongoose.model('chat', ChatSchema);

module.exports = Chat;