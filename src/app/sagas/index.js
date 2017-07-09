
import {takeEvery, takeLatest} from "redux-saga";
import {fork} from "redux-saga/effects";

import * as categoryAction from './../actions/admin/category/category';
import * as categorySaga from './admin/category/category';
import * as catAction from './../actions/categories/category';
import * as catSaga from './categories/category';
import { SEND_EMAIL_OR_PHONE,USER_SIGN_IN,USER_SIGN_UP,SET_NEW_PASSWORD,VERIFY_CODE,VERIFY_SOCIAL_ACCOUNT_PHONE,USER_LOG_OUT,SEND_CODE_AGAIN,UPDATE_PROFILE,GET_USER_INFO} from './../actions/user';
import { MEMBER_LIST_PRODUCT} from './../actions/admin';
import { doSendMailOrPhone,userSignInSaga,userSignUpSaga,resetUserPasswordSaga,verifyCode,verifySocialAccount,userLogout,sendCodeAgainSaga,updateProfileSaga,getUserInfoSaga} from './users/user';

/* Admin manages merchants */
import { FILTER_MEMBERS, MERCHANT_DETAIL, BLOCK_MERCHANT, LIST_EXPIRED_MERCHANTS, UPDATE_EXPIRED_MERCHANTS, CHECK_MERCHANT_EXPIRED, ADMIN_COUNT_MERCHANT_MEMBERS } from './../actions/admin/merchant/merchant';
import { fetchMerchantsSaga, fetchMerchantDetailSaga, blockMerchantDetailSaga, listExpiredMerchantsSaga, updateExpiredMerchantsSaga, checkMerchantExpired, sagaAdminCountMerchantMembers } from './admin/merchant/merchant';

import { memberListProductSaga} from './admin/admin';

import { GET_PRODUCT_TYPE_HOT,GET_PRODUCT_TYPE_GOLD,GET_PRODUCT_TYPE_NORMAL,GET_ALL_PRODUCT, GET_RELATED_PRODUCTS, GET_RECENTLY_PRODUCTS,GET_PRODUCT_BY_CATEGORY_HOT,GET_PRODUCT_BY_CATEGORY_GOLD,GET_PRODUCT_BY_CATEGORY_NORMAL,FETCH_PRODUCT_BY_NAME} from './../actions/products/products';
import { fetchHotProductSaga,fetchGoldProductSaga,fetchNormalProductSaga ,fetchAllProductSaga, fetchRelatedProductsSaga, fetchRecentlyProductsSaga,fetchProductHotByCategoryNameSaga,fetchProductGoldByCategoryNameSaga,fetchProductNormalByCategoryNameSaga,fetchProductByNameSaga} from './products/products';

/** SAGA MEMBER MANAGE PRODUCTS **/
import * as commonMemberAction from './../actions/member/common';
import * as commonMemberSaga from './members/common';
/* END */

/** COMMON ADMIN MANAGEMENT **/
import * as commonAdminAction from './../actions/admin/common';
import * as commonAdminSaga from './admin/common';
/* admin manage member */
import {PROMOTE_MEMBER, ADMIN_DETAIL_MEMBER, ADMIN_LIST_MEMBER_REQUEST, ADMIN_DELETE_MEMBER_REQUEST, ADMIN_LIST_MEMBER_REQUESTS_EXPIRED, ADMIN_DELETE_MEMBER_REQUESTS_EXPIRED, ADMIN_COUNT_NORMAL_MEMBERS } from './../actions/admin/member/member';
import {promoteMemberSaga, doAdminDetailMember, doAdminListMemberRequest, doAdminDeleteMemberRequest, doAdminListMemberRequestsExpired, doAdminDeleteMemberRequestsExpired, sagaAdminCountNormalMembers } from './admin/member/member';

