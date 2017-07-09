
export const POST_STAR_RATING = "POST_STAR_RATING";
export const POST_STAR_RATING_SUCCESS = "POST_STAR_RATING_SUCCESS";
export const POST_STAR_RATING_FAIL = "POST_STAR_RATING_FAIL";

export function actionPostStarRating(starRating){
    return{
        type: POST_STAR_RATING,
        starRating
    }
}

export const GET_ONE_STAR_RATING = "GET_ONE_STAR_RATING";
export const GET_ONE_STAR_RATING_SUCCESS = "GET_ONE_STAR_RATING_SUCCESS";
export const GET_ONE_STAR_RATING_FAIL = "GET_ONE_STAR_RATING_FAIL";

export function actionGetStarRatingByProIdAndIp(pro_id){
    return{
        type: GET_ONE_STAR_RATING,
        pro_id
    }
}

export const GET_TOTAL_STAR_RATING = "GET_TOTAL_STAR_RATING";
export const GET_TOTAL_STAR_RATING_SUCCESS = "GET_TOTAL_STAR_RATING_SUCCESS";
export const GET_TOTAL_STAR_RATING_FAIL = "GET_TOTAL_STAR_RATING_FAIL";

export function actionGetTotalStarRatingByProductId(pro_id){
    return{
        type: GET_TOTAL_STAR_RATING,
        pro_id
    }
}