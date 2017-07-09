export const GET_MEMBER_DETAIL = "GET_MEMBER_DETAIL";
export const GET_MEMBER_DETAIL_SUCCESS = "GET_MEMBER_DETAIL_SUCCESS";
export const GET_MEMBER_DETAIL_FAIL = "GET_MEMBER_DETAIL_FAIL";

export const PROMOTE_MEMBER = "PROMOTE_MEMBER";
export const PROMOTE_MEMBER_SUCCESS = "PROMOTE_MEMBER_SUCCESS";
export const PROMOTE_MEMBER_FAIL = "PROMOTE_MEMBER_FAIL";

export const CHANGE_MEMBER_STATUS = "CHANGE_MEMBER_STATUS";
export const CHANGE_MEMBER_STATUS_SUCCESS = "CHANGE_MEMBER_STATUS_SUCCESS";
export const CHANGE_MEMBER_STATUS_FAIL = "CHANGE_MEMBER_STATUS_FAIL";

export const FETCH_MEMBER = 'FETCH_MEMBER';
export const FETCH_MEMBER_SUCCESS = 'FETCH_MEMBER_SUCCESS';
export const FETCH_MEMBER_FAIL = 'FETCH_MEMBER_FAIL';

/* TO GET MEMBER IN DETAIL */
export function actionGetMemberDetail(id){
    return {
        type: GET_MEMBER_DETAIL,
        member_id: id
    }
}

/* TO PROMOTE MEMBER */
export function actionPromoteMember(id){
    let promote_member={
        _id: id[0],
        userType:"merchant"
    };
    return {
        type: PROMOTE_MEMBER,
        promote: promote_member
    }
}
/* TO CHANGE MEMBER STATUS */
export function actionChangeMemberStatus(id,new_status){
    let status_member={
        _id: id[0],
        status: new_status
    };
    return {
        type: CHANGE_MEMBER_STATUS,
        status: status_member
    }
}
/* TO CHANGE MERCHANT STATUS */
export function actionChangeMerchantStatus(member){
    return {
        type: CHANGE_MEMBER_STATUS,
        member: member
    }
}


/**
 * get member action {member have file name , location , status , start date , end date , and pagination}
 * @param user
 * @returns {{type: string, user: *}}
 */
export function getMemberAction(member){
    return{
        type:FETCH_MEMBER,
        member: member
    }
}