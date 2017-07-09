import axios from 'axios';
import { AUTH_CONFIG, API_ENDPOINT } from './../headers';
import { clearState } from '../../localstorages/local_storage';

/** insert notification */
export function apiPostNotification(action){
    return axios.post( API_ENDPOINT + "notification",
        JSON.stringify(action.notification.notification) ,
        AUTH_CONFIG(action.notification.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            if(error.response.status){
                if(error.response.status == 401){
                    clearState();
                }else if(error.response.status == 500) {
                    window.location.assign('/server/error')
                }else {
                    window.location.assign('/server/down')
                }
            }else {
                window.location.assign('/server/down')
            }
        });
}

/** count notification */
export function apiCountNotification(action){
    return axios.get( API_ENDPOINT + "notification/count/" + action.notification.userId, AUTH_CONFIG(action.notification.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            if(error.response.status){
                if(error.response.status == 401){
                    clearState();
                }else if(error.response.status == 500) {
                    window.location.assign('/server/error')
                }else {
                    window.location.assign('/server/down')
                }
            }else {
                window.location.assign('/server/down')
            }
        });
}

/** get notification by user id */
export function apiGetAllNotificationsByUserId(action){
    return axios.get( API_ENDPOINT + "notifications/" + action.notification.userId +"?limit=" + action.notification.limit, AUTH_CONFIG(action.notification.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            if(error.response.status){
                if(error.response.status == 401){
                    clearState();
                }else if(error.response.status == 500) {
                    window.location.assign('/server/error')
                }else {
                    window.location.assign('/server/down')
                }
            }else {
                window.location.assign('/server/down')
            }
        });
}

/** update all notification */
export function apiUpdateAllNotification(action){
     return axios.put(API_ENDPOINT+"notification/view", JSON.stringify(action.notification), AUTH_CONFIG(action.notification.token))
        .then(function(response){
            return response.data;
        }).catch(function(error){
            if(error.response.status){
                if(error.response.status == 401){
                    clearState();
                }else if(error.response.status == 500) {
                    window.location.assign('/server/error')
                }else {
                    window.location.assign('/server/down')
                }
            }else {
                window.location.assign('/server/down')
            }
        });
}

/** update dirty notification */
export function apiUpdateDirtyNotification(action){
    return axios.put( API_ENDPOINT + "notification/dirty", JSON.stringify(action.notification), AUTH_CONFIG(action.notification.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            if(error.response.status){
                if(error.response.status == 401){
                    clearState();
                }else if(error.response.status == 500) {
                    window.location.assign('/server/error')
                }else {
                    window.location.assign('/server/down')
                }
            }else {
                window.location.assign('/server/down')
            }
        });
}

/** get notification by id */
export function apiGetNotificationById(action){
    return axios.get( API_ENDPOINT + "notification/" + action.notification.id, AUTH_CONFIG(action.notification.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            if(error.response.status){
                if(error.response.status == 401){
                    clearState();
                }else if(error.response.status == 500) {
                    window.location.assign('/server/error')
                }else {
                    window.location.assign('/server/down')
                }
            }else {
                window.location.assign('/server/down')
            }
        });
}