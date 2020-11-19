const argv = require('./config/yargs').argv;
var colors = require('colors');

console.log(argv)

const { getListado } = require('./por-hacer/por-hacer');
const porHacer = require('./por-hacer/por-hacer');




let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);

        console.log(tarea);
        console.log('Crear por hacer');
    break;
    
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado){
            console.log('=====Por Hacer==============='.green);
            console.log(tarea.descripcion);
            console.log('Estado:',tarea.completado);
            console.log('============================='.green);

        }
        
        console.log('Mostrar todas las tareas por hacer');
    break;
    
    case 'actualizar':
        console.log(argv)
        let actualizado = porHacer.actualizar(argv.d,argv.c);
        console.log(argv.descripcion); 
        console.log(actualizado);

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
        
    break;   
    
    default:
        console.log('Comando no es reconocido');
}
