import moment from 'moment';

const addZero = (value) => {
    if (value.length < 2) {
        return '0' + value
    }
    return value
};

export const renderRemainingTime = (targetTime) => {
    let time = targetTime - moment();
    let days = parseInt((time / 86400000)).toString();
    let hours = parseInt((time % 86400000) / 3600000).toString();
    let minutes = parseInt(((time % 86400000) % 3600000) / 60000).toString();
    let seconds = parseInt((((time % 86400000) % 3600000) % 60000) / 1000).toString();
    return addZero(days) + ' days ' + addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
};