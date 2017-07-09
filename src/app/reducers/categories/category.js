import * as actionType from'./../../actions/categories/category';

export function listParentCategoryReducer(state = [{}], aciton) {
    switch (aciton.type) {
        case actionType.LIST_PARENT_CATEGORY_SUCCESS: {
            return aciton.response.data
        }
        case actionType.LIST_PARENT_CATEGORY_FAIL: {
            return state;
        }
        default:
            return state;
    }
}
export function listChildCategoryReducer(state = [{}], action) {
    switch (action.type) {
        case actionType.LIST_CHILD_CATEGORY_SUCCESS: {
            return action.response.data
        }
        case actionType.LIST_CHILD_CATEGORY_FAIL: {
            return state;
        }
        default:
            return state;
    }
}
export function listAllCategoryReducer(state = [{}], action) {
    switch (action.type) {
        case actionType.LIST_ALL_CATEGORY_SUCCESS: {
            return action.response.data
        }
        case actionType.LIST_ALL_CATEGORY_FAIL: {
            console.log("reducer Err:");
            return state;
        }
        default:
            return state;
    }
}

/*oudam*/
export function fetchThirdCategoriesReducer(state = [{}], action) {
    switch (action.type) {
        case actionType.FETCH_THIRD_CATEGORIES_SUCCESS:
            return action.response.data;
        case actionType.FETCH_THIRD_CATEGORIES_FAIL:
            return state;
        default: return state;
    }
}

export function countViewCategoryReducer(state = {}, action) {
    switch (action.type) {
        case actionType.COUNT_VIEW_CATEGORY_SUCCESS:
            return action.response.data;
        case actionType.COUNT_VIEW_CATEGORY_FAIL:
            return state;
        default: return state;
    }
}

export function fetchPopularCategoriesReducer(state = [{}], action) {
    switch (action.type) {
        case actionType.FETCH_POPULAR_CATEGORIES_SUCCESS:
            return action.response.data;
        case actionType.FETCH_POPULAR_CATEGORIES_FAIL:
            return state;
        default: return state;
    }
}

export function fetchSpecialCategoriesReducer(state = [{}], action) {
    switch (action.type) {
        case actionType.FETCH_SPECIAL_CATEGORIES_SUCCESS:
            return action.response.data;
        case actionType.FETCH_SPECIAL_CATEGORIES_FAIL:
            return state;
        default: return state;
    }
}
