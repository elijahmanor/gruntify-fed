module.exports = {
  tree: {
    command: 'tree -I "node_modules|bower_components|bin"'
  },
  greet: {
    command: function (message) {
      return 'cowsay ' + message;
    }
  },
  say: {
    command: function (message) {
      return 'say ' + message;
    }
  },
};
