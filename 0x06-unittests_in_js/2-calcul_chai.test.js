#!/usr/bin/node
const chai = require('chai');
const calculateNumber = require('./1-calcul.js');
const { expect } = chai
describe('calculateNumber', () => {
  it('should return 4 when type is SUM and inputs are 1 and 3', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it('should return -4 when type is SUBTRACT and inputs are 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.2 when type is DIVIDE and inputs are 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return Error when type is DIVIDE and inputs are 1.5 and 0', () => {
    expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
  });
});
