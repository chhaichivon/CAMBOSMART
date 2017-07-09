import { call, put } from 'redux-saga/effects';
import * as actionType from './../../../actions/admin/advertisement/advertiser';
import * as api from './../../../api/admin/advertisement/advertiser';

export function* insertAdvertiserSaga(action){
    const response = yield call(api.insertAdvertiserApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.INSERT_ADVERTISER_SUCCESS, response});
    }else{
        yield put({type: actionType.INSERT_ADVERTISER_FAIL, response});
    }
}

export function* updateAdvertiserSaga(action){
    const response = yield call(api.updateAdvertiserApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.UPDATE_ADVERTISER_SUCCESS, response});
    }else{
        yield put({type: actionType.UPDATE_ADVERTISER_FAIL, response});
    }
}

export function* blockAdvertiserSaga(action){
    const response = yield call(api.blockAdvertiserApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.BLOCK_ADVERTISER_SUCCESS, response});
    }else{
        yield put({type: actionType.BLOCK_ADVERTISER_FAIL, response});
    }
}

export function* renewAdvertiserSaga(action){
    const response = yield call(api.renewAdvertiserApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.RENEW_ADVERTISER_SUCCESS, response});
    }else{
        yield put({type: actionType.RENEW_ADVERTISER_FAIL, response});
    }
}

export function* fetchAdvertiserSaga(action){
    const response = yield call(api.fetchAdvertiserApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_ADVERTISER_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_ADVERTISER_FAIL, response});
    }
}

export function* fetchAdvertisersSaga(action){
    const response = yield call(api.fetchAdvertisersApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_ADVERTISERS_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_ADVERTISERS_FAIL, response});
    }
}