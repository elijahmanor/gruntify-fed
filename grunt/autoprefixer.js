module.exports = {
  options: {
    browsers: ['> 1%', 'last 2 versions', 'ie > 9']
  },
  build: {
    expand: true,
    flatten: true,
    src: 'dist/css/*.css',
    dest: 'dist/css/'
  }
};
