const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const seed = require("./seed");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/pizzatime", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(async () => {
    console.log("Connected to the Database");
    await seed();
  })
  .catch((err) => console.log(err));

module.exports = mongoose.connection;
