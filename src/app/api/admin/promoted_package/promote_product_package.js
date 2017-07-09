import axios from 'axios';
import {CONFIG, API_ENDPOINT} from './../../headers';
import { clearState } from './../../../localstorages/local_storage';

/* SAVE PROMOTED PACKAGE */
export function apiSavePromotedProductPackage(action){
    return axios.post(API_ENDPOINT+"admin/package",JSON.stringify(action.promoted),
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

/* LIST PROMOTED PACKAGE */
export function apiListPromotedProductPackage(action){
    return axios.get(API_ENDPOINT+"admin/packages/"+action.packaged.page+"/"+action.packaged.limit+"?typePromote="+action.packaged.typePromote,
        {
            headers:{
                'Content-Type': 'application/json',
                'X-Api-Key': 'AbCdEfGhIjK1',
                'X-Auth-Token': sessionStorage.getItem('admin_token')//action.member.token
            }
        }
        )
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

/* ADMIN GET PROMOTED PACKAGE */
export function apiGetPromotedProductPackage(action){
    return axios.get(API_ENDPOINT+"admin/package/"+action.id,
        {
            headers:{
                'Content-Type': 'application/json',
                'X-Api-Key': 'AbCdEfGhIjK1',
                'X-Auth-Token': sessionStorage.getItem('admin_token')//action.member.token
            }
        }
        )
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

/* ADMIN UPDATE PROMOTED PACKAGE */
export function apiUpdatePromotedProductPackage(action){
    return axios.put(API_ENDPOINT+"admin/package",
        JSON.stringify(action.promoted),
        {
            headers:{
                'Content-Type': 'application/json',
                'X-Api-Key': 'AbCdEfGhIjK1',
                'X-Auth-Token': sessionStorage.getItem('admin_token')//action.member.token
            }
        }
        )
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

/* DELETE PROMOTED PACKAGE */
export function apiDeletePromotedProductPackage(action){
    return axios.delete(API_ENDPOINT+"admin/package/"+action.id,
        {
            headers:{
                'Content-Type': 'application/json',
                'X-Api-Key': 'AbCdEfGhIjK1',
                'X-Auth-Token': sessionStorage.getItem('admin_token')//action.member.token
            }
        }
        )
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

/* ADMIN LIST PROMOTED PRODUCTS EXPIRED */
export function apiListPromotedProductsExpired(action){
    return axios.get(API_ENDPOINT+"admin/promote/expired/"+action.products.page+"/"+action.products.limit,
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

/* ADMIN UPDATE PROMOTED PRODUCTS EXPIRED */
export function apiUpdatePromotedProductExpired(action){
    return axios.put(API_ENDPOINT+"admin/promote/expired",
        JSON.stringify(action.promoted),
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