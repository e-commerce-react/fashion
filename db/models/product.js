'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

module.exports = db.define('product', {
    name: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    category: {
        type: Sequelize.ENUM,
        values: ['Clothes', 'Shoes', 'Jewelry', 'Bag', 'Accessory']
    },
    subCategory: {
        type: Sequelize.ENUM,
        values: ['Dress', 'Casual', 'Costume']
    },
    gender: {
        type: Sequelize.ENUM,
        values: ['Male', 'Female']
    },
    size: {
        type: Sequelize.ENUM,
        values: ['XS','S', 'M', 'L', 'XL']
    },
    color: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    dateAdded: {
        type: Sequelize.DATE
    },
    price: {
        type: Sequelize.FLOAT
    },
    stocks: {
        type: Sequelize.INTEGER
    }
},{
    instanceMethods: {},
    classMethods: {},
    hooks: {}
})

