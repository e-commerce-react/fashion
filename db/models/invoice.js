'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Order = require('./order')

module.exports = db.define('invoice', {
  shipping_address: Sequelize.STRING
}, {
  defaultScope: Order,
  instanceMethods: {},
  classMethods: {},
  hooks: {}
});


// defaultScope: Order