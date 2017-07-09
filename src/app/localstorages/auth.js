
import { saveState, loadState, ActivateMailCookie } from './local_storage';


// function check admin logged into admin dashboard
export const checkAuthAdmin = (nextState, replace) => {
    try {
        if(loadState().user.userType == undefined){
            replace('/');
        }
        if (loadState().user.userType.toLocaleLowerCase() !== 'admin' 
            && loadState().user.userType.toLocaleLowerCase() !== 'editor') {
            replace('/');
        }
    } catch (error) {
        replace('/');
    }
};

// function check Merchant logged into admin dashboard
export const checkAuthMerchant = (nextState, replace) => {
    try {
        if(loadState().user.userType == undefined){
            replace('/');
        }
        if (loadState().user.userType.toLowerCase() !== 'merchant') {
            replace('/');
        }
    } catch (error) {
        replace('/');
    }
};

// function check User normal logged into admin dashboard
export const checkAuthNormal = (nextState, replace) => {

    try {
        if(loadState().user.userType == undefined){
            replace('/');
        }
        if (loadState().user.userType.toLowerCase() !== 'normal') {
            replace('/');
        }
    } catch (error) {
        replace('/');
    }
};
//function check login admin
export const checkLoginAdmin = (state, replace) => {
    let  url_admin ='wp-admin';
    let  url = window.location.assign(url_admin);
    try {
        if(loadState().user.userType == undefined && url == url_admin){
            replace('/wp-admin');
        }
    }catch(error){
        replace('/');
    }
}

/* function check for signin/signup action if it logged auto goto another pages by role */
export const checkIsLogged = (nextState, replace) => {
    try {
        if (loadState().user.role == 1) {
            replace('/admin');
        } else if (loadState().user.role !== 1) {
            replace('/');
        } else {
            replace('/signin');
        }
    } catch (error) {
    }
};

/**
 * function check activate mail
 * if not activate from mail can not access this link
 */
export const checkActivate = (nextState, replace) => {
    try {
        if (loadState().user) {
            replace('/');
        }
    } catch (error) {
        replace('/');
    }
}

// function check admin logged into admin dashboard
export const checkAuth = (nextState, replace) => {
    try {
        if(loadState().user != undefined){
            replace('/');
        }
    } catch (error) {
        replace('/');
    }
};



export const checkAuthUser = (nextState, replace) => {
    try {
        if(loadState().user.userType == undefined){
            replace('/');
        }else if (loadState().user.userType.toLowerCase() == 'normal') {
            replace('/member/' + loadState().user.userType.toLocaleLowerCase());
        }else if(loadState().user.userType.toLowerCase() == 'merchant'){
            replace('/member/'+ loadState().user.userType.toLocaleLowerCase())
        }else{
            replace('/');
        }
    } catch (error) {
        replace('/');
    }
}
