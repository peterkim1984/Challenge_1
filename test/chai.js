var chai  = require('chai'),
  assert  = chai.assert,
  expect  = chai.expect,
  should  = chai.should();

var functions = require('../challenge_1.js');

describe ('Challenge 1', function() {
  var result;

  it("Should add up to 23 when 10 is used", function() {
      result = functions.sumOfAMultiple(10);
      expect(result).to.equal(23);
    });

  it("Should add up to 33 when 11 is used", function() {
      result = functions.sumOfAMultiple(11);
      expect(result).to.equal(33);
    });

    
})