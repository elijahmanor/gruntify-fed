module.exports = {
  options : {
    jshintrc : '.jshintrc'
  },
  gruntfile: {
    files: {
      src: ['Gruntfile.js']
    }
  },
  lib_test: {
    files: {
      src: ['src/**/*.js', 'test/**/*.js']
    }
  }
};
