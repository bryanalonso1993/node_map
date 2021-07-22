require('../config/config');
const { Sequelize } = require('sequelize');
const connectionDb = new Sequelize(process.env.DATABASE, process.env.USERNAMEDB, process.env.PASSWORDB, {
    host: process.env.HOSTDB,
    dialect: 'mariadb',
    timezone: 'America/Lima'
});

module.exports = connectionDb;
