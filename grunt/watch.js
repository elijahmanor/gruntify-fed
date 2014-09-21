module.exports = {
  test: {
    files: '<%= jshint.source.files.src %>',
    tasks: ['play:grunt', 'lint', 'jasmine']
  },
  sass: {
    files: 'src/scss/**/*.scss',
    tasks: ['play:grunt', 'scsslint', 'sass']
  }
};
