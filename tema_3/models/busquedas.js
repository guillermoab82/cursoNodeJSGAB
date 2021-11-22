const { default: axios } = require("axios");
const fs=requiere('fs');

class Busquedas{
    historial=[];
    path='./db/database.json';
    
    constructor(){
        this.leerDB();
    }

    ciudades(ciudad=''){
        try{
            const instance = axios.create({
                baseURL:`${ciudad}`,
                params:{
                    access_token:'',
                    limit:5,
                    languague:'es'
                }
            })
            const respuesta = await instance.get();
            return respuesta.data;
        }catch(error){

        }
    }

    get paramsWeather(){
        return{
            appid:'',
            units:'metric',
            lang:'es'
        }
    }
    async climaDelLugar(lat,lon){
        try{
            const instance = axios.create({
                baseURL:`https://api.openweathermap.org/data/2.5/weather`,
                params:{...this.paramsWeather,lat,lon}
            })
            const respuesta = await instance.get();
            const {weather,main} = respuesta.data;

            return {
                desc:weather[0].description,
                min:main.temp_min,
                max:main.temp_max,
                temp:main.temp
            }
        }catch(error){

        }
    }

    agregarHistorial(lugar=''){
        if(this.historial.includes(lugar.toLocaleLowerCase())){
            return
        }else{
            this.historial = this.historial.splice(0,5);
            this.historial.unshift(lugar.toLocaleLowerCase());
            this.guardarDB();
        }
    }

    guardarDB(){
        const datos = {
            historial: this.historial,
        }
        fs.writeFileSync(this.path,JSON.stringify(datos));
    }

    leerDB(){
        if(fs.existsSync(this.path)){
            const archivo=fs.readFileSync(this.path,{encoding:'utf-8'});
            const data=JSON.parse(archivo);
            this.historial = data.historial;
        }else{
            return;
        }
    }
}


module.exports = Busquedas;