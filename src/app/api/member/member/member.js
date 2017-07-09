import axios from 'axios';
import {CONFIG,API_ENDPOINT} from './../../headers';

export function adminBlockMerchantApi(action){
    return axios.put(API_ENDPOINT + "users/blockmerchant", JSON.stringify(action.status), CONFIG)
        .then(function(response){
           return response.data
        }).catch(function(error){
            console.log("Error API:",error);
        })
}
export function getMerchantDetailApi(action){
    return axios.get(API_ENDPOINT + "users/merchants/" + action.merchant_id, CONFIG)
        .then(function(response){
            return response.data
        }).catch(function(error){
            console.log("Api Error:",error);
        })
}
export function memberListProductApi(action){
    return axios.get(API_ENDPOINT + "users/"+action.userId+"/products" ,CONFIG)
        .then(function(response){
            return response.data
        }).catch(function(error){
            console.log("API Error",error);
        })
}