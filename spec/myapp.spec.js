/*globals myapp:true */

describe('myapp', function() {
  'use strict';

  beforeEach(function() {
  });

  describe('library', function() {
    it('should exists', function() {
      expect(myapp).toBeDefined();
    });
  });

  describe('greet', function() {
    var name = 'CoderFaire';

    it('should be return a personal greeting', function() {
      var greeting = myapp.greet(name);

      expect(greeting).toEqual('Hello ' + name);
    });
  });
});
