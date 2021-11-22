const http = require('http');

/**
 * Ejemplo 1
 */
/*
const server = http.createServer((req,res)=>{
    res.write('Hola mundo');
    res.end();
});*/

/**
 * Ejemplo 2
 */
 /*const server = http.createServer((req,res)=>{
     console.log(req);
    res.write('Veamos la variable request');
    res.end();
});*7

/**
 * Ejemplo 5
 */
 /*const server = http.createServer((req,res)=>{
     console.log(req);
    
    res.writeHead(200,{
        'Content-type'
    })
    const datos={
        nombre: 'Francisco'
    }
    res.write(JSON.stringify(datos));
    res.end();
});*/

/**
 * Ejemplo 6
 */
 const server = http.createServer((req,res)=>{
   res.setHeader('Content-Disposition','attachment;filename=mi_archivo.csv');
   res.writeHead(200,{
       'Content-Type':'application/csv',
   })
   res.write('id,nombre\n');
   res.write('1,Memos1\n');
   res.write('2,Memos2\n');
   res.write('3,Memos3\n');
   res.end();
});

server.listen(8080,()=>{
    console.log("Servidor en línea");
});