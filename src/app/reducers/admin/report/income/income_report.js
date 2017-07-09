import {
    LIST_BOOT_PRODUCT_INCOME_TOTAL_SUCCESS,
    LIST_BOOT_PRODUCT_INCOME_TOTAL_FAIL,
    LIST_BOOT_PRODUCT_INCOME_DETAIL_SUCCESS,
    LIST_BOOT_PRODUCT_INCOME_DETAIL_FAIL,
    LIST_MEMBER_PROMOTE_INCOME_DETAIL_SUCCESS,
    LIST_MEMBER_PROMOTE_INCOME_DETAIL_FAIL,
    LIST_MEMBER_PROMOTE_INCOME_TOTAL_SUCCESS,
    LIST_MEMBER_PROMOTE_INCOME_TOTAL_FAIL,
    LIST_ADVERTISER_INCOME_DETAIL_SUCCESS,
    LIST_ADVERTISER_INCOME_DETAIL_FAIL,
    LIST_ADVERTISER_INCOME_GRAND_SUCCESS,
    LIST_ADVERTISER_INCOME_GRAND_FAIL,
    LIST_CATEGORY_INCOME_SUCCESS,
    LIST_CATEGORY_INCOME_FAIL
} from './../../../../actions/admin/report/income/income_report';

/* LIST BOOT PRODUCT INCOME */
export function listBootProductIncomeGrandReducer(state = {}, action){
    switch (action.type){
        case LIST_BOOT_PRODUCT_INCOME_TOTAL_SUCCESS:
            return action.response.data;
        case LIST_BOOT_PRODUCT_INCOME_TOTAL_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* LIST MEMBER BOOT PRODUCT */
export function listBootProductIncomeDetailReducer(state = {}, action){
    switch (action.type){
        case LIST_BOOT_PRODUCT_INCOME_DETAIL_SUCCESS:
            return action.response.data;
        case LIST_BOOT_PRODUCT_INCOME_DETAIL_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN LIST MEMBER PROMOTE INCOME DETAIL */
export function listPromoteMemberIncomeDetailReducer(state = {}, action){
    switch (action.type){
        case LIST_MEMBER_PROMOTE_INCOME_DETAIL_SUCCESS:
            return action.response.data;
        case LIST_MEMBER_PROMOTE_INCOME_DETAIL_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN LIST GRAND TOTAL MEMBER PROMOTE INCOME */
export function listPromoteMemberIncomeGrandReducer(state = {}, action){
    switch (action.type){
        case LIST_MEMBER_PROMOTE_INCOME_TOTAL_SUCCESS:
            return action.response.data;
        case LIST_MEMBER_PROMOTE_INCOME_TOTAL_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN LIST ADVERTISER INCOME DETAIL */
export function listAdvertiserIncomeDetailReducer(state = {}, action){
    switch (action.type){
        case LIST_ADVERTISER_INCOME_DETAIL_SUCCESS:
            return action.response.data;
        case LIST_ADVERTISER_INCOME_DETAIL_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN LIST ADVERTISER INCOME GRAND */
export function listAdvertiserIncomeGrandReducer(state = {}, action){
    switch (action.type){
        case LIST_ADVERTISER_INCOME_GRAND_SUCCESS:
            return action.response.data;
        case LIST_ADVERTISER_INCOME_GRAND_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN LIST CATEGORY INCOME REPORT */
export function listCategoryIncomeReducer(state = {}, action){
    switch (action.type){
        case LIST_CATEGORY_INCOME_SUCCESS:
            return action.response.data;
        case LIST_CATEGORY_INCOME_FAIL:
            return action.response;
        default:
            return state;
    }
}