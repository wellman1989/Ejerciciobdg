require("dotenv").config();

const hapi = require ("hapi");

const server = new  hapi.Server();
//defino ruta
server.connection({port: 9090});
server.route({
    method: 'GET',
    path : '/',
    handler: (requestt, reply) => { 
        reply ({data:"hola mundo"});

    } 

}) ;
//levanto server
server.start(err => {
    if (err) throw err;
    console.log (`servidor levantado en:  ${server.info.uri}`);
});