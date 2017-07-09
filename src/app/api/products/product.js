import axios from 'axios';
import {CONFIG, API_ENDPOINT} from './../headers';

/**
 * FUNCTION FILTER PRODUCTS API
 * @param action
 * @returns {Promise.<T>|Promise<R>}
 */
export function fetchProductFilterApi(action) {
    return axios.post(API_ENDPOINT + "products/category/list?page=" + action.product.start + "&limit=" + action.product.limit, JSON.stringify(action.product.products), CONFIG)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log("error API", error);
        });
}

/**
 * FUNCTION GET PRODUCT BY CATEGORY NAME
 * @param action
 * @returns {Promise.<T>|Promise<R>}
 */
export function fetchProductByCategoryNameApi(action){
    return axios.get(API_ENDPOINT+ `products/category/${action.product.categoryName}?start=${action.product.start}&limit=${action.product.limit}`, CONFIG)
        .then(function(response){
            return response.data;
        }).catch(function(error){
            console.log("Error API:",error);
        })
}

/**
 * LIST PRODUCT RELATED
 * @param action
 * @returns {*|Promise<R>|Promise.<T>}
 */
export function fetchProductRelatedApi(action){
    return axios.get(API_ENDPOINT+ `products/category/related/${action.product.categoryName}/${action.product.productId}?start=${action.product.start}&limit=${action.product.limit}`, CONFIG)
        .then(function(response){
            return response.data;
        }).catch(function(error){
            console.log("Error API:",error);
        })
}

/**
 * LIST PRODUCT RECENTLY
 * @param action
 * @returns {*|Promise<R>|Promise.<T>}
 */
export function fetchProductRecentlyApi(action){
    return axios.get(API_ENDPOINT+ `products/recently?start=${action.product.start}&limit=${action.product.limit}`, CONFIG)
        .then(function(response){
            return response.data;
        }).catch(function(error){
            console.log("Error API:",error);
        })
}

/**
 * LIST PRODUCT BY USERNAME
 * @param action
 * @returns {*|Promise<R>|Promise.<T>}
 */
export function fetchProductByUserName(action) {
    return axios.get(API_ENDPOINT +`products/username/${action.product.username}?start=${action.product.start}&limit=${action.product.limit}`,CONFIG)
        .then(function(response){
            return response.data;
    }).catch(function (error) {
        console.log("ERROR API", error);
    })
}

/**oudam**/
export function countProductViewApi(action) {
    return axios.post(API_ENDPOINT + `products/${action.productId}`, {}, CONFIG)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log("error API", error);
        });
}

/*naseat*/
export function fetchProductTypeByCategoryNameApi(action){
    return axios.post(API_ENDPOINT + "products/category/list?start=" + action.product.start + "&limit=" + action.product.limit, JSON.stringify(action.product.product), CONFIG)
    //return axios.post(API_ENDPOINT + "products?start="+ action.product.start +"&limit="+ action.product.limit,JSON.stringify(action.product.product), CONFIG)
        .then(function (response){
            return response.data
        }).catch(function (error){
            console.log("api search productName Error:",error)
        })
}
export function fetchProductByNameApi(action){
    return axios.post(API_ENDPOINT + "products/name",JSON.stringify(action.name), CONFIG)
        .then(function (response){
            return response.data
        }).catch(function (error){
            console.log("api Error:",error)
        })
}