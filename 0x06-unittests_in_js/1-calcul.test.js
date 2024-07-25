#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when type is SUM and inputs are 1 and 3', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });

  it('should return -4 when type is SUBTRACT and inputs are 1.4 and 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return 0.2 when type is DIVIDE and inputs are 1.4 and 4.5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return Error when type is DIVIDE and inputs are 1.5 and 0', () => {
    assert.equal(calculateNumber('DIVIDE', 1.5, 0), 'Error');
  });
});
