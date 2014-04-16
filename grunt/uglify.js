module.exports = {
  options: {
    banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
  },
  dist: {
    src: '<%= concat.dist.dest %>',
    dest: 'dist/<%= pkg.name %>.min.js'
  }
};
