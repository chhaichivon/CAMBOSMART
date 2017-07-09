import { call, put } from 'redux-saga/effects';
import * as actionType from './../../actions/admin/common';
import { fetchMembersApi, fetchMemberDetailApi, updateMemberStatusApi, countViewWebsiteApi, fetchViewWebsiteApi } from './../../api/admin/common';

export function* fetchMembersSaga(action){
    const response = yield call(fetchMembersApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_MEMBERS_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_MEMBERS_FAIL, response});
    }
}

export function* fetchMemberDetailSaga(action){
    const response = yield call(fetchMemberDetailApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_MEMBER_DETAIL_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_MEMBER_DETAIL_FAIL, response});
    }
}

export function* updateMemberStatusSaga(action){
    const response = yield call(updateMemberStatusApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.UPDATE_MEMBER_STATUS_SUCCESS, response});
    }else{
        yield put({type: actionType.UPDATE_MEMBER_STATUS_FAIL, response});
    }
}

/**Oudam Visitor view counter**/

export function* countViewWebsiteSaga(action){
    const response = yield call(countViewWebsiteApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.COUNT_VIEW_WEBSITE_SUCCESS, response});
    }else{
        yield put({type: actionType.COUNT_VIEW_WEBSITE_FAIL, response});
    }
}

export function* fetchViewWebsiteSaga(action){
    const response = yield call(fetchViewWebsiteApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_VIEW_WEBSITE_SUCCESS, response});
    }else{
        yield put({type: actionType.FETCH_VIEW_WEBSITE_FAIL, response});
    }
}