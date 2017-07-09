export const SAVE_CATEGORY = "SAVE_CATEGORY";
export const SAVE_CATEGORY_SUCCESS = "SAVE_CATEGORY_SUCCESS";
export const SAVE_CATEGORY_FAIL = "SAVE_CATEGORY_FAIL";

export const GET_PARENT_CATEGORY = "GET_PARENT_CATEGORY";
export const GET_PARENT_CATEGORY_SUCCESS = "GET_PARENT_CATEGORY_SUCCESS";
export const GET_PARENT_CATEGORY_FAIL = "GET_PARENT_CATEGORY_FAIL";

export const GET_PARENT_CATEGORY_PAGINATION = "GET_PARENT_CATEGORY_PAGINATION";
export const GET_PARENT_CATEGORY_PAGINATION_SUCCESS = "GET_PARENT_CATEGORY_PAGINATION_SUCCESS";
export const GET_PARENT_CATEGORY_PAGINATION_FAIL = "GET_PARENT_CATEGORY_PAGINATION_FAIL";

export const GET_SUB_CATEGORIES_BY_ID = "GET_SUB_CATEGORIES_BY_ID";
export const GET_SUB_CATEGORIES_BY_ID_SUCCESS = "GET_SUB_CATEGORIES_BY_ID_SUCCESS";
export const GET_SUB_CATEGORIES_BY_ID_FAIL = "GET_SUB_CATEGORIES_BY_ID_FAIL";

export const GET_ALL_CATEGORY = "GET_ALL_CATEGORY";
export const GET_ALL_CATEGORY_SUCCESS = "GET_ALL_CATEGORY_SUCCESS";
export const GET_ALL_CATEGORY_FAIL = "GET_ALL_CATEGORY_FAIL";


export const GET_CATEGORY_BY_ID = "GET_CATEGORY_BY_ID";
export const GET_CATEGORY_BY_ID_SUCCESS = "GET_CATEGORY_BY_ID_SUCCESS";
export const GET_CATEGORY_BY_ID_FAIL = "GET_CATEGORY_BY_ID_FAIL";

export const UPDATE_CATEGORY_BY_ID = "UPDATE_CATEGORY_BY_ID";
export const UPDATE_CATEGORY_BY_ID_SUCCESS = "UPDATE_CATEGORY_BY_ID_SUCCESS";
export const UPDATE_CATEGORY_BY_ID_FAIL = "UPDATE_CATEGORY_BY_ID_FAIL";


/**===================OUdam=================**/
export const INSERT_CATEGORY = "INSERT_CATEGORY";
export const INSERT_CATEGORY_SUCCESS = "INSERT_CATEGORY_SUCCESS";
export const INSERT_CATEGORY_FAIL = "INSERT_CATEGORY_FAIL";

export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_CATEGORY_SUCCESS = "UPDATE_CATEGORY_SUCCESS";
export const UPDATE_CATEGORY_FAIL = "UPDATE_CATEGORY_FAIL";

export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
export const DELETE_CATEGORY_FAIL = "DELETE_CATEGORY_FAIL";

export const FETCH_CATEGORY = "FETCH_CATEGORY";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_FAIL = "FETCH_CATEGORY_FAIL";

export const FETCH_PARENT_CATEGORIES = "FETCH_PARENT_CATEGORIES";
export const FETCH_PARENT_CATEGORIES_SUCCESS = "FETCH_PARENT_CATEGORIES_SUCCESS";
export const FETCH_PARENT_CATEGORIES_FAIL = "FETCH_PARENT_CATEGORIES_FAIL";

export const FETCH_CHILD_CATEGORIES = "FETCH_CHILD_CATEGORIES";
export const FETCH_CHILD_CATEGORIES_SUCCESS = "FETCH_CHILD_CATEGORIES_SUCCESS";
export const FETCH_CHILD_CATEGORIES_FAIL = "FETCH_CHILD_CATEGORIES_FAIL";


/* SAVE CATEGORY */
export function actionSaveCategory(category) {
    return{
        type: SAVE_CATEGORY,
        category: category
    }
}

/* GET ALL PARENT CATEGORY */
export function actionGetParentCategory() {
    return{
        type: GET_PARENT_CATEGORY
    }
}
/* GET PARENT CATEGORIES WITH PAGINATION */
export function actionGetParentCategoryPage(category) {
    return{
        type: GET_PARENT_CATEGORY_PAGINATION,
        category: category
    }
}

/* GET SUB CATEGORIES BY ID */
export function actionGetSubCategoryById(category) {
    return{
        type: GET_SUB_CATEGORIES_BY_ID,
        category: category
    }
}

/* GET ALL CATEGORY */
export function actionGetAllCategory() {
    return{
        type: GET_ALL_CATEGORY,
    }
}

/* DELETE CATEGORY */
export function actionDeleteCategory(id) {
    return{
        type: DELETE_CATEGORY,
        id: id
    }
}

/* GET CATEGORY BY ID */
export function actionGetCategoryById(id){
    return{
        type: GET_CATEGORY_BY_ID,
        id: id
    }
}

/* UPDATE CATEGORY BY ID */
export function actionUpdateCategoryById(category){
    return{
        type: UPDATE_CATEGORY_BY_ID,
        category: category
    }
}

/**===================OUdam=================**/

export function insertCategoryAction(category){
    return{
        type: INSERT_CATEGORY,
        category: category
    }
}

export function updateCategoryAction(category){
    return{
        type: UPDATE_CATEGORY,
        category: category
    }
}

export function deleteCategoryAction(category){
    return{
        type: DELETE_CATEGORY,
        category: category
    }
}

export function fetchCategoryAction(category){
    return{
        type: FETCH_CATEGORY,
        category: category
    }
}

export function fetchParentCategoriesAction(category){
    return{
        type: FETCH_PARENT_CATEGORIES,
        category: category
    }
}

export function fetchChildCategoriesAction(category){
    return{
        type: FETCH_CHILD_CATEGORIES,
        category: category
    }
}