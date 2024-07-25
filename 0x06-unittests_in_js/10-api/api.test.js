const request = require('request');
const { expect } = require('chai');

describe('index Page', () => {
  it('should return status code 200', () => new Promise((done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return the correct message', () => new Promise((done) => {
    request.post('http://localhost:7865/login', { json: { username: 'Armolas' } }, (error, response, body) => {
      expect(body).to.equal('Welcome Armolas');
      done();
    });
  }));
});
