declare module '*.module.scss';

declare interface Dictionary<V> {
  [key: string]: V;
}

declare interface IAppConfig {
  applicationId: number;
  baseUrl: string;
}

declare interface Window {
  appConfig: IAppConfig;
}
