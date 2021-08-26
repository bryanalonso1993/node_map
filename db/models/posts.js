const { DataTypes } = require('sequelize');
const connection = require('../connection');

const Post = connection.define('post',{
    userId:{
        type: DataTypes.INTEGER,
        defaultValue: true
    },
    uid:{
        type: DataTypes.INTEGER,
        defaultValue: true
    },
    title:{
        type: DataTypes.STRING(255),
        defaultValue: true
    },
    body:{
        type: DataTypes.STRING(255),
        defaultValue: true
    }
})

module.exports = Post;
