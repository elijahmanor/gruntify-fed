(function(myapp) {
  'use strict';

  myapp.greet = function(name) {
    return 'Hello ' + name;
  };
}(window.myapp = window.myapp || {}));
