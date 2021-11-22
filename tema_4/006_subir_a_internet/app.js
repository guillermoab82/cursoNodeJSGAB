const exp = require('constants')
const express = require('express')
const app = express()

//Uso del modelo MVC
app.set('view engine', 'hbs');
const hbs = require('hbs');
hbs.registerPartials(__dirname+'/views/layouts/', function(error){});

app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.render('home',{
        nombre:'Guillermo',
        info:'Ingeniero, Programador C#, Programador Asp.Net, Programador NodeJS'
    });
});

app.get('/about/:minombre?', (req, res)=> {//con el ? se hace que la variable no sea obligatoria
    if(req.params.minombre){
        name = req.params.minombre
    }else{
        name = "Guillermo"
    }
    res.render('about',{
        nombre:name
    });
    //res.sendFile(__dirname+'/public/about.html');
});
app.get('/resume', (req, res)=> {
    res.sendFile(__dirname+'/public/resume.html');
});
app.get('/services', (req, res)=> {
    res.sendFile(__dirname+'/public/services.html');
});
app.get('/portafolio', (req, res)=> {
    res.sendFile(__dirname+'/public/portfolio.html');
});
app.listen(PORT)