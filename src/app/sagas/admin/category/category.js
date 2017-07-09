import { call, put } from 'redux-saga/effects';
import * as actionType from './../../../actions/admin/category/category';
import * as categoryApi from './../../../api/admin/category/category';


/*export function* doSaveCategory(action){
    const response = yield call(apiSaveCategory, action);
    if(!(response == undefined)){
        yield put({type: actionType.SAVE_CATEGORY_SUCCESS, response });
    }else{
        yield put({type: actionType.SAVE_CATEGORY_FAIL, response});
    }
}


export function* doGetParentCategory(action){
    const response = yield call(apiGetParentCategory, action);
    if(!(response == undefined)){
        yield put({type: actionType.GET_PARENT_CATEGORY_SUCCESS, response });
    }else{
        yield put({type: actionType.GET_PARENT_CATEGORY_FAIL, response});
    }
}


export function* doGetAllCategory(action){
    const response = yield call(apiGetAllCategory, action);
    if(!(response == undefined)){
        yield put({type: actionType.GET_ALL_CATEGORY_SUCCESS, response });
    }else{
        yield put({type: actionType.GET_ALL_CATEGORY_FAIL, response});
    }
}


export function* doGetParentCategoryPage(action){
    const response = yield call(apiGetCategoryPage, action);
    if(!(response == undefined)){
        yield put({type: actionType.GET_PARENT_CATEGORY_PAGINATION_SUCCESS, response });
    }else{
        yield put({type: actionType.GET_PARENT_CATEGORY_PAGINATION_FAIL, response});
    }
}


export function* doGetSubCategoryById(action){
    const response = yield call(apiGetSubCategoryById, action);
    if(!(response == undefined)){
        yield put({type: actionType.GET_SUB_CATEGORIES_BY_ID_SUCCESS, response });
    }else{
        yield put({type: actionType.GET_SUB_CATEGORIES_BY_ID_FAIL, response});
    }
}


export function* doGetCategoryById(action){
    const response = yield call(apiGetCategoryById, action);
    if(!(response == undefined)){
        yield put({type: actionType.GET_CATEGORY_BY_ID_SUCCESS, response });
    }else{
        yield put({type: actionType.GET_CATEGORY_BY_ID_FAIL, response});
    }
}


export function* doUpdateCategoryById(action){
    const response = yield call(apiUpdateCategoryById, action);
    if(!(response == undefined)){
        yield put({type: actionType.UPDATE_CATEGORY_BY_ID_SUCCESS, response });
    }else{
        yield put({type: actionType.UPDATE_CATEGORY_BY_ID_FAIL, response});
    }
}*/

/**=============Oudam================**/

export function* insertCategorySaga(action){
    const response = yield call(categoryApi.insertCategoryApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.INSERT_CATEGORY_SUCCESS, response });
    }else{
        yield put({type: actionType.INSERT_CATEGORY_FAIL, response});
    }
}

export function* updateCategorySaga(action){
    const response = yield call(categoryApi.updateCategoryApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.UPDATE_CATEGORY_SUCCESS, response });
    }else{
        yield put({type: actionType.UPDATE_CATEGORY_FAIL, response});
    }
}

export function* deleteCategorySaga(action){
    const response = yield call(categoryApi.deleteCategoryApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.DELETE_CATEGORY_SUCCESS, response });
    }else{
        yield put({type: actionType.DELETE_CATEGORY_FAIL, response});
    }
}

export function* fetchCategorySaga(action){
    const response = yield call(categoryApi.fetchCategoryApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_CATEGORY_SUCCESS, response });
    }else{
        yield put({type: actionType.FETCH_CATEGORY_FAIL, response});
    }
}

export function* fetchParentCategoriesSaga(action){
    const response = yield call(categoryApi.fetchParentCategoryApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_PARENT_CATEGORIES_SUCCESS, response });
    }else{
        yield put({type: actionType.FETCH_PARENT_CATEGORIES_FAIL, response});
    }
}

export function* fetchChildCategoriesSaga(action){
    const response = yield call(categoryApi.fetchChildCategoryApi, action);
    if(!(response == undefined)){
        yield put({type: actionType.FETCH_CHILD_CATEGORIES_SUCCESS, response });
    }else{
        yield put({type: actionType.FETCH_CHILD_CATEGORIES_FAIL, response});
    }
}