import fastify from 'fastify'

import config from './config';
import setupAppRouting from './routers/app-routing-setup';

const port = process.env.PORT || 8090;
const app = fastify({logger: true});

console.log(`Configuration (${config.Environment}) loaded:`);
console.log(config);

setupAppRouting(app);
//app.register(appRoutingSetup());

app.listen(port, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  app.log.info(`Server started on port ${address} with environment '${config.Environment}'.`);
});
