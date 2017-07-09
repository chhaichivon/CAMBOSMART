import axios from 'axios';
import {AUTH_CONFIG, CONFIG, API_ENDPOINT} from './../../headers';
import { clearState } from './../../../localstorages/local_storage';

/* SAVE CATEGORY */
export function apiSaveCategory(action){
    return axios.post(API_ENDPOINT+"category/addcategory",JSON.stringify(action.category),
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

/* GET ALL PARENT CATEGORIES */
export function apiGetParentCategory(action){
    return axios.get(API_ENDPOINT+"category/listparentcategory",
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

/* GET PARENT CATEGORIES WITH PAGINATION */
export function apiGetCategoryPage(action){
    return axios.get(API_ENDPOINT+"category/listparentcategories/"+action.category.page+"/"+action.category.limit,
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
/* GET SUB CATEGORIES BY ID */
export function apiGetSubCategoryById(action){
    return axios.get(API_ENDPOINT+"category/listchildcategory/"
                                    +action.category.parentId+"/"
                                    +action.category.ancestor+"/"
                                    +action.category.page+"/"
                                    +action.category.limit,
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

/* GET ALL CATEGORIES */
export function apiGetAllCategory(action){
    return axios.get(API_ENDPOINT+"category/listallcategory",
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

/* DELETE CATEGORY */
export function apiDeleteCategory(action){
    return axios.put(API_ENDPOINT+"category/deletecategory/"+action.id[0],{},
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

/* GET CATEGORY BY ID */
export function apiGetCategoryById(action){
    return axios.get(API_ENDPOINT+"category/getcategorybyid/"+action.id,
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

/* UPDATE CATEGORY BY ID */
export function apiUpdateCategoryById(action){
    return axios.put(API_ENDPOINT+"category/updatecategory",JSON.stringify(action.category.category), AUTH_CONFIG(action.category.token))
        .then(function (response) {
            return response.data;
        }).catch(function(error){
            /*if(error.response.status){
                if(error.response.status == 401){
                    clearState();
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

/**==========================Oudam===================**/
export function insertCategoryApi(action){
    return axios.post(API_ENDPOINT+ 'admin/category/add', JSON.stringify(action.category.category), AUTH_CONFIG(action.category.token))
        .then (function (response){
            return response.data
        }).catch(function(error){
            if (error.response.status) {
                if (error.response.status == 401) {
                    clearState();
                } else if (error.response.status == 500) {
                    location.href = '/server/error';
                } else {
                    location.href = '/server/down';
                }
            } else {
                location.href = '/server/down';
            }
        })
}

export function updateCategoryApi(action){
    return axios.put(API_ENDPOINT+ 'admin/category/update', JSON.stringify(action.category.category), AUTH_CONFIG(action.category.token))
        .then (function (response){
            return response.data
        }).catch(function(error){
            if (error.response.status) {
                if (error.response.status == 401) {
                    clearState();
                } else if (error.response.status == 500) {
                    location.href = '/server/error';
                } else {
                    location.href = '/server/down';
                }
            } else {
                location.href = '/server/down';
            }
        })
}

export function deleteCategoryApi(action){
    return axios.put(API_ENDPOINT+ `admin/category/${action.category.id}`, {}, AUTH_CONFIG(action.category.token))
        .then (function (response){
            return response.data
        }).catch(function(error){
            if (error.response.status) {
                if (error.response.status == 401) {
                    clearState();
                } else if (error.response.status == 500) {
                    location.href = '/server/error';
                } else {
                    location.href = '/server/down';
                }
            } else {
                location.href = '/server/down';
            }
        })
}

export function fetchCategoryApi(action){
    return axios.get(API_ENDPOINT+ `admin/categories/detail/${action.category.id}`, AUTH_CONFIG(action.category.token))
        .then (function (response){
            return response.data
        }).catch(function(error){
            if (error.response.status) {
                if (error.response.status == 401) {
                    clearState();
                } else if (error.response.status == 500) {
                    location.href = '/server/error';
                } else {
                    location.href = '/server/down';
                }
            } else {
                location.href = '/server/down';
            }
        })
}

export function fetchParentCategoryApi(action){
    return axios.get(API_ENDPOINT+ `admin/categories/parents?page=${action.category.start}&limit=${action.category.limit}`, AUTH_CONFIG(action.category.token))
        .then (function (response){
            return response.data
        }).catch(function(error){
            if (error.response.status) {
                if (error.response.status == 401) {
                    clearState();
                } else if (error.response.status == 500) {
                    location.href = '/server/error';
                } else {
                    location.href = '/server/down';
                }
            } else {
                location.href = '/server/down';
            }
        })
}

export function fetchChildCategoryApi(action){
    return axios.get(API_ENDPOINT+ `admin/categories/children/${action.category.id}?page=${action.category.start}&limit=${action.category.limit}`, AUTH_CONFIG(action.category.token))
        .then (function (response){
            return response.data
        }).catch(function(error){
            if (error.response.status) {
                if (error.response.status == 401) {
                    clearState();
                } else if (error.response.status == 500) {
                    location.href = '/server/error';
                } else {
                    location.href = '/server/down';
                }
            } else {
                location.href = '/server/down';
            }
        })
}