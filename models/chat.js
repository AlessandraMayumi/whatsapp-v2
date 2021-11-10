const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    name: {
        type: String
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
});

const Chat = mongoose.model('chat', ChatSchema);

module.exports = Chat;

// required: [true, 'Name field is required']