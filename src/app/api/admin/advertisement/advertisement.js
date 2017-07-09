import axios from 'axios';
import { CONFIG,AUTH_CONFIG, API_ENDPOINT } from '../../headers';
import { clearLoginAdmin } from './../../../localstorages/local_storage';


export function validateAdvertisementApi(action) {
    return axios.get(API_ENDPOINT+`admin/advertisements/validate?page=${action.advertisement.page}`, AUTH_CONFIG(action.advertisement.token))
        .then(function (response) {
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

export function insertAdvertisementApi(action) {
    return axios.post(API_ENDPOINT+"admin/advertisement/add", JSON.stringify(action.advertisement.advertisement), AUTH_CONFIG(action.advertisement.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            if (error.response.status) {
                if (error.response.status == 401) {
                    clearLoginAdmin();
                } else if (error.response.status == 500) {
                    window.location.assign('/server/error')
                } else {
                    window.location.assign('/server/down')
                }
            } else {
                window.location.assign('/server/down')
            }
        });
}

export function updateAdvertisementApi(action) {
    return axios.post(API_ENDPOINT+"admin/advertisement/update", JSON.stringify(action.advertisement.advertisement), AUTH_CONFIG(action.advertisement.token))
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

export function deleteAdvertisementApi(action) {
    return axios.post(API_ENDPOINT+`admin/advertisement/${action.advertisement.id}/delete`,{}, AUTH_CONFIG(action.advertisement.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            if (error.response.status) {
                if (error.response.status == 401) {
                    clearLoginAdmin();
                } else if (error.response.status == 500) {
                    window.location.assign('/server/error')
                } else {
                    window.location.assign('/server/down')
                }
            } else {
                window.location.assign('/server/down')
            }
        });
}

export function fetchAdvertisementsApi(action) {
    return axios.get(API_ENDPOINT+`admin/advertisements/page/${action.advertisement.page}`, AUTH_CONFIG(action.advertisement.token))
        .then(function (response) {
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

export function fetchAdvertisementApi(action) {
    return axios.get(API_ENDPOINT+`admin/advertisements/${action.advertisement.id}`, AUTH_CONFIG(action.advertisement.token))
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

export function scheduleAdvertisementApi(action) {
    return axios.get(API_ENDPOINT+`admin/advertisement/schedule?page=${action.advertisement.page}&location=${action.advertisement.location}&start=${action.advertisement.start}&limit=${action.advertisement.limit}`, AUTH_CONFIG(action.advertisement.token))
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

export function displayAdvertisementsApi() {
    return axios.get(API_ENDPOINT+'advertisements',CONFIG)
        .then(function (response) {
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

