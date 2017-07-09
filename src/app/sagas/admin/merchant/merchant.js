import { call, put } from 'redux-saga/effects';
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
import { fetchMerchantsApi,
    fetchMerchantDetailApi,
    blockMerchantApi,
    apiListExpiredMerchants,
    apiUpdateExpiredMerchants,
    apiCheckMerchantExpired,
    apiAdminCountMerchantMembers
} from './../../../api/admin/merchant/merchant';

export function* fetchMerchantsSaga(action){
    const response = yield call(fetchMerchantsApi, action);
    if(!(response == undefined)){
        yield put({type: FILTER_MEMBERS_SUCCESS, response});
    }else{
        yield put({type: FILTER_MEMBERS_FAIL, response});
    }
}

export function* fetchMerchantDetailSaga(action){
    const response = yield call(fetchMerchantDetailApi, action);
    if(!(response == undefined)){
        yield put({type: MERCHANT_DETAIL_SUCCESS, response});
    }else{
        yield put({type: MERCHANT_DETAIL_FAIL, response});
    }
}

export function* blockMerchantDetailSaga(action){
    const response = yield call(blockMerchantApi, action);
    if(!(response == undefined)){
        yield put({type: BLOCK_MERCHANT_SUCCESS, response});
    }else{
        yield put({type: BLOCK_MERCHANT_FAIL, response});
    }
}

/* ADMIN LISTS EXPIRED MERCHANTS */
export function* listExpiredMerchantsSaga(action){
    const response = yield call(apiListExpiredMerchants, action);
    if(!(response == undefined)){
        yield put({type: LIST_EXPIRED_MERCHANTS_SUCCESS, response});
    }else{
        yield put({type: LIST_EXPIRED_MERCHANTS_FAIL, response});
    }
}

/* ADMIN UPDATE EXPIRED MERCHANTS */
export function* updateExpiredMerchantsSaga(action){
    const response = yield call(apiUpdateExpiredMerchants, action);
    if(!(response == undefined)){
        yield put({type: UPDATE_EXPIRED_MERCHANTS_SUCCESS, response});
    }else{
        yield put({type: UPDATE_EXPIRED_MERCHANTS_FAIL, response});
    }
}

/* CHECK MERCHANT EXPIRED */
export function* checkMerchantExpired(action){
    const response = yield call(apiCheckMerchantExpired, action);
    if(!(response == undefined)){
        yield put({type: CHECK_MERCHANT_EXPIRED_SUCCESS, response});
    }else{
        yield put({type: CHECK_MERCHANT_EXPIRED_FAIL, response});
    }
}

/* ADMIN COUNT MERCHANT MEMBERS */
export function* sagaAdminCountMerchantMembers(action){
    const response = yield call(apiAdminCountMerchantMembers, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_COUNT_MERCHANT_MEMBERS_SUCCESS, response});
    }else{
        yield put({type: ADMIN_COUNT_MERCHANT_MEMBERS_FAIL, response});
    }
}