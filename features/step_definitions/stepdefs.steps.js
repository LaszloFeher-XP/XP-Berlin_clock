const { Given, When, Then, And, But, Fusion } = require('jest-cucumber-fusion')
const { Kata } = require('../../src/kata')
let kata;

Given('the logic', () => {
  kata = new Kata();
});

When('params', () => {
  this.response = kata.func();
});

Then('returns', () => {
  expect(this.response).toStrictEqual('');
});

Fusion('../test.feature')