
'use strict'

import Sequelize from 'sequelize';
import db from 'APP/db';

module.exports = db.define('review', {
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING
    }
})