#!/usr/bin/node

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
	let consoleSpy;
	let stub

	beforeEach(() => {
		stub = sinon.stub(Utils, 'calculateNumber').returns(10);
		consoleSpy = sinon.spy(console, 'log');
	});

	afterEach(() => {
		stub.restore();
		consoleSpy.restore();
	});
	it('should call Utils.calculateNumber once with SUM, 100, 20', () => {
		sendPaymentRequestToApi(100, 20);

		expect(stub.calledOnce).to.be.true;
		expect(stub.calledWith('SUM', 100, 20)).to.be.true;
		expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
	});
});
