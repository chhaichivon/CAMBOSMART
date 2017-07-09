import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';
import { sendEmailOrPhone,userSignInReducer,userSignUpReducer,resetPasswordReducer,signUpModalReducer,verifyCodeReducer,verifyCodeModalReducer,verifySocailAccountPhoneReducer,userLogout,verifyPhoneModalReducer,sendCodeAgainReducer,reducerModalSignIn,reducerModalForgetPassword,reducerModalNewPassword,updateProfileReducer,getUserInfoReducer} from './users/user';
import { adminBlockMerchantReducer,getMerchantDetailReducer,memberListProductReducer} from './admin/admin';
import { getMemberDetail,promoteMember,changeMemberStatus,getMembersReducer} from './members/member';
/* admin manage merchant */
import { fetchMerchantsReducer, fetchMerchantDetailReducer, blockMerchantDetailReducer, listExpiredMerchantsReducer,updateExpiredMerchantsReducer, 
    checkMerchantExpiredReducer, adminCountMerchantMembersReducer } from './admin/merchant/merchant';
import * as categoryReducer from'./categories/category';

import * as category from './admin/category/category';

import { fetchHotProductReducer,fetchGoldProductReducer,fetchNormalProductReducer,fetchProductByCategoryNameReducer,fetchAllProductReducer,fetchProductCategoryNameReducer,fetchProductByProductTypeAndCategoryName,fetchProductHotByCategoryReducer,fetchProductGoldByCategoryReducer,fetchProductNormalByCategoryReducer,fetchProductByNameReducer} from './products/products';

/** MEMBER MANAGE PRODUCTS **/
import * as commonMember from './members/common';

/** COMMON ADMIN MANAGEMENT **/
import * as commonAdmin from './admin/common';
/* admin manage member */
import { promoteMemberReducer, detailMemberReducer, listMemberRequestReducer, deleteMemberRequestReducer, listMemberRequestsExpiredReducer,
     deleteMemberRequestsExpiredReducer, adminCountNormalMembersReducer } from './admin/member/member';
/* admin manage promoted product package */
import { savePromotedProductPackageReducer, listPromotedProductPackageReducer, getPromotedProductPackageReducer, deletePromotedProductPackageReducer, updatePromotedProductPackageReducer, listPromotedProductsExpiredReducer, updatePromotedProductsExpiredReducer } from './admin/promoted_package/promote_product_package';
/* admin manage promoted user package */
import { savePromoteUserPackageReducer, listPromoteUserPackageReducer, getPromoteUserPackageReducer, deletePromoteUserPackageReducer, updatePromoteUserPackageReducer, listAllPromotedUserPackageReducer } from './admin/promote_user_package/promote_user_package';
/* admin manage report */
import { listBootProductIncomeGrandReducer, listBootProductIncomeDetailReducer, listPromoteMemberIncomeDetailReducer, listPromoteMemberIncomeGrandReducer, listAdvertiserIncomeDetailReducer, listAdvertiserIncomeGrandReducer, listCategoryIncomeReducer } from './admin/report/income/income_report';
/* admin manage product */
import { adminListProductsReducer, adminUpdateProductStatusReducer, adminGetProductReducer, adminDeleteProductReducer, 
    adminListUsersReducer, adminApprovePromoteProductReducer, adminDeleteUserRequestReducer, adminListPromoteProductByUserReducer, 
    adminDeletePromoteProductReducer,adminListProductsReportReducer,adminUpdateStatusProductReducer, adminCountTodayProductsReducer,
    adminDeleteRequestPromoteExpiredReducer } from './admin/product/product';

import {fetchStoreReducer,updateStoreMapReducer,updateStoreReducer} from './store/store'

/*product in category page */
import { fetchProductHotFilterReducer, fetchProductGoldFilterReducer,fetchProductNormalFilterReducer, countProductViewReducer} from './products/products';
/*product in location page */
import { fetchProductHotFilterLocationReducer, fetchProductGoldFilterLocationReducer,fetchProductNormalFilterLocationReducer} from './products/products';
/**PRODUCT SPECIAL CATEGORY**/
import {fetchProductSpecialCategoryReducer} from './products/products';
/**PRODUCT PAGE DETAIL**/
import {fetchRelatedProductsReducer, fetchRecentlyProductsReducer} from './products/products';
/**ADMIN MANAGE ADVERTISEMENT**/
import * as advertisement from './admin/advertisement/advertisement';
/**ADMIN MANAGE CATEGORY ADVERTISEMENT**/
import * as categoryAdvertisement from './admin/advertisement/category_advertisement';

