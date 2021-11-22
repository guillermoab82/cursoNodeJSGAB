const express = require('express')
const app = express()
 
app.get('/', (req, res)=> {
    res.send('Index')
});
app.get('/hola', (req, res)=> {
    res.send('Hola desde url')
});
app.get('*', (req, res) => {
    res.send('404 | Pagina no encontrada')
});
app.listen(3000)