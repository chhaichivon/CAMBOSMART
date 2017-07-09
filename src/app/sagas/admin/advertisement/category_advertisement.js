import { call, put } from 'redux-saga/effects';
import * as actionType from './../../../actions/admin/advertisement/category_advertisement';
import * as api from './../../../api/admin/advertisement/category_advertisement';

export function* insertCategoryAdvertisementSaga(action){
    const response = yield call(api.insertCategoryAdvertisementApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.INSERT_CATEGORY_ADVERTISEMENT_SUCCESS, response});
    }else{
        yield put({type: actionType.INSERT_CATEGORY_ADVERTISEMENT_FAIL, response});
    }
}

export function* updateCategoryAdvertisementSaga(action){
    const response = yield call(api.updateCategoryAdvertisementApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.UPDATE_CATEGORY_ADVERTISEMENT_SUCCESS, response});
    }else{
        yield put({type: actionType.UPDATE_CATEGORY_ADVERTISEMENT_FAIL, response});
    }
}

export function* deleteCategoryAdvertisementSaga(action){
    const response = yield call(api.deleteCategoryAdvertisementApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.DELETE_CATEGORY_ADVERTISEMENT_SUCCESS, response});
    }else{
        yield put({type: actionType.DELETE_CATEGORY_ADVERTISEMENT_FAIL, response});
    }
}

export function* fetchCategoryAdvertisementSaga(action){
    const response = yield call(api.fetchCategoryAdvertisementApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_CATEGORY_ADVERTISEMENT_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_CATEGORY_ADVERTISEMENT_FAIL, response});
    }
}

export function* fetchCategoryAdvertisementsSaga(action){
    const response = yield call(api.fetchCategoryAdvertisementsApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_CATEGORY_ADVERTISEMENTS_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_CATEGORY_ADVERTISEMENTS_FAIL, response});
    }
}

export function* fetchScheduleCategoryAdvertisementSaga(action){
    const response = yield call(api.fetchScheduleCategoryAdvertisementApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS_FAIL, response});
    }
}

export function* fetchCategoryAdvertisersSaga(action){
    const response = yield call(api.fetchCategoryAdvertisersApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_CATEGORY_ADVERTISERS_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_CATEGORY_ADVERTISERS_FAIL, response});
    }
}

export function* fetchCategoryAdvertiserSaga(action){
    const response = yield call(api.fetchCategoryAdvertiserApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_CATEGORY_ADVERTISER_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_CATEGORY_ADVERTISER_FAIL, response});
    }
}

export function* displayCategoryAdvertisementsSaga(action){
    const response = yield call(api.displayCategoryAdvertisersApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.DISPLAY_CATEGORY_ADVERTISEMENTS_SUCCESS, response});
    }else{
        yield put({type: actionType.DISPLAY_CATEGORY_ADVERTISEMENTS_FAIL, response});
    }
}

export function* insertCategoryAdvertiserSaga(action){
    const response = yield call(api.insertCategoryAdvertiserApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.INSERT_CATEGORY_ADVERTISER_SUCCESS, response});
    }else{
        yield put({type: actionType.INSERT_CATEGORY_ADVERTISER_FAIL, response});
    }
}