import * as actionType from './../../actions/member/common';

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export function updateMemberInfoReducer(state = {}, action) {
    switch (action.type) {
        case actionType.UPDATE_MEMBER_INFO_SUCCESS :
            return action.response.data;
        case actionType.UPDATE_MEMBER_INFO_FAIL:
            return state;
        default:
            return state;
    }
}

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export function updateMemberReducer(state = {}, action) {
    switch (action.type) {
        case actionType.UPDATE_MEMBER_INFO_SUCCESS :
            return action.response.data;
        case actionType.UPDATE_MEMBER_INFO_FAIL:
            return state;
        default:
            return state;
    }
}

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export function changeMemberPasswordReducer(state = {}, action) {
    switch (action.type) {
        case actionType.CHANGE_MEMBER_PASSWORD_SUCCESS :
            return action.response.data;
        case actionType.CHANGE_MEMBER_PASSWORD_FAIL:
            return state;
        default:
            return state;
    }
}

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export function insertProductReducer(state={}, action){
    switch (action.type) {
        case actionType.INSERT_PRODUCT_SUCCESS:
            return action.response.data;
        case actionType.INSERT_PRODUCT_FAIL:
            return state;
        default:
            return state;
    }
}

export function removeProductImageReducer(state={}, action){
    switch (action.type) {
        case actionType.REMOVE_PRODUCT_IMAGE_SUCCESS:
            return action.response.data;
        case actionType.REMOVE_PRODUCT_IMAGE_FAIL:
            return state;
        default:
            return state;
    }
}

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export function fetchProductReducer(state=[{}], action){
    switch (action.type) {
        case actionType.FETCH_PRODUCTS_SUCCESS:
            return action.response.data;
        case actionType.FETCH_PRODUCTS_FAIL:
            return state;
        default:
            return state;
    }
}

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export function updateProductStatusReducer(state={}, action){
    switch (action.type) {
        case actionType.UPDATE_PRODUCT_STATUS_SUCCESS:
            return action.response.data;
        case actionType.UPDATE_PRODUCT_STATUS_FAIL:
            return state;
        default:
            return state;
    }
}

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export function renewProductReducer(state={}, action){
    switch (action.type) {
        case actionType.RENEW_PRODUCT_SUCCESS :
            return action.response.data;
        case actionType.RENEW_PRODUCT_FAIL:
            return state;
        default:
            return state;
    }
}

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export function fetchProductByIdReducer(state={}, action){
    switch (action.type) {
        case actionType.FETCH_PRODUCT_SUCCESS :
            return action.response.data;
        case actionType.FETCH_PRODUCT_FAIL:
            return state;
        default:
            return state;
    }
}

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export function updateProductByIdReducer(state={}, action){
    switch (action.type) {
        case actionType.UPDATE_PRODUCT_SUCCESS :
            return action.response.data;
        case actionType.UPDATE_PRODUCT_FAIL:
            return state;
        default:
            return state;
    }
}

/* MEMBER LIST PROMOTED PRODUCTS */
export function memberListPromotedProductReducer(state = {}, action) {
    switch (action.type) {
        case actionType.MEMBER_LIST_PROMOTED_PRODUCTS_SUCCESS :
            return action.response.data;
        case actionType.MEMBER_LIST_PROMOTED_PRODUCTS_FAIL:
            return state;
        default:
            return state;
    }
}

/* MEMBER GET PROMOTED PRODUCTS */
export function memberGetPromotedProductReducer(state = {}, action) {
    switch (action.type) {
        case actionType.MEMBER_GET_PROMOTED_PRODUCT_BY_ID_SUCCESS :
            return action.response.data;
        case actionType.MEMBER_GET_PROMOTED_PRODUCT_BY_ID_FAIL:
            return state;
        default:
            return state;
    }
}

/* MEMBER LIST ALL PROMOTED PRODUCTS */
export function memberListALlPromotedProductReducer(state = {}, action) {
    switch (action.type) {
        case actionType.MEMBER_LIST_ALL_PROMOTED_PACKAGES_SUCCESS :
            return action.response.data;
        case actionType.MEMBER_LIST_ALL_PROMOTED_PACKAGES_FAIL:
            return state;
        default:
            return state;
    }
}

/* MEMBER PROMOTED PRODUCTS */
export function memberPromotedProductsReducer(state = {}, action) {
    switch (action.type) {
        case actionType.MEMBER_PROMOTE_PRODUCTS_SUCCESS :
            return action.response.data;
        case actionType.MEMBER_PROMOTE_PRODUCTS_FAIL:
            return state;
        default:
            return state;
    }
}

/* MEMBER ASK TO PROMOTED THEMSELF TO BE MERCHANT */
export function memberRequestPromotedReducer(state = {}, action) {
    switch (action.type) {
        case actionType.MEMBER_REQUEST_TOBE_MERCHANT_SUCCESS :
            return action.response.data;
        case actionType.MEMBER_REQUEST_TOBE_MERCHANT_FAIL:
            return state;
        default:
            return state;
    }
}


