const express = require('express');
const router = express.Router();

/**
 * controllers
 */

const processDataApi = require('../controllers/processDataApi');

module.exports = function (){
    router.get('/post', processDataApi.getDataPost);
    router.get('/user', processDataApi.DataUser);
    router.get('/', (req, res) => {
        res.send('Hello Word');
    })
    router.get('/other', (req, res) => {
        res.send('Other Sider');
    })
    return router;
}