const express = require("express");
const app = express();
const indexRouter = require('./routes/index');
const dbConnection = require("./db/db-connect");
const morgan = require("morgan");
const cors = require('cors')
const path = require('path')


app.use(
  cors({
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  })
);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}

app.listen(process.env.PORT || 5000,
  () => console.log("Server is running..."));

module.exports = app;
