export const VALIDATE_ADVERTISEMENT = 'VALIDATE_ADVERTISEMENT';
export const VALIDATE_ADVERTISEMENT_SUCCESS = 'VALIDATE_ADVERTISEMENT_SUCCESS';
export const VALIDATE_ADVERTISEMENT_FAIL = 'VALIDATE_ADVERTISEMENT_FAIL';

export const INSERT_ADVERTISEMENT = 'INSERT_ADVERTISEMENT';
export const INSERT_ADVERTISEMENT_SUCCESS = 'INSERT_ADVERTISEMENT_SUCCESS';
export const INSERT_ADVERTISEMENT_FAIL = 'INSERT_ADVERTISEMENT_FAIL';

export const UPDATE_ADVERTISEMENT = 'UPDATE_ADVERTISEMENT';
export const UPDATE_ADVERTISEMENT_SUCCESS = 'UPDATE_ADVERTISEMENT_SUCCESS';
export const UPDATE_ADVERTISEMENT_FAIL = 'UPDATE_ADVERTISEMENT_FAIL';

export const DELETE_ADVERTISEMENT = 'DELETE_ADVERTISEMENT';
export const DELETE_ADVERTISEMENT_SUCCESS = 'DELETE_ADVERTISEMENT_SUCCESS';
export const DELETE_ADVERTISEMENT_FAIL = 'DELETE_ADVERTISEMENT_FAIL';

export const FETCH_ADVERTISEMENTS = 'FETCH_ADVERTISEMENTS';
export const FETCH_ADVERTISEMENTS_SUCCESS = 'FETCH_ADVERTISEMENTS_SUCCESS';
export const FETCH_ADVERTISEMENTS_FAIL = 'FETCH_ADVERTISEMENTS_FAIL';

export const FETCH_ADVERTISEMENT = 'FETCH_ADVERTISEMENT';
export const FETCH_ADVERTISEMENT_SUCCESS = 'FETCH_ADVERTISEMENT_SUCCESS';
export const FETCH_ADVERTISEMENT_FAIL = 'FETCH_ADVERTISEMENT_FAIL';

export const SCHEDULE_ADVERTISEMENT = 'SCHEDULE_ADVERTISEMENT';
export const SCHEDULE_ADVERTISEMENT_SUCCESS = 'SCHEDULE_ADVERTISEMENT_SUCCESS';
export const SCHEDULE_ADVERTISEMENT_FAIL = 'SCHEDULE_ADVERTISEMENT_FAIL';

export const DISPLAY_ADVERTISEMENTS = "DISPLAY_ADVERTISEMENTS";
export const DISPLAY_ADVERTISEMENTS_SUCCESS ="DISPLAY_ADVERTISEMENTS_SUCCESS";
export const DISPLAY_ADVERTISEMENTS_FAIL ="DISPLAY_ADVERTISEMENTS_FAIL";

export function validateAdvertisementAction(advertisement) {
    return {
        type: VALIDATE_ADVERTISEMENT,
        advertisement: advertisement
    }
}

export function insertAdvertisementAction(advertisement) {
    return {
        type: INSERT_ADVERTISEMENT,
        advertisement: advertisement
    }
}

export function updateAdvertisementAction(advertisement) {
    return {
        type: UPDATE_ADVERTISEMENT,
        advertisement: advertisement
    }
}

export function deleteAdvertisementAction(advertisement) {
    return {
        type: DELETE_ADVERTISEMENT,
        advertisement: advertisement
    }
}

export function fetchAdvertisementsAction(advertisement) {
    return {
        type: FETCH_ADVERTISEMENTS,
        advertisement: advertisement
    }
}

export function fetchAdvertisementAction(advertisement) {
    return {
        type: FETCH_ADVERTISEMENT,
        advertisement: advertisement
    }
}

export function scheduleAdvertisementAction(advertisement) {
    return {
        type: SCHEDULE_ADVERTISEMENT,
        advertisement: advertisement
    }
}

export function displayAdvertisementsAction() {
    return {
        type: DISPLAY_ADVERTISEMENTS
    }
}
