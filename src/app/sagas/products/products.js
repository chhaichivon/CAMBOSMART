import { call, put } from 'redux-saga/effects';
import * as actionType from './../../actions/products/products';
import { fetchProductByCategoryNameApi,countProductViewApi,fetchProductTypeByCategoryNameApi,fetchProductByNameApi,fetchProductRelatedApi,fetchProductRecentlyApi,fetchProductByUserName} from './../../api/products/product';
import {fetchProductFilterApi} from './../../api/products/product';

    /**
     * Saga Product In Home Page
     * @param action
     */
    export function* fetchHotProductSaga(action){
        const response = yield call(fetchProductFilterApi,action);
        if(!(response == undefined)){
            yield put({type: actionType.GET_PRODUCT_TYPE_HOT_SUCCESS, response });
        }else{
            yield put({type: actionType.GET_PRODUCT_TYPE_HOT_FAIL, response});
        }
    }
    export function* fetchGoldProductSaga(action){
        const response = yield call(fetchProductFilterApi,action);
        if(!(response == undefined)){
            yield put({type: actionType.GET_PRODUCT_TYPE_GOLD_SUCCESS, response });
        }else{
            yield put({type: actionType.GET_PRODUCT_TYPE_GOLD_FAIL, response});
        }
    }
    export function* fetchNormalProductSaga(action){
        const response = yield call(fetchProductFilterApi,action);
        if(!(response == undefined)){
            yield put({type: actionType.GET_PRODUCT_TYPE_NORMAL_SUCCESS, response });
        }else{
            yield put({type: actionType.GET_PRODUCT_TYPE_NORMAL_FAIL, response});
        }
    }


    /**
     * Saga Product In Page View All
     * @param action
     */
    export function* fetchAllProductSaga(action){
        const response = yield call(fetchProductFilterApi, action);
        if(!(response == undefined)) {
            yield put({type: actionType.GET_ALL_PRODUCT_SUCCESS,response});
        }else{
            yield put({type: actionType.GET_ALL_PRODUCT_FAIL,response});
        }
    }

    /**
     * Saga Product Special Category
     * @param action
     */
    export function* fetchProductSpecialCategorySaga(action) {
        const response = yield call(fetchProductByCategoryNameApi, action);
        if(!(response == undefined)){
            yield put({ type: actionType.GET_PRODUCT_SPECIAL_CATEGORY_SUCCESS ,response});
        }else{
            yield put({ type: actionType.GET_PRODUCT_SPECIAL_CATEGORY_FAIL ,response});
        }
    }

    /**
     * Saga Product Filter In Page Category
     * @param action
     */
    export function* fetchProductHotFilterSaga(action){
        const response = yield call(fetchProductFilterApi,action);
        if(!(response == undefined)){
            yield put({type: actionType.GET_FILTER_PRODUCTS_HOT_SUCCESS,response});
        }
        else{
            yield put({type: actionType.GET_FILTER_PRODUCTS_HOT_FAIL,response});
        }
    }
    export function* fetchProductGoldFilterSaga(action){
        const response = yield call(fetchProductFilterApi,action);
        if(!(response == undefined)){
            yield put({type: actionType.GET_FILTER_PRODUCTS_GOLD_SUCCESS,response});
        }
        else{
            yield put({type: actionType.GET_FILTER_PRODUCTS_GOLD_FAIL,response});
        }
    }
    export function* fetchProductNormalFilterSaga(action){
        const response = yield call(fetchProductFilterApi,action);
        if(!(response == undefined)){
            yield put({type: actionType.GET_FILTER_PRODUCTS_NORMAL_SUCCESS,response});
        }
        else{
            yield put({type: actionType.GET_FILTER_PRODUCTS_NORMAL_FAIL,response});
        }
    }

    /**
     * Saga Product Filter In Page Location
     * @param action
     */
    export function* fetchProductHotFilterLocationSaga(action) {
        const response = yield call(fetchProductFilterApi,action);
        if(!(response == undefined)){
            yield put({type:actionType.GET_FILTER_PRODUCT_HOT_LOCATION_SUCCESS,response});
        }
        else {
            yield put({type:actionType.GET_FILTER_PRODUCTS_HOT_FAIL,response});
        }
    }
    export function* getProductGoldFilterLocationSaga(action) {
        const response = yield call(fetchProductFilterApi,action);
        if(!(response == undefined)){
            yield put({type:actionType.GET_FILTER_PRODUCT_GOLD_LOCATION_SUCCESS,response});
        }
        else{
            yield put({type:actionType.GET_FILTER_PRODUCT_GOLD_LOCATION_FAIL,response});
        }
    }
    export function* getProductNormalFilterLocationSaga(action) {
        const response = yield call(fetchProductFilterApi,action);
        if(!(response == undefined)){
            yield put({type:actionType.GET_FILTER_PRODUCT_NORMAL_LOCATION_SUCCESS,response});
        }
        else{
            yield put({type:actionType.GET_FILTER_PRODUCT_NORMAL_LOCATION_FAIL,response})
        }
    }

    /**
     * Saga PRODUCT RELATED
     * @param action
     */
    export function* fetchRelatedProductsSaga(action){
        const response = yield call(fetchProductRelatedApi, action);
        if (!(response == undefined)){
            yield put({type: actionType.GET_RELATED_PRODUCTS_SUCCESS, response});
        }
        else {
            yield put({type: actionType.GET_RELATED_PRODUCTS_FAIL, response});
        }
    }

    /**
     * Saga PRODUCT RECENTLY
     * @param action
     */
    export function* fetchRecentlyProductsSaga(action){
        const response = yield call(fetchProductRecentlyApi, action);
        if (!(response == undefined)){
            yield put({type: actionType.GET_RECENTLY_PRODUCTS_SUCCESS, response});
        }
        else {
            yield put({type: actionType.GET_RECENTLY_PRODUCTS_FAIL, response});
        }
    }
    /**
     * Saga PRODUCT BY USERNAME
     * @param action
     */
    export function* fetchProductsUserNameSaga(action){
        const response = yield call(fetchProductByUserName, action);
        if (!(response == undefined)){
            yield put({type: actionType.GET_PRODUCT_BY_USERNAME_SUCCESS, response});
        }
        else {
            yield put({type: actionType.GET_PRODUCT_BY_USERNAME_FAIL, response});
        }
    }




