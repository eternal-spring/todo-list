const express = require('express')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

const app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

var tasksRouter = require("./Routes/tasks");
app.use('/tasks', tasksRouter)
module.exports = app