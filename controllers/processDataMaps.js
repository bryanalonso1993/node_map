const { request, response } = require('express');
const { User } = require('../db/models');

exports.getDataUsers = async (req=request, res=response) => {
    await User.findAll({ attributes: ['name','email','street','suite','city','latitude','longitude']})
            .then( res => {
                let dataUser = new Array();
                for(let index=0;index< res.length; index++){
                    dataUser = [...dataUser, res[index].dataValues];
                }
                return dataUser;
            })
            .then(x => {
                res.render("mapa.pug", { nombrePagina: 'usuarios', dataset:x });
            })
            .catch(e => {
                throw res.status(500).json({Error: e});
            });
}

exports.dropDataUsers = async (req=request, res=response) => {
    const { name } = req.body;
    await User.destroy({ where: { name } })
        .then( () => console.log('Se elimino de manera exitosa'))
        .catch( e => {
        throw res.status(500).send("Error drop user");
    })
}
