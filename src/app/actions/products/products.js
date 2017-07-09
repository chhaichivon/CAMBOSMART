/**
 * ACTION PRODUCT RENDER IN HOME PAGE
 * @type {string}
 */
    export const GET_PRODUCT_TYPE_HOT ="GET_PRODUCT_TYPE_HOT";
    export const GET_PRODUCT_TYPE_HOT_SUCCESS ="GET_PRODUCT_TYPE_HOT_SUCCESS";
    export const GET_PRODUCT_TYPE_HOT_FAIL = "GET_PRODUCT_TYPE_HOT_FAIL";
    export function getHotProductAction(product){
        return{
            type:GET_PRODUCT_TYPE_HOT,
            product:product
        }
    }
    export const GET_PRODUCT_TYPE_GOLD ="GET_PRODUCT_TYPE_GOLD";
    export const GET_PRODUCT_TYPE_GOLD_SUCCESS ="GET_PRODUCT_TYPE_GOLD_SUCCESS";
    export const GET_PRODUCT_TYPE_GOLD_FAIL = "GET_PRODUCT_TYPE_GOLD_FAIL";
    export function getGoldProductAction(product){
        return{
            type:GET_PRODUCT_TYPE_GOLD,
            product: product
        }
    }
    export const GET_PRODUCT_TYPE_NORMAL ="GET_PRODUCT_TYPE_NORMAL";
    export const GET_PRODUCT_TYPE_NORMAL_SUCCESS ="GET_PRODUCT_TYPE_NORMAL_SUCCESS";
    export const GET_PRODUCT_TYPE_NORMAL_FAIL = "GET_PRODUCT_TYPE_NORMAL_FAIL";
    export function getNormalProductAction(product){
        return{
            type:GET_PRODUCT_TYPE_NORMAL,
            product: product
        }
    }

/**
 * ACTION PRODUCT IN PAGE VIEW ALL
 * @type {string}
 */
        export const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
        export const GET_ALL_PRODUCT_SUCCESS = "GET_ALL_PRODUCT_SUCCESS";
        export const GET_ALL_PRODUCT_FAIL = "GET_ALL_PRODUCT_FAIL";
        export function getAllProductAction(product){
            return{
                type: GET_ALL_PRODUCT,
                product
            }
        }

/**
 * ACTION PRODUCT BY SPECIAL CATEGORY
 * @type {string}
 */
    export const GET_PRODUCT_SPECIAL_CATEGORY = "GET_PRODUCT_SPECIAL_CATEGORY";
    export const GET_PRODUCT_SPECIAL_CATEGORY_SUCCESS = "GET_PRODUCT_SPECIAL_CATEGORY_SUCCESS";
    export const GET_PRODUCT_SPECIAL_CATEGORY_FAIL = "GET_PRODUCT_SPECIAL_CATEGORY_FAIL";
    export function getProductSpecialCategoryAction(product){
        return{
            type: GET_PRODUCT_SPECIAL_CATEGORY,
            product
        }
    }

/**
 * FILTER PRODUCT IN PAGE CATEGORY
 * @type {string}
 */
    export const GET_FILTER_PRODUCTS_HOT = "GET_FILTER_PRODUCTS_HOT";
    export const GET_FILTER_PRODUCTS_HOT_SUCCESS = "GET_FILTER_PRODUCTS_HOT_SUCCESS";
    export const GET_FILTER_PRODUCTS_HOT_FAIL = "GET_FILTER_PRODUCTS_HOT_FAIL";
    export function getProductFilterHotAction(product){
        return{
            type:GET_FILTER_PRODUCTS_HOT,
            product: product
        }
    }
    export const GET_FILTER_PRODUCTS_GOLD = "GET_FILTER_PRODUCTS_GOLD";
    export const GET_FILTER_PRODUCTS_GOLD_SUCCESS = "GET_FILTER_PRODUCTS_GOLD_SUCCESS";
    export const GET_FILTER_PRODUCTS_GOLD_FAIL = "GET_FILTER_PRODUCTS_GOLD_FAIL";
    export function getProductFilterGoldAction(product){
        return{
            type:GET_FILTER_PRODUCTS_GOLD,
            product: product
        }
    }
    export const GET_FILTER_PRODUCTS_NORMAL = "GET_FILTER_PRODUCTS_NORMAL";
    export const GET_FILTER_PRODUCTS_NORMAL_SUCCESS = "GET_FILTER_PRODUCTS_NORMAL_SUCCESS";
    export const GET_FILTER_PRODUCTS_NORMAL_FAIL = "GET_FILTER_PRODUCTS_NORMAL_FAIL";
    export function getProductFilterNormalAction(product){
        return{
            type:GET_FILTER_PRODUCTS_NORMAL,
            product: product
        }
    }

