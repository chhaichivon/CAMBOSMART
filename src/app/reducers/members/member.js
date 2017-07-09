import {
    GET_MEMBER_DETAIL_SUCCESS,
    GET_MEMBER_DETAIL_FAIL,

    PROMOTE_MEMBER_SUCCESS,
    PROMOTE_MEMBER_FAIL,

    CHANGE_MEMBER_STATUS_SUCCESS,
    CHANGE_MEMBER_STATUS_FAIL,

    FETCH_MEMBER_SUCCESS,
    FETCH_MEMBER_FAIL
} from './../../actions/member';

/* TO GET MEMBER IN DETAIL */
export function getMemberDetail(state = {}, action) {
    switch (action.type) {
        case GET_MEMBER_DETAIL_SUCCESS :
            return action.response.data;
        case GET_MEMBER_DETAIL_FAIL:
            return state;
        default:
            return state;
    }
}

/* TO PROMOTE MEMBER IN DETAIL */
export function promoteMember(state = [{}], action) {
    switch (action.type) {
        case PROMOTE_MEMBER_SUCCESS :
        {
            return action.response.data
        }
        case PROMOTE_MEMBER_FAIL:
        {
            return state;
        }
        default:
            return state;
    }
}

/* TO PROMOTE MEMBER IN DETAIL */
export function changeMemberStatus(state = [{}], action) {
    switch (action.type) {
        case CHANGE_MEMBER_STATUS_SUCCESS :
        {
            return action.response.data
        }
        case CHANGE_MEMBER_STATUS_FAIL:
        {
            return state;
        }
        default:
            return state;
    }
}

/**
 * function getMemberReducer it working in reducer that manage type that success or fail , it return data response that saga query.
 * @param state
 * @param action
 * @returns {*}
 */
 export function getMembersReducer(state = [{}], action) {
     switch (action.type){
        case FETCH_MEMBER_SUCCESS : {
            return action.response.data;
        }
        case FETCH_MEMBER_FAIL: {
            return state;
        }
         default:
             return state;
     }
 }