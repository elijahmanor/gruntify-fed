module.exports = {
  gruntfile: {
    files: '<%= jshint.gruntfile.files.src %>',
    tasks: ['jshint:gruntfile']
  },
  test: {
    files: '<%= jshint.source.files.src %>',
    tasks: ['jshint:source', 'jasmine']
  }
};
