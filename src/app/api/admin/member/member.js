import axios from 'axios';
import { AUTH_CONFIG, API_ENDPOINT } from './../../headers';
import { clearState } from './../../../localstorages/local_storage';

/* TO PROMOTE MEMBER TO BE MERCHANT */
export function promoteMemberApi(action){
    return axios.post(API_ENDPOINT + "users/member/promote",
        JSON.stringify(action.member.promote),
        AUTH_CONFIG(action.member.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
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

/* ADMIN DETAIL MEMBER */
export function apiAdminDetailMember(action){
    return axios.get(API_ENDPOINT+"users/member/"+action.id,
        {
            headers:{
                'Content-Type': 'application/json',
                'X-Api-Key': 'AbCdEfGhIjK1',
                'X-Auth-Token': sessionStorage.getItem('admin_token')
            }
        }
    ).then(function (response) {
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

/* ADMIN LIST MEMBER REQUEST */
export function apiAdminListMemberRequest(action){
    return axios.post(API_ENDPOINT + "users/member/listrequest/"+action.request.page+"/"+action.request.limit,
                      JSON.stringify(action.request.requested),
                      AUTH_CONFIG(action.request.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
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

/* ADMIN DELETE MEMBER REQUEST */
export function apiAdminDeleteMemberRequest(action){
    return axios.delete(API_ENDPOINT + "users/member/request/"+action.id,
        AUTH_CONFIG(sessionStorage.getItem('admin_token')))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
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

/* ADMIN LISTS MEMBER REQUEST EXPIRED */
export function apiAdminListMemberRequestsExpired(action){
    return axios.get(API_ENDPOINT+"admin/users/expired/"+action.expired.page+"/"+action.expired.limit,
        {
            headers:{
                'Content-Type': 'application/json',
                'X-Api-Key': 'AbCdEfGhIjK1',
                'X-Auth-Token': sessionStorage.getItem('admin_token')
            }
        }
    ).then(function (response) {
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

/* ADMIN DELETE MEMBER REQUEST EXPIRED */
export function apiAdminDeleteMemberRequestsExpired(action){
    return axios.delete(API_ENDPOINT + "admin/users/expired",
        {
            headers:{
                'Content-Type': 'application/json',
                'X-Api-Key': 'AbCdEfGhIjK1',
                'X-Auth-Token': sessionStorage.getItem('admin_token')
            }
        }
        )
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
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

/* ADMIN COUNT NORMAL MEMBERS */
export function apiAdminCountNormalMembers(action){
    return axios.get(API_ENDPOINT + "admin/count/member/normal",
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