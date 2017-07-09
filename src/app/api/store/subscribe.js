import axios from 'axios';
import { AUTH_CONFIG, API_ENDPOINT } from './../headers';
import { clearState } from '../../localstorages/local_storage';

/** insert subscribe */
export function apiPostSubscribe(action){
    return axios.post( API_ENDPOINT + "store/subscirbe",
        JSON.stringify(action.subscribe.subscribe) ,
        AUTH_CONFIG(action.subscribe.token))
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

/** get subscribe store by store id and user id */
export function apiGetSubscribeByStoreIdAndUserId(action){
    return axios.get( API_ENDPOINT + "store/subscirbe/" + action.subscribe.store_id + "/" + action.subscribe.user_id, AUTH_CONFIG(action.subscribe.token))
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

/** delete subscribe */
export function apiDeleteSubscribe(action){
    return axios.delete( API_ENDPOINT + "store/subscirbe/" + action.subscribe.id, AUTH_CONFIG(action.subscribe.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            // if(error.response.status){
            //     if(error.response.status == 401){
            //         clearState();
            //     }else if(error.response.status == 500) {
            //         window.location.assign('/server/error')
            //     }else {
            //         window.location.assign('/server/down')
            //     }
            // }else {
            //     window.location.assign('/server/down')
            // }
        });
}