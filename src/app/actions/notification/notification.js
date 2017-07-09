
export const POST_NOTIFICATION = "POST_NOTIFICATION";
export const POST_NOTIFICATION_SUCCESS = "POST_NOTIFICATION_SUCCESS";
export const POST_NOTIFICATION_FAIL = "POST_NOTIFICATION_FAIL";

export function actionPostNotification(notification){
    return{
        type: POST_NOTIFICATION,
        notification
    }
}

export const COUNT_NOTIFICATION = "COUNT_NOTIFICATION";
export const COUNT_NOTIFICATION_SUCCESS = "COUNT_NOTIFICATION_SUCCESS";
export const COUNT_NOTIFICATION_FAIL = "COUNT_NOTIFICATION_FAIL";

export function actionCountNotification(notification){
    return{
        type: COUNT_NOTIFICATION,
        notification
    }
}

export const GET_ALL_NOTIFICATIONS = "GET_ALL_NOTIFICATIONS";
export const GET_ALL_NOTIFICATIONS_SUCCESS = "GET_ALL_NOTIFICATIONS_SUCCESS";
export const GET_ALL_NOTIFICATIONS_FAIL = "GET_ALL_NOTIFICATIONS_FAIL";

export function actionAllGetNotificationsByUserId(notification){
    return{
        type: GET_ALL_NOTIFICATIONS,
        notification
    }
}

export const UPDATE_ALL_NOTIFICATION = "UPDATE_ALL_NOTIFICATION";
export const UPDATE_ALL_NOTIFICATION_SUCCESS = "UPDATE_ALL_NOTIFICATION_SUCCESS";
export const UPDATE_ALL_NOTIFICATION_FAIL = "UPDATE_ALL_NOTIFICATION_FAIL";

export function actionUpdateAllNotification(notification){
    return{
        type: UPDATE_ALL_NOTIFICATION,
        notification
    }
}

export const UPDATE_DIRTY_NOTIFICATION = "UPDATE_DIRTY_NOTIFICATION";
export const UPDATE_DIRTY_NOTIFICATION_SUCCESS = "UPDATE_DIRTY_NOTIFICATION_SUCCESS";
export const UPDATE_DIRTY_NOTIFICATION_FAIL = "UPDATE_DIRTY_NOTIFICATION_FAIL";

export function actionUpdateDirtyNotification(notification){
    return{
        type: UPDATE_DIRTY_NOTIFICATION,
        notification
    }
}

export const GET_NOTIFICATION = "GET_NOTIFICATION";
export const GET_NOTIFICATION_SUCCESS = "GET_NOTIFICATION_SUCCESS";
export const GET_NOTIFICATION_FAIL = "GET_NOTIFICATION_FAIL";

export function actionGetNotificationById(notification){
    return{
        type: GET_NOTIFICATION,
        notification
    }
}