/* admin manage promoted product package */
import { ADMIN_SAVE_PROMOTED_PRODUCT_PACKAGE, ADMIN_LIST_PROMOTED_PRODUCT_PACKAGE, ADMIN_DELETE_PROMOTED_PRODUCT_PACKAGE, ADMIN_GET_PROMOTED_PRODUCT_PACKAGE, ADMIN_UPDATE_PROMOTED_PRODUCT_PACKAGE, ADMIN_LIST_PROMOTED_PRODUCT_EXPIRED, ADMIN_UPDATE_PROMOTED_PRODUCT_EXPIRED } from './../actions/admin/promoted_package/promote_product_package';
import { doAdminAddPromotedProductPackage, doAdminListPromotedPackage, doAdminGetPromotedPackage, doAdminDeletePromotedPackage, doAdminUpdatePromotePackage, doAdminListPromotedProductsExpired, doAdminUpdatePromotedProductExpired } from './admin/promoted_package/promote_product_package';

/* admin manage promoted user package */
import { SAVE_PROMOTE_USER_PACKAGE, LIST_PROMOTE_USER_PACKAGE, GET_PROMOTE_USER_PACKAGE, DELETE_PROMOTE_USER_PACKAGE, UPDATE_PROMOTE_USER_PACKAGE, LIST_ALL_PROMOTE_USER_PACKAGE} from './../actions/admin/promote_user_package/promote_user_package';
import { doSavePromoteUserPackage, doListPromoteUserPackage, doGetPromoteUserPackage, doDeletePromoteUserPackage, doUpdatePromoteUserPackage, doListAllPromoteUserPackage  } from './admin/promote_user_package/promote_user_package';

/* admin manage report */
import { LIST_BOOT_PRODUCT_INCOME_TOTAL, LIST_BOOT_PRODUCT_INCOME_DETAIL, LIST_MEMBER_PROMOTE_INCOME_DETAIL, LIST_MEMBER_PROMOTE_INCOME_TOTAL, LIST_ADVERTISER_INCOME_DETAIL, LIST_ADVERTISER_INCOME_GRAND, LIST_CATEGORY_INCOME} from './../actions/admin/report/income/income_report';
import { doAdminListBootProductIncomeGrand, doAdminListBootProductIncomeDetail, doAdminListMemberPromoteIncomeDetail,doAdminListMemberPromoteIncomeGrand, doAdminListAdvertiserIncomeDetail, doAdminListAdvertiserIncomeGrand, doAdminListCategoryIncome } from './admin/report/income/income_report';

/* admin manage products */
import { ADMIN_LIST_PRODUCTS, ADMIN_GET_PRODUCT, ADMIN_UPDATE_PRODUCT_STATUS, ADMIN_DELETE_PRODUCT, 
    ADMIN_LIST_USERS_REQUEST, ADMIN_APPROVE_PROMOTE_PRODUCT_REQUEST, ADMIN_DELETE_USER_REQUEST, 
    ADMIN_LIST_PROMOTE_PRODUCTS_BY_USER, ADMIN_DELETE_PROMOTE_PRODUCT,ADMIN_LIST_PRODUCTS_REPORT
    ,ADMIN_UPDATE_STATUS_PRODUCT, ADMIN_COUNT_TODAY_PRODUCTS,
    ADMIN_DELETE_REQUEST_PROMOTE_EXPIRED } from './../actions/admin/product/product';
import { doAdminListProducts, doAdminGetProduct, doAdminUpdateProductStatus, doAdminDeleteProduct, 
    doAdminListUser, doAdminApprovePromoteProduct, doAdminDeleteUserRequest, doAdminListPromoteProductByUser, 
    doAdminDeletePromoteProduct,doAdminListProductsReport,doAdminUpdateStatusProduct, sagaAdminCountTodayProducts,
    doAdminDeleteRequestPromoteExpired } from './admin/product/product';

