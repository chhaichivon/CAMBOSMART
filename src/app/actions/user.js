export const USER_SIGN_UP = "USER_SIGN_UP";
export const USER_SING_UP_SUCCESS = "USER_SING_UP_SUCCESS";
export const USER_SIGN_UP_FAIL = "USER_SIGN_UP_FAIL";

export const USER_SIGN_IN = "USER_SIGN_IN";
export const USER_SING_IN_SUCCESS = "USER_SING_IN_SUCCESS";
export const USER_SIGN_IN_FAIL = "USER_SIGN_IN_FAIL";

export const OPEN_SIGN_IN="OPEN_SIGN_IN";
export const CLOSE_SIGN_IN="CLOSE_SIGN_IN";

export const SEND_EMAIL_OR_PHONE = "SEND_USER_EMAIL_OR_PHONE";
export const SEND_EMAIL_OR_PHONE_SUCCESS = "SEND_EMAIL_OR_PHONE_SUCCESS";
export const SEND_EMAIL_OR_PHONE_FAIL = "SEND_EMAIL_OR_PHONE_FAIL";

export const SET_NEW_PASSWORD="SET_NEW_PASSWORD";
export const SET_NEW_PASSWORD_SUCCESS="SET_NEW_PASSWORD_SUCCESS";
export const SET_NEW_PASSWORD_FAIL="SET_NEW_PASSWORD_FAIL";

export const OPEN_SIGN_UP="OPEN_SIGN_UP";
export const CLOSE_SIGN_UP="CLOSE_SIGN_UP";
export const VERIFY_CODE="VERIFY_CODE";
export const VERIFY_CODE_SUCCESS="VERIFY_CODE_SUCCESS";
export const VERIFY_CODE_FAIL="VERIFY_CODE_FAIL";
export const OPEN_VERIFY_CODE='OPEN_VERIFY_CODE';
export const CLOSE_VERIFY_CODE='CLOSE_VERIFY_CODE';
export const VERIFY_SOCIAL_ACCOUNT_PHONE='VERIFY_SOCIAL_ACCOUNT_PHONE';
export const VERIFY_SOCIAL_ACCOUNT_PHONE_SUCCESS='VERIFY_SOCIAL_ACCOUNT_PHONE_SUCCESS';
export const VERIFY_SOCIAL_ACCOUNT_PHONE_FAIL='VERIFY_SOCIAL_ACCOUNT_PHONE_FAIL';

export const CODE_VERITY  ="CODE_VERITY";
export const CODE_VERITY_SUCCESS  ="CODE_VERITY_SUCCESS";
export const CODE_VERITY_FAIL  ="CODE_VERITY_FAIL";

//action for user log out
export const USER_LOG_OUT = 'USER_LOG_OUT';
export const USER_LOG_OUT_SUCCESS = 'USER_LOG_OUT_SUCCESS';
export const USER_LOG_OUT_FAIL = 'USER_LOG_OUT_FAIL';

export const OPEN_VERIFY_PHONE='OPEN_VERIFY_PHONE';
export const CLOSE_VERIFY_PHONE='CLOSE_VERIFY_PHONE';
export const SEND_CODE_AGAIN="SEND_CODE_AGAIN";
export const SEND_CODE_AGAIN_SUCCESS="SEND_CODE_AGAIN_SUCCESS";
export const SEND_CODE_AGAIN_FAIL="SEND_CODE_AGAIN_FAIL";

//FORGET PASSWORD
export const OPEN_FORGET_PASSWORD = 'OPEN_FORGET_PASSWORD';
export const CLOSE_FORGET_PASSWORD = 'CLOSE_FORGET_PASSWORD';
//NEW PASSWORD
export const OPEN_NEW_PASSWORD = 'OPEN_NEW_PASSWORD';
export const CLOSE_NEW_PASSWORD = 'CLOSE_NEW_PASSWORD';

//update profile
export const UPDATE_PROFILE="UPDATE_PROFILE";
export const UPDATE_PROFILE_SUCCESS="UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAIL="UPDATE_PROFILE_FAIL";
export const GET_USER_INFO="GET_USER_INFO";
export const GET_USER_INFO_SUCCESS="GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL="GET_USER_INFO_FAIL";

export function userLogOut(token){
    return{
        type: USER_LOG_OUT,
        token
    }
}

export function userSingInAction(user){
    return{
        type:USER_SIGN_IN,
        user
    }
}
export function userSingUpAction(user){
    return{
        type: USER_SIGN_UP,
        user: user
    }
}

export function socialSignUp(){
    return {
        type: 'something'
    }
}

/* This action is getting email or password when user forget their password */
export function actionSendMailOrPhone(contact){
    //console.log("action forget password"+value)
    return {
        type:SEND_EMAIL_OR_PHONE,
        contact: contact
    }
}
/* This function is used to update new password */
export function actionSetNewPassword(new_password){
    //console.log("action set new password"+value)
    return {
        type:SET_NEW_PASSWORD,
        new_password: new_password
    }
}

export function actionModalSignIn(check) {
    if(check){
        return{
            type: OPEN_SIGN_IN,
            check
        }
    }else {
        return{
            type: CLOSE_SIGN_IN,
            check
        }
    }
}
export function actionModalSignUp(check) {
    if(check){
        return{
            type: OPEN_SIGN_UP,
            check
        }
    }else {
        return{
            type: CLOSE_SIGN_UP,
            check
        }
    }
}

export function actionModalVerifiedPhone(check) {
    if(check){
        return{
            type: OPEN_VERIFY_PHONE,
            check
        }
    }else {
        return{
            type: CLOSE_VERIFY_PHONE,
            check
        }
    }
}

export function actionModalVerifiedCode(check, emailOrPhone) {
    if(check){
        return{
            type: OPEN_VERIFY_CODE,
            emailOrPhone: emailOrPhone
        }
    }else {
        return{
            type: CLOSE_VERIFY_CODE,
            check
        }
    }
}

export function actionModalForgetPassword(check){
    if(check){
        return{
            type: OPEN_FORGET_PASSWORD
        }
    }else {
        return{
            type: CLOSE_FORGET_PASSWORD
        }
    }
}

export function actionModalNewPassword(check){
    if(check){
        return{
            type: OPEN_NEW_PASSWORD
        }
    }else {
        return{
            type: CLOSE_NEW_PASSWORD
        }
    }
}


export function actionUpdateProfile(user){
    //  console.log("action hhhh",user);//can work
    return{
        type:UPDATE_PROFILE,
        user
    }
}

export function actionGetUserInfo(contact){
    return{
        type:GET_USER_INFO,
        contact
    }

}


export function userVerifyCodeAction(code){
    console.log(code);
    return{
        type: CODE_VERITY,
        code: code
    }
}