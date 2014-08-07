module.exports = {
  gruntfile: {
    files: '<%= jshint.gruntfile.files.src %>',
    tasks: ['jshint:gruntfile']
  },
  source: {
    files: '<%= jshint.source.files.src %>',
    tasks: ['jshint:source', 'nodeunit']
  }
};
