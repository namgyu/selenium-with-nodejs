var webdriverConfig = {
  hostname: '192.168.0.6',
  port: 4444,
  remoteHost: true
};

module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['mocha', 'chai'],
      files: [
        '../chai/chai.conf.js',
        '../../src/js/*.js',
        '../../test/unit/*.spec.js'
      ],
      exclude: [],
      preprocessors: {
        '../../src/**/*.js': ['babel'],
        '../../test/unit/*.spec.js': ['babel']
      },
      babelPreprocessor: {
        options: {
          presets: ['env'],
          sourceMap: 'inline'
        },
        filename: function (file) {
          return file.originalPath.replace(/\.js$/, '.es5.js');
        },
        sourceFileName: function (file) {
          return file.originalPath;
        }
      },
      reporters: ['progress', 'mocha'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      // autoWatch: true,
      // browsers: ['Chrome'],
      customLaunchers: {
        chrome: {
            base: 'WebDriver',
            config: webdriverConfig,
            browserName: 'chrome'
        },
        // firefox: {
        //     base: 'WebDriver',
        //     config: webdriverConfig,
        //     browserName: 'firefox'
        // }
      },
      browsers: [
          'chrome',
          // 'firefox'
      ],
      // plugins: [
      //   'karma-babel-preprocessor',
      //   'karma-chai',
      //   'karma-mocha',
      //   'karma-webdriver-launcher',
      //   'karma-mocha-reporter'
      // ],
      singleRun: false,
      concurrency: Infinity
    })
}
  