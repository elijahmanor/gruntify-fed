module.exports = {
  gruntfile: {
    files: '<%= jshint.gruntfile.files.src %>',
    tasks: ['jshint:gruntfile']
  },
  lib_test: {
    files: '<%= jshint.lib_test.files.src %>',
    tasks: ['jshint:lib_test', 'nodeunit']
  }
};
