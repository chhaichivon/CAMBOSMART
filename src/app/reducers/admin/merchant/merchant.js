import {
    FILTER_MEMBERS_SUCCESS,
    FILTER_MEMBERS_FAIL,
    MERCHANT_DETAIL_SUCCESS,
    MERCHANT_DETAIL_FAIL,
    BLOCK_MERCHANT_SUCCESS,
    BLOCK_MERCHANT_FAIL,
    LIST_EXPIRED_MERCHANTS_SUCCESS,
    LIST_EXPIRED_MERCHANTS_FAIL,
    UPDATE_EXPIRED_MERCHANTS_SUCCESS,
    UPDATE_EXPIRED_MERCHANTS_FAIL,
    CHECK_MERCHANT_EXPIRED_SUCCESS,
    CHECK_MERCHANT_EXPIRED_FAIL,
    ADMIN_COUNT_MERCHANT_MEMBERS_SUCCESS,
    ADMIN_COUNT_MERCHANT_MEMBERS_FAIL
} from './../../../actions/admin/merchant/merchant';

export function fetchMerchantsReducer(state = [{}], action) {
    switch (action.type) {
        case FILTER_MEMBERS_SUCCESS:
            return action.response.data;
        case FILTER_MEMBERS_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchMerchantDetailReducer(state = {}, action){
    switch (action.type){
        case MERCHANT_DETAIL_SUCCESS:
            return action.response.data;
        case MERCHANT_DETAIL_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function blockMerchantDetailReducer(state = {}, action){
    switch (action.type){
        case BLOCK_MERCHANT_SUCCESS:
            return action.response.data;
        case BLOCK_MERCHANT_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN LISTS EXPIRED MERCHANTS */
export function listExpiredMerchantsReducer(state = {}, action){
    switch (action.type){
        case LIST_EXPIRED_MERCHANTS_SUCCESS:
            return action.response.data;
        case LIST_EXPIRED_MERCHANTS_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN UPDATE EXPIRED MERCHANTS */
export function updateExpiredMerchantsReducer(state = {}, action){
    switch (action.type){
        case UPDATE_EXPIRED_MERCHANTS_SUCCESS:
            return action.response.data;
        case UPDATE_EXPIRED_MERCHANTS_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* CHECK MERCHANT EXPIRED */
export function checkMerchantExpiredReducer(state = {}, action){
    switch (action.type){
        case CHECK_MERCHANT_EXPIRED_SUCCESS:
            return action.response.data;
        case CHECK_MERCHANT_EXPIRED_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN COUNT MERCHANT MEMBER */
export function adminCountMerchantMembersReducer(state = {}, action){
    switch (action.type){
        case ADMIN_COUNT_MERCHANT_MEMBERS_SUCCESS:
            return action.response.data;
        case ADMIN_COUNT_MERCHANT_MEMBERS_FAIL:
            return action.response;
        default:
            return state;
    }
}