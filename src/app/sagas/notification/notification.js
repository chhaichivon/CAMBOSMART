
import { call, put } from 'redux-saga/effects';
import * as actionType from './../../actions/notification/notification';
import { apiPostNotification, apiCountNotification, apiGetAllNotificationsByUserId, apiGetNotificationById, apiUpdateAllNotification, apiUpdateDirtyNotification } from './../../api/notification/notification';

/** insert notification */
export function* sagaPostNotification(action){
    const response = yield call(apiPostNotification, action);
    if(!(response == undefined)){
        yield put({type: actionType.POST_NOTIFICATION_SUCCESS, response });
    }else{
        yield put({type: actionType.POST_NOTIFICATION_FAIL, response});
    }
}

/** count notification */
export function* sagaCountNotification(action){
    const response = yield call(apiCountNotification, action);
    if(!(response == undefined)){
        yield put({type: actionType.COUNT_NOTIFICATION_SUCCESS, response });
    }else{
        yield put({type: actionType.COUNT_NOTIFICATION_FAIL, response});
    }
}

/** get all notification by user id */
export function* sagaGetAllNotificationsByUserId(action){
    const response = yield call(apiGetAllNotificationsByUserId, action);
    if(!(response == undefined)){
        yield put({type: actionType.GET_ALL_NOTIFICATIONS_SUCCESS, response});
    }else{
        yield put({type: actionType.GET_ALL_NOTIFICATIONS_FAIL, response});
    }
}

/** update all notification */
export function* sagaUpdateAllNotification(action){
    const response = yield call(apiUpdateAllNotification, action);
    if(!(response == undefined)){
        yield put({type: actionType.UPDATE_ALL_NOTIFICATION_SUCCESS, response });
    }else{
        yield put({type: actionType.UPDATE_ALL_NOTIFICATION_FAIL, response});
    }
}

/** update dirty notification */
export function* sagaUpdateDirtyNotification(action){
    const response = yield call(apiUpdateDirtyNotification, action);
    if(!(response == undefined)){
        yield put({type: actionType.UPDATE_DIRTY_NOTIFICATION_SUCCESS, response });
    }else{
        yield put({type: actionType.UPDATE_DIRTY_NOTIFICATION_FAIL, response});
    }
}

/** get notification by id */
export function* sagaGetNotificationById(action){
    const response = yield call(apiGetNotificationById, action);
    if(!(response == undefined)){
        yield put({type: actionType.GET_NOTIFICATION_SUCCESS, response });
    }else{
        yield put({type: actionType.GET_NOTIFICATION_FAIL, response});
    }
}