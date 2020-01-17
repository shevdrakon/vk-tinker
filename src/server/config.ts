import path from 'path';
import appConfiguration from './configuration/AppConfig';

export enum Environment {
  production = 'production',
  development = 'development'
}

interface IConfig {
  environment: Environment;
  sessionCookieSecret: string;
  port: number;
  vkApi: {
    applicationId: number;
    version: number;
  };
  vkGroup: {
    id: number;
    title: string;
    url: string;
  },
  logging: {
    verbose: boolean;
  }
}

const appConfig = appConfiguration(path.resolve(__dirname, 'configuration'));

const config: IConfig = {
  ...appConfig.get().vkTinker,
}

export default config;
