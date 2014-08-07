module.exports = {
  options : {
    jshintrc : '.jshintrc'
  },
  gruntfile: {
    files: {
      src: ['Gruntfile.js']
    }
  },
  source: {
    files: {
      src: ['src/**/*.js', 'test/**/*.js']
    }
  }
};
