#!/usr/bin/node

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
	let spy;

	beforeEach(() => {
		spy = sinon.spy(Utils, 'calculateNumber');
	});

	afterEach(() => {
		spy.restore();
	});
	it('should call Utils.calculateNumber once with SUM, 100, 20', () => {
		sendPaymentRequestToApi(100, 20);

		expect(spy.calledOnce).to.be.true;
		expect(spy.calledWith('SUM', 100, 20)).to.be.true;
	});
});
