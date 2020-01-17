const path = require('path');

const config = {
  configFile: path.resolve(__dirname, './babel.config.js'),
  extensions: [
    '.jsx', '.js', '.ts', '.tsx'
  ],
};

require('@babel/register')(config);
require('./index');
