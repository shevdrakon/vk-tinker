import fastify from 'fastify';
import cors from 'fastify-cors';

import logger from './lib/logger';
import errorHandler from './fastifyHooks/errorHandler';
import config, {Environment} from './config';
import appRoutingPlugin from './plugins/app-routing-plugin';

logger.info(`Configuration (${config.environment}) loaded:`);
logger.info(config);

const app = fastify({
  logger,
  disableRequestLogging: false,
});

app.setErrorHandler(errorHandler);
app.register(cors, {
  origin: true,
  credentials: true,
});
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
