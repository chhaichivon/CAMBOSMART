import axios from 'axios';
import { CONFIG, AUTH_CONFIG, API_ENDPOINT } from './../headers';
import { clearLoginAdmin } from './../../localstorages/local_storage';

/**
 * Function fetchMemberApi to get list of members from rest api
 * @param action
 * @returns {Promise.<T>}
 */
export function fetchMembersApi(action){
    return axios.post(API_ENDPOINT+"users/members?start="+action.member.start+"&limit="+action.member.limit, JSON.stringify(action.member.user),AUTH_CONFIG(action.member.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            if(error.response.status){
                if(error.response.status == 401){
                    clearLoginAdmin();
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
export function fetchMemberDetailApi(action){
    return axios.get(API_ENDPOINT+"users/member/"+action.id,
        {
            headers:{
                'Content-Type': 'application/json',
                'X-Api-Key': 'AbCdEfGhIjK1',
                'X-Auth-Token': sessionStorage.getItem('admin_token')//action.member.token
            }
        }
    ).then(function (response) {
            return response.data;
        }).catch(function(error){
            /*if(error.response.status){
                if(error.response.status == 401){
                    clearLoginAdmin();
                }else if(error.response.status == 500) {
                    window.location.assign('/server/error')
                }else {
                    window.location.assign('/server/down')
                }
            }else {
                window.location.assign('/server/down')
            }*/
        });
}
/**
 * Function blockMerchantApi to update status of merchant ot -1
 * @param action
 * @returns {Promise.<T>}
 */
export function updateMemberStatusApi(action){
    return axios.post(API_ENDPOINT+"users/member/block", JSON.stringify(action.member.block), AUTH_CONFIG(action.member.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            if(error.response.status){
                if(error.response.status == 401){
                    clearLoginAdmin();
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

/**Oudam Visitor view counter**/

export function countViewWebsiteApi() {
    return axios.post(API_ENDPOINT + 'visitor', {}, CONFIG)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            if (error.response.status) {
                if (error.response.status == 500) {
                    window.location.assign('/server/error')
                } else {
                    window.location.assign('/server/down')
                }
            } else {
                window.location.assign('/server/down')
            }
        });
}

export function fetchViewWebsiteApi(action) {
    return axios.get(API_ENDPOINT + `visitors?year=${action.visitor.year}&month=${action.visitor.month}&day=${action.visitor.day}`, CONFIG)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error.message);
            if (error.response.status) {
                if (error.response.status == 500) {
                    window.location.assign('/server/error')
                } else {
                    window.location.assign('/server/down')
                }
            } else {
                window.location.assign('/server/down')
            }
        });
}
