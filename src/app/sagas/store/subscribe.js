
import { call, put } from 'redux-saga/effects';
import * as actionType from './../../actions/store/subscribe';
import { apiPostSubscribe, apiGetSubscribeByStoreIdAndUserId, apiDeleteSubscribe } from './../../api/store/subscribe';

/** insert subscribe */
export function* sagaPostSubscribe(action){
    const response = yield call(apiPostSubscribe, action);
    if(!(response == undefined)){
        yield put({type: actionType.POST_SUBSCRIBE_SUCCESS, response });
    }else{
        yield put({type: actionType.POST_SUBSCRIBE_FAIL, response});
    }
}

/** get subscribe store by store id and user id */
export function* sagaGetSubscribeByStoreIdAndUserId(action){
    const response = yield call(apiGetSubscribeByStoreIdAndUserId, action);
    if(!(response == undefined)){
        yield put({type: actionType.GET_SUBSCRIBE_SUCCESS, response });
    }else{
        yield put({type: actionType.GET_SUBSCRIBE_FAIL, response});
    }
}

/** delete subscribe */
export function* sagaDeleteSubscribe(action){
    const response = yield call(apiDeleteSubscribe, action);
    if(!(response == undefined)){
        yield put({type: actionType.DELETE_SUBSCRIBE_SUCCESS, response });
    }else{
        yield put({type: actionType.DELETE_SUBSCRIBE_FAIL, response});
    }
}