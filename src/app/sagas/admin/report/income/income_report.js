import { call, put } from 'redux-saga/effects';
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
import {
    apiListBootProductIncomeGrand,
    apiListBootProductIncomeDetail,
    apiListMemberPromoteIncomeDetail,
    apiListMemberPromoteIncomeGrand,
    apiListAdvertiserIncomeDetail,
    apiListAdvertiserIncomeGrand,
    apiListCategoryIncome
} from './../../../../api/admin/report/income/income_report';

/* LIST BOOT PRODUCT INCOME */
export function* doAdminListBootProductIncomeGrand(action){
    const response = yield call(apiListBootProductIncomeGrand, action);
    if(!(response == undefined)){
        yield put({type: LIST_BOOT_PRODUCT_INCOME_TOTAL_SUCCESS, response });
    }else{
        yield put({type: LIST_BOOT_PRODUCT_INCOME_TOTAL_FAIL, response});
    }
}

/* LIST MEMBER BOOT PRODUCT INCOME */
export function* doAdminListBootProductIncomeDetail(action){
    const response = yield call(apiListBootProductIncomeDetail, action);
    if(!(response == undefined)){
        yield put({type: LIST_BOOT_PRODUCT_INCOME_DETAIL_SUCCESS, response });
    }else{
        yield put({type: LIST_BOOT_PRODUCT_INCOME_DETAIL_FAIL, response});
    }
}

/* ADMIN LIST MEMBER PROMOTE INCOME DETAIL */
export function* doAdminListMemberPromoteIncomeDetail(action){
    const response = yield call(apiListMemberPromoteIncomeDetail, action);
    if(!(response == undefined)){
        yield put({type: LIST_MEMBER_PROMOTE_INCOME_DETAIL_SUCCESS, response });
    }else{
        yield put({type: LIST_MEMBER_PROMOTE_INCOME_DETAIL_FAIL, response});
    }
}

/* ADMIN LIST GRAND TOTAL PROMOTE MEMBER INCOME */
export function* doAdminListMemberPromoteIncomeGrand(action){
    const response = yield call(apiListMemberPromoteIncomeGrand, action);
    if(!(response == undefined)){
        yield put({type: LIST_MEMBER_PROMOTE_INCOME_TOTAL_SUCCESS, response });
    }else{
        yield put({type: LIST_MEMBER_PROMOTE_INCOME_TOTAL_FAIL, response});
    }
}

/* ADMIN LIST ADVERTISER INCOME DETAIL */
export function* doAdminListAdvertiserIncomeDetail(action){
    const response = yield call(apiListAdvertiserIncomeDetail, action);
    if(!(response == undefined)){
        yield put({type: LIST_ADVERTISER_INCOME_DETAIL_SUCCESS, response });
    }else{
        yield put({type: LIST_ADVERTISER_INCOME_DETAIL_FAIL, response});
    }
}

/* ADMIN LIST ADVERTISER INCOME GRAND */
export function* doAdminListAdvertiserIncomeGrand(action){
    const response = yield call(apiListAdvertiserIncomeGrand, action);
    if(!(response == undefined)){
        yield put({type: LIST_ADVERTISER_INCOME_GRAND_SUCCESS, response });
    }else{
        yield put({type: LIST_ADVERTISER_INCOME_GRAND_FAIL, response});
    }
}

/* ADMIN LIST CATEGORY INCOME */
export function* doAdminListCategoryIncome(action){
    const response = yield call(apiListCategoryIncome, action);
    if(!(response == undefined)){
        yield put({type: LIST_CATEGORY_INCOME_SUCCESS, response });
    }else{
        yield put({type: LIST_CATEGORY_INCOME_FAIL, response});
    }
}