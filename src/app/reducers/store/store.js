import * as actionType from './../../actions/store/store';

export function fetchStoreReducer(state = {}, action) {
    switch (action.type) {
        case actionType.FETCH_STORE_SUCCESS:
            return action.response.data;
        case actionType.FETCH_STORE_FAIL:
            return state;
        default:
            return state;
    }
}


export function updateStoreMapReducer(state = {}, action) {
    switch (action.type) {
        case actionType.UPDATE_STORE_MAP_SUCCESS:
            return action.response.data;
        case actionType.UPDATE_STORE_MAP_FAIL:
            return state;
        default:
            return state;
    }
}


export function updateStoreReducer(state = {}, action) {
    switch (action.type) {
        case actionType.UPDATE_STORE_SUCCESS:
            return action.response.data;
        case actionType.UPDATE_STORE_FAIL:
            return state;
        default:
            return state;
    }
}

export function getUserWithStoreReducer(state = [{}], action) {
    switch (action.type) {
        case actionType.USER_WITH_STORE_SUCCESS :
            return action.response.data;
        case actionType.USER_WITH_STORE_FAIL:
            return state;
        default:
            return state;
    }
}