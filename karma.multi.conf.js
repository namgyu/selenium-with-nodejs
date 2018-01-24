var webdriverConfig = {
  hostname: '192.168.0.7',
  port: 4444,
  remoteHost: true
};

module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['mocha', 'chai'],
      files: [
        'chai.conf.js',
        'src/js/*.js',
        'test/*.js'
      ],
      exclude: [],
      preprocessors: {
        'src/**/*.js': ['babel'],
        'test/**/*.js': ['babel']
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
        'chrome': {
            base: 'WebDriver',
            config: webdriverConfig,
            browserName: 'chrome'
        },
        'firefox': {
            base: 'WebDriver',
            config: webdriverConfig,
            browserName: 'firefox'
        }
    },
    browsers: [
        'chrome',
        'firefox'
    ],
      singleRun: false,
      concurrency: Infinity
    })
  }
  