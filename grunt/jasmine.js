module.exports = {
  // src : 'src/**/*.js',
  // options : {
  //   specs : 'spec/**/*.js'
  // },
  coverage: {
    src: ['src/**/*.js'],
    options: {
      specs: ['spec/**/**.js'],
      template: require('grunt-template-jasmine-istanbul'),
      templateOptions: {
        coverage: 'bin/coverage/coverage.json',
        report: 'bin/coverage',
        thresholds: {
          lines: 75,
          statements: 75,
          branches: 75,
          functions: 90
        }
      }
    }
  }
};
