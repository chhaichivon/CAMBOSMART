import axios from 'axios';
import { AUTH_CONFIG, API_ENDPOINT } from './../headers';
import { clearLoginState } from './../../localstorages/local_storage';

export function updateMemberInfoApi(action) {
    return axios.post(API_ENDPOINT + "users/member/update-info", JSON.stringify(action.member.member), AUTH_CONFIG(action.member.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 401 || error.response.status == 500){
                window.location.assign('/server/error');
            }
        });
}

export function apiChangeMemberPassword(action) {
    return axios.post(API_ENDPOINT + "users/member/update-pass", JSON.stringify(action.member.member), AUTH_CONFIG(action.member.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error')
        });
}

export function apiInsertProduct(action) {
    return axios.post(API_ENDPOINT + "member/product", JSON.stringify(action.product.product), AUTH_CONFIG(action.product.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error');
            else if(error.response.status == 401) clearLoginState();
        });

}

export function removeProductImageApi(action) {
    return axios.post(API_ENDPOINT + `member/products/${action.product.id}/${action.product.image}/remove`, {}, AUTH_CONFIG(action.product.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error');
            else if(error.response.status == 401) clearLoginState();
        });

}

export function apiFetchProducts(action) {
    return axios.get(API_ENDPOINT + "members/"+action.product.userId + "/products?start=" + action.product.start + "&limit=" + action.product.limit, AUTH_CONFIG(action.product.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error');
            else if(error.response.status == 401) clearLoginState();
        });

}

export function deletProductApi(action) {
    if(action.product.product.status == 400){
        return axios.put(API_ENDPOINT + `member/products/${action.product.product.productId}/delete`, {}, AUTH_CONFIG(action.product.token))
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                /*if(error.response.status == 500) window.location.assign('/server/error');
                else if(error.response.status == 401) clearLoginState();*/
            });
    }else{
        return axios.post(API_ENDPOINT + "member/product/update-status", JSON.stringify(action.product.product), AUTH_CONFIG(action.product.token))
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                /*if(error.response.status == 500) window.location.assign('/server/error');
                else if(error.response.status == 401) clearLoginState();*/
            });
    }


}

export function apiRenewProduct(action){
    return axios.post(API_ENDPOINT + "member/products/"+ action.product.productId +"/renew",{}, AUTH_CONFIG(action.product.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
           if(error.response.status == 500) window.location.assign('/server/error');
            else if(error.response.status == 401) clearLoginState();
        });
}

export function apiFetchProduct(action){
    return axios.get(API_ENDPOINT + "member/products/"+ action.product.productId, AUTH_CONFIG(action.product.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error');
            else if(error.response.status == 401) clearLoginState();
        });
}

export function apiUpdateProductById(action){

    return axios.post(API_ENDPOINT + "member/products/update", JSON.stringify(action.product.product), AUTH_CONFIG(action.product.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error');
            else if(error.response.status == 401) clearLoginState();
        });
}

/* MEMBER LIST PROMOTED PRODUCTS */
export function apiListPromotedProducts(action){
    return axios.get(API_ENDPOINT + "member/products/list/"+action.products.userId,
        AUTH_CONFIG(action.products.token)
        ).then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error');
            else if(error.response.status == 401) clearLoginState();
        });
}

/* MEMBER GET PROMOTED PRODUCT */
export function apiGetPromotedProduct(action){
    return axios.get(API_ENDPOINT + "member/product/"+action.product.id,
        AUTH_CONFIG(action.product.token)
    ).then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error');
            else if(error.response.status == 401) clearLoginState();
        });
}

/* MEMBER LIST ALL PACKAGES */
export function apiListAllPackages(action){
    return axios.get(API_ENDPOINT + "packages",
        AUTH_CONFIG(action.token)
    ).then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 500) window.location.assign('/server/error');
            else if(error.response.status == 401) clearLoginState();
        });
}

/* MEMBER PROMOTE PRODUCTS */
export function apiMemberPromoteProducts(action){
    //console.log("API : "+JSON.stringify(action.promote.promoted))
    return axios.post(API_ENDPOINT + "member/promote/products",
        JSON.stringify(action.promote.promoted),
        AUTH_CONFIG(action.promote.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 401){
                window.location.assign('/sign-in');
            }else if(error.response.status == 500){
                window.location.assign('/server/error');
            }
        });
}

/* MEMBER REQUESTE PROMOTE TO BE MERCHANT */
export function apiMemberRequestPromoted(action){
    return axios.post(API_ENDPOINT + "users/member/requestpromoted",
        JSON.stringify(action.requested.promoted),
        AUTH_CONFIG(action.requested.token))
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if(error.response.status == 401){
                window.location.assign('/sign-in');
            }else if(error.response.status == 500){
                window.location.assign('/server/error');
            }
        });
}
