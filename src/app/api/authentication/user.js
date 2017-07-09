import axios from 'axios';
import {CONFIG, LOGOUT, API_ENDPOINT} from './../headers';

/* This API is used for user forget password */
export function apiSendMailOrPhone(action) {
    return axios.post(API_ENDPOINT + "users/forgetpassword",
        JSON.stringify(action.contact),
        CONFIG)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log("error API", error)
        });
}

/* This API is used for set new password */
export function apiSetNewPassword(action) {
    return axios.post(API_ENDPOINT + "users/resetpassword",
        JSON.stringify(action.new_password),
        CONFIG)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log("error API", error)
        });
}


export function userSignInApi(action) {
    return axios.post(API_ENDPOINT + "users/signin", JSON.stringify(action.user), CONFIG)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
}

export function userSignUpApi(action) {
    return axios.post(API_ENDPOINT + "users/personal/signup", JSON.stringify(action.user), CONFIG)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log("error API", error)
        });
}

export function verifyCodeApi(action) {
    return axios.post(API_ENDPOINT + "users/verification/" + action.code, JSON.stringify(action.code), CONFIG)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log("error API", error)
        });
}


export function verifySocialAccountPhoneApi(action) {
    return axios.post(API_ENDPOINT + "users/social/phone", JSON.stringify(action.user), CONFIG)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log("error API", error)
        });
}

export function getLogout(action) {
    return axios.post(API_ENDPOINT + "users/signout", {}, {
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'AbCdEfGhIjK1',
            'X-Auth-Token': action.token
        }
    }).then(function (response) {
        return response.data.data;
    }).catch(function (error) {
        console.log("error API", error)
    });
}

export function sendCodeAgainApi(action){
    console.log("API Resend code",action);
    return axios.post(API_ENDPOINT + "users/resendcode", JSON.stringify(action.emailOrPhone), CONFIG)
        .then(function (response) {
            console.log("API Resend response",response.data);
            return response.data;
        }).catch(function (error) {
            console.log("error API", error)
        });
}


export function updateProfileApi(action){
    return axios.put(API_ENDPOINT + "users/profile/" + action.user.email+"/"+action.user.phone, JSON.stringify(action.user), CONFIG)
        .then(function (response) {
            return response.data;
            console.log("api", response.data)
        }).catch(function (error) {
            console.log("error API", error)
        });
}

/*
export function getUserInfoApi(action){
    if(action.contact.email==""){
        action.contact.email="null"
    }
    if(action.contact.phone==""){
        action.contact.phone="null"
    }
    return axios.put(API_ENDPOINT + "user/" + action.contact.email+"/"+action.contact.phone, JSON.stringify(action.contact), CONFIG)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log("error API", error)
        });
}*/