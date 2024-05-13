const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Genres = sequelize.define('genres', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
});

module.exports = Genres;