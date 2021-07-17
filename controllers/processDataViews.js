const { request, response } = require('express');
const { User } = require('../db/models');

exports.postDataUser = (req=request, res=response) => {
    User.findAll({attributes:['name']})
        .then( element => {
            let storageUser = new Array();
            for (let index=0; index<element.length; index++){
                storageUser = [...storageUser, element[index].dataValues.name];
            }
            res.render('home.pug', {nombrePagina:'Despues del Post', dataUser:storageUser});                        
        })
        .catch( e => {
            res.render('home.pug', {nombrePagina:'Error', dataUser:[]})}
            );
}

exports.getDataUser = (req=request, res=response) => {
    res.render('home.pug', {nombrePagina:'Trabanjando con templates', dataUser:[]});
}