/**
 * FILTER PRODUCT IN PAGE LOCATION
 * @type {string}
 */
    export const GET_FILTER_PRODUCT_HOT_LOCATION = "GET_FILTER_PRODUCT_HOT_LOCATION";
    export const GET_FILTER_PRODUCT_HOT_LOCATION_SUCCESS = "GET_FILTER_PRODUCT_HOT_LOCATION_SUCCESS";
    export const GET_FILTER_PRODUCT_HOT_LOCATION_FAIL = "GET_FILTER_PRODUCT_HOT_LOCATION_FAIL";
    export function getProductFilterHotLocationAction(product) {
        return{
            type:GET_FILTER_PRODUCT_HOT_LOCATION,
            product:product
        }
    }
    export const GET_FILTER_PRODUCT_GOLD_LOCATION = "GET_FILTER_PRODUCT_GOLD_LOCATION";
    export const GET_FILTER_PRODUCT_GOLD_LOCATION_SUCCESS = "GET_FILTER_PRODUCT_GOLD_LOCATION_SUCCESS";
    export const GET_FILTER_PRODUCT_GOLD_LOCATION_FAIL = "GET_FILTER_PRODUCT_GOLD_LOCATION_FAIL";
    export function getProductFilterGoldLocationAction(product) {
        return{
            type:GET_FILTER_PRODUCT_GOLD_LOCATION,
            product:product
        }
    }
    export const GET_FILTER_PRODUCT_NORMAL_LOCATION = "GET_FILTER_PRODUCT_NORMAL_LOCATION";
    export const GET_FILTER_PRODUCT_NORMAL_LOCATION_SUCCESS = "GET_FILTER_PRODUCT_NORMAL_LOCATION_SUCCESS";
    export const GET_FILTER_PRODUCT_NORMAL_LOCATION_FAIL = "GET_FILTER_PRODUCT_NORMAL_LOCATION_FAIL";
    export function getProductFilterNormalLocationAction(product) {
        return{
            type:GET_FILTER_PRODUCT_NORMAL_LOCATION,
            product:product
        }
    }

/**
 * PRODUCTS RELATED
 * @type {string}
 */
    export const GET_RELATED_PRODUCTS = "GET_RELATED_PRODUCTS";
    export const GET_RELATED_PRODUCTS_SUCCESS = "GET_RELATED_PRODUCTS_SUCCESS";
    export const GET_RELATED_PRODUCTS_FAIL = "GET_RELATED_PRODUCTS_FAIL";
    export function actionGetRelatedProducts(product){
        return{
            type: GET_RELATED_PRODUCTS,
            product: product,
        }
    }

/**
 * PRODUCT RECENTLY
 * @type {string}
 */
    export const GET_RECENTLY_PRODUCTS = "GET_RECENTLY_PRODUCTS";
    export const GET_RECENTLY_PRODUCTS_SUCCESS = "GET_RECENTLY_PRODUCTS_SUCCESS";
    export const GET_RECENTLY_PRODUCTS_FAIL = "GET_RECENTLY_PRODUCTS_FAIL";
    export function actionGetRecentlyProducts(product){
        return{
            type: GET_RECENTLY_PRODUCTS,
            product:product
        }
    }

/**
 * PRODUCT BY USER NAME
 * @type {string}
 */
export const GET_PRODUCT_BY_USERNAME = "GET_PRODUCT_BY_USERNAME";
export const GET_PRODUCT_BY_USERNAME_SUCCESS = "GET_PRODUCT_BY_USERNAME_SUCCESS";
export const GET_PRODUCT_BY_USERNAME_FAIL = "GET_PRODUCT_BY_USERNAME_FAIL";
export function actionGetProductsByUsername(product){
    return{
        type: GET_PRODUCT_BY_USERNAME,
        product:product
    }
}


/**oudam**/
export const COUNT_PRODUCT_VIEW = "COUNT_PRODUCT_VIEW";
export const COUNT_PRODUCT_VIEW_SUCCESS = "COUNT_PRODUCT_VIEW_SUCCESS";
export const COUNT_PRODUCT_VIEW_FAIL = "COUNT_PRODUCT_VIEW_FAIL";
export function countProductViewAction(productId){
    return{
        type: COUNT_PRODUCT_VIEW,
        productId: productId
    }
}
/*Naseat*/

export const GET_PRODUCT_BY_CATEGORY_HOT="GET_PRODUCT_BY_CATEGORY_HOT";
export const GET_PRODUCT_BY_CATEGORY_HOT_SUCCESS="GET_PRODUCT_BY_CATEGORY_HOT_SUCCESS";
export const GET_PRODUCT_BY_CATEGORY_HOT_FAIL="GET_PRODUCT_BY_CATEGORY_HOT_FAIL";

export function getProductByCategoryHotAction(product){
    return {
        type:GET_PRODUCT_BY_CATEGORY_HOT,
        product
    }
}
export const GET_PRODUCT_BY_CATEGORY_GOLD="GET_PRODUCT_BY_CATEGORY_GOLD";
export const GET_PRODUCT_BY_CATEGORY_GOLD_SUCCESS="GET_PRODUCT_BY_CATEGORY_GOLD_SUCCESS";
export const GET_PRODUCT_BY_CATEGORY_GOLD_FAIL="GET_PRODUCT_BY_CATEGORY_GOLD_FAIL";

export function getProductByCategoryGoldAction(product){
    return {
        type:GET_PRODUCT_BY_CATEGORY_GOLD,
        product
    }
}
export const GET_PRODUCT_BY_CATEGORY_NORMAL="GET_PRODUCT_BY_CATEGORY_NORMAL";
export const GET_PRODUCT_BY_CATEGORY_NORMAL_SUCCESS="GET_PRODUCT_BY_CATEGORY_NORMAL_SUCCESS";
export const GET_PRODUCT_BY_CATEGORY_NORMAL_FAIL="GET_PRODUCT_BY_CATEGORY_NORMAL_FAIL";

export function getProductByCategoryNormalAction(product){
    return {
        type:GET_PRODUCT_BY_CATEGORY_NORMAL,
        product
    }
}
export const FETCH_PRODUCT_BY_NAME= 'FETCH_PRODUCT_BY_NAME';
export const FETCH_PRODUCT_BY_NAME_SUCCESS= 'FETCH_PRODUCT_BY_NAME_SUCCESS';
export const FETCH_PRODUCT_BY_NAME_FAIL='FETCH_PRODUCT_BY_NAME_FAIL';

export function fetchProductNameAction(name){
    return{
        type: FETCH_PRODUCT_BY_NAME,
        name
    }
}