import fastify from 'fastify'

import config from './config';
import appRoutingPlugin from './routers/app-routing-plugin';

const port = process.env.PORT || 8090;
const app = fastify({logger: true});

console.log(`Configuration (${config.Environment}) loaded:`);
console.log(config);

app.register(appRoutingPlugin);

if (config.Environment === 'development') {
  app.ready(() => console.log(app.printRoutes()));
}

app.listen(port, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  app.log.info(`Server started on ${address} with environment '${config.Environment}'.`);
});
