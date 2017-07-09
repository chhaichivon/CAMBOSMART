import { call, put } from 'redux-saga/effects';
import {
    GET_MEMBER_DETAIL_SUCCESS,
    GET_MEMBER_DETAIL_FAIL,

    PROMOTE_MEMBER_SUCCESS,
    PROMOTE_MEMBER_FAIL,

    CHANGE_MEMBER_STATUS_SUCCESS,
    CHANGE_MEMBER_STATUS_FAIL,

    FETCH_MEMBER_SUCCESS,
    FETCH_MEMBER_FAIL
} from './../../actions/member';
import {
    apiGetMemberDetail,
    apiPromoteMember,
    apiChangeMemberStatus,
    getMembersApi
} from './../../api/admin/member/member';

/* TO GET MEMBER DETAIL */
export function* doGetMemberDetail(action){
    const response = yield call(apiGetMemberDetail, action);
    if(!(response == undefined)){
        yield put({type: GET_MEMBER_DETAIL_SUCCESS, response });
    }else{
        yield put({type: GET_MEMBER_DETAIL_FAIL, response});
    }
}

/* TO PROMOTE MEMBER TO BE MERCHANT */
export function* doPromoteMember(action){
    const response = yield call(apiPromoteMember, action);
    if(!(response == undefined)){
        yield put({type: PROMOTE_MEMBER_SUCCESS, response });
    }else{
        yield put({type: PROMOTE_MEMBER_FAIL, response});
    }
}

/* TO CHANGE MEMBER STATUS */
export function* doChangeMemberStatus(action){
    const response = yield call(apiChangeMemberStatus, action);
    if(!(response == undefined)){
        yield put({type: CHANGE_MEMBER_STATUS_SUCCESS, response });
    }else{
        yield put({type: CHANGE_MEMBER_STATUS_FAIL, response});
    }
}
/**
 *  get member saga it works for call api function that get member
 * @param action
 */
export function* getMembersSaga(action){
     const response = yield call(getMembersApi, action);
     if(!(response == undefined)){
        yield put({type:FETCH_MEMBER_SUCCESS,response});
     }else{
        yield put({type:FETCH_MEMBER_FAIL,response});
     }
 }


