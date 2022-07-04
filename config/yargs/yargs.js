const argv = require("yargs")
            .option('b',{
              alias: 'base',
              type: 'number',
              demandOption: true,
              describe: 'Es la base de la tabla de multiplicar'
            }).option('l',{
              alias: 'listar',
              type: 'boolean',
              default: false,
              describe: 'Determina si muestra o no el listado'
            }).check((argv, options) => {
              if (isNaN(argv.b)){
                throw 'La base tiene que se un número';
              }

              return true;
            })
            .argv;

module.exports = {
 argv
}