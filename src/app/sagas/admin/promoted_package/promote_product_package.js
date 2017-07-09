import { call, put } from 'redux-saga/effects';
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
import {
    apiSavePromotedProductPackage,
    apiListPromotedProductPackage,
    apiDeletePromotedProductPackage,
    apiGetPromotedProductPackage,
    apiUpdatePromotedProductPackage,
    apiListPromotedProductsExpired,
    apiUpdatePromotedProductExpired
} from './../../../api/admin/promoted_package/promote_product_package';

/* SAVE PROMOTED PACKAGE */
export function* doAdminAddPromotedProductPackage(action){
    const response = yield call(apiSavePromotedProductPackage, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_SAVE_PROMOTED_PRODUCT_PACKAGE_SUCCESS, response });
    }else{
        yield put({type: ADMIN_SAVE_PROMOTED_PRODUCT_PACKAGE_FAIL, response});
    }
}

/* LIST PROMOTED PACKAGE */
export function* doAdminListPromotedPackage(action){
    const response = yield call(apiListPromotedProductPackage, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_LIST_PROMOTED_PRODUCT_PACKAGE_SUCCESS, response });
    }else{
        yield put({type: ADMIN_LIST_PROMOTED_PRODUCT_PACKAGE_FAIL, response});
    }
}

/* ADMIN GET PROMOTED PACKAGE */
export function* doAdminGetPromotedPackage(action){
    const response = yield call(apiGetPromotedProductPackage, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_GET_PROMOTED_PRODUCT_PACKAGE_SUCCESS, response });
    }else{
        yield put({type: ADMIN_GET_PROMOTED_PRODUCT_PACKAGE_FAIL, response});
    }
}

/* ADMIN UPDATE PROMOTED PACKAGE */
export function* doAdminUpdatePromotePackage(action){
    const response = yield call(apiUpdatePromotedProductPackage, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_UPDATE_PROMOTED_PRODUCT_PACKAGE_SUCCESS, response });
    }else{
        yield put({type: ADMIN_UPDATE_PROMOTED_PRODUCT_PACKAGE_FAIL, response});
    }
}

/* ADMIN DELETE PROMOTED PACKAGE */
export function* doAdminDeletePromotedPackage(action){
    const response = yield call(apiDeletePromotedProductPackage, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_DELETE_PROMOTED_PRODUCT_PACKAGE_SUCCESS, response });
    }else{
        yield put({type: ADMIN_DELETE_PROMOTED_PRODUCT_PACKAGE_FAIL, response});
    }
}

/* ADMIN LIST PROMOTED PRODUCTS EXPIRED */
export function* doAdminListPromotedProductsExpired(action){
    const response = yield call(apiListPromotedProductsExpired, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_LIST_PROMOTED_PRODUCT_EXPIRED_SUCCESS, response });
    }else{
        yield put({type: ADMIN_LIST_PROMOTED_PRODUCT_EXPIRED_FAIL, response});
    }
}

/* ADMIN UPDATE PROMOTED PRODUCTS EXPIRED */
export function* doAdminUpdatePromotedProductExpired(action){
    const response = yield call(apiUpdatePromotedProductExpired, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_UPDATE_PROMOTED_PRODUCT_EXPIRED_SUCCESS, response });
    }else{
        yield put({type: ADMIN_UPDATE_PROMOTED_PRODUCT_EXPIRED_FAIL, response});
    }
}