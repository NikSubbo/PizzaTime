const dbConnection = require("../middleware/db-connect");

const Pizza = require('../models/pizzas')

const titles = [
  'Pepperoni',
  'Margherita',
  'Cheese',
  'Mexican',
  'Hawaiian',
  'Ham and mushrooms',
  'Seafood',
  'Vegetarian'
];

const descriptions = [
  'American classic with spicy pepperoni, Mozzarella and signature tomato sauce',
  'Traditional recipe with signature tomato sauce, Mozzarella, oregano and juicy tomatoes',
  'Simple and delicious cheese pizza with signature tomato sauce and trailing Mozzarella',
  'Spicy pizza with chicken fillet, tomato sauce, Mozzarella, mushrooms, onions, tomatoes, sweet green pepper and jalapeno pepper',
  'Tropical classic with flavorful ham, tomato sauce and Mozzarella combined with pineapple bits',
  'Delicate pizza with Garlic ranch sauce, Mozzarella, mushrooms, flavorful ham and garlic',
  'Sea cocktail, garlic ranch sauce, Mozzarella, sweet green and red peppers, onions, garlic and Italian herbs blend',
  'Mozzarella cheese, tomato sauce, tomatoes, mushrooms, sweet green pepper, onion, olives'
];

const pictures = [
  'https://res.cloudinary.com/dt0icdja8/image/upload/v1592062007/Pizzas/Pepper_xzqauq.jpg',
  'https://res.cloudinary.com/dt0icdja8/image/upload/v1592056320/Pizzas/Margarita_bzgjjd.jpg',
  'https://res.cloudinary.com/dt0icdja8/image/upload/v1592056320/Pizzas/Cheese_dc6rth.jpg',
  'https://res.cloudinary.com/dt0icdja8/image/upload/v1592056319/Pizzas/Mexico_ppwzjg.jpg',
  'https://res.cloudinary.com/dt0icdja8/image/upload/v1592056320/Pizzas/Hawaii_wz5aau.jpg',
  'https://res.cloudinary.com/dt0icdja8/image/upload/v1592056320/Pizzas/Hum_Mushrooms_olnhb1.jpg',
  'https://res.cloudinary.com/dt0icdja8/image/upload/v1592056320/Pizzas/Seafood_uodjmk.jpg',
  'https://res.cloudinary.com/dt0icdja8/image/upload/v1592056320/Pizzas/Vegan_orj8qj.jpg'
];

async function seed() {
  for (let i = 0; i < 8; i++) {
    let pizzas = new Pizza({
      title: titles[i],
      description: descriptions[i],
      picture: pictures[i]
    });
    await pizzas.save();
  }
}

// seed()
