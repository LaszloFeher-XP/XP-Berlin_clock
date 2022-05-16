function berlinClock(timestamp) {
    return '';
}

function berlinClockFiveHour(timestamp) {
    if (timestamp == '00:00:00') {
        return 'OOOO';
    }
    return 'ROOO';
}

module.exports = {
    berlinClockFiveHour,
    berlinClock
};