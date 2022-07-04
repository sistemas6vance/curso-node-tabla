const fs = require('fs');
const argv = require('./config/yargs/yargs.js')
const colors = require('colors');

console.clear();
console.log(argv.argv.base)
console.log(argv)

const cadena = "cadena en archivo";
const crearArchivo = async (base) =>{
  fs.writeFile('prueba.txt', 'El número es: ' + base, (err) => {
    if (err)
      throw (err);
    else
      console.log ("Creado de forma correcta".rainbow);
  });
};

/* const resultado = fs.writeFile('prueba.txt', cadena, (err) => {
  if (err)
    throw err;
  else
    console.log("Creado de forma correcta");
}); */

crearArchivo(argv.argv.base).then((respuesta)=>{}).catch((error)=>console.log(error));