import axios from 'axios';
import {CONFIG, AUTH_CONFIG, API_ENDPOINT } from '../../headers';
import {clearLoginAdmin} from './../../../localstorages/local_storage';


export function insertCategoryAdvertisementApi(action) {
    return axios.post(API_ENDPOINT+`admin/category-advertisement`, JSON.stringify(action.advertisement.advertisement), AUTH_CONFIG(action.advertisement.token))
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

export function updateCategoryAdvertisementApi(action) {
    return axios.put(API_ENDPOINT+`admin/category-advertisement`, JSON.stringify(action.advertisement.advertisement), AUTH_CONFIG(action.advertisement.token))
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

export function deleteCategoryAdvertisementApi(action) {
    return axios.put(API_ENDPOINT+`admin/category-advertisement/${action.advertisement.id}`, {}, AUTH_CONFIG(action.advertisement.token))
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

export function fetchCategoryAdvertisementApi(action) {
    return axios.get(API_ENDPOINT+`admin/category-advertisement/${action.advertisement.id}`, AUTH_CONFIG(action.advertisement.token))
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

export function fetchCategoryAdvertisementsApi(action) {
    return axios.get(API_ENDPOINT+`admin/category-advertisements`, AUTH_CONFIG(action.token))
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

export function fetchScheduleCategoryAdvertisementApi(action) {
    return axios.get(API_ENDPOINT+`admin/category-advertisements/schedule?id=${action.advertisement.id}`, AUTH_CONFIG(action.advertisement.token))
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

export function fetchCategoryAdvertisersApi(action) {
    return axios.post(API_ENDPOINT+`admin/category-advertisers?page=${action.advertiser.start}&limit=${action.advertiser.limit}`, JSON.stringify(action.advertiser.advertiser), AUTH_CONFIG(action.advertiser.token))
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

export function fetchCategoryAdvertiserApi(action) {
    return axios.get(API_ENDPOINT+`admin/category-advertisers/${action.advertiser.id}/${action.advertiser.startDate}/${action.advertiser.expireDate}`, AUTH_CONFIG(action.advertiser.token))
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

export function displayCategoryAdvertisersApi() {
    return axios.get(API_ENDPOINT+'category-advertisements/display', CONFIG)
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

/**---------------------Advertiser---------------------------**/

export function insertCategoryAdvertiserApi(action) {
    return axios.post(API_ENDPOINT+'admin/category-advertisement/advertiser', JSON.stringify(action.advertiser.advertiser), AUTH_CONFIG(action.advertiser.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            /*if (error.response.status) {
                if (error.response.status == 401) {
                    clearLoginAdmin();
                } else if (error.response.status == 500) {
                    window.location.assign('/server/error')
                } else {
                    window.location.assign('/server/down')
                }
            } else {
                window.location.assign('/server/down')
            }*/
        });
}