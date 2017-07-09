import axios from 'axios';
import {AUTH_CONFIG,CONFIG,API_ENDPOINT} from './../headers';
import { clearLoginState } from './../../localstorages/local_storage';

export function listParentCategoryApi(action){
    return axios.get(API_ENDPOINT+ `categories/parents?page=${action.start}&limit=${action.limit}`, AUTH_CONFIG(action.token))
    .then (function (response){
        return response.data
    }).catch(function(error){
        console.log("API error",error)
    })
}

export function listChildCategoryApi(action){

    return axios.get(API_ENDPOINT + "category/listchildcategory/"
            +action.category.parentId+"/"
            +action.category.ancestor+"/"
            +action.category.page+"/"
            +action.category.limit,
            AUTH_CONFIG(action.category.token))
        .then(function (response){
           // console.log("api",response.data)
            return response.data


        }).catch(function(error){
            console.log("you go where")
            console.log("api error",error);
        })
}

export function listAllCategoryApi(){
    return axios.get(API_ENDPOINT + "category/listparentandchild", CONFIG)
        .then(function(response){
            return response.data
        }).catch(function (error) {
            console.log("api Error:",error)
        })
}

/*oudam*/
export function apiGetThirdCategories(action){
    return axios.get(API_ENDPOINT + "categories/"+action.category.name, CONFIG)
        .then(function(response){
            return response.data
        }).catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error');
            //else if(error.response.status == 401) clearLoginState();
        })
}



export function countViewCategoryApi(action){
    return axios.post(API_ENDPOINT + `category/${action.categoryId}`, {}, CONFIG)
        .then(function(response){
            return response.data
        }).catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error');
            //else if(error.response.status == 401) clearLoginState();
        })
}

export function fetchPopularCategoriesApi(action){
    return axios.get(API_ENDPOINT + `categories?limit=${action.limit}`, CONFIG)
        .then(function(response){
            return response.data
        }).catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error');
            //else if(error.response.status == 401) clearLoginState();
        })
}

