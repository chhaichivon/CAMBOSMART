import * as actionType from './../../actions/products/products';

    /*Product In Page Home*/
    export function fetchHotProductReducer(state =[{}],action){
        switch (action.type){
            case  actionType.GET_PRODUCT_TYPE_HOT_SUCCESS:return action.response.data;
            case actionType.GET_PRODUCT_TYPE_HOT_FAIL:return action.response.data;
            default:return state;
        }
    }
    export function fetchGoldProductReducer(state =[{}],action){
        switch (action.type){
            case  actionType.GET_PRODUCT_TYPE_GOLD_SUCCESS:return action.response.data;
            case actionType.GET_PRODUCT_TYPE_GOLD_FAIL:return action.response.data;
            default:return state;
        }
    }
    export function fetchNormalProductReducer(state =[{}],action){
        switch (action.type){
            case  actionType.GET_PRODUCT_TYPE_NORMAL_SUCCESS:return action.response.data;
            case actionType.GET_PRODUCT_TYPE_NORMAL_FAIL:return action.response.data;
            default:return state;
        }
    }

    /*Product In Page View All*/
    export function fetchAllProductReducer(state = [{}],action){
        switch (action.type){
            case actionType.GET_ALL_PRODUCT_SUCCESS:
            {
                return action.response.data;
            }
            case actionType.GET_ALL_PRODUCT_FAIL:
            {
                return action.response.data;
            }
            default:
                return state;
        }
    }

    /*Product In Tab Special Category */
    export function fetchProductSpecialCategoryReducer(state = [{}],action){
        switch (action.type){
            case actionType.GET_PRODUCT_SPECIAL_CATEGORY_SUCCESS:
            {
                return action.response.data;
            }
            case actionType.GET_PRODUCT_SPECIAL_CATEGORY_FAIL:
            {
                return action.response.data;
            }
            default:
                return state;
        }
    }

    /*Product In Category Page*/
    export function fetchProductHotFilterReducer(state = [{}], action){
        switch(action.type){
            case  actionType.GET_FILTER_PRODUCTS_HOT_SUCCESS: return action.response.data;
            case actionType.GET_FILTER_PRODUCTS_HOT_FAIL:return action.response.data;
            default:return state;
        }
    }
    export function fetchProductGoldFilterReducer(state = [{}], action){
        switch(action.type){
            case  actionType.GET_FILTER_PRODUCTS_GOLD_SUCCESS:return action.response.data;
            case actionType.GET_FILTER_PRODUCTS_GOLD_FAIL:return action.response.data;
            default:return state;
        }
    }

    export function fetchProductNormalFilterReducer(state = [{}], action){
        switch(action.type){
            case  actionType.GET_FILTER_PRODUCTS_NORMAL_SUCCESS:return action.response.data;
            case actionType.GET_FILTER_PRODUCTS_NORMAL_FAIL:return action.response.data;
            default:return state;
        }
    }


    /*Product In Location Page*/
    export function fetchProductHotFilterLocationReducer(state = [{}], action){
        switch(action.type){
            case actionType.GET_FILTER_PRODUCT_HOT_LOCATION_SUCCESS: return action.response.data;
            case actionType.GET_FILTER_PRODUCT_HOT_LOCATION_FAIL:return action.response.data;
            default:return state;
        }
    }
    export function fetchProductGoldFilterLocationReducer(state = [{}], action){
        switch(action.type){
            case  actionType.GET_FILTER_PRODUCT_GOLD_LOCATION_SUCCESS:return action.response.data;
            case actionType.GET_FILTER_PRODUCT_GOLD_LOCATION_FAIL:return action.response.data;
            default:return state;
        }
    }

    export function fetchProductNormalFilterLocationReducer(state = [{}], action){
        switch(action.type){
            case  actionType.GET_FILTER_PRODUCT_NORMAL_LOCATION_SUCCESS:return action.response.data;
            case actionType.GET_FILTER_PRODUCT_NORMAL_LOCATION_FAIL:return action.response.data;
            default:return state;
        }
    }


    /*PRODUCT RELATED*/
    export function fetchRelatedProductsReducer(state = [{}],action){
        switch (action.type){
            case actionType.GET_RELATED_PRODUCTS_SUCCESS:
            {
                return action.response.data;
            }
            case actionType.GET_RELATED_PRODUCTS_FAIL:
            {
                return action.response.data;
            }
            default:
                return state;
        }
    }


    /*PRODUCT RECENTLY*/
    export function fetchRecentlyProductsReducer(state = [{}],action){
        switch (action.type){
            case actionType.GET_RECENTLY_PRODUCTS_SUCCESS:
            {
                return action.response.data;
            }
            case actionType.GET_RECENTLY_PRODUCTS_FAIL:
            {
                return action.response.data;
            }
            default:
                return state;
        }
    }

    /*PRODUCT RECENTLY*/
    export function fetchProductsUserNameReducer(state = [{}],action){
        switch (action.type){
            case actionType.GET_PRODUCT_BY_USERNAME_SUCCESS:
            {
                return action.response.data;
            }
            case actionType.GET_PRODUCT_BY_USERNAME_FAIL:
            {
                return action.response.data;
            }
            default:
                return state;
        }
    }




/**oudam**/
export function countProductViewReducer(state = {}, action){
    switch(action.type){
        case actionType.COUNT_PRODUCT_VIEW_SUCCESS: return action.response.data;
        case actionType.COUNT_PRODUCT_VIEW_FAIL: return action.response.data;
        default: return state;
    }
}

/**naseat**/
export function fetchProductHotByCategoryReducer(state= [{}], action){
    switch (action.type){
        case actionType.GET_PRODUCT_BY_CATEGORY_HOT_SUCCESS:
            return action.response.data;
        case actionType.GET_PRODUCT_BY_CATEGORY_HOT_FAIL: return state;
        default: return state;
    }
}
export function fetchProductGoldByCategoryReducer(state= [{}], action){
    switch (action.type){
        case actionType.GET_PRODUCT_BY_CATEGORY_GOLD_SUCCESS:
            return action.response.data;
        case actionType.GET_PRODUCT_BY_CATEGORY_GOLD_FAIL: return state;
        default: return state;
    }
}
export function fetchProductNormalByCategoryReducer(state= [{}], action){
    switch (action.type){
        case actionType.GET_PRODUCT_BY_CATEGORY_NORMAL_SUCCESS:
            return action.response.data;
        case actionType.GET_PRODUCT_BY_CATEGORY_NORMAL_FAIL: return state;
        default: return state;
    }
}
export function fetchProductByNameReducer(state= [{}], action){
    switch (action.type){
        case actionType.FETCH_PRODUCT_BY_NAME_SUCCESS:
            return action.response.data;
        case actionType.FETCH_PRODUCT_BY_NAME_FAIL:
            return state;
        default: return state;
    }
}

