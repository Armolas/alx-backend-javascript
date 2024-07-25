const request = require('request');
const { expect } = require('chai');

describe('index Page', () => {
  it('should return status code 200', () => new Promise((done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  }));

  it('should return the correct message', () => new Promise((done) => {
    request('http://localhost:7865/cart/twelve', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});