/**ADMIN MANAGE ADVERTISER**/
import * as advertiser from './admin/advertisement/advertiser';

/** Star Rating Product */
import { postStarRatingReducer, getStarRatingByProIdAndIpReducer, getTotalStarRatingByProductIdReducer } from './products/rating';

/** Subscribe store */
import { postSubscribeReducer, getSubscribeByStoreIdAndUserIdReducer, deleteSubscribeReducer } from './store/subscribe';

/** notification */
import { postNotificationReducer, countNotificationReducer, getAllNotificationsByUserIdReducer, getNotificationByIdReducer, updateAllNotificationReducer, updateDirtyNotificationReducer} from './notification/notification';

/**PRODUCT IN STORE BY USERNAME**/
import { fetchProductsUserNameReducer } from './products/products';

/**USER WITH STORE INFORMATION**/
import { getUserWithStoreReducer } from './store/store';
export const reducers = combineReducers({
    routing: routerReducer,
    form: formReducer,
    userForgetPwd: sendEmailOrPhone,
    userSignUp: userSignUpReducer,
    userSignIn: userSignInReducer,
    userResetPwd: resetPasswordReducer,
    signUpModal: signUpModalReducer,
    verifyCode: verifyCodeReducer,
    verifyCodeModal: verifyCodeModalReducer,
    verifySocialAccountPhone: verifySocailAccountPhoneReducer,
    userLogout: userLogout,
    verifyPhoneModal:verifyPhoneModalReducer,
    sendCodeAgain:sendCodeAgainReducer,
    reducerModalSignIn: reducerModalSignIn,
    reducerModalForgetPassword: reducerModalForgetPassword,
    reducerModalNewPassword: reducerModalNewPassword,

    /**ADMIN MANAGE ADVERTISEMENT**/
    advertisementValidate: advertisement.validateAdvertisementReducer,
    advertisementInsert: advertisement.insertAdvertisementReducer,
    advertisementUpdate: advertisement.updateAdvertisementReducer,
    advertisementDelete: advertisement.deleteAdvertisementReducer,
    advertisements: advertisement.fetchAdvertisementsReducer,
    advertisement: advertisement.fetchAdvertisementReducer,
    advertisementSchedule: advertisement.scheduleAdvertisementReducer,

    /**DISPLAY ADVERTISEMENT**/
    advertisementsDisplay: advertisement.displayAdvertisementsReducer,

    /**ADMIN MANAGE CATEGORY ADVERTISEMENT**/
    categoryAdvertisementInsert: categoryAdvertisement.insertCategoryAdvertisementReducer,
    categoryAdvertisementUpdate: categoryAdvertisement.updateCategoryAdvertisementReducer,
    categoryAdvertisementDelete: categoryAdvertisement.deleteCategoryAdvertisementReducer,
    categoryAdvertisement: categoryAdvertisement.fetchCategoryAdvertisementReducer,
    categoryAdvertisements: categoryAdvertisement.fetchCategoryAdvertisementsReducer,
    scheduleCategoryAdvertisements: categoryAdvertisement.fetchScheduleCategoryAdvertisementReducer,

    categoryAdvertisers: categoryAdvertisement.fetchCategoryAdvertisersReducer,
    categoryAdvertiserDetail: categoryAdvertisement.fetchCategoryAdvertiserReducer,
    categoryAdvertisementDisplay: categoryAdvertisement.displayCategoryAdvertisementsReducer,
    categoryAdvertiser: categoryAdvertisement.insertCategoryAdvertiserReducer,

    /**ADMIN MANAGE ADVERTISER**/
    advertiserInsert: advertiser.insertAdvertiserReducer,
    advertiserUpdate: advertiser.updateAdvertiserReducer,
    advertiserBlock: advertiser.blockAdvertiserReducer,
    advertiserRenew: advertiser.renewAdvertiserReducer,
    advertiserFetch: advertiser.fetchAdvertiserReducer,
    advertisersFetch: advertiser.fetchAdvertisersReducer,


    /** COMMON ADMIN MANAGEMENT **/
    members: commonAdmin.fetchMembersReducer,
    member: commonAdmin.fetchMemberDetailReducer,
    status: commonAdmin.updateMemberStatusReducer,
    countWebsite: commonAdmin.countViewWebsiteReducer,
    fetchWebsite: commonAdmin.fetchViewWebsiteReducer,
    /* end */

    /* admin manage merchant */
    merchantDetail: fetchMerchantDetailReducer,
    blockMerchant: blockMerchantDetailReducer,
    memberListProduct:memberListProductReducer,
    listExpiredMerchants: listExpiredMerchantsReducer,
    updateExpiredMerchants: updateExpiredMerchantsReducer,
    checkMerchantExpired : checkMerchantExpiredReducer,

    /* admin manage member */
    promotedMember: promoteMemberReducer,
    detailMember: detailMemberReducer,
    listMemberRequest: listMemberRequestReducer,
    deleteMemberRequest :deleteMemberRequestReducer,
    listMemberRequestsExpired : listMemberRequestsExpiredReducer,
    deleteMemberRequestsExpired : deleteMemberRequestsExpiredReducer,

    /** ADMIN MANAGE CATEGORIES */
    /*saveCategory: category.saveCategoryReducer,
    parentCategoryPage: category.getParentCategoryPageReducer,
    subCategoryById : category.getSubCategoryPageReducer,
    allCategory: category.getAllCategoryReducer,
    getCategoryById: category.getCategoryByIdReducer,*/

    insertCategory: category.insertCategoryReducer,
    updateCategory: category.updateCategoryReducer,
    deleteCategory: category.deleteCategoryReducer,
    detailCategory: category.fetchCategoryReducer,
    parentCategories: category.fetchParentCategoriesReducer,
    childCategories: category.fetchChildCategoriesReducer,


    /* admin mange promoted product package */
    savePromotedProductPackage : savePromotedProductPackageReducer,
    listPromotedProductPackage : listPromotedProductPackageReducer,
    deletePromotedProductPackage: deletePromotedProductPackageReducer,
    getPromotedProductPackage: getPromotedProductPackageReducer,
    updatePromotedProductPackage: updatePromotedProductPackageReducer,
    listPromotedProductsExpired : listPromotedProductsExpiredReducer,
    updatePromotedProductsExpired: updatePromotedProductsExpiredReducer,

/* admin manage promoted user package */
    savePromoteUserPackage: savePromoteUserPackageReducer,
    listPromoteUserPackage: listPromoteUserPackageReducer,
    getPromoteUserPackage: getPromoteUserPackageReducer,
    deletePromoteUserPackage: deletePromoteUserPackageReducer,
    updatePromoteUserPackage: updatePromoteUserPackageReducer,
    listAllPromotedUserPackage: listAllPromotedUserPackageReducer,

    /* admin manage product */
    adminListProducts :adminListProductsReducer,
    adminUpdateProductStatus: adminUpdateProductStatusReducer,
    adminDeleteProduct: adminDeleteProductReducer,
    adminGetProduct: adminGetProductReducer,
    adminListUsers: adminListUsersReducer,
    adminDeleteUserRequest: adminDeleteUserRequestReducer,
    adminListPromoteProductByUser: adminListPromoteProductByUserReducer,
    adminApprovePromoteProduct: adminApprovePromoteProductReducer,
    adminDeletePromoteProduct: adminDeletePromoteProductReducer,
    adminListProductReport:adminListProductsReportReducer,
    adminUpdateStatusProduct:adminUpdateStatusProductReducer,
    adminDeleteRequestPromoteExpired : adminDeleteRequestPromoteExpiredReducer,

    /* admin manage report */
    listBootProductIncomeGrand : listBootProductIncomeGrandReducer,
    listBootProductIncomeDetail: listBootProductIncomeDetailReducer,
    listPromoteMemberIncomeDetail : listPromoteMemberIncomeDetailReducer,
    listPromoteMemberIncomeGrand : listPromoteMemberIncomeGrandReducer,
    listAdvertiserIncomeDetail : listAdvertiserIncomeDetailReducer,
    listAdvertiserIncomeGrand: listAdvertiserIncomeGrandReducer,
    listCategoryIncome : listCategoryIncomeReducer,

    /*update profile*/
    updateProfile: updateProfileReducer,
    getUserInfo: getUserInfoReducer,
    merchants: fetchMerchantsReducer,
    updateMember: commonMember.updateMemberReducer,
    profile: commonMember.updateMemberInfoReducer,
    password: commonMember.changeMemberPasswordReducer,
    memberRequestPromoted: commonMember.memberRequestPromotedReducer,

    /** CATEGORY **/
    listParent: categoryReducer.listParentCategoryReducer,
    listChild: categoryReducer.listChildCategoryReducer,
    listAll: categoryReducer.listAllCategoryReducer,
    thirdCategories: categoryReducer.fetchThirdCategoriesReducer,
    countViewCategory: categoryReducer.countViewCategoryReducer,
    popularCategories: categoryReducer.fetchPopularCategoriesReducer,
    specialCategories: categoryReducer.fetchSpecialCategoriesReducer,

    /** MEMBER MANAGE PRODUCTS **/
    addProduct: commonMember.insertProductReducer,
    removeImage: commonMember.removeProductImageReducer,
    memberProducts: commonMember.fetchProductReducer,
    productStatus: commonMember.updateProductStatusReducer,
    memberProduct: commonMember.fetchProductByIdReducer,
    updateProduct: commonMember.updateProductByIdReducer,
    renewProduct: commonMember.renewProductReducer,
    listPromotedProducts: commonMember.memberListPromotedProductReducer,
    getPromotedProduct: commonMember.memberGetPromotedProductReducer,
    listAllPromotedPackages : commonMember.memberListALlPromotedProductReducer,
    memberPromoteProducts : commonMember.memberPromotedProductsReducer,
    
    /*products home page*/
    hotProduct : fetchHotProductReducer,
    goldProduct : fetchGoldProductReducer,
    normalProduct : fetchNormalProductReducer,
    allProduct : fetchAllProductReducer,
    fetchProductHot:fetchProductHotByCategoryReducer,
    fetchProductGold:fetchProductGoldByCategoryReducer,
    fetchProductNormal:fetchProductNormalByCategoryReducer,
    productName: fetchProductByNameReducer,

    /**PRODUCT SPECIAL CATEGORY**/
    productSpecialCategory :fetchProductSpecialCategoryReducer,

    /**PRODUCT CATEGORY**/
    listProductHotFilterReducer : fetchProductHotFilterReducer,
    listProductGoldFilterReducer : fetchProductGoldFilterReducer,
    listProductNormalFilterReducer : fetchProductNormalFilterReducer,

    /**PRODUCT LOCATION**/
    listProductHotFilterLocationReducer : fetchProductHotFilterLocationReducer,
    listProductGoldFilterLocationReducer:fetchProductGoldFilterLocationReducer,
    listProductNormalFilterLocationReducer:fetchProductNormalFilterLocationReducer,

    /**PRODUCT RELATED AND RECENTLY**/
    relatedProducts: fetchRelatedProductsReducer,
    recentlyProducts: fetchRecentlyProductsReducer,


    /**PRODUCT IN STORE BY USERNAME**/
    productByUserName:fetchProductsUserNameReducer,

    /**USER WITH STORE INFORMATION**/
    userWithStoreReducer: getUserWithStoreReducer,

    /**oudam**/
    countProductView: countProductViewReducer,

    /*store*/
    fetchStore: fetchStoreReducer,
    updateStoreMap: updateStoreMapReducer,
    updateStore: updateStoreReducer,

    /** rating product */
    postStarRating: postStarRatingReducer,
    getOneStarRating: getStarRatingByProIdAndIpReducer,
    getTotalStarRating: getTotalStarRatingByProductIdReducer,

    /** subscribe store */
    postSubscribe: postSubscribeReducer,
    getSubscribe: getSubscribeByStoreIdAndUserIdReducer,
    delSubscribe: deleteSubscribeReducer,

    /** notification */
    postNotification: postNotificationReducer,
    countNotification: countNotificationReducer,
    getAllNotifications: getAllNotificationsByUserIdReducer,
    updateAllNotification: updateAllNotificationReducer,
    updateDirtyNotification: updateDirtyNotificationReducer,
    getNotification: getNotificationByIdReducer,

    /** admin dashboard */
    adminCountTodayProducts: adminCountTodayProductsReducer,
    adminCountNormalMembers: adminCountNormalMembersReducer,
    adminCountMerchantMembers: adminCountMerchantMembersReducer,
});