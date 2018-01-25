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
      concurrency: Infinity
    })
}
  