const request = require('request');
const { expect } = require('chai');
const app = require('./api');
const sinon = require('sinon');

describe('Index Page', () => {
	let spy = sinon.spy(console, 'log');

  it('should return status code 200', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
			expect(response.statusCode).to.equal(200);
			done();
		});
  });

  it('should return the correct message', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
		});
  });

	it('should print API available on localhost port 7865 on start of server', (done) => {
		expect(spy.calledWith('API available on localhost port 7865')).to.be.true;
		spy.restore();
		done();
	});
});
