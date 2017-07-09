export const INSERT_CATEGORY_ADVERTISEMENT = 'INSERT_CATEGORY_ADVERTISEMENT';
export const INSERT_CATEGORY_ADVERTISEMENT_SUCCESS = 'INSERT_CATEGORY_ADVERTISEMENT_SUCCESS';
export const INSERT_CATEGORY_ADVERTISEMENT_FAIL = 'INSERT_CATEGORY_ADVERTISEMENT_FAIL';

export const UPDATE_CATEGORY_ADVERTISEMENT = 'UPDATE_CATEGORY_ADVERTISEMENT';
export const UPDATE_CATEGORY_ADVERTISEMENT_SUCCESS = 'UPDATE_CATEGORY_ADVERTISEMENT_SUCCESS';
export const UPDATE_CATEGORY_ADVERTISEMENT_FAIL = 'UPDATE_CATEGORY_ADVERTISEMENT_FAIL';

export const DELETE_CATEGORY_ADVERTISEMENT = 'DELETE_CATEGORY_ADVERTISEMENT';
export const DELETE_CATEGORY_ADVERTISEMENT_SUCCESS = 'DELETE_CATEGORY_ADVERTISEMENT_SUCCESS';
export const DELETE_CATEGORY_ADVERTISEMENT_FAIL = 'DELETE_CATEGORY_ADVERTISEMENT_FAIL';

export const FETCH_CATEGORY_ADVERTISEMENT = 'FETCH_CATEGORY_ADVERTISEMENT';
export const FETCH_CATEGORY_ADVERTISEMENT_SUCCESS = 'FETCH_CATEGORY_ADVERTISEMENT_SUCCESS';
export const FETCH_CATEGORY_ADVERTISEMENT_FAIL = 'FETCH_CATEGORY_ADVERTISEMENT_FAIL';

export const FETCH_CATEGORY_ADVERTISEMENTS = 'FETCH_CATEGORY_ADVERTISEMENTS';
export const FETCH_CATEGORY_ADVERTISEMENTS_SUCCESS = 'FETCH_CATEGORY_ADVERTISEMENTS_SUCCESS';
export const FETCH_CATEGORY_ADVERTISEMENTS_FAIL = 'FETCH_CATEGORY_ADVERTISEMENTS_FAIL';

export const FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS = 'FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS';
export const FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS_SUCCESS = 'FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS_SUCCESS';
export const FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS_FAIL = 'FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS_FAIL';

export const FETCH_CATEGORY_ADVERTISERS = 'FETCH_CATEGORY_ADVERTISERS';
export const FETCH_CATEGORY_ADVERTISERS_SUCCESS = 'FETCH_CATEGORY_ADVERTISERS_SUCCESS';
export const FETCH_CATEGORY_ADVERTISERS_FAIL = 'FETCH_CATEGORY_ADVERTISERS_FAIL';

export const FETCH_CATEGORY_ADVERTISER = 'FETCH_CATEGORY_ADVERTISER';
export const FETCH_CATEGORY_ADVERTISER_SUCCESS = 'FETCH_CATEGORY_ADVERTISER_SUCCESS';
export const FETCH_CATEGORY_ADVERTISER_FAIL = 'FETCH_CATEGORY_ADVERTISER_FAIL';

export const DISPLAY_CATEGORY_ADVERTISEMENTS = "DISPLAY_CATEGORY_ADVERTISEMENTS";
export const DISPLAY_CATEGORY_ADVERTISEMENTS_SUCCESS ="DISPLAY_CATEGORY_ADVERTISEMENTS_SUCCESS";
export const DISPLAY_CATEGORY_ADVERTISEMENTS_FAIL ="DISPLAY_CATEGORY_ADVERTISEMENTS_FAIL";

/**-----------------------Advertiser--------------------**/

export const INSERT_CATEGORY_ADVERTISER = 'INSERT_CATEGORY_ADVERTISER';
export const INSERT_CATEGORY_ADVERTISER_SUCCESS = 'INSERT_CATEGORY_ADVERTISER_SUCCESS';
export const INSERT_CATEGORY_ADVERTISER_FAIL = 'INSERT_CATEGORY_ADVERTISER_FAIL';

export function insertCategoryAdvertisementAction(advertisement) {
    return{
        type: INSERT_CATEGORY_ADVERTISEMENT,
        advertisement: advertisement
    }
}

export function updateCategoryAdvertisementAction(advertisement) {
    return{
        type: UPDATE_CATEGORY_ADVERTISEMENT,
        advertisement: advertisement
    }
}

export function deleteCategoryAdvertisementAction(advertisement) {
    return{
        type: DELETE_CATEGORY_ADVERTISEMENT,
        advertisement: advertisement
    }
}

export function fetchCategoryAdvertisementsAction(token) {
    return{
        type: FETCH_CATEGORY_ADVERTISEMENTS,
        token: token
    }
}

export function fetchCategoryAdvertisementAction(advertisement) {
    return{
        type: FETCH_CATEGORY_ADVERTISEMENT,
        advertisement: advertisement
    }
}

export function fetchScheduleCategoryAdvertisementsAction(advertisement) {
    return{
        type: FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS,
        advertisement: advertisement
    }
}

export function fetchCategoryAdvertisersAction(advertiser) {
    return{
        type: FETCH_CATEGORY_ADVERTISERS,
        advertiser: advertiser
    }
}

export function fetchCategoryAdvertiserAction(advertiser) {
    return{
        type: FETCH_CATEGORY_ADVERTISER,
        advertiser: advertiser
    }
}

export function displayCategoryAdvertisementsAction() {
    return{
        type: DISPLAY_CATEGORY_ADVERTISEMENTS
    }
}

/**-----------------------Advertiser--------------------**/

export function insertCategoryAdvertiserAction(advertiser) {
    return{
        type: INSERT_CATEGORY_ADVERTISER,
        advertiser: advertiser
    }
}

