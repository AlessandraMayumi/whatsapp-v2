const express = require('express');
const Chat = require('../models/chat');


const router = express.Router();

router.get('/', (req, res, next) => {
    res.send({ type: 'GET' });
});

router.post('/', (req, res, next) => {
    Chat.create(req.body).then((chat) => {
        res.send(chat);
    }).catch(next);
    // 
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: 'Hello, from whatsapp-v2.',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+5519989711675'
        })
        .then(message => console.log(message.sid))
        // .done();
});

router.put('/:id', (req, res, next) => {
    Chat.findByIdAndUpdate({ _id: req.params.id }, req.body).then((chat) => {
        res.send(chat);
    });
});

router.delete('/:id', (req, res, next) => {
    Chat
        .findByIdAndRemove({ _id: req.params.id }).then((chat) => {
            res.send(chat);
        });
});

module.exports = router;