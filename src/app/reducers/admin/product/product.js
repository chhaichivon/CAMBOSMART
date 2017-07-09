import {
    ADMIN_LIST_PRODUCTS_SUCCESS,
    ADMIN_LIST_PRODUCTS_FAIL,
    ADMIN_LIST_PRODUCTS_REPORT_SUCCESS,
    ADMIN_LIST_PRODUCTS_REPORT_FAIL,
    ADMIN_UPDATE_PRODUCT_STATUS_SUCCESS,
    ADMIN_UPDATE_PRODUCT_STATUS_FAIL,
    ADMIN_DELETE_PRODUCT_SUCCESS,
    ADMIN_DELETE_PRODUCT_FAIL,
    ADMIN_GET_PRODUCT_SUCCESS,
    ADMIN_GET_PRODUCT_FAIL,
    ADMIN_LIST_USERS_REQUEST_SUCCESS,
    ADMIN_LIST_USERS_REQUEST_FAIL,
    ADMIN_DELETE_USER_REQUEST_SUCCESS,
    ADMIN_DELETE_USER_REQUEST_FAIL,
    ADMIN_LIST_PROMOTE_PRODUCTS_BY_USER_SUCCESS,
    ADMIN_LIST_PROMOTE_PRODUCTS_BY_USER_FAIL,
    ADMIN_APPROVE_PROMOTE_PRODUCT_REQUEST_SUCCESS,
    ADMIN_APPROVE_PROMOTE_PRODUCT_REQUEST_FAIL,
    ADMIN_DELETE_PROMOTE_PRODUCT_SUCCESS,
    ADMIN_DELETE_PROMOTE_PRODUCT_FAIL,
    ADMIN_UPDATE_STATUS_PRODUCT_SUCCESS,
    ADMIN_UPDATE_STATUS_PRODUCT_FAIL,
    ADMIN_COUNT_TODAY_PRODUCTS_SUCCESS,
    ADMIN_COUNT_TODAY_PRODUCTS_FAIL,
    ADMIN_DELETE_REQUEST_PROMOTE_EXPIRED_SUCCESS,
    ADMIN_DELETE_REQUEST_PROMOTE_EXPIRED_FAIL
} from './../../../actions/admin/product/product';

/* ADMIN LIST PRODUCT */
export function adminListProductsReducer(state = {}, action){
    switch (action.type){
        case ADMIN_LIST_PRODUCTS_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_LIST_PRODUCTS_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}

/* ADMIN GET PRODUCT*/
export function adminGetProductReducer(state = {}, action){
    switch (action.type){
        case ADMIN_GET_PRODUCT_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_GET_PRODUCT_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}

/* ADMIN UPDATE PRODUCT STATUS */
export function adminUpdateProductStatusReducer(state = {}, action){
    switch (action.type){
        case ADMIN_UPDATE_PRODUCT_STATUS_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_UPDATE_PRODUCT_STATUS_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}

/* ADMIN UPDATE STATUS PRODUCT NASEAT */
export function adminUpdateStatusProductReducer(state = {}, action){
    switch (action.type){
        case ADMIN_UPDATE_STATUS_PRODUCT_SUCCESS :{
            return action.response.data;
        }
        case ADMIN_UPDATE_STATUS_PRODUCT_FAIL :{
            return action.response;
        }
        default:
            return state;
    }
}
/* ADMIN DELETE PRODUCT*/
export function adminDeleteProductReducer(state = {}, action){
    switch (action.type){
        case ADMIN_DELETE_PRODUCT_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_DELETE_PRODUCT_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}

/* ADMIN LIST USERS */
export function adminListUsersReducer(state = {}, action){
    switch (action.type){
        case ADMIN_LIST_USERS_REQUEST_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_LIST_USERS_REQUEST_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}

/* ADMIN LIST PROMOTE PRODUCTS BY USER ID */
export function adminListPromoteProductByUserReducer(state = {}, action){
    switch (action.type){
        case ADMIN_LIST_PROMOTE_PRODUCTS_BY_USER_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_LIST_PROMOTE_PRODUCTS_BY_USER_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}

/* ADMIN DELETE PROMOTE PRODUCT BY ID */
export function adminDeletePromoteProductReducer(state = {}, action){
    switch (action.type){
        case ADMIN_DELETE_PROMOTE_PRODUCT_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_DELETE_PROMOTE_PRODUCT_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}

/* ADMIN APPROVE USER REQUEST */
export function adminApprovePromoteProductReducer(state = {}, action){
    switch (action.type){
        case ADMIN_APPROVE_PROMOTE_PRODUCT_REQUEST_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_APPROVE_PROMOTE_PRODUCT_REQUEST_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}

/* ADMIN DELETE USER REQUEST */
export function adminDeleteUserRequestReducer(state = {}, action){
    switch (action.type){
        case ADMIN_DELETE_USER_REQUEST_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_DELETE_USER_REQUEST_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}
/* ADMIN LIST PRODUCT REPORT */
export function adminListProductsReportReducer(state = {}, action){
    switch (action.type){
        case ADMIN_LIST_PRODUCTS_REPORT_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_LIST_PRODUCTS_REPORT_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}

/* ADMIN DELETE REQUEST PROMOTE PRODUCT EXPIRED */
export function adminDeleteRequestPromoteExpiredReducer(state = {}, action){
    switch (action.type){
        case ADMIN_DELETE_REQUEST_PROMOTE_EXPIRED_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_DELETE_REQUEST_PROMOTE_EXPIRED_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}

/* ADMIN COUNT TODAY PRODUCTS */
export function adminCountTodayProductsReducer(state = {}, action){
    switch (action.type){
        case ADMIN_COUNT_TODAY_PRODUCTS_SUCCESS:{
            return action.response.data;
        }
        case ADMIN_COUNT_TODAY_PRODUCTS_FAIL: {
            return action.response;
        }
        default:
            return state;
    }
}