let funcionesDeTareas = require(`./funcionesDeTareas`)

let process = require(`process`)

let instruccion = process.argv[2]

switch(instruccion) {
   case "tarea":
       console.log(funcionesDeTareas.leerJSON())
       break;
    case undefined :
        console.log("ATENCION - Tienes que pasar una accion. -")
        break;
    default:
        console.log("- No entiendo lo que quieres hacer. -")
        break;
}

