import axios from 'axios';
import {CONFIG, API_ENDPOINT} from './../../../headers';
import { clearState } from './../../../../localstorages/local_storage';

/* ADMIN LIST BOOT PRODUCT INCOME GRAND */
export function apiListBootProductIncomeGrand(action){
    return axios.get(API_ENDPOINT+"admin/report/bootproductincomes/"+action.bootIncome.startDate+"/"+action.bootIncome.endDate,
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

/* ADMIN LIST BOOT PRODUCT INCOME DETAIL */
export function apiListBootProductIncomeDetail(action){
    return axios.post(API_ENDPOINT+"admin/report/bootproductincome",
        JSON.stringify(action.bootIncome),
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

/* ADMIN LIST MEMBER PROMOTE INCOME DETAIL */
export function apiListMemberPromoteIncomeDetail(action){
    return axios.post(API_ENDPOINT+"admin/report/promotememberincome/"+action.promote.page+"/"+action.promote.limit,
        JSON.stringify(action.promote.promoted),
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

/* ADMIN LIST GRAND TOTAL PROMOTE MEMBER INCOME */
export function apiListMemberPromoteIncomeGrand(action){
    return axios.post(API_ENDPOINT+"admin/report/promotememberincome",
        JSON.stringify(action.promote),
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

/* LIST ADVERTISER INCOME DETAIL */
export function apiListAdvertiserIncomeDetail(action){
    return axios.post(API_ENDPOINT+"admin/report/advertiserincomes/"+action.advertiser.page+"/"+action.advertiser.limit,
        JSON.stringify(action.advertiser.advertisers),
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
/* ADMIN LIST ADVERTISER INCOME GRAND */
export function apiListAdvertiserIncomeGrand(action){
    return axios.post(API_ENDPOINT+"admin/report/advertiserincomes",
        JSON.stringify(action.advertiser),
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

/* ADMIN LIST CATEGORY INCOME REPORT */
export function apiListCategoryIncome(action){
    return axios.get(API_ENDPOINT+"admin/report/categoryincomes"
            +"/"+action.income.startDate+"/"+action.income.endDate+"?name="+action.income.name,
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
