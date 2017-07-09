import * as actionType from './../../actions/notification/notification';

/** Insert notification */
export function postNotificationReducer(state = [{}],action){
    switch (action.type){
        case actionType.POST_NOTIFICATION_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.POST_NOTIFICATION_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}

/** count notification */
export function countNotificationReducer(state = [{}],action){
    switch (action.type){
        case actionType.COUNT_NOTIFICATION_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.COUNT_NOTIFICATION_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}

/** get all notification by user id */
export function getAllNotificationsByUserIdReducer(state = [{}],action){
    switch (action.type){
        case actionType.GET_ALL_NOTIFICATIONS_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.GET_ALL_NOTIFICATIONS_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}

/** update all notification */
export function updateAllNotificationReducer(state = [{}],action){
    switch (action.type){
        case actionType.UPDATE_ALL_NOTIFICATION_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.UPDATE_ALL_NOTIFICATION_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}

/** update dirty notification */
export function updateDirtyNotificationReducer(state = [{}],action){
    switch (action.type){
        case actionType.UPDATE_DIRTY_NOTIFICATION_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.UPDATE_DIRTY_NOTIFICATION_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}

/** get notification by id */
export function getNotificationByIdReducer(state = [{}],action){
    switch (action.type){
        case actionType.GET_NOTIFICATION_SUCCESS:
        {
            return action.response.data;
        }
        case actionType.GET_NOTIFICATION_FAIL:
        {
            return action.response.data;
        }
        default:
            return state;
    }
}