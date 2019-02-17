import path from 'path';
import nconf from 'nconf';
import fs from 'fs';

class AppConfig {
  constructor(configFolder = '') {
    nconf
      .env()
      .argv()
      .defaults({
        'vkTinker:Environment': 'production',
        'vkTinker:siteRoot': '/',
        'PORT': 8090,
      });

    const configurationFilePath = `${path.join(configFolder, nconf.get().vkTinker.Environment)}.configuration.json`;
    if (!fs.existsSync(configurationFilePath)) {
      console.log(`Unable to find configuration file: '${configurationFilePath}'.`)
    }

    nconf
      .file(`${nconf.get().vkTinker.Environment}-config-file`, {
        file: configurationFilePath,
      })
      .required(
        ['vkTinker:siteRoot', 'vkTinker:AccessKey', 'vkTinker:Originator']
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
