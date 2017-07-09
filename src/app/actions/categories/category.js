export const LIST_PARENT_CATEGORY="LIST_PARENT_CATEGORY";
export const LIST_PARENT_CATEGORY_SUCCESS="LIST_PARENT_CATEGORY_SUCCESS";
export const LIST_PARENT_CATEGORY_FAIL="LIST_PARENT_CATEGORY_FAIL";

export const LIST_CHILD_CATEGORY="LIST_CHILD_CATEGORY";
export const LIST_CHILD_CATEGORY_SUCCESS="LIST_CHILD_CATEGORY_SUCCESS";
export const LIST_CHILD_CATEGORY_FAIL="LIST_CHILD_CATEGORY_FAIL";

export const LIST_ALL_CATEGORY="LIST_ALL_CATEGORY";
export const LIST_ALL_CATEGORY_SUCCESS="LIST_ALL_CATEGORY_SUCCESS";
export const LIST_ALL_CATEGORY_FAIL="LIST_ALL_CATEGORY_FAIL";

/*oudam*/
export const FETCH_THIRD_CATEGORIES = 'FETCH_THIRD_CATEGORIES';
export const FETCH_THIRD_CATEGORIES_SUCCESS = 'FETCH_THIRD_CATEGORIES_SUCCESS';
export const FETCH_THIRD_CATEGORIES_FAIL = 'FETCH_THIRD_CATEGORIES_FAIL';

export const COUNT_VIEW_CATEGORY = 'COUNT_VIEW_CATEGORY';
export const COUNT_VIEW_CATEGORY_SUCCESS = 'COUNT_VIEW_CATEGORY_SUCCESS';
export const COUNT_VIEW_CATEGORY_FAIL = 'COUNT_VIEW_CATEGORY_FAIL';

export const FETCH_POPULAR_CATEGORIES = 'FETCH_POPULAR_CATEGORIES';
export const FETCH_POPULAR_CATEGORIES_SUCCESS = 'FETCH_POPULAR_CATEGORIES_SUCCESS';
export const FETCH_POPULAR_CATEGORIES_FAIL = 'FETCH_POPULAR_CATEGORIES_FAIL';

export const FETCH_SPECIAL_CATEGORIES = 'FETCH_SPECIAL_CATEGORIES';
export const FETCH_SPECIAL_CATEGORIES_SUCCESS = 'FETCH_SPECIAL_CATEGORIES_SUCCESS';
export const FETCH_SPECIAL_CATEGORIES_FAIL = 'FETCH_SPECIAL_CATEGORIES_FAIL';

export function listParentCategoryAction(parent){
    return{
        type:LIST_PARENT_CATEGORY,
        category:parent
    }
}
export function listChildCategoryAction(category){
    return{
        type:LIST_CHILD_CATEGORY,
        category:category
    }
}
export function listAllCategoryAction(category){
    return {
        type:LIST_ALL_CATEGORY,
        category:category
    }
}

/*oudam*/
export function fetchThirdCategoriesAction(category) {
    return{
        type: FETCH_THIRD_CATEGORIES,
        category: category
    }
}

export function countViewCategoryAction(categoryId) {
    return{
        type: COUNT_VIEW_CATEGORY,
        categoryId: categoryId
    }
}

export function fetchPopularCategoriesAction(limit) {
    return{
        type: FETCH_POPULAR_CATEGORIES,
        limit: limit
    }
}

export function fetchSpecialCategoriesAction(limit) {
    return{
        type: FETCH_SPECIAL_CATEGORIES,
        limit: limit
    }
}