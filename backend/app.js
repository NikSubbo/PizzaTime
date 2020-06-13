const express = require("express");
const app = express();
const indexRouter = require('./routes/index');
const dbConnection = require("./middleware/db-connect");
const morgan = require("morgan");
const cors = require('cors')

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', indexRouter);

app.listen(process.env.PORT || 5000,
  () => console.log("Server is running..."));

module.exports = app;
