'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('./product')

module.exports = db.define('order', {
  quantity: Sequelize.INTEGER,
  status: Sequelize.ENUM('processing', 'checked-out', 'shipped', 'wishlist')
}, {
  defaultScope: Product,
  instanceMethods: {
    getPrice: () => {
      return this.quantity * this.product.price
    }
  },
  classMethods: {},
  hooks: {}
});
