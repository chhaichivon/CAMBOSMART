import {call, put} from 'redux-saga/effects';
import * as actionType from'./../../actions/categories/category';
import * as categoryApi from'./../../api/categories/category';

export function * listParentCategorySaga(action) {
    const response = yield call(categoryApi.listParentCategoryApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.LIST_PARENT_CATEGORY_SUCCESS, response});
    } else {
        yield put({type: actionType.LIST_PARENT_CATEGORY_FAIL, response})
    }
}

export function * listChildCategorySaga(action) {

    let response = yield call(categoryApi.listChildCategoryApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.LIST_CHILD_CATEGORY_SUCCESS, response})
    } else {
        yield put({type: actionType.LIST_CHILD_CATEGORY_FAIL, response})
    }
}

export function * listAllCategorySaga(action) {
    const response = yield call(categoryApi.listAllCategoryApi, action);
    if (!(response == undefined)) {

        yield put({type: actionType.LIST_ALL_CATEGORY_SUCCESS, response})
    } else {
        yield put({type: actionType.LIST_ALL_CATEGORY_FAIL, response})
    }
}

/*oudam*/
export function* fetchThirdCategoriesSaga(action) {
    const response = yield call(categoryApi.apiGetThirdCategories, action);
    if (!(response == undefined)) {
        yield put({type: actionType.FETCH_THIRD_CATEGORIES_SUCCESS, response})
    } else {
        yield put({type: actionType.FETCH_THIRD_CATEGORIES_FAIL, response})
    }
}


export function* countViewCategorySaga(action) {
    const response = yield call(categoryApi.countViewCategoryApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.COUNT_VIEW_CATEGORY_SUCCESS, response})
    } else {
        yield put({type: actionType.COUNT_VIEW_CATEGORY_FAIL, response})
    }
}

export function* fetchPopularCategoriesSaga(action) {
    const response = yield call(categoryApi.fetchPopularCategoriesApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.FETCH_POPULAR_CATEGORIES_SUCCESS, response})
    } else {
        yield put({type: actionType.FETCH_POPULAR_CATEGORIES_FAIL, response})
    }
}

export function* fetchSpecialCategoriesSaga(action) {
    const response = yield call(categoryApi.fetchPopularCategoriesApi, action);
    if (!(response == undefined)) {
        yield put({type: actionType.FETCH_SPECIAL_CATEGORIES_SUCCESS, response})
    } else {
        yield put({type: actionType.FETCH_SPECIAL_CATEGORIES_FAIL, response})
    }
}

