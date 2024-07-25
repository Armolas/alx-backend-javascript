#!/usr/bin/node

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
	let consoleSpy;

	beforeEach(() => {
		consoleSpy = sinon.spy(console, 'log');
	});

	afterEach(() => {
		consoleSpy.restore();
	});
	it('should call Utils.calculateNumber once with SUM, 100, 20', () => {
		sendPaymentRequestToApi(100, 20);

		expect(consoleSpy.calledOnce).to.be.true;
		expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
	});
        it('should call Utils.calculateNumber once with SUM, 10, 10', () => {
                sendPaymentRequestToApi(10, 10);

                expect(consoleSpy.calledOnce).to.be.true;
                expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
        });
});
