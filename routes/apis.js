const express = require('express');
const Chat = require('../models/chat');


const router = express.Router();

router.get('/', (req, res) => {
    res.send({type:'GET'})
});

router.post('/', (req, res) => {
    Chat.create(req.body).then((chat) => {
        res.send(chat);
    });
});

router.put('/:id', (req, res) => {
    res.send({type:'PUT'})
});

router.delete('/:id', (req, res) => {
    res.send({type:'DELETE'})
});

module.exports = router;