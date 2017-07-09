import axios from 'axios';
import {CONFIG, API_ENDPOINT, AUTH_CONFIG} from './../../headers';
import { clearState } from './../../../localstorages/local_storage';

/* ADMIN LIST PRODUCTS */
export function apiAdminListProduct(action){
    return axios.post(API_ENDPOINT+"products/listproducts/"+action.products.page+"/"+action.products.limit
                     ,JSON.stringify(action.products.product),
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

/* ADMIN GET PRODUCT */
export function apiAdminGetProduct(action){
    return axios.get(API_ENDPOINT+"products/product/"+action.id,
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

/* ADMIN UPDATE PRODUCT STATUS */
export function apiAdminUpdateProductStatus(action){
    return axios.put(API_ENDPOINT+"products/product/"+action.product.id+"/"+action.product.status,{},
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
/* ADMIN UPDATE STATUS PRODUCT NASEAT */
export function apiAdminUpdateStatusProduct(action){
    return axios.put(API_ENDPOINT+"products/product/"+ action.product.productId,{},
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

/* ADMIN DELETE PRODUCT */
export function apiAdminDeleteProduct(action){
    return axios.delete(API_ENDPOINT+"products/product/"+action.id,
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

/* ADMIN LIST USERS */
export function apiAdminListUser(action){
    return axios.post(API_ENDPOINT+"admin/promote/users/"+action.users.page+"/"+action.users.limit,
        JSON.stringify(action.users.user),
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

/* ADMIN LIST PROMOTE PRODUCT BY USER ID */
export function apiAdminListPromoteProductByUser(action){
    return axios.get(API_ENDPOINT+"admin/promote/products/"+action.products.promoteId+"/"+action.products.userId,
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

/* ADMIN DELETE PROMOTE PRODUCT BY ID */
export function apiAdminDeletePromoteProductById(action){
    return axios.put(API_ENDPOINT+"admin/promote/product",
        JSON.stringify(action.deleted),
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

/* ADMIN APPROVE USER REQUEST */
export function apiAdminApprovePromoteProduct(action){
    return axios.post(API_ENDPOINT+"admin/promote/products",
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

/* ADMIN DELETE USER REQUEST */
export function apiAdminDeleteUserRequest(action){
    return axios.delete(API_ENDPOINT+"admin/promote/user/"+action.id,
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

/* ADMIN LIST PRODUCT REPORT */
export function apiAdminListProductReport(action){
    return axios.post(API_ENDPOINT+"products/listproductsreport/"+action.products.page+"/"+action.products.limit
        ,JSON.stringify(action.products.product),
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

/* ADMIN DELETE REQUEST PROMOTE PRODUCT EXPIRED */
export function apiAdminDeleteRequestPromoteExpired(){
    return axios.delete(API_ENDPOINT+"admin/promote/expired/request",
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

/* ADMIN COUNT TODAY PRODUCTS */
export function apiAdminCountTodayProducts(action){
    return axios.get(API_ENDPOINT + "admin/count/today-products", AUTH_CONFIG(action.products.token))
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

