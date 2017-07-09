import axios from 'axios';
import { CONFIG, API_ENDPOINT } from './../headers';

/* INSERT STAR RATING PRODUCTS */
export function apiPostStarRating(action){
    return axios.post( API_ENDPOINT + "products/rating",
        JSON.stringify(action.starRating.starRating) ,
        CONFIG)
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

/* GET STAR RATING PRODUCTS PRO ID AND IP */
export function apiGetStarRatingByProIdAndIp(action){
    return axios.get( API_ENDPOINT + "products/rating/" + action.pro_id, CONFIG)
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

/* GET TOTAL STAR RATING PRODUCT ID */
export function apiGetTotalStarRatingByProductId(action){
    return axios.get( API_ENDPOINT + "products/totalrating/" + action.pro_id, CONFIG)
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