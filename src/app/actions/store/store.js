export const FETCH_STORE='FETCH_STORE';
export const FETCH_STORE_SUCCESS='FETCH_STORE_SUCCESS';
export const FETCH_STORE_FAIL='FETCH_STORE_FAIL';

export const UPDATE_STORE_MAP='UPDATE_STORE_MAP';
export const UPDATE_STORE_MAP_SUCCESS='UPDATE_STORE_MAP_SUCCESS';
export const UPDATE_STORE_MAP_FAIL='UPDATE_STORE_MAP_FAIL';

export const UPDATE_STORE='UPDATE_STORE';
export const UPDATE_STORE_SUCCESS='UPDATE_STORE_SUCCESS';
export const UPDATE_STORE_FAIL='UPDATE_STORE_FAIL';

export function fetchStoreAction(store){
    return{
        type: FETCH_STORE,
        store: store
    }
}

export function updateStoreMapAction(store){
    return{
        type:UPDATE_STORE_MAP,
        store: store
    }
}

export function updateStoreAction(store){
    console.log("action",store);
    return{
        type:UPDATE_STORE,
        store:store
    }
}


export const USER_WITH_STORE='USER_WITH_STORE';
export const USER_WITH_STORE_SUCCESS='USER_WITH_STORE_SUCCESS';
export const USER_WITH_STORE_FAIL='USER_WITH_STORE_FAIL';

export function getUserWithStoreAction(store){
    return{
        type:USER_WITH_STORE,
        store:store
    }
}