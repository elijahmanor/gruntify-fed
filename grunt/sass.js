module.exports = {
  options: {
    sourceMap: true,
  },
  dev: {
    options: {
      outputStyle: 'nested'
    },
    files: {
      'dist/css/myapp.css': 'src/scss/myapp.scss'
    }
  },
  prod: {
    options: {
      outputStyle: 'compressed'
    },
    files: {
      'dist/css/myapp.min.css': 'src/scss/myapp.scss'
    }
  }
};
