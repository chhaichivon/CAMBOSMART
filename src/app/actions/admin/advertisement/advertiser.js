export const INSERT_ADVERTISER = 'INSERT_ADVERTISER';
export const INSERT_ADVERTISER_SUCCESS = 'INSERT_ADVERTISER_SUCCESS';
export const INSERT_ADVERTISER_FAIL = 'INSERT_ADVERTISER_FAIL';

export const UPDATE_ADVERTISER = 'UPDATE_ADVERTISER';
export const UPDATE_ADVERTISER_SUCCESS = 'UPDATE_ADVERTISER_SUCCESS';
export const UPDATE_ADVERTISER_FAIL = 'UPDATE_ADVERTISER_FAIL';

export const BLOCK_ADVERTISER = 'BLOCK_ADVERTISER';
export const BLOCK_ADVERTISER_SUCCESS = 'BLOCK_ADVERTISER_SUCCESS';
export const BLOCK_ADVERTISER_FAIL = 'BLOCK_ADVERTISER_FAIL';


export const RENEW_ADVERTISER = 'RENEW_ADVERTISER';
export const RENEW_ADVERTISER_SUCCESS = 'RENEW_ADVERTISER_SUCCESS';
export const RENEW_ADVERTISER_FAIL = 'RENEW_ADVERTISER_FAIL';

export const FETCH_ADVERTISER = 'FETCH_ADVERTISER';
export const FETCH_ADVERTISER_SUCCESS = 'FETCH_ADVERTISER_SUCCESS';
export const FETCH_ADVERTISER_FAIL = 'FETCH_ADVERTISER_FAIL';

export const FETCH_ADVERTISERS = 'FETCH_ADVERTISERS';
export const FETCH_ADVERTISERS_SUCCESS = 'FETCH_ADVERTISERS_SUCCESS';
export const FETCH_ADVERTISERS_FAIL = 'FETCH_ADVERTISERS_FAIL';

export function insertAdvertiserAction(advertiser) {
    return{
        type: INSERT_ADVERTISER,
        advertiser: advertiser
    }
}

export function updateAdvertiserAction(advertiser) {
    return{
        type: UPDATE_ADVERTISER,
        advertiser: advertiser
    }
}

export function blockAdvertiserAction(advertiser) {
    return{
        type: BLOCK_ADVERTISER,
        advertiser: advertiser
    }
}

export function renewAdvertiserAction(advertiser) {
    return{
        type: RENEW_ADVERTISER,
        advertiser: advertiser
    }
}

export function fetchAdvertiserAction(advertiser) {
    return{
        type: FETCH_ADVERTISER,
        advertiser: advertiser
    }
}

export function fetchAdvertisersAction(advertiser) {
    return{
        type: FETCH_ADVERTISERS,
        advertiser: advertiser
    }
}