const express = require('express');
const router = express.Router();

/**
 * controllers
 */

const processDataApi = require('../controllers/processDataApi');
const interactiveViews = require('../controllers/processDataViews');
const exampleTemplate = require('../controllers/exampleTemplate');

module.exports = function (){
    router.get('/post', processDataApi.getDataPost);
    router.get('/user', processDataApi.DataUser);
    router.get('/template', exampleTemplate.fromProyect);
    router.post('/template', exampleTemplate.postForm);
    router.get('/home', interactiveViews.getDataUser);
    router.post('/home', interactiveViews.postDataUser);
    router.get('/other', (req, res) => {
        res.send('Other Sider');
    })
    return router;
}
