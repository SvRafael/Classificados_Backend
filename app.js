const express = require('express');
const app = express();
var cors = require('cors');
const morgan = require('morgan');
const bodyParse = require('body-parser');

const classificadosRoute = require('./routes/classificados');

app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());
app.use(morgan("dev"));
app.use(cors());

app.use('/classificados', classificadosRoute);

module.exports = app;