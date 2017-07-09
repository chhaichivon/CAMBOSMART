import { call , put } from 'redux-saga/effects';
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
import {
    apiAdminListProduct,
    apiAdminListProductReport,
    apiAdminUpdateProductStatus,
    apiAdminDeleteProduct,
    apiAdminGetProduct,
    apiAdminListUser,
    apiAdminDeleteUserRequest,
    apiAdminListPromoteProductByUser,
    apiAdminApprovePromoteProduct,
    apiAdminDeletePromoteProductById,
    apiAdminUpdateStatusProduct,
    apiAdminCountTodayProducts,
    apiAdminDeleteRequestPromoteExpired
} from './../../../api/admin/product/product';

/* ADMIN LIST PRODUCTS */
export function* doAdminListProducts(action){
    const response = yield call(apiAdminListProduct, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_LIST_PRODUCTS_SUCCESS, response });
    }else{
        yield put({type: ADMIN_LIST_PRODUCTS_FAIL, response});
    }
}

/* ADMIN GET PRODUCT */
export function* doAdminGetProduct(action){
    const response = yield call(apiAdminGetProduct, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_GET_PRODUCT_SUCCESS, response });
    }else{
        yield put({type: ADMIN_GET_PRODUCT_FAIL, response});
    }
}

/* ADMIN UPDATE PRODUCT STATUS */
export function* doAdminUpdateProductStatus(action){
    const response = yield call(apiAdminUpdateProductStatus, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_UPDATE_PRODUCT_STATUS_SUCCESS, response });
    }else{
        yield put({type: ADMIN_UPDATE_PRODUCT_STATUS_FAIL, response});
    }
}

/* ADMIN UPDATE STATUS PRODUCT NASEAT*/
export function* doAdminUpdateStatusProduct(action){
    const response = yield call(apiAdminUpdateStatusProduct, action);
    if(!(response == undefined)){
        yield put({ type: ADMIN_UPDATE_STATUS_PRODUCT_SUCCESS, response });
    }else {
        yield put({ type: ADMIN_UPDATE_STATUS_PRODUCT_FAIL, response })
    }
}
/* ADMIN DELETE PRODUCT */
export function* doAdminDeleteProduct(action){
    const response = yield call(apiAdminDeleteProduct, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_DELETE_PRODUCT_SUCCESS, response });
    }else{
        yield put({type: ADMIN_DELETE_PRODUCT_FAIL, response});
    }
}

/* ADMIN LIST USERS */
export function* doAdminListUser(action){
    const response = yield call(apiAdminListUser, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_LIST_USERS_REQUEST_SUCCESS, response });
    }else{
        yield put({type: ADMIN_LIST_USERS_REQUEST_FAIL, response});
    }
}

/* ADMIN LIST PROMOTE PRODUCT BY USER ID */
export function* doAdminListPromoteProductByUser(action){
    const response = yield call(apiAdminListPromoteProductByUser, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_LIST_PROMOTE_PRODUCTS_BY_USER_SUCCESS, response });
    }else{
        yield put({type: ADMIN_LIST_PROMOTE_PRODUCTS_BY_USER_FAIL, response});
    }
}

/* ADMIN DELETE PROMOTE PRODUCT BY ID */
export function* doAdminDeletePromoteProduct(action){
    const response = yield call(apiAdminDeletePromoteProductById, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_DELETE_PROMOTE_PRODUCT_SUCCESS, response });
    }else{
        yield put({type: ADMIN_DELETE_PROMOTE_PRODUCT_FAIL, response});
    }
}

/* ADMIN APPROVE USER REQUEST */
export function* doAdminApprovePromoteProduct(action){
    const response = yield call(apiAdminApprovePromoteProduct, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_APPROVE_PROMOTE_PRODUCT_REQUEST_SUCCESS, response });
    }else{
        yield put({type: ADMIN_APPROVE_PROMOTE_PRODUCT_REQUEST_FAIL, response});
    }
}

/* ADMIN DELETE USER REQUEST */
export function* doAdminDeleteUserRequest(action){
    const response = yield call(apiAdminDeleteUserRequest, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_DELETE_USER_REQUEST_SUCCESS, response });
    }else{
        yield put({type: ADMIN_DELETE_USER_REQUEST_FAIL, response});
    }
}
/* ADMIN LIST PRODUCTS */
export function* doAdminListProductsReport(action){
    const response = yield call(apiAdminListProductReport, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_LIST_PRODUCTS_REPORT_SUCCESS, response });
    }else{
        yield put({type: ADMIN_LIST_PRODUCTS_REPORT_FAIL, response});
    }
}

/* ADMIN DELETE REQUEST PROMOTE PRODUCTS EXPIRED */
export function* doAdminDeleteRequestPromoteExpired(action){
    const response = yield call(apiAdminDeleteRequestPromoteExpired, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_DELETE_REQUEST_PROMOTE_EXPIRED_SUCCESS, response });
    }else{
        yield put({type: ADMIN_DELETE_REQUEST_PROMOTE_EXPIRED_FAIL, response});
    }
}

/* ADMIN COUNT TODAY PRODUCTS */
export function* sagaAdminCountTodayProducts(action){
    const response = yield call(apiAdminCountTodayProducts, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_COUNT_TODAY_PRODUCTS_SUCCESS, response});
    }else{
        yield put({type: ADMIN_COUNT_TODAY_PRODUCTS_FAIL, response});
    }
}