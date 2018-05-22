require('dotenv').config();

const hapi = require('hapi');
// plugin para rutas del servidor
const Routes = require('./routes/routes');

const server = new hapi.Server();
// registro de ruotes en el servidor

server.connection({ port: 9090 });
server.route(Routes.rutas);
// levanto server
server.start((err) => {
  if (err) throw err;
  console.log(`servidor levantado en:  ${server.info.uri}`);
});
