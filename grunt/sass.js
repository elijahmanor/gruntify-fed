module.exports = {
  options: {
    sourceMap: true,
    // includePaths: ['src/scss']
  },
  dist: {
    files: {
      'dist/css/myapp.css': 'src/scss/myapp.scss'
    }
  }
};
