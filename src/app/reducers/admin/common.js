import * as actionType from './../../actions/admin/common';

export function fetchMembersReducer(state = [{}], action) {
    switch (action.type) {
        case actionType.FETCH_MEMBERS_SUCCESS:
            return action.response.data;
        case actionType.FETCH_MEMBERS_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function fetchMemberDetailReducer(state = {}, action) {
    switch (action.type) {
        case actionType.FETCH_MEMBER_DETAIL_SUCCESS:
            return action.response.data;
        case actionType.FETCH_MEMBER_DETAIL_FAIL:
            return action.response;
        default:
            return state;
    }
}

export function updateMemberStatusReducer(state = {}, action) {
    switch (action.type) {
        case actionType.UPDATE_MEMBER_STATUS_SUCCESS:
            return action.response.data;
        case actionType.UPDATE_MEMBER_STATUS_FAIL:
            return action.response;
        default:
            return state;
    }
}

/**Oudam Visitor view counter**/

export function countViewWebsiteReducer(state = {}, action) {
    switch (action.type) {
        case actionType.COUNT_VIEW_WEBSITE_SUCCESS:
            return action.response.data;
        case actionType.COUNT_VIEW_WEBSITE_FAIL:
            return action.response;
        default:
            return state;
    }
}
export function fetchViewWebsiteReducer(state = [{}], action) {
    switch (action.type) {
        case actionType.FETCH_VIEW_WEBSITE_SUCCESS:
            return action.response.data;
        case actionType.FETCH_VIEW_WEBSITE_FAIL:
            return action.response;
        default:
            return state;
    }
}
