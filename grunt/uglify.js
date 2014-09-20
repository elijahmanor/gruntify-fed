module.exports = {
  options: {
    banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
  },
  dist: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/<%= pkg.name %>.min.js'
  }
};
