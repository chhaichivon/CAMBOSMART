import {call, put} from 'redux-saga/effects';
import * as actionType from './../../actions/member/common';
import * as member from './../../api/member/common';

export function* updateMemberInfoSaga(action) {
    const response = yield call(member.updateMemberInfoApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.UPDATE_MEMBER_INFO_SUCCESS, response});
    } else {
        yield put({type: actionType.UPDATE_MEMBER_INFO_FAIL, response});
    }
}

export function* changeMemberPasswordSaga(action) {
    const response = yield call(member.apiChangeMemberPassword, action);
    if (!(response == undefined)) {
        yield put({type: actionType.CHANGE_MEMBER_PASSWORD_SUCCESS, response});
    } else {
        yield put({type: actionType.CHANGE_MEMBER_PASSWORD_FAIL, response});
    }
}

export function* addProductSaga(action) {
    const response = yield call(member.apiInsertProduct, action);
    if (!(response == undefined)) {
        yield put({type: actionType.INSERT_PRODUCT_SUCCESS, response});
    } else {
        yield put({type: actionType.INSERT_PRODUCT_FAIL, response});
    }
}

export function* removeProductImageSaga(action) {
    const response = yield call(member.removeProductImageApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.REMOVE_PRODUCT_IMAGE_SUCCESS, response});
    } else {
        yield put({type: actionType.REMOVE_PRODUCT_IMAGE_FAIL, response});
    }
}

export function* fetchProductSaga(action) {
    const response = yield call(member.apiFetchProducts, action);
    if (!(response == undefined)) {
        yield put({type: actionType.FETCH_PRODUCTS_SUCCESS, response});
    } else {
        yield put({type: actionType.FETCH_PRODUCTS_FAIL, response});
    }
}

export function* deleteProductSaga(action) {
    const response = yield call(member.deletProductApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.UPDATE_PRODUCT_STATUS_SUCCESS, response});
    } else {
        yield put({type: actionType.UPDATE_PRODUCT_STATUS_FAIL, response});
    }
}

export function* fetchProductByIdSaga(action) {
    const response = yield call(member.apiFetchProduct, action);
    if (!(response == undefined)) {
        yield put({type: actionType.FETCH_PRODUCT_SUCCESS, response});
    } else {
        yield put({type: actionType.FETCH_PRODUCT_FAIL, response});
    }
}

export function* updateProductByIdSaga(action) {
    const response = yield call(member.apiUpdateProductById, action);
    if (!(response == undefined)) {
        yield put({type: actionType.UPDATE_PRODUCT_SUCCESS, response});
    } else {
        yield put({type: actionType.UPDATE_PRODUCT_FAIL, response});
    }
}

export function* renewProductSaga(action) {
    const response = yield call(member.apiRenewProduct, action);
    if (!(response == undefined)) {
        yield put({type: actionType.RENEW_PRODUCT_SUCCESS, response});
    } else {
        yield put({type: actionType.RENEW_PRODUCT_FAIL, response});
    }
}

/* MEMBER LIST PROMOTED PRODUCTS */
export function* doMemberListPromotedProduct(action){
    const response = yield call(member.apiListPromotedProducts, action);
    if (!(response == undefined)) {
        yield put({type: actionType.MEMBER_LIST_PROMOTED_PRODUCTS_SUCCESS, response});
    } else {
        yield put({type: actionType.MEMBER_LIST_PROMOTED_PRODUCTS_FAIL, response});
    }
}

/* MEMBER GET PROMOTED PRODUCTS */
export function* doMemberGetPromoteProduct(action){
    const response = yield call(member.apiGetPromotedProduct, action);
    if (!(response == undefined)) {
        yield put({type: actionType.MEMBER_GET_PROMOTED_PRODUCT_BY_ID_SUCCESS, response});
    } else {
        yield put({type: actionType.MEMBER_GET_PROMOTED_PRODUCT_BY_ID_FAIL, response});
    }
}

/* MEMBER LIST ALL PROMOTED PACKAGES */
export function* doMemberListAllPackages(action){
    const response = yield call(member.apiListAllPackages, action);
    if (!(response == undefined)) {
        yield put({type: actionType.MEMBER_LIST_ALL_PROMOTED_PACKAGES_SUCCESS, response});
    } else {
        yield put({type: actionType.MEMBER_LIST_ALL_PROMOTED_PACKAGES_FAIL, response});
    }
}

/* MEMBER PROMOTE PRODUCTS */
export function* doPromoteProducts(action){
    const response = yield call(member.apiMemberPromoteProducts, action);
    if (!(response == undefined)) {
        yield put({type: actionType.MEMBER_PROMOTE_PRODUCTS_SUCCESS, response});
    } else {
        yield put({type: actionType.MEMBER_PROMOTE_PRODUCTS_FAIL, response});
    }
}

/* MEMBER REQUESTED PROMOTED TO BE MERCHANT */
export function* doRequestPromoted(action){
    const response = yield call(member.apiMemberRequestPromoted, action);
    if (!(response == undefined)) {
        yield put({type: actionType.MEMBER_REQUEST_TOBE_MERCHANT_SUCCESS, response});
    } else {
        yield put({type: actionType.MEMBER_REQUEST_TOBE_MERCHANT_FAIL, response});
    }
}