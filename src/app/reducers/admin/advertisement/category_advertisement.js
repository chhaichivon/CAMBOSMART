import * as actionType from './../../../actions/admin/advertisement/category_advertisement';

export function insertCategoryAdvertisementReducer(state = {}, action){
    switch (action.type){
        case actionType.INSERT_CATEGORY_ADVERTISEMENT_SUCCESS:
            return action.response.data;
        case actionType.INSERT_CATEGORY_ADVERTISEMENT_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function updateCategoryAdvertisementReducer(state = {}, action){
    switch (action.type){
        case actionType.UPDATE_CATEGORY_ADVERTISEMENT_SUCCESS:
            return action.response.data;
        case actionType.UPDATE_CATEGORY_ADVERTISEMENT_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function deleteCategoryAdvertisementReducer(state = {}, action){
    switch (action.type){
        case actionType.DELETE_CATEGORY_ADVERTISEMENT_SUCCESS:
            return action.response.data;
        case actionType.DELETE_CATEGORY_ADVERTISEMENT_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchCategoryAdvertisementReducer(state = {}, action){
    switch (action.type){
        case actionType.FETCH_CATEGORY_ADVERTISEMENT_SUCCESS:
            return action.response.data;
        case actionType.FETCH_CATEGORY_ADVERTISEMENT_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchCategoryAdvertisementsReducer(state = [{}], action){
    switch (action.type){
        case actionType.FETCH_CATEGORY_ADVERTISEMENTS_SUCCESS:
            return action.response.data;
        case actionType.FETCH_CATEGORY_ADVERTISEMENTS_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchScheduleCategoryAdvertisementReducer(state = [{}], action){
    switch (action.type){
        case actionType.FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS_SUCCESS:
            return action.response.data;
        case actionType.FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchCategoryAdvertisersReducer(state = [{}], action){
    switch (action.type){
        case actionType.FETCH_CATEGORY_ADVERTISERS_SUCCESS:
            return action.response.data;
        case actionType.FETCH_CATEGORY_ADVERTISERS_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchCategoryAdvertiserReducer(state = {}, action){
    switch (action.type){
        case actionType.FETCH_CATEGORY_ADVERTISER_SUCCESS:
            return action.response.data;
        case actionType.FETCH_CATEGORY_ADVERTISER_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function displayCategoryAdvertisementsReducer(state = [{}], action){
    switch (action.type){
        case actionType.DISPLAY_CATEGORY_ADVERTISEMENTS_SUCCESS:
            return action.response.data;
        case actionType.DISPLAY_CATEGORY_ADVERTISEMENTS_FAIL:
            return action.response;
        default:
            return state;
    }
}

/**------------------------advertiser-------------------------**/
export function insertCategoryAdvertiserReducer(state = {}, action){
    switch (action.type){
        case actionType.INSERT_CATEGORY_ADVERTISER_SUCCESS:
            return action.response.data;
        case actionType.INSERT_CATEGORY_ADVERTISER_FAIL:
            return action.response;
        default:
            return state;
    }
}