const { request, response } = require('express');
const { User } = require('../db/models');
const { Op } = require('sequelize');


exports.postDataUser = async (req=request, res=response) => {
    const { name } = req.body;
    await User.findOne({ where:{ name: { [Op.eq]: name } } })
        .then( rows => rows.dataValues)
        .then( rows => {
            User.findAll({attributes:['name'], raw: true})
                .then(x => {
                    let storageData = new Array();
                    for (let index=0; index<x.length;index++){ storageData = [...storageData, x[index].name] }
                    res.render('home.pug', {nombrePagina:'Despues del Post', dataUser:storageData, data:rows});
                })
                .catch(e => e)
        })
        .catch(e => {
            throw res.status(500).send('Error');
        })
}

exports.getDataUser = async (req=request, res=response) => {
    await User.findAll({ attributes:['name'] })
            .then( element => {
                let storageUser = new Array();
                for(let index=0;index<element.length;index++){ storageUser = [...storageUser, element[index].dataValues.name] }
                res.render('home.pug', {nombrePagina:'Antes del Post', dataUser: storageUser, data:[]});
            })
            .catch(e => {
                res.send('Error')
            })
}
