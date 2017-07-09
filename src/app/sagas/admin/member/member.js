import { call, put } from 'redux-saga/effects';
import {
    PROMOTE_MEMBER_SUCCESS,
    PROMOTE_MEMBER_FAIL,
    ADMIN_DETAIL_MEMBER_SUCCESS,
    ADMIN_DETAIL_MEMBER_FAIL,
    ADMIN_LIST_MEMBER_REQUEST_SUCCESS,
    ADMIN_LIST_MEMBER_REQUEST_FAIL,
    ADMIN_DELETE_MEMBER_REQUEST_SUCCESS,
    ADMIN_DELETE_MEMBER_REQUEST_FAIL,
    ADMIN_LIST_MEMBER_REQUESTS_EXPIRED_SUCCESS,
    ADMIN_LIST_MEMBER_REQUESTS_EXPIRED_FAIL,
    ADMIN_DELETE_MEMBER_REQUESTS_EXPIRED_SUCCESS,
    ADMIN_DELETE_MEMBER_REQUESTS_EXPIRED_FAIL,
    ADMIN_COUNT_NORMAL_MEMBERS_SUCCESS,
    ADMIN_COUNT_NORMAL_MEMBERS_FAIL
} from './../../../actions/admin/member/member';
import {
    promoteMemberApi,
    apiAdminDetailMember,
    apiAdminListMemberRequest,
    apiAdminDeleteMemberRequest,
    apiAdminListMemberRequestsExpired,
    apiAdminDeleteMemberRequestsExpired,
    apiAdminCountNormalMembers
} from './../../../api/admin/member/member';

/* ADMIN PROMOTE MEMBER TO BE MERCHANT */
export function* promoteMemberSaga(action){
    const response = yield call(promoteMemberApi, action);
    if(!(response == undefined)){
        yield put({type: PROMOTE_MEMBER_SUCCESS, response});
    }else{
        yield put({type: PROMOTE_MEMBER_FAIL, response});
    }
}

/* ADMIN DETAIL MEMBER */
export function* doAdminDetailMember(action){
    const response = yield call(apiAdminDetailMember, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_DETAIL_MEMBER_SUCCESS, response});
    }else{
        yield put({type: ADMIN_DETAIL_MEMBER_FAIL, response});
    }
}

/* ADMIN LIST MEMBER REQUEST */
export function* doAdminListMemberRequest(action){
    const response = yield call(apiAdminListMemberRequest, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_LIST_MEMBER_REQUEST_SUCCESS, response});
    }else{
        yield put({type: ADMIN_LIST_MEMBER_REQUEST_FAIL, response});
    }
}

/* ADMIN DELETE MEMBER REQUEST */
export function* doAdminDeleteMemberRequest(action){
    const response = yield call(apiAdminDeleteMemberRequest, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_DELETE_MEMBER_REQUEST_SUCCESS, response});
    }else{
        yield put({type: ADMIN_DELETE_MEMBER_REQUEST_FAIL, response});
    }
}

/* ADMIN LISTS MEMBER REQUEST EXPIRED */
export function* doAdminListMemberRequestsExpired(action){
    const response = yield call(apiAdminListMemberRequestsExpired, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_LIST_MEMBER_REQUESTS_EXPIRED_SUCCESS, response});
    }else{
        yield put({type: ADMIN_LIST_MEMBER_REQUESTS_EXPIRED_FAIL, response});
    }
}

/* ADMIN DELETES MEMBER REQUESTS EXPIRED */
export function* doAdminDeleteMemberRequestsExpired(action){
    const response = yield call(apiAdminDeleteMemberRequestsExpired, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_DELETE_MEMBER_REQUESTS_EXPIRED_SUCCESS, response});
    }else{
        yield put({type: ADMIN_DELETE_MEMBER_REQUESTS_EXPIRED_FAIL, response});
    }
}

/* ADMIN COUNT NORMAL MEMBERS */
export function* sagaAdminCountNormalMembers(action){
    const response = yield call(apiAdminCountNormalMembers, action);
    if(!(response == undefined)){
        yield put({type: ADMIN_COUNT_NORMAL_MEMBERS_SUCCESS, response});
    }else{
        yield put({type: ADMIN_COUNT_NORMAL_MEMBERS_FAIL, response});
    }
}