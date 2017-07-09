export const FILTER_MEMBERS = 'FILTER_MEMBERS';
export const FILTER_MEMBERS_SUCCESS = 'FILTER_MEMBERS_SUCCESS';
export const FILTER_MEMBERS_FAIL = 'FILTER_MEMBERS_FAIL';

export const MERCHANT_DETAIL = 'MERCHANT_DETAIL';
export const MERCHANT_DETAIL_SUCCESS = 'MERCHANT_DETAIL_SUCCESS';
export const MERCHANT_DETAIL_FAIL = 'MERCHANT_DETAIL_FAIL';

export const BLOCK_MERCHANT = "BLOCK_MERCHANT";
export const BLOCK_MERCHANT_SUCCESS = "BLOCK_MERCHANT_SUCCESS";
export const BLOCK_MERCHANT_FAIL = "BLOCK_MERCHANT_FAIL";

export const LIST_EXPIRED_MERCHANTS = "LIST_EXPIRED_MERCHANTS";
export const LIST_EXPIRED_MERCHANTS_SUCCESS = "LIST_EXPIRED_MERCHANTS_SUCCESS";
export const LIST_EXPIRED_MERCHANTS_FAIL = "LIST_EXPIRED_MERCHANTS_FAIL";

export const UPDATE_EXPIRED_MERCHANTS = "UPDATE_EXPIRED_MERCHANTS";
export const UPDATE_EXPIRED_MERCHANTS_SUCCESS = "UPDATE_EXPIRED_MERCHANTS_SUCCESS";
export const UPDATE_EXPIRED_MERCHANTS_FAIL = "UPDATE_EXPIRED_MERCHANTS_FAIL";

export const CHECK_MERCHANT_EXPIRED = "CHECK_MERCHANT_EXPIRED";
export const CHECK_MERCHANT_EXPIRED_SUCCESS = "CHECK_MERCHANT_EXPIRED_SUCCESS";
export const CHECK_MERCHANT_EXPIRED_FAIL = "CHECK_MERCHANT_EXPIRED_FAIL";

export function actionFilterMembers(member) {
    return{
        type: FILTER_MEMBERS,
        member: member
    }
}

export function actionMerchantDetail(merchant){
    return{
        type: MERCHANT_DETAIL,
        merchant
    }
}

export function actionBlockMerchant(block){
    return{
        type: BLOCK_MERCHANT,
        block: block
    }
}

/* ADMIN LIST EXPIRED MERCHANTS */
export function actionListExpiredMerchant(expired){
    return{
        type: LIST_EXPIRED_MERCHANTS,
        expired: expired
    }
}

/* ADMIN UPDATE EXPIRED MERCHANTS */
export function actionUpdateExpiredMerchant(){
    return{
        type: UPDATE_EXPIRED_MERCHANTS
    }
}

/* CHECK MERCHANT EXPIRED */
export function actionCheckMerchantExpired(user){
    return{
        type: CHECK_MERCHANT_EXPIRED,
        user: user
    }
}

/* ADMIN COUNT MERCHANT MEMBER */
export const ADMIN_COUNT_MERCHANT_MEMBERS = "ADMIN_COUNT_MERCHANT_MEMBERS";
export const ADMIN_COUNT_MERCHANT_MEMBERS_SUCCESS = "ADMIN_COUNT_MERCHANT_MEMBERS_SUCCESS";
export const ADMIN_COUNT_MERCHANT_MEMBERS_FAIL  = "ADMIN_COUNT_MERCHANT_MEMBERS_FAIL";
export function actionAdminCountMerchantMembers(member) {
    return{
        type: ADMIN_COUNT_MERCHANT_MEMBERS,
        member: member
    }
}