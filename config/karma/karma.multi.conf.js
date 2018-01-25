var webdriverConfig = {
  hostname: '192.168.0.6',
  port: 4444,
  remoteHost: true
};

module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['browserify', 'mocha', 'chai'],
      browserify: {
        debug: true,
        transform: [
          ['babelify', {plugins: ['babel-plugin-espower']}]
        ]
      },
      files: [
        '../chai/chai.conf.js',
        '../../test/unit/*.spec.js'
      ],
      exclude: [],
      preprocessors: {      
        '../../test/unit/*.spec.js': 'browserify'
      },
      reporters: ['progress', 'mocha'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity,
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
      ]
    })
}
  