const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  title: String,
  description: String,
  picture: String,
  price: Number
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
