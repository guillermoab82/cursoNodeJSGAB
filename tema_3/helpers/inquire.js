const inquirer = require('inquirer');
const colors = require('colors');
const preguntas = [
    {
        type:'list',
        name:'opcion',
        message:'Qué deseas hacer?',
        choices:[
            {
                value:1,
                name:`${'1.'.green} Buscar ciudad`
            },
            {
                value:2,
                name:`${'2.'.green} Historial`
            },
            {
                value:3,
                name:`${'3.'.green} Salir`
            }
        ]
    }
]

const inquirerMenu = async()=>{
    console.clear();
    console.log('==================='.green);
    console.log('Selecciona una opción'.white);
    console.log('==================='.green);
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion
}

const pausa = async()=>{
    const question=[
        type:'input',
        name:'enter',
        
    ]
}
const leerInput = async (mensaje) =>{
    const pregunta = [
        {
            type:'input',
            name:'opt',
            message:mensaje,
            validate(value){
                if(value.lenght===0){
                    return 'Ingrese un valor';
                }
                return true;
            }
        }
    ];
    const {opt} = await inquirer.prompt(pregunta);
    return opt
}

/**
 * Código necesario para exportar nuestras funciones y hacer uso de ellas en otros archivos.
 */
module.exports = {
    inquirerMenu,
    leerInput
}