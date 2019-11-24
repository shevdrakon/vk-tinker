import pino from 'pino'

const logger = pino({
  prettyPrint: {
    colorize: true,
    translateTime: 'mm-dd-yyyy HH:MM:ss.l',
  },
});

export default logger;
