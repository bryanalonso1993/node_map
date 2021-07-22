const { request, response } = require('express');

exports.getDataUsers = (req=request, res=response) => {
    res.send('Hola Funciona el GET a  maps');
}