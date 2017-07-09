import * as actionType from './../../../actions/admin/advertisement/advertisement';

export function validateAdvertisementReducer(state = [{}], action){
    switch (action.type){
        case actionType.VALIDATE_ADVERTISEMENT_SUCCESS:
            return action.response.data;
        case actionType.VALIDATE_ADVERTISEMENT_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function insertAdvertisementReducer(state = {}, action){
    switch (action.type){
        case actionType.INSERT_ADVERTISEMENT_SUCCESS:
            return action.response.data;
        case actionType.INSERT_ADVERTISEMENT_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function updateAdvertisementReducer(state = {}, action){
    switch (action.type){
        case actionType.UPDATE_ADVERTISEMENT_SUCCESS:
            return action.response.data;
        case actionType.UPDATE_ADVERTISEMENT_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function deleteAdvertisementReducer(state = {}, action){
    switch (action.type){
        case actionType.DELETE_ADVERTISEMENT_SUCCESS:
            return action.response.data;
        case actionType.DELETE_ADVERTISEMENT_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchAdvertisementsReducer(state = [{}], action){
    switch (action.type){
        case actionType.FETCH_ADVERTISEMENTS_SUCCESS:
            return action.response.data;
        case actionType.FETCH_ADVERTISEMENTS_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchAdvertisementReducer(state = {}, action){
    switch (action.type){
        case actionType.FETCH_ADVERTISEMENT_SUCCESS:
            return action.response.data;
        case actionType.FETCH_ADVERTISEMENT_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function scheduleAdvertisementReducer(state = [{}], action){
    switch (action.type){
        case actionType.SCHEDULE_ADVERTISEMENT_SUCCESS:
            return action.response.data;
        case actionType.SCHEDULE_ADVERTISEMENT_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function displayAdvertisementsReducer(state = [{}], action) {
    switch (action.type){
        case actionType.DISPLAY_ADVERTISEMENTS_SUCCESS:
            return action.response.data;
        case actionType.DISPLAY_ADVERTISEMENTS_FAIL:
            return action.response;
        default:
            return state;
    }
}