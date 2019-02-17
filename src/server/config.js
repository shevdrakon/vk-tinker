import path from 'path';
import appConfiguration from './configuration/AppConfig';

const config = appConfiguration(path.resolve(__dirname, 'configuration'));

export default {
  ...config.get().vkTinker,
  port: config.get('PORT')
}
