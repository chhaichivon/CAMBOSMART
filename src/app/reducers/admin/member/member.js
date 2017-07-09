import {
    PROMOTE_MEMBER_SUCCESS,
    PROMOTE_MEMBER_FAIL,
    ADMIN_DETAIL_MEMBER_SUCCESS,
    ADMIN_DETAIL_MEMBER_FAIL,
    ADMIN_LIST_MEMBER_REQUEST_SUCCESS,
    ADMIN_LIST_MEMBER_REQUEST_FAIL,
    ADMIN_DELETE_MEMBER_REQUEST_SUCCESS,
    ADMIN_DELETE_MEMBER_REQUEST_FAIL,
    ADMIN_LIST_MEMBER_REQUESTS_EXPIRED_SUCCESS,
    ADMIN_LIST_MEMBER_REQUESTS_EXPIRED_FAIL,
    ADMIN_DELETE_MEMBER_REQUESTS_EXPIRED_SUCCESS,
    ADMIN_DELETE_MEMBER_REQUESTS_EXPIRED_FAIL,
    ADMIN_COUNT_NORMAL_MEMBERS_SUCCESS,
    ADMIN_COUNT_NORMAL_MEMBERS_FAIL
} from './../../../actions/admin/member/member';

/* ADMIN PROMOTE MEMBER TO BE MERCHANT */
export function promoteMemberReducer(state = {}, action) {
    switch (action.type) {
        case PROMOTE_MEMBER_SUCCESS:
            return action.response.data;
        case PROMOTE_MEMBER_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN PROMOTE MEMBER TO BE MERCHANT */
export function detailMemberReducer(state = {}, action) {
    switch (action.type) {
        case ADMIN_DETAIL_MEMBER_SUCCESS:
            return action.response.data;
        case ADMIN_DETAIL_MEMBER_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN LIST MEMBER REQUEST */
export function listMemberRequestReducer(state = {}, action){
    switch (action.type) {
        case ADMIN_LIST_MEMBER_REQUEST_SUCCESS:
            return action.response.data;
        case ADMIN_LIST_MEMBER_REQUEST_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN DELETE MEMBER REQUEST */
export function deleteMemberRequestReducer(state = {}, action){
    switch (action.type) {
        case ADMIN_DELETE_MEMBER_REQUEST_SUCCESS:
            return action.response.data;
        case ADMIN_DELETE_MEMBER_REQUEST_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN LIST MEMBER REQUESTS */
export function listMemberRequestsExpiredReducer(state = {}, action){
    switch (action.type) {
        case ADMIN_LIST_MEMBER_REQUESTS_EXPIRED_SUCCESS:
            return action.response.data;
        case ADMIN_LIST_MEMBER_REQUESTS_EXPIRED_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN DELETE MEMBER REQUESTS EXPIRED */
export function deleteMemberRequestsExpiredReducer(state = {}, action){
    switch (action.type) {
        case ADMIN_DELETE_MEMBER_REQUESTS_EXPIRED_SUCCESS:
            return action.response.data;
        case ADMIN_DELETE_MEMBER_REQUESTS_EXPIRED_FAIL:
            return action.response;
        default:
            return state;
    }
}

/* ADMIN COUNT NORMAL MEMBERS */
export function adminCountNormalMembersReducer(state = {}, action){
    switch (action.type) {
        case ADMIN_COUNT_NORMAL_MEMBERS_SUCCESS:
            return action.response.data;
        case ADMIN_COUNT_NORMAL_MEMBERS_FAIL:
            return action.response;
        default:
            return state;
    }
}