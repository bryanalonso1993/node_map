const { DataTypes } = require('sequelize');
const connection = require('../connection');

const User = connection.define('user', {
    uid: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    street: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    suite: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    city: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    zicode: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    latitude: {
        type: DataTypes.DECIMAL(11,8),
        allowNull: true
    },
    longitude: {
        type: DataTypes.DECIMAL(11,8),
        allowNull: true
    }
})

module.exports = User;