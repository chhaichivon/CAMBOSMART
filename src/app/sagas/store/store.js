import { call, put } from 'redux-saga/effects';
import * as actionType from './../../actions/store/store';
import {
    fetchStoreApi,
    updateStoreMapApi,
    updateStoreApi,
    getUserWithStoreApi
} from './../../api/store/store';

export function* fetchStoreSaga(action){
    const response = yield call(fetchStoreApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.FETCH_STORE_SUCCESS, response});
    } else {
        yield put({type: actionType.FETCH_STORE_FAIL, response});
    }
}


export function* updateStoreMapSaga(action){
    const response = yield call(updateStoreMapApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.UPDATE_STORE_MAP_SUCCESS, response});
    } else {
        yield put({type: actionType.UPDATE_STORE_MAP_FAIL, response});
    }
}


export function* updateStoreSaga(action){
    const response = yield call(updateStoreApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.UPDATE_STORE_SUCCESS, response});
    } else {
        yield put({type: actionType.UPDATE_STORE_FAIL, response});
    }
}

export function* getUserWithStoreSaga(action){
    const response = yield call(getUserWithStoreApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.USER_WITH_STORE_SUCCESS, response});
    } else {
        yield put({type: actionType.USER_WITH_STORE_FAIL, response});
    }
}