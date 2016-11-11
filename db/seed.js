const db = require('APP/db')
const products = require('APP/public/seeds/seed_info');

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  products.female_accessory_1,
  products.female_accessory_2,
  products.female_accessory_3,
  products.female_accessory_4,
  products.female_bag_1,
  products.female_bag_2,
  products.female_bag_3,
  products.female_bag_4,
  products.female_shoe_1,
  products.female_shoe_2,
  products.female_shoe_3,
  products.female_shoe_4,
  products.male_accessory_1,
  products.male_accessory_2,
  products.male_accessory_3,
  products.male_accessory_4,
  products.male_shoe_1,
  products.male_shoe_2,
  products.male_shoe_3
], product => db.model('product').create(product))


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
