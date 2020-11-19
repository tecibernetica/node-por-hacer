

const descripcion =  {
    demand: true,//Define si el valor es obligatorio o no 
    alias: 'd',//--d nombre del parametro a poner en la consola
    desc: 'Descripcion de la tarea por hacer'//descripcion del comando 
}



const argv = require('yargs')
               //con command ponemos la ayuda a la oocion litar, del programa en consola
               .command('crear','Crear un elemento por hacer',{
                descripcion
                })
                
               .command('actualizar','Actualiza el estado completado de una tarea',{
                descripcion,   
                actualizar: {
                    demand: true,//Define si el valor es obligatorio o no 
                    alias: 'd',//--d nombre del parametro a poner en la consola
                    desc: 'Descripcion de la tarea por hacer'//descripcion del comando 
                },
                completado: {
                    default: true,//valor por defalut si no se pone ningun parametro
                    alias: 'c',//--c nombre del parametro a poner en la consola
                    desc: 'Marca como completado o pendiente la tarea' //descripcion del comando
                }

               })

               .command('borrar','Borra una tarea',{
                descripcion
                 

               })

               .help()//para que salga la ayuda puesta arriba ej node app listar --help
               .argv;

    
module.exports = {
   argv
}    