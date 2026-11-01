'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('./app');

test('adds two positive numbers', () => {
  assert.equal(add(2, 3), 6);
});

test('adds zero and a negative number', () => {
  assert.equal(add(0, -4), -4);
});

test('adds a negative and a positive number', () => {
  assert.equal(add(-7, 2), -5);
});
