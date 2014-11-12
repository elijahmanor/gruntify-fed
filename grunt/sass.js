module.exports = {
  dev: {
    options: {
      style: 'nested'
    },
    files: {
      'dist/css/myapp.css': 'src/scss/myapp.scss'
    }
  },
  prod: {
    options: {
      style: 'compressed'
    },
    files: {
      'dist/css/myapp.min.css': 'src/scss/myapp.scss'
    }
  }
};
