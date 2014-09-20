module.exports = {
  test: {
    files: '<%= jshint.source.files.src %>',
    tasks: ['lint', 'jasmine']
  },
  sass: {
    files: 'src/scss/**/*.scss',
    tasks: ['scsslint', 'sass']
  }
};
