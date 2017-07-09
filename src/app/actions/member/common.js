export const UPDATE_MEMBER_INFO = 'UPDATE_MEMBER_INFO';
export const UPDATE_MEMBER_INFO_SUCCESS = 'UPDATE_MEMBER_INFO_SUCCESS';
export const UPDATE_MEMBER_INFO_FAIL = 'UPDATE_MEMBER_INFO_FAIL';

export const CHANGE_MEMBER_PASSWORD = 'CHANGE_MEMBER_PASSWORD';
export const CHANGE_MEMBER_PASSWORD_SUCCESS = 'CHANGE_MEMBER_PASSWORD_SUCCESS';
export const CHANGE_MEMBER_PASSWORD_FAIL = 'CHANGE_MEMBER_PASSWORD_FAIL';

export const INSERT_PRODUCT = 'INSERT_PRODUCT';
export const INSERT_PRODUCT_SUCCESS = 'INSERT_PRODUCT_SUCCESS';
export const INSERT_PRODUCT_FAIL = 'INSERT_PRODUCT_FAIL';

export const REMOVE_PRODUCT_IMAGE = 'REMOVE_PRODUCT_IMAGE';
export const REMOVE_PRODUCT_IMAGE_SUCCESS = 'REMOVE_PRODUCT_IMAGE_SUCCESS';
export const REMOVE_PRODUCT_IMAGE_FAIL = 'REMOVE_PRODUCT_IMAGE_FAIL';

export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAIL = 'FETCH_PRODUCT_FAIL';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

export const UPDATE_PRODUCT_STATUS = 'UPDATE_PRODUCT_STATUS';
export const UPDATE_PRODUCT_STATUS_SUCCESS = 'UPDATE_PRODUCT_STATUS_SUCCESS';
export const UPDATE_PRODUCT_STATUS_FAIL = 'UPDATE_PRODUCT_STATUS_FAIL';

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAIL = 'UPDATE_PRODUCT_FAIL';

export const RENEW_PRODUCT = 'RENEW_PRODUCT';
export const RENEW_PRODUCT_SUCCESS = 'RENEW_PRODUCT_SUCCESS';
export const RENEW_PRODUCT_FAIL = 'RENEW_PRODUCT_FAIL';

export const MEMBER_LIST_PROMOTED_PRODUCTS = "MEMBER_LIST_PROMOTED_PRODUCTS";
export const MEMBER_LIST_PROMOTED_PRODUCTS_SUCCESS = "MEMBER_LIST_PROMOTED_PRODUCTS_SUCCESS";
export const MEMBER_LIST_PROMOTED_PRODUCTS_FAIL = "MEMBER_LIST_PROMOTED_PRODUCTS_FAIL";

export const MEMBER_GET_PROMOTED_PRODUCT_BY_ID = "MEMBER_GET_PROMOTED_PRODUCT_BY_ID";
export const MEMBER_GET_PROMOTED_PRODUCT_BY_ID_SUCCESS = "MEMBER_GET_PROMOTED_PRODUCT_BY_ID_SUCCESS";
export const MEMBER_GET_PROMOTED_PRODUCT_BY_ID_FAIL = "MEMBER_GET_PROMOTED_PRODUCT_BY_ID_FAIL";

export const MEMBER_LIST_ALL_PROMOTED_PACKAGES = "MEMBER_LIST_ALL_PROMOTED_PACKAGES";
export const MEMBER_LIST_ALL_PROMOTED_PACKAGES_SUCCESS = "MEMBER_LIST_ALL_PROMOTED_PACKAGES_SUCCESS";
export const MEMBER_LIST_ALL_PROMOTED_PACKAGES_FAIL = "MEMBER_LIST_ALL_PROMOTED_PACKAGES_FAIL";

export const MEMBER_PROMOTE_PRODUCTS = "MEMBER_PROMOTE_PRODUCTS";
export const MEMBER_PROMOTE_PRODUCTS_SUCCESS = "MEMBER_PROMOTE_PRODUCTS_SUCCESS";
export const MEMBER_PROMOTE_PRODUCTS_FAIL = "MEMBER_PROMOTE_PRODUCTS_FAIL";

export const MEMBER_REQUEST_TOBE_MERCHANT = "MEMBER_REQUEST_TOBE_MERCHANT";
export const MEMBER_REQUEST_TOBE_MERCHANT_SUCCESS = "MEMBER_REQUEST_TOBE_MERCHANT_SUCCESS";
export const MEMBER_REQUEST_TOBE_MERCHANT_FAIL = "MEMBER_REQUEST_TOBE_MERCHANT_FAIL";

export function actionUpdateMemberInfo(member) {
    return {
        type: UPDATE_MEMBER_INFO,
        member: member
    }
}

export function actionChangeMemberPassword(member) {
    return {
        type: CHANGE_MEMBER_PASSWORD,
        member: member
    }
}

export function insertProductAction(product) {
    return{
        type: INSERT_PRODUCT,
        product: product
    }
}

export function removeProductImageAction(product) {
    return{
        type: REMOVE_PRODUCT_IMAGE,
        product: product
    }
}

export function fetchProductAction(product) {
    return{
        type: FETCH_PRODUCTS,
        product: product
    }
}

export function updateProductStatusAction(product) {
    return{
        type: UPDATE_PRODUCT_STATUS,
        product: product
    }
}

export function fetchProductByIdAction(product) {
    return{
        type: FETCH_PRODUCT,
        product: product
    }
}

export function updateProductAction(product) {
    return{
        type: UPDATE_PRODUCT,
        product: product
    }
}

export function renewProductAction(product) {
    return{
        type: RENEW_PRODUCT,
        product: product
    }
}

/* MEMBER LIST PROMOTED PRODUCTS */
export function actionMemberListPromotedProducts(products) {
    return{
        type: MEMBER_LIST_PROMOTED_PRODUCTS,
        products: products
    }
}

/* MEMBER GET PROMOTED PRODUCTS */
export function actionMemberGetPromotedProduct(product) {
    return{
        type: MEMBER_GET_PROMOTED_PRODUCT_BY_ID,
        product: product
    }
}

/* MEMBER GET PROMOTED PRODUCTS */
export function actionMemberListAllPackagesProduct(token) {
    return{
        type: MEMBER_LIST_ALL_PROMOTED_PACKAGES,
        token: token
    }
}

/* MEMBER PROMOTED PRODUCTS */
export function actionMemberPromoteProducts(promote) {
    return{
        type: MEMBER_PROMOTE_PRODUCTS,
        promote: promote
    }
}

/* MEMBER ASK TO BE MERCHANT BY THEMSELE */
export function actionMemberRequestPromote(requested){
    return {
        type: MEMBER_REQUEST_TOBE_MERCHANT,
        requested: requested
    }
}