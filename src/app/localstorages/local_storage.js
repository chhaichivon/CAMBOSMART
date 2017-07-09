import { browserHistory } from 'react-router';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        localStorage.removeItem('state');
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {

    }
};

export const clearState = () => {
    try {
        localStorage.removeItem('state');
        location.assign('/');
    } catch (error) {
        browserHistory.push('/');
    }
};

export const clearLoginAdmin = () => {
    try {
        localStorage.removeItem('state');
        location.assign('/cambo-admin');
    } catch (error) {
        browserHistory.push('/');
    }
};

export const clearLoginState = () => {
    try {
        localStorage.removeItem('state');
        location.assign('/sign-in');
    } catch (error) {
        browserHistory.push('/');
    }
};

export const saveSocialId=(state)=>{
    sessionStorage.removeItem('socialId');
    sessionStorage.setItem('socialId',state);
};

export const loadSocialId=()=>{
    try {
        const serializedState = sessionStorage.getItem('socialId');
        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    }
    catch (err) {
        return undefined;
    }
};


export const saveCodeStatus=(state)=>{
    sessionStorage.removeItem('codeStatus');
    sessionStorage.setItem('codeStatus',state);
};

export const loadCodeStatus=()=>{
    try {
        const serializedState = sessionStorage.getItem('codeStatus');
        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    }
    catch (err) {
        return undefined;
    }
};

export const savePhone=(state)=>{
    sessionStorage.removeItem('phone');
    sessionStorage.setItem('phone',state);
};

export const loadPhone=()=>{
    try {
        const serializedState = sessionStorage.getItem('phone');
        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    }
    catch (err) {
        return undefined;
    }
};

export const savePhoneOrEmail = (state) =>{
    sessionStorage.removeItem('phoneOremail');
    sessionStorage.setItem('phoneOremail',state);
}

export const loadPhoneOrEmail=()=>{
    try {
        const serializedState = sessionStorage.getItem('phoneOremail');
        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    }
    catch (err) {
        return undefined;
    }
};


export const saveProductId=(state)=>{
    sessionStorage.removeItem('productId');
    sessionStorage.setItem('productId',state);
};

export const loadProductId=()=>{
    try {
        const serializedState = sessionStorage.getItem('productId');
        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    }
    catch (err) {
        return undefined;
    }
};


export const saveLevelOneCategoryName=(state)=>{
    sessionStorage.removeItem('levelOneCategoryName');
    sessionStorage.setItem('levelOneCategoryName',state);
}

export const loadLevelOneCategoryName=()=>{
    try {
        const serializedState = sessionStorage.getItem('levelOneCategoryName');
        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    }
    catch (err) {
        return undefined;
    }
};


export const saveLevelTwoCategoryName=(state)=>{
    sessionStorage.removeItem('levelTwoCategoryName');
    sessionStorage.setItem('levelTwoCategoryName',state);
}

export const loadLevelTwoCategoryName=()=>{
    try {
        const serializedState = sessionStorage.getItem('levelTwoCategoryName');
        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    }
    catch (err) {
        return undefined;
    }
};


export const saveLevelTwoCategoryId=(state)=>{
    sessionStorage.removeItem('levelTwoCategoryId');
    sessionStorage.setItem('levelTwoCategoryId',state);
}

export const loadLevelTwoCategoryId=()=>{
    try {
        const serializedState = sessionStorage.getItem('levelTwoCategoryId');
        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    }
    catch (err) {
        return undefined;
    }
};

export const saveLevelThreeCategoryId=(state)=>{
    sessionStorage.removeItem('levelThreeCategoryId');
    sessionStorage.setItem('levelThreeCategoryId',state);
}

export const loadLevelThreeCategoryId=()=>{
    try {
        const serializedState = sessionStorage.getItem('levelThreeCategoryId');
        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    }
    catch (err) {
        return undefined;
    }
};




export const saveProductInfo=(state)=>{
    sessionStorage.removeItem('productInfo');
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('productInfo',serializedState);
}

export const loadProductInfo=()=>{
    try {
        const serializedState = sessionStorage.getItem('productInfo');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};

/*oudam*/
export const saveCategory = (state) => {
    sessionStorage.removeItem('category');
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('category',serializedState);
};
export const loadCategory = () => {
    try {
        const serializedState = sessionStorage.getItem('category');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};

export const saveProduct = (state) => {
    sessionStorage.removeItem('product');
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('product',serializedState);
};

export const loadProduct = () => {
    try {
        const serializedState = sessionStorage.getItem('product');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};
/*end*/

export const saveLatLng=(state)=>{
    sessionStorage.removeItem('latLng');
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('latLng',serializedState);
};

export const loadLatLng=()=>{
    try {
        const serializedState = sessionStorage.getItem('latLng');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};

export const saveStoreInfo=(state)=>{
    sessionStorage.removeItem('storeInfo');
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('storeInfo',serializedState);
};

export const loadStoreInfo=()=>{
    try {
        const serializedState = sessionStorage.getItem('storeInfo');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};

export const loadCountry=()=>{
    try {
        const serializedState = sessionStorage.getItem('country');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};


export const saveCountry = (state) => {
    sessionStorage.removeItem('country');
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('country',serializedState);
};


export const saveLanguage=(state)=>{
    localStorage.removeItem('lang');
    const serializedState = JSON.stringify(state);
    localStorage.setItem('lang',serializedState);
};



export const loadLanguage = () =>{
    try {
        const serializedState = localStorage.getItem('lang');

        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }

};
