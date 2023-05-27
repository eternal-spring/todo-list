const express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const corsOptions = require("./Config/corsOptions");
const headers = require("./Middleware/headers");
const { verifyToken } = require("./Middleware");

const app = express();

app.use(logger("dev"));
app.use(headers);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));

var { TasksRouter, UserRouter } = require("./Routes");

app.use("/auth", UserRouter);

app.use(verifyToken);
app.use("/tasks", TasksRouter);

module.exports = app;
