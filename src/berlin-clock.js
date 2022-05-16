function berlinClock(timestamp) {
    return berlinClockFiveHour(timestamp);
}

function berlinClockFiveHour(timestamp) {
    if (timestamp == '00:00:00') {
        return '⚫⚫⚫⚫';
    }
    return '🔴⚫⚫⚫';
}

module.exports = {
    berlinClockFiveHour,
    berlinClock
};