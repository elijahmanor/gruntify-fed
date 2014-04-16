module.exports = {
  minify: {
    expand: true,
    src: ['src/*.css', '!*.min.css'],
    dest: 'dist/',
    ext: '.min.css'
  }
};
