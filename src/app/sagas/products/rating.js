
import { call, put } from 'redux-saga/effects';
import * as actionType from './../../actions/products/rating';
import { apiPostStarRating, apiGetStarRatingByProIdAndIp, apiGetTotalStarRatingByProductId } from './../../api/products/rating';

/** insert rating product */
export function* sagaPostStarRating(action){
    const response = yield call(apiPostStarRating, action);
    if(!(response == undefined)){
        yield put({type: actionType.POST_STAR_RATING_SUCCESS, response });
    }else{
        yield put({type: actionType.POST_STAR_RATING_FAIL, response});
    }
}

/** get rating product by productid and ipaddress */
export function* sagaGetStarRatingByProIdAndIp(action){
    const response = yield call(apiGetStarRatingByProIdAndIp, action);
    if(!(response == undefined)){
        yield put({type: actionType.GET_ONE_STAR_RATING_SUCCESS, response });
    }else{
        yield put({type: actionType.GET_ONE_STAR_RATING_FAIL, response});
    }
}

/** get total star rating product by productid */
export function* sagaGetTotalStarRatingByProductId(action){
    const response = yield call(apiGetTotalStarRatingByProductId, action);
    if(!(response == undefined)){
        yield put({type: actionType.GET_TOTAL_STAR_RATING_SUCCESS, response });
    }else{
        yield put({type: actionType.GET_TOTAL_STAR_RATING_FAIL, response});
    }
}