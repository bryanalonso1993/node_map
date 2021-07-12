require('../config/config');
const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
        this.viewEngine();
        this.database();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    viewEngine(){
        const hbs = require('hbs');
        this.app.set('view-engine', 'hbs');
        hbs.registerPartials('../views/templates');
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
