'use strict'

import Sequelize from 'sequelize';
import db from 'APP/db';

module.exports = db.define('product', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.ENUM,
        values: ['Clothes', 'Shoes', 'Jewelry'],
        allowNull: false,
    },
    subCategory: {
        type: Sequelize.ENUM,
        values: ['Dress', 'Causal', 'Costume']
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
        type: Sequelize.STRING
    },
    dateAdded: {
        type: Sequelize.DATE
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    stocks: {
        type: Sequelize.INTEGER,
        allowNull: false
    },{
    instanceMethods: {},
    classMethods: {},
    hooks: {}
}
})
