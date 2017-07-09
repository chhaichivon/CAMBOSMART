import axios from 'axios';
import { AUTH_CONFIG, API_ENDPOINT } from '../../headers';
import { clearState } from './../../../localstorages/local_storage';

/**
 * Function fetchMerchantsApi to get list of merchants from rest api
 * @param action
 * @returns {Promise.<T>}
 */
export function fetchMerchantsApi(action){
    return axios.post(API_ENDPOINT+"users/members?start="+action.member.start+"&limit="+action.member.limit, JSON.stringify(action.member.user),AUTH_CONFIG(action.member.token))
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
/**
 * Function fetchMerchantDetailApi to get merchant detail from rest api
 * @param action
 * @returns {Promise.<T>}
 */
export function fetchMerchantDetailApi(action){
    return axios.get(API_ENDPOINT+"users/member/"+action.merchant.id, AUTH_CONFIG(action.merchant.token))
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
/**
 * Function blockMerchantApi to update status of merchant ot -1
 * @param action
 * @returns {Promise.<T>}
 */
export function blockMerchantApi(action){
    return axios.put(API_ENDPOINT+"users/member/block", JSON.stringify(action.block.member), AUTH_CONFIG(action.block.token))
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

/* ADMIN LIST EXPIRED MERCHANTS */
export function apiListExpiredMerchants(action){
    return axios.get(API_ENDPOINT+"admin/merchants/expired/"+action.expired.page+"/"+action.expired.limit,
        {
            headers:{
                'Content-Type': 'application/json',
                'X-Api-Key': 'AbCdEfGhIjK1',
                'X-Auth-Token': sessionStorage.getItem('admin_token')
            }
        })
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

/* ADMIN UPDATE EXPIRED MERCHANTS */
export function apiUpdateExpiredMerchants(action){
    return axios.put(API_ENDPOINT+"admin/merchants/expired",
        {},
        {
            headers:{
                'Content-Type': 'application/json',
                'X-Api-Key': 'AbCdEfGhIjK1',
                'X-Auth-Token': sessionStorage.getItem('admin_token')
            }
        })
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

/* CHECK MERCHANT EXPIRED */
export function apiCheckMerchantExpired(action){
    return axios.get(API_ENDPOINT+"admin/merchant/"+action.user.userId,
        AUTH_CONFIG(action.user.token))
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


/* ADMIN COUNT MERCHANT MEMBERS */
export function apiAdminCountMerchantMembers(action){
    return axios.get(API_ENDPOINT + "admin/count/member/merchant",
        AUTH_CONFIG(action.member.token))
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