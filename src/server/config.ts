import path from 'path';
import appConfiguration from './configuration/AppConfig';

export enum Environment {
  production = 'production',
  development = 'development'
}

interface IConfig {
  vkApiVersion: string;
  sessionCookieSecret: string;
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

const config: IConfig = {
  ...appConfig.get().vkTinker,
  port: appConfig.get('PORT'),
}

export default config;
