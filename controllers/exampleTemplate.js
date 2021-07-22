const { request, response } = require('express');

exports.getDataTemplate = (req=request,res=response) => {
    res.render('index.pug', { nombrePagina: 'Variable de un Template' });
}

exports.fromProyect = (req=request, res=response) => {
    res.render('formulario.pug', { nombrePagina: 'formulario' });
}

exports.postForm = (req=request, res=response) => {
    const nombre = req.body.name;
    res.render('formulario.pug', { nombrePagina: 'formulario' , nombre});
}
