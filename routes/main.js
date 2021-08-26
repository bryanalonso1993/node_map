const express = require('express');
const router = express.Router();

/**
 * controllers
 */
const { processDataApi, processDataMaps, 
    processDataViews, exampleTemplate } = require('../controllers');


module.exports = function (){
    router.get('/post', processDataApi.getDataPost);
    router.get('/user', processDataApi.DataUser);
    router.get('/template', exampleTemplate.fromProyect);
    router.post('/template', exampleTemplate.postForm);
    router.get('/home', processDataViews.getDataUser);
    router.get('/map', processDataMaps.getDataUsers);
    //router.post('/map', processDataMaps)
    router.post('/home', processDataViews.postDataUser);
    router.get('/other', (req, res) => {
        res.send('Other Sider');
    })
    return router;
}
