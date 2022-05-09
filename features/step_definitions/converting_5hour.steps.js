const { Given, When, Then, And, But, Fusion } = require('jest-cucumber-fusion')
const { BerlinClock } = require('../../src/berlin-clock')
let berlinClock;
let result;
let timestamp;

Before(() => { berlinClock = new BerlinClock() })

Given(/^Given the timestamp (.*)$/, timestamp => {
    timestamp = timestamp;
});

When('converting it to Berlin time', () => {
    result = berlinClock(timestamp);
});

Then(/^I sell the (.*)$/, fiveHourLights => {
    expect(result).toStrictEqual(fiveHourLights);
});

Fusion('../converting_5hour.feature')