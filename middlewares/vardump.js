const { request, response } =  require('express');
const responseJSON = object => JSON.stringify(object, null, 2);

const vardump = (req=request, res=response, next) => {
    res.locals.vardump = responseJSON;
    next();
}

module.exports = vardump;
