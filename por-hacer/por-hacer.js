

const fs = require('fs');
const { get } = require('http');

let listadoPorHacer =[];


const guardarBD = () =>{

    //con  JSON.stringify(listadoPorHacer) se coge cualquier texto y se prepara para
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json',data, (err) => {
         
        if(err) throw new Error ('No se pudo grabar el archivo', err);

    });

}


const cargarBD = () =>{

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
     
    

    console.log(listadoPorHacer);

}


const getListado = () =>{
    cargarBD();
    return listadoPorHacer;


}




const crear = (descripcion) => {

    cargarBD();
  
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarBD();

    return porHacer;
}


const actualizar = (descripcion,completado = true) => {

    cargarBD();
    console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWW")
    console.log(descripcion)
    //aqui se busca en la base de datos la tarea cuya descripcion coincida con la que pasamos por parametro
    //y index almacena -1 si no l o encontro o el indice donde se encuetra ese elemento si lo encuentra 
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWW")
    console.log(index)

    if(index >= 0){
        //aqui se gurda en la base de datos y a completado se le asigna la variable pasada por parametro inicializada completado=true 
        listadoPorHacer[index].completado= completado;
        console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL")
        console.log(listadoPorHacer)
        guardarBD();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) =>{
    cargarBD();

    listadoEliminar = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    

    if (listadoEliminar.length === listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer= listadoEliminar;
        guardarBD();
        return true;
    }

    

}





module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}