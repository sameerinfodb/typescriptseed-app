const { join } = require('path');
const { constants } = require('karma');

var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['test/**/*.ts'],
    plugins: [
      'karma-jasmine',
      'karma-sourcemap-writer',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-remap-istanbul',
      'karma-spec-reporter',
      'karma-chrome-launcher'
    ],
    exclude: [],
    preprocessors: {
      'test/**/*.ts': ['webpack']
    },
    webpack: {
      mode: webpackConfig.mode,
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: constants.LOG_DISABLE,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  });
};
