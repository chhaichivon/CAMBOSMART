export const ADMIN_BLOCK_MERCHANT = "ADMIN_BLOCK_MERCHANT";
export const ADMIN_BLOCK_MERCHANT_SUCCESS = "ADMIN_BLOCK_MERCHANT_SUCCESS";
export const ADMIN_BLOCK_MERCHANT_FAIL = "ADMIN_BLOCK_MERCHANT_FAIL";

export const GET_MERCHANT_DETAIL="GET_MERCHANT_DETAIL";
export const GET_MERCHANT_DETAIL_SUCCESS="GET_MERCHANT_DETAIL_SUCCESS";
export const GET_MERCHANT_DETAIL_FAIL="GET_MERCHANT_DETAIL_FAIL";

export const MEMBER_LIST_PRODUCT="MEMBER_LIST_PRODUCT";
export const MEMBER_LIST_PRODUCT_SUCCESS="MEMBER_LIST_PRODUCT_SUCCESS";
export const MEMBER_LIST_PRODUCT_FAIL="MEMBER_LIST_PRODUCT_FAIL";

export function adminBlockMerchant(status){
    return {
        type:ADMIN_BLOCK_MERCHANT,
        status
    }
}
export function getMerchantDetail(id){
    return{
        type:GET_MERCHANT_DETAIL,
        merchant_id:id
    }
}
export function memberListProductAction(id){
    return{
        type:MEMBER_LIST_PRODUCT,
        userId: id

    }
}
