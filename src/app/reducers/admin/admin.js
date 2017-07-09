import {
    ADMIN_BLOCK_MERCHANT_SUCCESS,
    ADMIN_BLOCK_MERCHANT_FAIL,
    GET_MERCHANT_DETAIL_SUCCESS,
    GET_MERCHANT_DETAIL_FAIL,
    MEMBER_LIST_PRODUCT_SUCCESS,
    MEMBER_LIST_PRODUCT_FAIL
} from './../../actions/admin';

export function adminBlockMerchantReducer(state = [{}] , action){
    switch (action.type){
        case ADMIN_BLOCK_MERCHANT_SUCCESS:
        {
            return action.response.data
        }
        case ADMIN_BLOCK_MERCHANT_FAIL:
        {
            console.log("Reducer not found");
            return state;
        }
        default:
            return state;
    }
}
export function getMerchantDetailReducer(state=[{}], action){
    switch (action.type){
        case GET_MERCHANT_DETAIL_SUCCESS:
        {
            return action.response.data
        }
        case GET_MERCHANT_DETAIL_FAIL:
        {
            console.log("Error Reducer",action.respone);
            return state;
        }
        default:
            return state;
    }
}
export function memberListProductReducer(state=[{}], action){
    switch (action.type){
        case MEMBER_LIST_PRODUCT_SUCCESS:
        {
            return action.response.data
        }
        case MEMBER_LIST_PRODUCT_FAIL:
        {
            console.log("Error Reducer",action.respone);
            return state
        }
        default:
            return state;
    }
}