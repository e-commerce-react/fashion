'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')


module.exports = db.define('review', {
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING
    }
})