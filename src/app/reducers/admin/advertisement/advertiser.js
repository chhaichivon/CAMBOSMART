import * as actionType from './../../../actions/admin/advertisement/advertiser';

export function insertAdvertiserReducer(state = {}, action){
    switch (action.type){
        case actionType.INSERT_ADVERTISER_SUCCESS:
            return action.response.data;
        case actionType.INSERT_ADVERTISER_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function updateAdvertiserReducer(state = {}, action){
    switch (action.type){
        case actionType.UPDATE_ADVERTISER_SUCCESS:
            return action.response.data;
        case actionType.UPDATE_ADVERTISER_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function blockAdvertiserReducer(state = {}, action){
    switch (action.type){
        case actionType.BLOCK_ADVERTISER_SUCCESS:
            return action.response.data;
        case actionType.BLOCK_ADVERTISER_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function renewAdvertiserReducer(state = {}, action){
    switch (action.type){
        case actionType.RENEW_ADVERTISER_SUCCESS:
            return action.response.data;
        case actionType.RENEW_ADVERTISER_FAIL:
            return action.response;
        default:
            return state;
    }
}


export function fetchAdvertiserReducer(state = {}, action){
    switch (action.type){
        case actionType.FETCH_ADVERTISER_SUCCESS:
            return action.response.data;
        case actionType.FETCH_ADVERTISER_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchAdvertisersReducer(state = [{}], action){
    switch (action.type){
        case actionType.FETCH_ADVERTISERS_SUCCESS:
            return action.response.data;
        case actionType.FETCH_ADVERTISERS_FAIL:
            return action.response;
        default:
            return state;
    }
}
