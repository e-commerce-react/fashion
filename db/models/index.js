'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Review = require('./review')
const Product = require('./product')
const Order = require('./order')
const Invoice = require('./invoice')

Review.belongsTo(Product);
Product.hasMany(Review);
User.hasMany(Review);

Order.belongsTo(User);
User.hasMany(Order);

Product.hasMany(Order);
Order.belongsTo(Product);

Invoice.belongsTo(User);
Invoice.hasMany(Order);


module.exports = {User, Review, Product, Order, Invoice}
