module.exports = {
  'one equals one': function(test) {
    test.expect(1);
    test.ok(1 === 1);
    test.done();
  },
  'false equals false': function(test) {
    test.expect(1);
    test.equal(false, false);
    test.done();
  }
};
