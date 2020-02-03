const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  const options = {
    webpackOptions: require('../webpack.config')
  };

  on('file:preprocessor', webpackPreprocessor(options));

  return config;
};
