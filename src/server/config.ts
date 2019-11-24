import path from 'path';
import appConfiguration from './configuration/AppConfig';

export enum Environment {
  production = 'production',
  development = 'development'
}

interface Config {
  environment: Environment;
  assetsRootUrl: string;
  siteRoot: string;
  windowTitle: string;
  logging: {
    verbose: boolean;
  }
  port: number;
}

const appConfig = appConfiguration(path.resolve(__dirname, 'configuration'));

const config: Config = {
  ...appConfig.get().vkTinker,
  port: appConfig.get('PORT'),
}

export default config;
