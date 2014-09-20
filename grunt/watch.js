module.exports = {
  test: {
    files: '<%= jshint.source.files.src %>',
    tasks: ['lint', 'jasmine']
  }
};
