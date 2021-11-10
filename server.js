const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/apis');
require('dotenv').config()

const app = express();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.4mmpg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri)
mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

app.listen(process.env.PORT || 4000, () => {
    console.log('listening port for requests');
});