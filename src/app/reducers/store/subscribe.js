import * as actionType from './../../actions/store/subscribe';

/** Insert subscribe */
export function postSubscribeReducer(state = [{}],action){
    switch (action.type){
        case actionType.POST_SUBSCRIBE_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.POST_SUBSCRIBE_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}

/** get subscribe by store id and user id */
export function getSubscribeByStoreIdAndUserIdReducer(state = [{}],action){
    switch (action.type){
        case actionType.GET_SUBSCRIBE_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.GET_SUBSCRIBE_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}

/** Insert subscribe */
export function deleteSubscribeReducer(state = [{}],action){
    switch (action.type){
        case actionType.DELETE_SUBSCRIBE_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.DELETE_SUBSCRIBE_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}