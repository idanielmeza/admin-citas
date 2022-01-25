const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../config/db');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;

        this.paths={
            auth: '/auth',
            citas: '/citas',

        };
        this.DB();
        this.middlewares();
        this.routes();

    }

    async DB(){
        await dbConnection();
    }

    middlewares(){
        
        // this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.citas, require('../routes/citas'));
    }
   
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

}

module.exports = Server;