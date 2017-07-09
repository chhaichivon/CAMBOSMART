
export const POST_SUBSCRIBE = "POST_SUBSCRIBE";
export const POST_SUBSCRIBE_SUCCESS = "POST_SUBSCRIBE_SUCCESS";
export const POST_SUBSCRIBE_FAIL = "POST_SUBSCRIBE_FAIL";

export function actionPostSubscribe(subscribe){
    return{
        type: POST_SUBSCRIBE,
        subscribe
    }
}

export const GET_SUBSCRIBE = "GET_SUBSCRIBE";
export const GET_SUBSCRIBE_SUCCESS = "GET_SUBSCRIBE_SUCCESS";
export const GET_SUBSCRIBE_FAIL = "GET_SUBSCRIBE_FAIL";

export function actionGetSubscribeByStoreIdAndUserId(subscribe){
    return{
        type: GET_SUBSCRIBE,
        subscribe
    }
}

export const DELETE_SUBSCRIBE = "DELETE_SUBSCRIBE";
export const DELETE_SUBSCRIBE_SUCCESS = "DELETE_SUBSCRIBE_SUCCESS";
export const DELETE_SUBSCRIBE_FAIL = "DELETE_SUBSCRIBE_FAIL";

export function actionDeleteSubscribe(subscribe){
    return{
        type: DELETE_SUBSCRIBE,
        subscribe
    }
}