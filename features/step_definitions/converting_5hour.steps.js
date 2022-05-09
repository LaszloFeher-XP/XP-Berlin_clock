const { Given, When, Then, And, But, Fusion } = require('jest-cucumber-fusion')
const berlinClock = require('../../src/berlin-clock')
let result;
let timestamp;

test('Converting 5-hour', () => {
  Given(/^Given the timestamp (.*)$/, timestamp => {
    this.timestamp = timestamp;
  });

  When('converting it to Berlin time', () => {
    this.result = berlinClock(this.timestamp);
  });

  Then(/^I sell the (.*)$/, fiveHourLights => {
    expect(this.result).toStrictEqual(fiveHourLights);
  });

  Fusion('../converting_5hour.feature')
});
