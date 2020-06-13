const router = require('express').Router();
const Pizza = require('../models/pizzas')


router.get('/', async (req, res, next) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    next(error)
  }
})

module.exports = router;
