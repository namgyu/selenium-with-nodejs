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
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity
    })
}
  