import path from 'path';
import nconf from 'nconf';
import fs from 'fs';

class AppConfig {
  constructor(configFolder = '') {
    nconf
      .env()
      .argv()
      .defaults({
        'vkTinker:environment': 'production',
        'vkTinker:siteRoot': '/',
        'vkTinker:logging:verbose': false,
        'PORT': 8090,
      });

    const {environment, logging: {verbose}} = nconf.get().vkTinker;
    const configurationFilePath = `${path.join(configFolder, environment)}.configuration.json`;

    if (!fs.existsSync(configurationFilePath)) {
      throw new Error(`Unable to find configuration file: '${configurationFilePath}'.`)
    } else {
      if (verbose) {
        console.log(`Loading configuration file: '${configurationFilePath}'.`)
      }
    }

    nconf
      .file(`${environment}-config-file`, {
        file: configurationFilePath,
      })
      .required(
        ['vkTinker:siteRoot']
      );
  }

  get(key) {
    if (key) {
      return nconf.get(key);
    }

    return nconf.get();
  }
}

let instance;

const getConfig = (configFolder) => {
  if (!instance) {
    instance = new AppConfig(configFolder);
  }

  return instance;
};

export default getConfig;
