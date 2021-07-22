require('../config/config');
const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.viewEngine();
        this.routes();
        this.database();
    }
    middlewares(){
        const bodyParser = require('body-parser');
        const vardump = require('../middlewares/vardump');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(vardump);
    }
    viewEngine(){
        this.app.set('view engine', 'pug');
        this.app.set('views', './views/pages')
    }
    database(){
        require('../db/models');
        const db = require('../db/connection');
        db.sync();
    }
    routes(){
        this.app.use('/', require('../routes/main')());
    }
    listen(){
        this.app.listen(this.port, () => console.log(`App running on port ${this.port}`));
    }
}

module.exports = Server;
