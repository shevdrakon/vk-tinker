const config = {
  extensions: ['.jsx', '.js', '.ts', '.tsx'],
};

require('@babel/register')(config);
require('./index');
