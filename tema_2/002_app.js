const fs = require('fs');
const colors = require('colors');
const {number, options} = require('yargs');
const argv= require('yargs/yargs')(process.argv.splice(2))
.option('b',{
    alias:'base',
    demandOption:true,
    describe:'Esta es la base que se multiplicara',
    type:'number',
})
.option('f',{
    alias:'file',
    demandOption:true,
    default:'Tabla_de_miltiplicar',
    describe:"Nombre del Archivo",
    type:'string',
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'La base (--b) debe ser un número';
    }
    return true;
}).argv;

let salida='';
for(let i=1;i<=10;i++){
    console.log(`${argv.b.toString().green} ${'x'.gray} ${i} = ${(argv.b*i).toString().green}`)
    salida += `${argv.b}x${i} = ${argv.b*i}\n`;
}

fs.writeFile(`${argv.f}.txt`,salida,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("El archivo se creo!")
    }
})