import { call, put } from 'redux-saga/effects';
import {
    SAVE_PROMOTE_USER_PACKAGE_SUCCESS,
    SAVE_PROMOTE_USER_PACKAGE_FAIL,
    LIST_PROMOTE_USER_PACKAGE_SUCCESS,
    LIST_PROMOTE_USER_PACKAGE_FAIL,
    GET_PROMOTE_USER_PACKAGE_SUCCESS,
    GET_PROMOTE_USER_PACKAGE_FAIL,
    DELETE_PROMOTE_USER_PACKAGE_SUCCESS,
    DELETE_PROMOTE_USER_PACKAGE_FAIL,
    UPDATE_PROMOTE_USER_PACKAGE_SUCCESS,
    UPDATE_PROMOTE_USER_PACKAGE_FAIL,
    LIST_ALL_PROMOTE_USER_PACKAGE_SUCCESS,
    LIST_ALL_PROMOTE_USER_PACKAGE_FAIL
} from './../../../actions/admin/promote_user_package/promote_user_package';
import {
    apiSavePromotedUSerPackage,
    apiListPromotedUSerPackage,
    apiGetPromotedUSerPackage,
    apiDeletePromotedUSerPackage,
    apiUpdatePromotedUSerPackage,
    apiListAllPromotedUSerPackage
} from './../../../api/admin/promote_user_package/promote_user_package';

export function* doSavePromoteUserPackage(action){
    const response = yield call(apiSavePromotedUSerPackage, action);
    if(!(response == undefined)){
        yield put({type: SAVE_PROMOTE_USER_PACKAGE_SUCCESS, response });
    }else{
        yield put({type: SAVE_PROMOTE_USER_PACKAGE_FAIL, response});
    }
}

export function* doListPromoteUserPackage(action){
    const response = yield call(apiListPromotedUSerPackage, action);
    if(!(response == undefined)){
        yield put({type: LIST_PROMOTE_USER_PACKAGE_SUCCESS, response });
    }else{
        yield put({type: LIST_PROMOTE_USER_PACKAGE_FAIL, response});
    }
}

export function* doListAllPromoteUserPackage(action){
    const response = yield call(apiListAllPromotedUSerPackage, action);
    if(!(response == undefined)){
        yield put({type: LIST_ALL_PROMOTE_USER_PACKAGE_SUCCESS, response });
    }else{
        yield put({type: LIST_ALL_PROMOTE_USER_PACKAGE_FAIL, response});
    }
}

export function* doGetPromoteUserPackage(action){
    const response = yield call(apiGetPromotedUSerPackage, action);
    if(!(response == undefined)){
        yield put({type: GET_PROMOTE_USER_PACKAGE_SUCCESS, response });
    }else{
        yield put({type: GET_PROMOTE_USER_PACKAGE_FAIL, response});
    }
}

export function* doDeletePromoteUserPackage(action){
    const response = yield call(apiDeletePromotedUSerPackage, action);
    if(!(response == undefined)){
        yield put({type: DELETE_PROMOTE_USER_PACKAGE_SUCCESS, response });
    }else{
        yield put({type: DELETE_PROMOTE_USER_PACKAGE_FAIL, response});
    }
}

export function* doUpdatePromoteUserPackage(action){
    const response = yield call(apiUpdatePromotedUSerPackage, action);
    if(!(response == undefined)){
        yield put({type: UPDATE_PROMOTE_USER_PACKAGE_SUCCESS, response });
    }else{
        yield put({type: UPDATE_PROMOTE_USER_PACKAGE_FAIL, response});
    }
}