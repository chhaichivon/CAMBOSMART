import {
    ADMIN_SAVE_PROMOTED_PRODUCT_PACKAGE_SUCCESS,
    ADMIN_SAVE_PROMOTED_PRODUCT_PACKAGE_FAIL,
    ADMIN_LIST_PROMOTED_PRODUCT_PACKAGE_SUCCESS,
    ADMIN_LIST_PROMOTED_PRODUCT_PACKAGE_FAIL,
    ADMIN_DELETE_PROMOTED_PRODUCT_PACKAGE_SUCCESS,
    ADMIN_DELETE_PROMOTED_PRODUCT_PACKAGE_FAIL,
    ADMIN_GET_PROMOTED_PRODUCT_PACKAGE_SUCCESS,
    ADMIN_GET_PROMOTED_PRODUCT_PACKAGE_FAIL,
    ADMIN_UPDATE_PROMOTED_PRODUCT_PACKAGE_SUCCESS,
    ADMIN_UPDATE_PROMOTED_PRODUCT_PACKAGE_FAIL,
    ADMIN_LIST_PROMOTED_PRODUCT_EXPIRED_SUCCESS,
    ADMIN_LIST_PROMOTED_PRODUCT_EXPIRED_FAIL,
    ADMIN_UPDATE_PROMOTED_PRODUCT_EXPIRED_SUCCESS,
    ADMIN_UPDATE_PROMOTED_PRODUCT_EXPIRED_FAIL
} from './../../../actions/admin/promoted_package/promote_product_package';

/* SAVE PROMOTED PRODUCT PACKAGE */
export function savePromotedProductPackageReducer(state = {}, action){
    switch (action.type){
        case ADMIN_SAVE_PROMOTED_PRODUCT_PACKAGE_SUCCESS:
            return action.response.data;
        case ADMIN_SAVE_PROMOTED_PRODUCT_PACKAGE_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* LIST PROMOTED PRODUCT PACKAGE */
export function listPromotedProductPackageReducer(state = {}, action){
    switch (action.type){
        case ADMIN_LIST_PROMOTED_PRODUCT_PACKAGE_SUCCESS:
            return action.response.data;
        case ADMIN_LIST_PROMOTED_PRODUCT_PACKAGE_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN GET PROMOTED PRODUCT PACKAGE */
export function getPromotedProductPackageReducer(state = {}, action){
    switch (action.type){
        case ADMIN_GET_PROMOTED_PRODUCT_PACKAGE_SUCCESS:
            return action.response.data;
        case ADMIN_GET_PROMOTED_PRODUCT_PACKAGE_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN UPDATE PROMOTED PRODUCT PACKAGE */
export function updatePromotedProductPackageReducer(state = {}, action){
    switch (action.type){
        case ADMIN_UPDATE_PROMOTED_PRODUCT_PACKAGE_SUCCESS:
            return action.response.data;
        case ADMIN_UPDATE_PROMOTED_PRODUCT_PACKAGE_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* DELETE PROMOTED PRODUCT PACKAGE */
export function deletePromotedProductPackageReducer(state = {}, action){
    switch (action.type){
        case ADMIN_DELETE_PROMOTED_PRODUCT_PACKAGE_SUCCESS:
            return action.response.data;
        case ADMIN_DELETE_PROMOTED_PRODUCT_PACKAGE_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN LIST PROMOTED PRODUCTS EXPIRED */
export function listPromotedProductsExpiredReducer(state = {}, action){
    switch (action.type){
        case ADMIN_LIST_PROMOTED_PRODUCT_EXPIRED_SUCCESS:
            return action.response.data;
        case ADMIN_LIST_PROMOTED_PRODUCT_EXPIRED_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN UPDATE PROMOTED PRODUCTS EXPIRED */
export function updatePromotedProductsExpiredReducer(state = {}, action){
    switch (action.type){
        case ADMIN_UPDATE_PROMOTED_PRODUCT_EXPIRED_SUCCESS:
            return action.response.data;
        case ADMIN_UPDATE_PROMOTED_PRODUCT_EXPIRED_FAIL:
            return action.response;
        default:
            return state;
    }
}