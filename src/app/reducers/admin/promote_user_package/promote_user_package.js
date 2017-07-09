import {
    SAVE_PROMOTE_USER_PACKAGE_SUCCESS,
    SAVE_PROMOTE_USER_PACKAGE_FAIL,
    LIST_PROMOTE_USER_PACKAGE_SUCCESS,
    LIST_PROMOTE_USER_PACKAGE_FAIL,
    GET_PROMOTE_USER_PACKAGE_SUCCESS,
    GET_PROMOTE_USER_PACKAGE_FAIL,
    DELETE_PROMOTE_USER_PACKAGE_SUCCESS,
    DELETE_PROMOTE_USER_PACKAGE_FAIL,
    UPDATE_PROMOTE_USER_PACKAGE_SUCCESS,
    UPDATE_PROMOTE_USER_PACKAGE_FAIL,
    LIST_ALL_PROMOTE_USER_PACKAGE_SUCCESS,
    LIST_ALL_PROMOTE_USER_PACKAGE_FAIL
} from './../../../actions/admin/promote_user_package/promote_user_package';

/* SAVE PROMOTED USER PACKAGE */
export function savePromoteUserPackageReducer(state = {}, action){
    switch (action.type){
        case SAVE_PROMOTE_USER_PACKAGE_SUCCESS:
            return action.response.data;
        case SAVE_PROMOTE_USER_PACKAGE_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* LIST PROMOTED USER PACKAGE */
export function listPromoteUserPackageReducer(state = {}, action){
    switch (action.type){
        case LIST_PROMOTE_USER_PACKAGE_SUCCESS:
            return action.response.data;
        case LIST_PROMOTE_USER_PACKAGE_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* LIST ALL PROMOTED USER PACKAGE */
export function listAllPromotedUserPackageReducer(state = {}, action){
    switch (action.type){
        case LIST_ALL_PROMOTE_USER_PACKAGE_SUCCESS:
            return action.response.data;
        case LIST_ALL_PROMOTE_USER_PACKAGE_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* GET PROMOTED USER PACKAGE */
export function getPromoteUserPackageReducer(state = {}, action){
    switch (action.type){
        case GET_PROMOTE_USER_PACKAGE_SUCCESS:
            return action.response.data;
        case GET_PROMOTE_USER_PACKAGE_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* UPDATE PROMOTED USER PACKAGE */
export function updatePromoteUserPackageReducer(state = {}, action){
    switch (action.type){
        case UPDATE_PROMOTE_USER_PACKAGE_SUCCESS:
            return action.response.data;
        case UPDATE_PROMOTE_USER_PACKAGE_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* DELETE PROMOTED USER PACKAGE */
export function deletePromoteUserPackageReducer(state = {}, action){
    switch (action.type){
        case DELETE_PROMOTE_USER_PACKAGE_SUCCESS:
            return action.response.data;
        case DELETE_PROMOTE_USER_PACKAGE_FAIL:
            return action.response;
        default:
            return state;
    }
}