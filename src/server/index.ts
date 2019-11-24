import fastify from 'fastify'

import logger from './lib/logger'
import config, {Environment} from './config';
import appRoutingPlugin from './routers/app-routing-plugin';

const app = fastify({
  logger,
  disableRequestLogging: false,
});

logger.info(`Configuration (${config.environment}) loaded:`);
logger.info(config);

app.register(appRoutingPlugin);

if (config.environment === Environment.development) {
  app.ready(() => logger.info(app.printRoutes()));
}

app.listen(config.port, (err, address) => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }

  logger.info(`Server started at ${address} with environment '${config.environment}'.`);
});
