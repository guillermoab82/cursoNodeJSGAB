const exp = require('constants')
const express = require('express')
const app = express()
//Uso del modelo MVC
app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.send('Index');
});

app.get('/about', (req, res)=> {
    res.sendFile(__dirname+'/public/about.html');
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
app.listen(3000)