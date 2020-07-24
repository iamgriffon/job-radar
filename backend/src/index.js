const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('dotenv').config();

const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_KEY , {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);