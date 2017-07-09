import { call, put } from 'redux-saga/effects';
import {
        USER_SING_IN_SUCCESS,
        USER_SIGN_IN_FAIL,
        USER_SING_UP_SUCCESS,
        USER_SIGN_UP_FAIL,
        SEND_EMAIL_OR_PHONE_SUCCESS,
        SEND_EMAIL_OR_PHONE_FAIL,
        SET_NEW_PASSWORD_SUCCESS,
        SET_NEW_PASSWORD_FAIL,
        VERIFY_CODE_SUCCESS,
        VERIFY_CODE_FAIL,
        VERIFY_SOCIAL_ACCOUNT_PHONE_FAIL,
        VERIFY_SOCIAL_ACCOUNT_PHONE_SUCCESS,
        USER_LOG_OUT_SUCCESS,
        USER_LOG_OUT_FAIL,
        SEND_CODE_AGAIN_SUCCESS,
        SEND_CODE_AGAIN_FAIL,
        UPDATE_PROFILE_SUCCESS,
        UPDATE_PROFILE_FAIL,
        GET_USER_INFO_SUCCESS,
        GET_USER_INFO_FAIL
    } from './../../actions/user';
import {
    apiSendMailOrPhone,
    apiSetNewPassword,
    userSignInApi,
    userSignUpApi,
    verifyCodeApi,
    verifySocialAccountPhoneApi,
    getLogout,
    sendCodeAgainApi,
    getMembersApi,
    updateProfileApi,
    getUserInfoApi
} from './../../api/authentication/user';

export function* userSignInSaga(action){
    try{
        const response = yield call(userSignInApi,action);
        if(!(response==undefined)){
            yield put({type:USER_SING_IN_SUCCESS,response});
        }
    }catch(error){
        console.log(("response user signin saga",error));
        yield put({type:USER_SIGN_IN_FAIL,response});
    }
}
export function* userSignUpSaga(action){
    const response = yield call(userSignUpApi, action);
    if(!(response==undefined)){
        yield put({type:USER_SING_UP_SUCCESS,response});
    }else{
        yield put({type:USER_SIGN_UP_FAIL,response});
    }

}
/* This function call api for send email or phone when user forget password */
export function* doSendMailOrPhone(action){
    const response = yield call(apiSendMailOrPhone, action);
    if(!(response == undefined)){
        yield put({type: SEND_EMAIL_OR_PHONE_SUCCESS, response });
    }else{
        yield put({type: SEND_EMAIL_OR_PHONE_FAIL, response});
    }
}
export function* resetUserPasswordSaga(action){
    try{
        const response=yield call(apiSetNewPassword,action)
        yield put({type:SET_NEW_PASSWORD_SUCCESS,response});
        //console.log("Saga action",JSON.stringify(action));
    }catch (error){
        yield put({type:SET_NEW_PASSWORD_FAIL,response})
    }

}

export function* verifyCode(action){
    const response = yield call(verifyCodeApi, action);
    if(!(response == undefined)){
        yield put({type:VERIFY_CODE_SUCCESS, response });
    }else{
        yield put({type: VERIFY_CODE_FAIL, response});
    }
}


export function* verifySocialAccount(action){
    const response = yield call(verifySocialAccountPhoneApi, action);
    if(!(response == undefined)){
        yield put({type: VERIFY_SOCIAL_ACCOUNT_PHONE_SUCCESS, response });
    }else{
        yield put({type: VERIFY_SOCIAL_ACCOUNT_PHONE_FAIL, response});
    }
}

export function* userLogout(action){
    const response = yield call(getLogout, action);
    if(!(response == undefined)){
        yield put({type: USER_LOG_OUT_SUCCESS, response });
    }else{
        yield put({type: USER_LOG_OUT_FAIL, response});
    }
}


export function* sendCodeAgainSaga(action){
    const response = yield call(sendCodeAgainApi, action);
    if(!(response == undefined)){
        yield put({type: SEND_CODE_AGAIN_SUCCESS, response });
    }else{
        yield put({type: SEND_CODE_AGAIN_FAIL, response});
    }
}



export function* updateProfileSaga(action){
    const response=yield call(updateProfileApi,action);
    if(!(response==undefined)){
        yield put({type:UPDATE_PROFILE_SUCCESS,response})
    }else{
        yield put({type:UPDATE_PROFILE_FAIL,response})
    }
}

export function* getUserInfoSaga(action){
    const response=yield call(getUserInfoApi,action);
    if(!(response==undefined)){
        yield put({type:GET_USER_INFO_SUCCESS,response})
    }else{
        yield put({type:GET_USER_INFO_FAIL,response})
    }
}