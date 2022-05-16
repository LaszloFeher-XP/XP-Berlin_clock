const { berlinClockFiveHour } = require('../src/berlin-clock');

describe('Converting 5-hour', () => {
    test('GIVEN the timestamp is 00:00:00 WHEN coverting to Berlin time THEN the 5-hour row shows ⚫⚫⚫⚫', () => {
        expect(berlinClockFiveHour('00:00:00')).toStrictEqual('⚫⚫⚫⚫');
    });

    test('GIVEN the timestamp is 05:00:00 WHEN coverting to Berlin time THEN the 5-hour row shows 🔴⚫⚫⚫', () => {
        expect(berlinClockFiveHour('05:00:00')).toStrictEqual('🔴⚫⚫⚫');
    });

    test('GIVEN the timestamp is 00:04:03 WHEN coverting to Berlin time THEN the 5-hour row shows ⚫⚫⚫⚫', () => {
        expect(berlinClockFiveHour('00:04:03')).toStrictEqual('⚫⚫⚫⚫');
    });

    test('GIVEN the timestamp is 04:05:23 WHEN coverting to Berlin time THEN the 5-hour row shows ⚫⚫⚫⚫', () => {
        expect(berlinClockFiveHour('04:05:23')).toStrictEqual('⚫⚫⚫⚫');
    });
});




