function berlinClock(timestamp) {
    return berlinClockFiveHour(timestamp);
}

function berlinClockFiveHour(timestamp) {
    if (parseInt(timestamp.substring(0, 2)) < 5) {
        return '⚫⚫⚫⚫';
    }
    return '🔴⚫⚫⚫';
}

module.exports = {
    berlinClockFiveHour,
    berlinClock
};