/**oudam**/
export function* countProductViewSaga(action){
    const response = yield call(countProductViewApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.COUNT_PRODUCT_VIEW_SUCCESS, response});
    }
    else{
        yield put({type: actionType.COUNT_PRODUCT_VIEW_FAIL, response});
    }
}
/**Naseat**/

export function* fetchProductHotByCategoryNameSaga(action){
    const response = yield call(fetchProductTypeByCategoryNameApi,action);
    if(!(response == undefined )){
        yield put({ type:actionType.GET_PRODUCT_BY_CATEGORY_HOT_SUCCESS, response });
    }
    else {
        yield put({ type:actionType.GET_PRODUCT_BY_CATEGORY_HOT_FAIL, response });
    }
}
export function* fetchProductGoldByCategoryNameSaga(action){
    const response = yield call(fetchProductTypeByCategoryNameApi,action);
    if(!(response == undefined )){
        yield put({ type:actionType.GET_PRODUCT_BY_CATEGORY_GOLD_SUCCESS, response });
    }
    else {
        yield put({ type:actionType.GET_PRODUCT_BY_CATEGORY_GOLD_FAIL, response });
    }
}
export function* fetchProductNormalByCategoryNameSaga(action){
    const response = yield call(fetchProductTypeByCategoryNameApi,action);
    if(!(response == undefined )){
        yield put({ type:actionType.GET_PRODUCT_BY_CATEGORY_NORMAL_SUCCESS, response });
    }
    else {
        yield put({ type:actionType.GET_PRODUCT_BY_CATEGORY_NORMAL_FAIL, response });
    }
}
export function* fetchProductByNameSaga(action){
    const response = yield call(fetchProductByNameApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.FETCH_PRODUCT_BY_NAME_SUCCESS, response})
    } else {
        yield put({type: actionType.FETCH_PRODUCT_BY_NAME_FAIL, response})
    }
}


