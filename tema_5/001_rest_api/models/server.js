const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.routes();
    }

    routes(){
        this.app.get('/api', function(req,res){
            res.send('hello world')
        })
        this.app.post('/api', function(req,res){
            res.send('Soy un post')
        })
        this.app.put('/api', function(req,res){
            res.send('Soy un put')
        })
        this.app.delete('/api', function(req,res){
            res.send('Soy un delete')
        })
    }

    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log('Servidor en linea: ',process.env.PORT);
        })
    }
}

module.exports= Server;