/*product in category page*/
import {  GET_FILTER_PRODUCTS_HOT,GET_FILTER_PRODUCTS_GOLD,GET_FILTER_PRODUCTS_NORMAL,COUNT_PRODUCT_VIEW } from './../actions/products/products';
import { fetchProductHotFilterSaga,fetchProductGoldFilterSaga,fetchProductNormalFilterSaga, countProductViewSaga } from './products/products';
/*product in location page*/
import { GET_FILTER_PRODUCT_HOT_LOCATION,GET_FILTER_PRODUCT_GOLD_LOCATION,GET_FILTER_PRODUCT_NORMAL_LOCATION} from './../actions/products/products';
import { fetchProductHotFilterLocationSaga, getProductGoldFilterLocationSaga,getProductNormalFilterLocationSaga} from './products/products';
/**PRODUCT SPECIAL CATEGORY**/
import { GET_PRODUCT_SPECIAL_CATEGORY } from './../actions/products/products';
import {fetchProductSpecialCategorySaga} from './products/products';
/* product filter in page view all *//*
import { GET_PRODUCT_FILTER_PAGE_VIEW_ALL  } from './../actions/products/products';
import {fetchProductFilterInPageViewAllSaga } from './products/products';*/

import {FETCH_STORE,UPDATE_STORE_MAP,UPDATE_STORE} from './../actions/store/store';
import {fetchStoreSaga,updateStoreMapSaga,updateStoreSaga} from './store/store'

/**ADMIN MANAGE ADVERTISEMENT**/
import * as advertisementType from './../actions/admin/advertisement/advertisement';
import * as advertisement from './admin/advertisement/advertisement';

/**ADMIN MANAGE CATEGORY ADVERTISEMENT**/
import * as categoryAdvertisementType from './../actions/admin/advertisement/category_advertisement';
import * as categoryAdvertisement from './admin/advertisement/category_advertisement';


/**ADMIN MANAGE ADVERTISER**/
import * as advertiserType from './../actions/admin/advertisement/advertiser';
import * as advertiser from './admin/advertisement/advertiser';
/** RATING PRODUCT */
import { POST_STAR_RATING, GET_ONE_STAR_RATING, GET_TOTAL_STAR_RATING } from './../actions/products/rating';
import { sagaPostStarRating, sagaGetStarRatingByProIdAndIp, sagaGetTotalStarRatingByProductId } from './products/rating';

/** SUBSCRIBE STOR */
import { POST_SUBSCRIBE, GET_SUBSCRIBE, DELETE_SUBSCRIBE } from './../actions/store/subscribe';
import { sagaPostSubscribe, sagaGetSubscribeByStoreIdAndUserId, sagaDeleteSubscribe } from './store/subscribe';

/**PRODUCT IN STORE BY USERNAME**/
import { fetchProductsUserNameSaga } from './products/products';
import { GET_PRODUCT_BY_USERNAME } from './../actions/products/products';

/**USER WITH STORE INFORMATION**/
import { getUserWithStoreSaga } from './store/store';
import { USER_WITH_STORE } from './../actions/store/store';

/** NOTIFICATION */
import { POST_NOTIFICATION, COUNT_NOTIFICATION, GET_ALL_NOTIFICATIONS, GET_NOTIFICATION, UPDATE_ALL_NOTIFICATION, UPDATE_DIRTY_NOTIFICATION } from './../actions/notification/notification';
import { sagaPostNotification, sagaCountNotification, sagaGetAllNotificationsByUserId, sagaGetNotificationById, sagaUpdateAllNotification, sagaUpdateDirtyNotification} from './notification/notification';

