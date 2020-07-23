const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:adminpwd@cluster0.4ecta.mongodb.net/devs?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);