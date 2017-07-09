import axios from 'axios';
import {CONFIG, AUTH_CONFIG, API_ENDPOINT} from './../headers';

export function fetchStoreApi(action){
    return axios.get(API_ENDPOINT+`member/${action.store.id}/store`, AUTH_CONFIG(action.store.token))
        .then(function(response){
            return response.data
        }).catch(function(error){
            console.log("Error API:",error);
        })
}

export function updateStoreMapApi(action){
    return axios.put(API_ENDPOINT+"member/store/updateMap", JSON.stringify(action.store.store), AUTH_CONFIG(action.store.token))
        .then(function(response){
            return response.data
        }).catch(function(error){
            console.log("Error API:",error);
        })
}


export function updateStoreApi(action){
    return axios.put(API_ENDPOINT+"member/store/update", JSON.stringify(action.store.store), AUTH_CONFIG(action.store.token))
        .then(function(response){
            return response.data
        }).catch(function(error){
            console.log("Error API:",error);
        })
}

export function getUserWithStoreApi(action){
    return axios.get(API_ENDPOINT+`member/${action.store.username}/products`, CONFIG)
        .then(function(response){
            return response.data
        }).catch(function(error){
            console.log("Error API:",error);
        })
}