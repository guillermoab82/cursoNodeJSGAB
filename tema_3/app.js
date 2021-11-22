const colors = require('colors');
const {inquirerMenu,leerInput} = require('./helpers/inquire');
const Busquedas = require('./models/busquedas');
const main = async ()=>{
    const busquedas = new Busquedas();

    do{
        opt = await inquirerMenu();
        switch(opt){
            case 1:
                //Buscaremos la cuidad
                //Buscar nuestro lugar
                const ciudadABuscar = await leerInput('Ciudad: ');
                console.log(ciudadABuscar);
                const lugares = await busquedas.ciudades(ciudadesABuscar);
                console.log(lugares);
                busquedas.agregarHistorial(lugarSeleccionado);

                //Buscar clima
                const clima = await busquedas.climaDelLugar(lugarSeleccionado.lat, lugarSeleccionado.lon);

                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad')
                break;
            case 2:
                //Mi historial
                break;
            default:
                console.log('Opcion invalida');
                break;
        }
    }while(opt !=0)
}

main();