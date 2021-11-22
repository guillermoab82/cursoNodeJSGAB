const express = require('express');
const cors = require('cors');

class server{
    constructor(){
        this.app = express();
        this.middelwares();
        this.routes();
    }

    routes(){
        this.app.use('/api/users',require('../routes/users'));
    }

    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log('Servidor en linea: ',process.env.PORT);
        })
    }

    middelwares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.)
    }
}

module.exports = server;