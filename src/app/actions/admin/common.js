export const UPDATE_MEMBER_STATUS = 'UPDATE_MEMBER_STATUS';
export const UPDATE_MEMBER_STATUS_SUCCESS = 'UPDATE_MEMBER_STATUS_SUCCESS';
export const UPDATE_MEMBER_STATUS_FAIL = 'UPDATE_MEMBER_STATUS_FAIL';

export const FETCH_MEMBERS = 'FETCH_MEMBERS';
export const FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS';
export const FETCH_MEMBERS_FAIL = 'FETCH_MEMBERS_FAIL';

export const FETCH_MEMBER_DETAIL = 'FETCH_MEMBER_DETAIL';
export const FETCH_MEMBER_DETAIL_SUCCESS = 'FETCH_MEMBER_DETAIL_SUCCESS';
export const FETCH_MEMBER_DETAIL_FAIL = 'FETCH_MEMBER_DETAIL_FAIL';

/**Oudam Visitor view counter**/
export const COUNT_VIEW_WEBSITE = 'COUNT_VIEW_WEBSITE';
export const COUNT_VIEW_WEBSITE_SUCCESS = 'COUNT_VIEW_WEBSITE_SUCCESS';
export const COUNT_VIEW_WEBSITE_FAIL = 'COUNT_VIEW_WEBSITE_FAIL';

export const FETCH_VIEW_WEBSITE = 'FETCH_VIEW_WEBSITE';
export const FETCH_VIEW_WEBSITE_SUCCESS = 'FETCH_VIEW_WEBSITE_SUCCESS';
export const FETCH_VIEW_WEBSITE_FAIL = 'FETCH_VIEW_WEBSITE_FAIL';


export function fetchMembersAction(member) {
    return{
        type: FETCH_MEMBERS,
        member: member
    }
}

export function fetchMemberDetailAction(id) {
    return{
        type: FETCH_MEMBER_DETAIL,
        id: id
    }
}

export function updateMemberStatusAction(member) {
    return{
        type: UPDATE_MEMBER_STATUS,
        member: member
    }
}

/**Oudam Visitor view counter**/

export function countViewWebsiteAction() {
    return{
        type: COUNT_VIEW_WEBSITE
    }
}

export function fetchViewWebsiteAction(visitor) {
    return{
        type: FETCH_VIEW_WEBSITE,
        visitor: visitor
    }
}