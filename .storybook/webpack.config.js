const path = require('path');
const babelOptions = require('../src/client/babel.config');

module.exports = ({config}) => {
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules.push({
    test: /\.(jsx?|tsx?)$/,
    include: path.resolve('.'),
    exclude: path.resolve('./node_modules'),
    use: {
      loader: 'babel-loader',
      options: babelOptions,
    },
  });

  config.module.rules.push(
    {
      test: /\.module.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]--[hash:base64:5]',
            },
            importLoaders: 1,
          },
        },
        'sass-loader',
      ],
    },
  );
  config.module.rules.push(
    {
      test: /^((?!\.module).)*\.(scss)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
  );

  return config;
};
