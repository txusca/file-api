require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
app.use(morgan('dev'));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.use(require('./routes'));

app.listen(3000);