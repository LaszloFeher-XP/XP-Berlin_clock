const berlinClock = require('../src/berlin-clock');

describe('Converting 5-hour', () => {
    test('GIVEN the timestamp is 00:00:00 WHEN coverting to Berlin time THEN the 5-hour row shows ⚫⚫⚫⚫', () => {
        expect(berlinClockFiveHour('00:00:00')).toStrictEqual('OOOO');
    });
});




