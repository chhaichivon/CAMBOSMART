import * as actionType from './../../actions/products/rating';

/** Insert star rating */
export function postStarRatingReducer(state = [{}],action){
    switch (action.type){
        case actionType.POST_STAR_RATING_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.POST_STAR_RATING_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}

/** get star rating by product id and ip */
export function getStarRatingByProIdAndIpReducer(state = [{}],action){
    switch (action.type){
        case actionType.GET_ONE_STAR_RATING_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.GET_ONE_STAR_RATING_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}

/** get total star rating by product id*/
export function getTotalStarRatingByProductIdReducer(state = [{}],action){
    switch (action.type){
        case actionType.GET_TOTAL_STAR_RATING_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.GET_TOTAL_STAR_RATING_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}