export function* sagas() {
    yield [
        fork(takeEvery, USER_SIGN_UP, userSignUpSaga),
        fork(takeEvery, USER_SIGN_IN, userSignInSaga),
        fork(takeEvery, VERIFY_CODE, verifyCode),
        fork(takeEvery, VERIFY_SOCIAL_ACCOUNT_PHONE, verifySocialAccount),
        fork(takeEvery, SEND_EMAIL_OR_PHONE, doSendMailOrPhone),
        fork(takeEvery, SET_NEW_PASSWORD, resetUserPasswordSaga),
        fork(takeEvery, USER_LOG_OUT, userLogout),
        fork(takeEvery, SEND_CODE_AGAIN, sendCodeAgainSaga),

        /**ADMIN MANAGE ADVERTISEMENT**/
        fork(takeEvery, advertisementType.VALIDATE_ADVERTISEMENT, advertisement.validateAdvertisementsSaga),
        fork(takeEvery, advertisementType.INSERT_ADVERTISEMENT, advertisement.insertAdvertisementSaga),
        fork(takeEvery, advertisementType.UPDATE_ADVERTISEMENT, advertisement.updateAdvertisementSaga),
        fork(takeEvery, advertisementType.DELETE_ADVERTISEMENT, advertisement.deleteAdvertisementSaga),
        fork(takeEvery, advertisementType.FETCH_ADVERTISEMENTS, advertisement.fetchAdvertisementsSaga),
        fork(takeEvery, advertisementType.FETCH_ADVERTISEMENT, advertisement.fetchAdvertisementSaga),
        fork(takeEvery, advertisementType.SCHEDULE_ADVERTISEMENT, advertisement.scheduleAdvertisementSaga),
        /**DISPLAY ADVERTISEMENTS**/
        fork(takeEvery, advertisementType.DISPLAY_ADVERTISEMENTS, advertisement.displayAdvertisementsSaga),

        /**ADMIN MANAGE CATEGORY ADVERTISEMENT**/
        fork(takeEvery, categoryAdvertisementType.INSERT_CATEGORY_ADVERTISEMENT, categoryAdvertisement.insertCategoryAdvertisementSaga),
        fork(takeEvery, categoryAdvertisementType.UPDATE_CATEGORY_ADVERTISEMENT, categoryAdvertisement.updateCategoryAdvertisementSaga),
        fork(takeEvery, categoryAdvertisementType.DELETE_CATEGORY_ADVERTISEMENT, categoryAdvertisement.deleteCategoryAdvertisementSaga),
        fork(takeEvery, categoryAdvertisementType.FETCH_CATEGORY_ADVERTISEMENT, categoryAdvertisement.fetchCategoryAdvertisementSaga),
        fork(takeEvery, categoryAdvertisementType.FETCH_CATEGORY_ADVERTISEMENTS, categoryAdvertisement.fetchCategoryAdvertisementsSaga),
        fork(takeEvery, categoryAdvertisementType.FETCH_SCHEDULE_CATEGORY_ADVERTISEMENTS, categoryAdvertisement.fetchScheduleCategoryAdvertisementSaga),
        fork(takeEvery, categoryAdvertisementType.FETCH_CATEGORY_ADVERTISERS, categoryAdvertisement.fetchCategoryAdvertisersSaga),
        fork(takeEvery, categoryAdvertisementType.FETCH_CATEGORY_ADVERTISER, categoryAdvertisement.fetchCategoryAdvertiserSaga),
        fork(takeEvery, categoryAdvertisementType.DISPLAY_CATEGORY_ADVERTISEMENTS, categoryAdvertisement.displayCategoryAdvertisementsSaga),

        fork(takeEvery, categoryAdvertisementType.INSERT_CATEGORY_ADVERTISER, categoryAdvertisement.insertCategoryAdvertiserSaga),

        /**ADMIN MANAGE ADVERTISER**/
        fork(takeEvery, advertiserType.INSERT_ADVERTISER, advertiser.insertAdvertiserSaga),
        fork(takeEvery, advertiserType.UPDATE_ADVERTISER, advertiser.updateAdvertiserSaga),
        fork(takeEvery, advertiserType.BLOCK_ADVERTISER, advertiser.blockAdvertiserSaga),
        fork(takeEvery, advertiserType.RENEW_ADVERTISER, advertiser.renewAdvertiserSaga),
        fork(takeEvery, advertiserType.FETCH_ADVERTISER, advertiser.fetchAdvertiserSaga),
        fork(takeEvery, advertiserType.FETCH_ADVERTISERS, advertiser.fetchAdvertisersSaga),

        /* admin manage merchant */
        fork(takeEvery, MEMBER_LIST_PRODUCT, memberListProductSaga),
        fork(takeEvery, MERCHANT_DETAIL, fetchMerchantDetailSaga),
        fork(takeEvery, BLOCK_MERCHANT, blockMerchantDetailSaga),
        fork(takeEvery, LIST_EXPIRED_MERCHANTS, listExpiredMerchantsSaga),
        fork(takeEvery, UPDATE_EXPIRED_MERCHANTS, updateExpiredMerchantsSaga),
        fork(takeEvery, CHECK_MERCHANT_EXPIRED, checkMerchantExpired),

        /** COMMON ADMIN MANAGEMENT **/
        fork(takeEvery, commonAdminAction.FETCH_MEMBERS, commonAdminSaga.fetchMembersSaga),
        fork(takeEvery, commonAdminAction.FETCH_MEMBER_DETAIL, commonAdminSaga.fetchMemberDetailSaga),
        fork(takeEvery, commonAdminAction.UPDATE_MEMBER_STATUS, commonAdminSaga.updateMemberStatusSaga),
        fork(takeEvery, commonAdminAction.COUNT_VIEW_WEBSITE, commonAdminSaga.countViewWebsiteSaga),
        fork(takeEvery, commonAdminAction.FETCH_VIEW_WEBSITE, commonAdminSaga.fetchViewWebsiteSaga),
        /* end */

        /* admin manage member */
        fork(takeEvery, PROMOTE_MEMBER, promoteMemberSaga),
        fork(takeEvery, ADMIN_DETAIL_MEMBER, doAdminDetailMember),
        fork(takeEvery, ADMIN_LIST_MEMBER_REQUEST, doAdminListMemberRequest),
        fork(takeEvery, ADMIN_DELETE_MEMBER_REQUEST, doAdminDeleteMemberRequest),
        fork(takeEvery, ADMIN_LIST_MEMBER_REQUESTS_EXPIRED, doAdminListMemberRequestsExpired ),
        fork(takeEvery, ADMIN_DELETE_MEMBER_REQUESTS_EXPIRED, doAdminDeleteMemberRequestsExpired),

        /** ADMIN MANAGE CATEGORIES **/
       /* fork(takeEvery, categoryAction.SAVE_CATEGORY, categorySaga.doSaveCategory),
        fork(takeEvery, categoryAction.GET_PARENT_CATEGORY, categorySaga.doGetParentCategory),
        fork(takeEvery, categoryAction.GET_PARENT_CATEGORY_PAGINATION, categorySaga.doGetParentCategoryPage),
        fork(takeEvery, categoryAction.GET_SUB_CATEGORIES_BY_ID, categorySaga.doGetSubCategoryById),
        fork(takeEvery, categoryAction.GET_ALL_CATEGORY, categorySaga.doGetAllCategory),
        fork(takeEvery, categoryAction.GET_CATEGORY_BY_ID, categorySaga.doGetCategoryById),*/

        fork(takeEvery, categoryAction.INSERT_CATEGORY, categorySaga.insertCategorySaga),
        fork(takeEvery, categoryAction.UPDATE_CATEGORY, categorySaga.updateCategorySaga),
        fork(takeEvery, categoryAction.DELETE_CATEGORY, categorySaga.deleteCategorySaga),
        fork(takeEvery, categoryAction.FETCH_CATEGORY, categorySaga.fetchCategorySaga),
        fork(takeEvery, categoryAction.FETCH_PARENT_CATEGORIES, categorySaga.fetchParentCategoriesSaga),
        fork(takeEvery, categoryAction.FETCH_CHILD_CATEGORIES, categorySaga.fetchChildCategoriesSaga),

        /* admin manage promoted product package */
        fork(takeEvery, ADMIN_SAVE_PROMOTED_PRODUCT_PACKAGE, doAdminAddPromotedProductPackage),
        fork(takeEvery, ADMIN_LIST_PROMOTED_PRODUCT_PACKAGE, doAdminListPromotedPackage),
        fork(takeEvery, ADMIN_DELETE_PROMOTED_PRODUCT_PACKAGE, doAdminDeletePromotedPackage),
        fork(takeEvery, ADMIN_GET_PROMOTED_PRODUCT_PACKAGE, doAdminGetPromotedPackage),
        fork(takeEvery, ADMIN_UPDATE_PROMOTED_PRODUCT_PACKAGE, doAdminUpdatePromotePackage),
        fork(takeEvery, ADMIN_LIST_PROMOTED_PRODUCT_EXPIRED, doAdminListPromotedProductsExpired),
        fork(takeEvery, ADMIN_UPDATE_PROMOTED_PRODUCT_EXPIRED, doAdminUpdatePromotedProductExpired),

        /* admin manage promoted user package */
        fork(takeEvery, SAVE_PROMOTE_USER_PACKAGE, doSavePromoteUserPackage),
        fork(takeEvery, LIST_PROMOTE_USER_PACKAGE, doListPromoteUserPackage),
        fork(takeEvery, GET_PROMOTE_USER_PACKAGE, doGetPromoteUserPackage),
        fork(takeEvery, DELETE_PROMOTE_USER_PACKAGE, doDeletePromoteUserPackage),
        fork(takeEvery, UPDATE_PROMOTE_USER_PACKAGE, doUpdatePromoteUserPackage),
        fork(takeEvery, LIST_ALL_PROMOTE_USER_PACKAGE, doListAllPromoteUserPackage),

        /* admin manage products */
        fork(takeEvery, ADMIN_LIST_PRODUCTS, doAdminListProducts),
        fork(takeEvery, ADMIN_UPDATE_PRODUCT_STATUS, doAdminUpdateProductStatus),
        fork(takeEvery, ADMIN_DELETE_PRODUCT, doAdminDeleteProduct),
        fork(takeEvery, ADMIN_GET_PRODUCT, doAdminGetProduct),
        fork(takeEvery, ADMIN_LIST_USERS_REQUEST, doAdminListUser),
        fork(takeEvery, ADMIN_DELETE_USER_REQUEST, doAdminDeleteUserRequest),
        fork(takeEvery, ADMIN_LIST_PROMOTE_PRODUCTS_BY_USER, doAdminListPromoteProductByUser),
        fork(takeEvery, ADMIN_APPROVE_PROMOTE_PRODUCT_REQUEST, doAdminApprovePromoteProduct),
        fork(takeEvery, ADMIN_DELETE_PROMOTE_PRODUCT, doAdminDeletePromoteProduct),
        fork(takeEvery, ADMIN_LIST_PRODUCTS_REPORT , doAdminListProductsReport),
        fork(takeEvery, ADMIN_UPDATE_STATUS_PRODUCT , doAdminUpdateStatusProduct),
        fork(takeEvery, ADMIN_DELETE_REQUEST_PROMOTE_EXPIRED, doAdminDeleteRequestPromoteExpired),

        /* admin manage report */
        fork(takeEvery, LIST_BOOT_PRODUCT_INCOME_TOTAL, doAdminListBootProductIncomeGrand),
        fork(takeEvery, LIST_BOOT_PRODUCT_INCOME_DETAIL, doAdminListBootProductIncomeDetail),
        fork(takeEvery, LIST_MEMBER_PROMOTE_INCOME_DETAIL, doAdminListMemberPromoteIncomeDetail),
        fork(takeEvery, LIST_MEMBER_PROMOTE_INCOME_TOTAL, doAdminListMemberPromoteIncomeGrand),
        fork(takeEvery, LIST_ADVERTISER_INCOME_DETAIL, doAdminListAdvertiserIncomeDetail),
        fork(takeEvery, LIST_ADVERTISER_INCOME_GRAND, doAdminListAdvertiserIncomeGrand),
        fork(takeEvery, LIST_CATEGORY_INCOME, doAdminListCategoryIncome),

        /*update profile*/
        fork(takeEvery, UPDATE_PROFILE, updateProfileSaga),
        fork(takeEvery, GET_USER_INFO, getUserInfoSaga),
        fork(takeEvery, FILTER_MEMBERS, fetchMerchantsSaga),
        fork(takeEvery, commonMemberAction.UPDATE_MEMBER_INFO, commonMemberSaga.updateMemberInfoSaga),
        fork(takeEvery, commonMemberAction.CHANGE_MEMBER_PASSWORD, commonMemberSaga.changeMemberPasswordSaga),
        fork(takeEvery, commonMemberAction.MEMBER_REQUEST_TOBE_MERCHANT, commonMemberSaga.doRequestPromoted),

        /** CATEGORY **/
        fork(takeEvery, catAction.LIST_PARENT_CATEGORY, catSaga.listParentCategorySaga),
        fork(takeEvery, catAction.LIST_CHILD_CATEGORY, catSaga.listChildCategorySaga),
        fork(takeEvery, catAction.LIST_ALL_CATEGORY, catSaga.listAllCategorySaga),
        fork(takeEvery, catAction.FETCH_THIRD_CATEGORIES, catSaga.fetchThirdCategoriesSaga),
        fork(takeEvery, catAction.COUNT_VIEW_CATEGORY, catSaga.countViewCategorySaga),
        fork(takeEvery, catAction.FETCH_POPULAR_CATEGORIES, catSaga.fetchPopularCategoriesSaga),
        fork(takeEvery, catAction.FETCH_SPECIAL_CATEGORIES, catSaga.fetchSpecialCategoriesSaga),

        /**PRODUCTS HOME PAGE**/
        fork(takeEvery,GET_PRODUCT_TYPE_HOT,fetchHotProductSaga),
        fork(takeEvery,GET_PRODUCT_TYPE_GOLD,fetchGoldProductSaga),
        fork(takeEvery,GET_PRODUCT_TYPE_NORMAL,fetchNormalProductSaga),

        /**PRODUCT VIEW ALL PAGE**/
        fork(takeEvery,GET_ALL_PRODUCT,fetchAllProductSaga),

        /**PRODUCT SPECIAL CATEGORY**/
        fork(takeEvery,GET_PRODUCT_SPECIAL_CATEGORY,fetchProductSpecialCategorySaga),

        fork(takeEvery,GET_PRODUCT_BY_CATEGORY_HOT,fetchProductHotByCategoryNameSaga),
        fork(takeEvery,GET_PRODUCT_BY_CATEGORY_GOLD,fetchProductGoldByCategoryNameSaga),
        fork(takeEvery,GET_PRODUCT_BY_CATEGORY_NORMAL,fetchProductNormalByCategoryNameSaga),
        fork(takeEvery,FETCH_PRODUCT_BY_NAME,fetchProductByNameSaga),

        /**PRODUCTS CATEGORY PAGE**/
        fork(takeEvery,GET_FILTER_PRODUCTS_HOT,fetchProductHotFilterSaga),
        fork(takeEvery,GET_FILTER_PRODUCTS_GOLD,fetchProductGoldFilterSaga),
        fork(takeEvery,GET_FILTER_PRODUCTS_NORMAL,fetchProductNormalFilterSaga),


        /**PRODUCTS LOCATION PAGE**/
        fork(takeEvery,GET_FILTER_PRODUCT_HOT_LOCATION,fetchProductHotFilterLocationSaga),
        fork(takeEvery,GET_FILTER_PRODUCT_GOLD_LOCATION,getProductGoldFilterLocationSaga),
        fork(takeEvery,GET_FILTER_PRODUCT_NORMAL_LOCATION,getProductNormalFilterLocationSaga),

        /**PRODUCT STORE BY USERNAME**/
        fork(takeEvery,GET_PRODUCT_BY_USERNAME,fetchProductsUserNameSaga),

        /**USER WITH STORE INFORMATION**/
        fork(takeEvery,USER_WITH_STORE,getUserWithStoreSaga),

        /**oudam**/
        fork(takeEvery, COUNT_PRODUCT_VIEW, countProductViewSaga),

        /** SAGA MEMBER MANAGE PRODUCTS **/
        fork(takeEvery, commonMemberAction.INSERT_PRODUCT, commonMemberSaga.addProductSaga),
        fork(takeEvery, commonMemberAction.REMOVE_PRODUCT_IMAGE , commonMemberSaga.removeProductImageSaga),
        fork(takeEvery, commonMemberAction.FETCH_PRODUCTS, commonMemberSaga.fetchProductSaga),
        fork(takeEvery, commonMemberAction.UPDATE_PRODUCT_STATUS, commonMemberSaga.deleteProductSaga),
        fork(takeEvery, commonMemberAction.FETCH_PRODUCT, commonMemberSaga.fetchProductByIdSaga),
        fork(takeEvery, commonMemberAction.UPDATE_PRODUCT, commonMemberSaga.updateProductByIdSaga),
        fork(takeEvery, commonMemberAction.RENEW_PRODUCT, commonMemberSaga.renewProductSaga),
        fork(takeEvery, commonMemberAction.MEMBER_LIST_PROMOTED_PRODUCTS, commonMemberSaga.doMemberListPromotedProduct ),
        fork(takeEvery, commonMemberAction.MEMBER_GET_PROMOTED_PRODUCT_BY_ID, commonMemberSaga.doMemberGetPromoteProduct),
        fork(takeEvery, commonMemberAction.MEMBER_LIST_ALL_PROMOTED_PACKAGES, commonMemberSaga.doMemberListAllPackages),
        fork(takeEvery, commonMemberAction.MEMBER_PROMOTE_PRODUCTS, commonMemberSaga.doPromoteProducts),

        /* related/recently product */
        fork(takeEvery, GET_RELATED_PRODUCTS, fetchRelatedProductsSaga),
        fork(takeEvery, GET_RECENTLY_PRODUCTS, fetchRecentlyProductsSaga),

        /*store*/
        fork(takeEvery, FETCH_STORE, fetchStoreSaga),
        fork(takeEvery, UPDATE_STORE_MAP, updateStoreMapSaga),
        fork(takeEvery, UPDATE_STORE, updateStoreSaga),

        /** rating product */
        fork(takeEvery, POST_STAR_RATING, sagaPostStarRating),
        fork(takeEvery, GET_ONE_STAR_RATING, sagaGetStarRatingByProIdAndIp),
        fork(takeEvery, GET_TOTAL_STAR_RATING, sagaGetTotalStarRatingByProductId),

        /** subscribe store */
        fork(takeEvery, POST_SUBSCRIBE, sagaPostSubscribe),
        fork(takeEvery, GET_SUBSCRIBE, sagaGetSubscribeByStoreIdAndUserId),
        fork(takeEvery, DELETE_SUBSCRIBE, sagaDeleteSubscribe),

        /** notification */
        fork(takeEvery, POST_NOTIFICATION, sagaPostNotification),
        fork(takeEvery, COUNT_NOTIFICATION, sagaCountNotification),
        fork(takeEvery, GET_ALL_NOTIFICATIONS, sagaGetAllNotificationsByUserId),
        fork(takeEvery, UPDATE_ALL_NOTIFICATION, sagaUpdateAllNotification),
        fork(takeEvery, UPDATE_DIRTY_NOTIFICATION, sagaUpdateDirtyNotification),
        fork(takeEvery, GET_NOTIFICATION, sagaGetNotificationById),

        /** admin dashboard */
         fork(takeEvery, ADMIN_COUNT_TODAY_PRODUCTS, sagaAdminCountTodayProducts),
         fork(takeEvery, ADMIN_COUNT_NORMAL_MEMBERS, sagaAdminCountNormalMembers),
         fork(takeEvery, ADMIN_COUNT_MERCHANT_MEMBERS, sagaAdminCountMerchantMembers),
    ];
}