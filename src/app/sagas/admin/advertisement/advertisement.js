import { call, put } from 'redux-saga/effects';
import * as actionType from './../../../actions/admin/advertisement/advertisement';
import * as api from './../../../api/admin/advertisement/advertisement';

export function* validateAdvertisementsSaga(action){
    const response = yield call(api.validateAdvertisementApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.VALIDATE_ADVERTISEMENT_SUCCESS, response});
    }else{
        yield put({type: actionType.VALIDATE_ADVERTISEMENT_FAIL, response});
    }
}

export function* insertAdvertisementSaga(action){
    const response = yield call(api.insertAdvertisementApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.INSERT_ADVERTISEMENT_SUCCESS, response});
    }else{
        yield put({type: actionType.INSERT_ADVERTISEMENT_FAIL, response});
    }
}

export function* updateAdvertisementSaga(action){
    const response = yield call(api.updateAdvertisementApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.UPDATE_ADVERTISEMENT_SUCCESS, response});
    }else{
        yield put({type: actionType.UPDATE_ADVERTISEMENT_FAIL, response});
    }
}

export function* deleteAdvertisementSaga(action){
    const response = yield call(api.deleteAdvertisementApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.DELETE_ADVERTISEMENT_SUCCESS, response});
    }else{
        yield put({type: actionType.DELETE_ADVERTISEMENT_FAIL, response});
    }
}

export function* fetchAdvertisementsSaga(action){
    const response = yield call(api.fetchAdvertisementsApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_ADVERTISEMENTS_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_ADVERTISEMENTS_FAIL, response});
    }
}

export function* fetchAdvertisementSaga(action){
    const response = yield call(api.fetchAdvertisementApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_ADVERTISEMENT_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_ADVERTISEMENT_FAIL, response});
    }
}

export function* scheduleAdvertisementSaga(action){
    const response = yield call(api.scheduleAdvertisementApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.SCHEDULE_ADVERTISEMENT_SUCCESS, response});
    }else{
        yield put({type: actionType.SCHEDULE_ADVERTISEMENT_FAIL, response});
    }
}

export function* displayAdvertisementsSaga(){
    const response = yield call(api.displayAdvertisementsApi);
    if(!(response == undefined)){
        yield put({type: actionType.DISPLAY_ADVERTISEMENTS_SUCCESS, response});
    }else{
        yield put({type: actionType.DISPLAY_ADVERTISEMENTS_FAIL, response});
    }
}