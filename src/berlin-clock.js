function berlinClock(timestamp) {
    return berlinClockFiveHour(timestamp);
}

function berlinClockFiveHour(timestamp) {
    if (timestamp.substring(0, 2) == '00') {
        return '⚫⚫⚫⚫';
    }
    return '🔴⚫⚫⚫';
}

module.exports = {
    berlinClockFiveHour,
    berlinClock
};