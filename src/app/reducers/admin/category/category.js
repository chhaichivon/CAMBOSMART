import * as actionType from './../../../actions/admin/category/category';


/*
export function saveCategoryReducer(state = {}, action){
    switch (action.type){
        case actionType.SAVE_CATEGORY_SUCCESS:
            return action.response.data;
        case actionType.SAVE_CATEGORY_FAIL:
            return action.response;
        default:
            return state;
    }
}


export function getParentCategoryReducer(state = {}, action){
    switch (action.type){
        case actionType.GET_PARENT_CATEGORY_SUCCESS:
            return action.response.data;
        case actionType.GET_PARENT_CATEGORY_FAIL:
            return action.response;
        default:
            return state;
    }
}


export function getParentCategoryPageReducer(state = {}, action){
    switch (action.type){
        case actionType.GET_PARENT_CATEGORY_PAGINATION_SUCCESS:
            return action.response.data;
        case actionType.GET_PARENT_CATEGORY_PAGINATION_FAIL:
            return action.response;
        default:
            return state;
    }
}


export function getSubCategoryPageReducer(state = {}, action){
    switch (action.type){
        case actionType.GET_SUB_CATEGORIES_BY_ID_SUCCESS:
            return action.response.data;
        case actionType.GET_SUB_CATEGORIES_BY_ID_FAIL:
            return action.response;
        default:
            return state;
    }
}


export function getAllCategoryReducer(state = {}, action){
    switch (action.type){
        case actionType.GET_ALL_CATEGORY_SUCCESS:
            return action.response.data;
        case actionType.GET_ALL_CATEGORY_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function getCategoryByIdReducer(state = {}, action){
    switch (action.type){
        case actionType.GET_CATEGORY_BY_ID_SUCCESS:
            return action.response.data;
        case actionType.GET_CATEGORY_BY_ID_FAIL:
            return action.response;
        default:
            return state;
    }
}
*/


/**====================Oudam====================**/

export function insertCategoryReducer(state = {}, action){
    switch (action.type){
        case actionType.INSERT_CATEGORY_SUCCESS:
            return action.response.data;
        case actionType.INSERT_CATEGORY_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function updateCategoryReducer(state = {}, action){
    switch (action.type){
        case actionType.UPDATE_CATEGORY_SUCCESS:
            return action.response.data;
        case actionType.UPDATE_CATEGORY_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function deleteCategoryReducer(state = {}, action){
    switch (action.type){
        case actionType.DELETE_CATEGORY_SUCCESS:
            return action.response.data;
        case actionType.DELETE_CATEGORY_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchCategoryReducer(state = {}, action){
    switch (action.type){
        case actionType.FETCH_CATEGORY_SUCCESS:
            return action.response.data;
        case actionType.FETCH_CATEGORY_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchParentCategoriesReducer(state = [{}], action){
    switch (action.type){
        case actionType.FETCH_PARENT_CATEGORIES_SUCCESS:
            return action.response.data;
        case actionType.FETCH_PARENT_CATEGORIES_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchChildCategoriesReducer(state = [{}], action){
    switch (action.type){
        case actionType.FETCH_CHILD_CATEGORIES_SUCCESS:
            return action.response.data;
        case actionType.FETCH_CHILD_CATEGORIES_FAIL:
            return action.response;
        default:
            return state;
    }
}

