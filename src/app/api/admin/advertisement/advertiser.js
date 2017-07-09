import axios from 'axios';
import { AUTH_CONFIG, API_ENDPOINT } from '../../headers';
import { clearLoginAdmin } from './../../../localstorages/local_storage';

export function insertAdvertiserApi(action) {
    return axios.post(API_ENDPOINT+'admin/advertiser/add', JSON.stringify(action.advertiser.advertiser), AUTH_CONFIG(action.advertiser.token))
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

export function updateAdvertiserApi(action) {
    return axios.post(API_ENDPOINT+'admin/advertiser/update', JSON.stringify(action.advertiser.advertiser), AUTH_CONFIG(action.advertiser.token))
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

export function blockAdvertiserApi(action) {
    return axios.post(API_ENDPOINT+ `admin/advertiser/${action.advertiser.id}/${action.advertiser.check}/block`, {}, AUTH_CONFIG(action.advertiser.token))
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

export function renewAdvertiserApi(action) {
    return axios.post(API_ENDPOINT+ 'admin/advertisement/renew-ads', JSON.stringify(action.advertiser.advertiser), AUTH_CONFIG(action.advertiser.token))
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

export function fetchAdvertiserApi(action) {
    return axios.post(API_ENDPOINT+ 'admin/advertiser', JSON.stringify(action.advertiser.advertiser), AUTH_CONFIG(action.advertiser.token))
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

export function fetchAdvertisersApi(action) {
    return axios.post(API_ENDPOINT+ `admin/advertisers?start=${action.advertiser.start}&limit=${action.advertiser.limit}`, JSON.stringify(action.advertiser.advertiser), AUTH_CONFIG(action.advertiser.token))
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