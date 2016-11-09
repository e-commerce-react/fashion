'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Review = require('./review')
const Product = require('./product')

Review.belongsTo(Product);
Product.hasMany(Review);

module.exports = {User, Review, Product}
