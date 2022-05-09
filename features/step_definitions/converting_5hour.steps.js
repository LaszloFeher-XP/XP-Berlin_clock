const { Given, When, Then, And, But, Fusion } = require('jest-cucumber-fusion')
const { berlinClock } = require('../../src/berlin-clock')
let result;
let timestamp;

Given(/^the timestamp (.*)$/, (inputTimestamp) => {
    timestamp = inputTimestamp;
});

When('converting it to Berlin time', () => {
    result = berlinClock(timestamp);
});

Then(/^the 5-hour row shows (.*)$/, (fiveHourLights) => {
    expect(result).toStrictEqual(fiveHourLights);
});

Fusion('../converting_5hour.feature')