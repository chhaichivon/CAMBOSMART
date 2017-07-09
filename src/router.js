import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import {history} from "./store.js";
import App from './app/components/app';
import Home from './app/components/home/home';
import NotFound from './app/components/shared_component/not_found';

/*home page component*/
import Products from './app/components/home/products/products';

/*product view all page*/
import IndexProductViewAll from  './app/components/home/view_all_products/index';
import ProductViewAllGrid from './app/components/home/view_all_products/view_product_grid';
import ProductViewAllList from './app/components/home/view_all_products/view_product_list';

/*product category page*/
import IndexProductsCategory  from  './app/components/products/product_category/index';
import ProductCategoryGrid   from  './app/components/products/product_category/grid';
import ProductCategoryList   from  './app/components/products/product_category/list';

/*product location page*/
import IndexProductLocation  from  './app/components/products/locations/index';
import ProductLocationGrid   from  './app/components/products/locations/grid';
import ProductLocationList   from  './app/components/products/locations/list';

/* Detail Page */
import IndexProductDetail from './app/components/products/product_detail_page/index';
import ProductDetail from './app/components/products/product_detail_page/detail';

import { checkAuthAdmin, checkAuthMerchant, checkAuthNormal } from './app/localstorages/auth';

/* Login Admin */
import LoginAdmin from './app/components/admin_page/login/login_admin';
import ForgetPassword from './app/components/login/forget_password/forget_password';

/* Login User and Merchant */
import LoginUser  from './app/components/login/login';
import FormSignInOrSignUpUser from './app/components/login/form';
import FormVerifyCode   from './app/components/login/form_verify_code';
import FormAddPhone     from './app/components/login/form_add_phone';

/* Dashboard Admin */
import AdminDashboard from './app/components/admin_page/admin_dashboard';
import AdminIndex from './app/components/admin_page/component/index';
import Profile from './app/components/admin_page/component/profile/profile';

/* Admin manage category and sub category */
import AddCategory from './app/components/admin_page/component/category/add_category/add_category';
import AddLevelOneCategory from './app/components/admin_page/component/category/add_category/add_level_one_category';
import AddLevelTwoCategory from './app/components/admin_page/component/category/add_category/add_level_two_category';
import AddLevelThreeCategory from './app/components/admin_page/component/category/add_category/add_level_three_category';
import ListCategory from './app/components/admin_page/component/category/list_category/list_category';
import ListLevelOneCategory from './app/components/admin_page/component/category/list_category/list_level_one_category';
import ListLevelTwoCategory from './app/components/admin_page/component/category/list_category/list_level_two_category';
import ListLevelThreeCategory from './app/components/admin_page/component/category/list_category/list_level_three_category';
import DetailLevelOneCategory from './app/components/admin_page/component/category/detail_category/detail_level_one_category';
import DetailLevelTwoCategory from './app/components/admin_page/component/category/detail_category/detail_level_two_category';
import DetailLevelThreeCategory from './app/components/admin_page/component/category/detail_category/detail_level_three_category';
import EditLevelOneCategory from './app/components/admin_page/component/category/edit_category/edit_level_one_category';
import EditLevelTwoCategory from './app/components/admin_page/component/category/edit_category/edit_level_two_cateory';
import EditLevelThreeCategory from './app/components/admin_page/component/category/edit_category/edit_level_three_category';

/* Admin manage promoted product package */
import AddPromotedProductPackage from './app/components/admin_page/component/promote_package/add_promote_package';
import ListPromotePackage from './app/components/admin_page/component/promote_package/list_promote_package';
import ViewPromotePackage from './app/components/admin_page/component/promote_package/view_promote_package';
import EditPromotePackage from './app/components/admin_page/component/promote_package/edit_promote_package';

/* Admin manage promote user package */
import AddUserPromotePackage from './app/components/admin_page/component/promote_user_package/add_user_promote_package';
import ListUserPromotePackage from './app/components/admin_page/component/promote_user_package/list_user_promote_package';
import DetailUserPromotePackage from './app/components/admin_page/component/promote_user_package/view_user_promote_package';
import EditUserPromotePackage from './app/components/admin_page/component/promote_user_package/edit_user_promote_package';

/* Admin mange promote products */
import MerchantRequest from './app/components/admin_page/component/promoted/merchant_request';
import ListPromoteProduct from './app/components/admin_page/component/promoted/list_promote_products';
import DetailPromoteProduct from './app/components/admin_page/component/promoted/detail_promote_product';
import ListPromotedProductExpired from './app/components/admin_page/component/promoted/product_expired/list_promoted_product_expired';

/* Admin manage reports */
import IncomeIndex from './app/components/admin_page/component/reports/income/income_index';
import ReportProduct from './app/components/admin_page/component/report_products/list_products/list_products';
import DetailProduct from './app/components/admin_page/component/report_products/product_detail/product_detail';

/* Route Product */
import AdminListProduct from './app/components/admin_page/component/products/list_products/admin_list_products';
import AdminDetailProduct from './app/components/admin_page/component/products/detail_product/admin_detail_product';

/* Route merchant */
import MerchantList from './app/components/admin_page/component/merchant/list/merchant_list';
import MerchantDetail from './app/components/admin_page/component/merchant/info/merchant_info';
import EditMerchant from './app/components/admin_page/component/merchant/edit_merchant';
import ListMerchantExpired from './app/components/admin_page/component/merchant/merchant_expired/list_merchant_expired';

/* admin manages member */
import MemberList from './app/components/admin_page/component/member/member_list';
import ViewMember from './app/components/admin_page/component/member/view_member';
import EditMember from './app/components/admin_page/component/member/edit_member';
import ListMemberRequest from './app/components/admin_page/component/member/request/list_member_request';
import DetailMember from './app/components/admin_page/component/member/request/detail_member';
import ListMemberRequestsExpired from './app/components/admin_page/component/member/request_expired/list_member_request_expired';

/*member dashboard*/
import MemberIndex from'./app/components/member_page/component/index';
import MemberDetailProduct from './app/components/member_page/component/product/detail/member_detail_product';
import PromoteDescription from './app/components/member_page/component/promote/promote_desc';
import FormPromoteTobeMerchant from './app/components/member_page/component/promote/form_promote-tobe_mrechant';
import PromoteMerchantPayment from './app/components/member_page/component/promote/promote_merchant_payment';

/** Notification */
import Notification from './app/components/notification/notification';
import Notifications from './app/components/notification/notifications';

/* User Dashboard */
import UserDashboard from './app/components/member_page/member_dashboard';

/* user authentication */
import SetNewPassword from './app/components/login/forget_password/set_new_password';
import SuccessUpdateNewPassword from './app/components/login/forget_password/success_update_password';


/** MEMBER MANAGE PRODUCTS **/
import MemberAddProduct from './app/components/member_page/component/product/add/index';
import MemberUpdateProduct from './app/components/member_page/component/product/edit/product_edit';

/* help */
import IndexHelp from './app/components/help/component/index';
import Welcome from'./app/components/help/component/welcome';
import HowToForgetPassword from './app/components/help/component/account/forget_password';
import HowToLogin from './app/components/help/component/account/how_to_login';
import HowToRegister from './app/components/help/component/account/how_to_register';
import HowToVerify from './app/components/help/component/account/how_to_verify';
import ProfileInfo from './app/components/help/component/account/profil_info';
import HowToPostAd from './app/components/help/component/ads/how_to_post';
import HowToManageAd from './app/components/help/component/ads/manage_ads';
import HowToSetMap from './app/components/help/component/map/map';
import PostRule from './app/components/help/component/privacy/post_rule';
import Privacy from './app/components/help/component/privacy/privacy';
import StoreBanner from './app/components/help/component/store/store_banner';
import StoreInfo from './app/components/help/component/store/store_info';
import AboutUs from './app/components/help/component/about_cambosmart/about_us';
import ContactUs from './app/components/help/component/about_cambosmart/contact_us';
import HowTobePromoteProduct from './app/components/help/component/promote/how_product';
import HowTobeMerchant from './app/components/help/component/promote/how_merchant';

/**ADMIN MANAGE ADVERTISEMENT**/
import AdvertisementAdd from './app/components/admin_page/component/advertisement/add';
import AdvertisementList from './app/components/admin_page/component/advertisement/list';
import AdvertisementDetail from './app/components/admin_page/component/advertisement/detail';
import AdvertisementEdit from './app/components/admin_page/component/advertisement/edit';
import AdvertisementSchedule from './app/components/admin_page/component/advertisement/schedule';

/**ADMIN MANAGE CATEGORY ADVERTISEMENT**/
import CategoryAdvertisementSchedule from './app/components/admin_page/component/category_advertisement/schedule';
import CategoryAdvertisementAdd from './app/components/admin_page/component/category_advertisement/add';
import CategoryAdvertisementList from './app/components/admin_page/component/category_advertisement/list';
import CategoryAdvertisementEdit from './app/components/admin_page/component/category_advertisement/edit';

/**ADMIN MANAGE ADVERTISER*/
import Advertisement from './app/components/admin_page/component/advertiser/schedule/advertisement';
import CategoryAdvertiser from './app/components/admin_page/component/advertiser/new/category_advertiser';

import AdvertiserList from './app/components/admin_page/component/advertiser/list/list';
import AdvertiserCategoryList from './app/components/admin_page/component/advertiser/list/category';
import CategoryAdvertiserDetail from './app/components/admin_page/component/advertiser/detail/category_detial';

import AdvertiserPageList from './app/components/admin_page/component/advertiser/list/page';
import AdvertiserDetail from './app/components/admin_page/component/advertiser/detail';
import Advertiser from './app/components/admin_page/component/advertiser/new/advertiser';
import AdvertiserEdit from './app/components/admin_page/component/advertiser/edit';
import ModalRenew from './app/components/admin_page/component/advertiser/modal_renew';
import AppendMoreAdvertiser from './app/components/admin_page/component/advertiser/schedule/page/append_more_advertiser';

/** STORE USER **/
import IndexStore from './app/components/store/store';


const router = (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path="store(/:name)(/:page)" component={IndexStore}/>
        <Route path="store(/:name)/contact" component={IndexStore}/>

        <Route path="/" component={App} handle={ 'Get Name '} >
            <Route component={Home} >
                <IndexRoute component={Products} />
            </Route>

            <Route path="products">
                {/*product category*/}
                <Route path="category" component={IndexProductsCategory}>
                    <Route path="grid(/:categoryName)(/:page)" component={ProductCategoryGrid}/>
                    <Route path="list(/:categoryName)(/:page)" component={ProductCategoryList}/>
                </Route>
            {/*product location*/}
                <Route path="location" component={IndexProductLocation}>
                    <Route  path="grid(/:location)" component={ProductLocationGrid}/>
                    <Route  path="list(/:location)" component={ProductLocationList}/>
                </Route>
            {/*product view all*/}
                <Route path="view" component={IndexProductViewAll}>
                    <Route path="grid(/:productType)(/:page)" component={ProductViewAllGrid} />
                    <Route path="list(/:productType)(/:page)" component={ProductViewAllList} />
                </Route>
            </Route>
            {/*detail products*/}
            <Route path="products/" component={IndexProductDetail}>
                <Route path="detail/:pro_id" component={ProductDetail} />
            </Route>

            <Route path="sign-in" component={FormSignInOrSignUpUser}/>
            <Route path="sign-up" component={FormSignInOrSignUpUser}/>
            <Route path="add-phone" component={FormAddPhone}/>
            <Route path="verify-code" component={FormVerifyCode}/>
            <Route path="forgetpassword" component={ForgetPassword} />
            <Route path="setnewpassword" component={SetNewPassword} />
            <Route path="success-update-password" component={SuccessUpdateNewPassword} />

            <Route path="/help" component={IndexHelp}>
                <IndexRoute component={Welcome}/>
                <Route path="how-to-register" component={HowToRegister}/>
                <Route path="how-to-verify" component={HowToVerify}/>
                <Route path="how-to-login" component={HowToLogin}/>
                <Route path="how-to-reset-password" component={HowToForgetPassword}/>
                <Route path="profile-info" component={ProfileInfo}/>
                <Route path="post-ad" component={HowToPostAd}/>
                <Route path="manage-ad" component={HowToManageAd}/>
                <Route path="store-info" component={StoreInfo}/>
                <Route path="store-banner" component={StoreBanner}/>
                <Route path="privacy" component={Privacy}/>
                <Route path="post-rule" component={PostRule}/>
                <Route path="about-us" component={AboutUs}/>
                <Route path="contact-us" component={ContactUs}/>
                <Route path="map" component={HowToSetMap}/>
                <Route path="promote" component={HowTobePromoteProduct}/>
                <Route path="merchant" component={HowTobeMerchant}/>
            </Route>
        </Route>
        
        {/* Login Admin */}
        <Route path="/cambo-admin" component={LoginAdmin} />
        {/* <IndexRoute component={LoginAdmin}/>
         </Route>*/}

        {/* Login All Member */}
        <Route path="/login" component={LoginUser}>
            <IndexRoute component={FormSignInOrSignUpUser}/>
        </Route>

        {/* register All Member */}
        <Route path="/register" component={LoginUser}>
            <IndexRoute component={FormSignInOrSignUpUser}/>
        </Route>

        {/* Dashboard */}
        <Route path="/admin" component={AdminDashboard} onEnter={checkAuthAdmin}>
            <IndexRoute component={AdminIndex}/>
            <Route path="profile" component={Profile} />
            <Route path="dashboard" component={AdminIndex}/>
            <Route path="category">
                <Route path="add-category" component={AddCategory}>
                    <Route path="add-level-one" component={AddLevelOneCategory}/>
                    <Route path="add-level-two" component={AddLevelTwoCategory}/>
                    <Route path="add-level-three" component={AddLevelThreeCategory}/>
                </Route>
                <Route path="list-category" component={ListCategory}>
                    <Route path="list-level-one" component={ListLevelOneCategory}/>
                    <Route path="list-level-two" component={ListLevelTwoCategory}/>
                    <Route path="list-level-three" component={ListLevelThreeCategory}/>
                </Route>
                <Route path="detail-level-one-category/:cat_id" component={DetailLevelOneCategory}/>
                <Route path="detail-level-two-category/:cat_id" component={DetailLevelTwoCategory}/>
                <Route path="detail-level-three-category/:cat_id" component={DetailLevelThreeCategory}/>

                <Route path="edit-level-one-category/:categoryId" component={EditLevelOneCategory}/>
                <Route path="edit-level-two-category/:categoryId" component={EditLevelTwoCategory}/>
                <Route path="edit-level-three-category/:categoryId" component={EditLevelThreeCategory}/>
            </Route>

            <Route path="products">
                <Route path="list-products" component={AdminListProduct}/>
                <Route path="detail-product/:productId" component={AdminDetailProduct}/>
            </Route>

            <Route path="merchants">
                <Route path="list(/:page)" component={MerchantList} />
                <Route path="detail/:merchantId" component={MerchantDetail}/>
                <Route path="edit/:merchantId" component={EditMerchant}/>
                <Route path="list-merchants-expired" component={ListMerchantExpired} />
            </Route>

            <Route path="members">
                <Route path="list(/:page)" component={MemberList} />
                <Route path="detail/:memberId" component={ViewMember} />
                <Route path="edit/:memberId" component={EditMember} />
                <Route path="list-request" component={ListMemberRequest} />
                <Route path="detail-member/:memberId" component = {DetailMember} />
                <Route path="list-request-expired" component = {ListMemberRequestsExpired} />
            </Route>

            <Route path="package">
                <Route path="add-package" component={AddPromotedProductPackage} />
                <Route path="list-package" component={ListPromotePackage} />
                <Route path="detail-package/:id" component={ViewPromotePackage} />
                <Route path="edit-package/:id" component={EditPromotePackage} />
            </Route>

            <Route path="user-package">
                <Route path="add-user-package" component={AddUserPromotePackage} />
                <Route path="list-user-package" component={ListUserPromotePackage} />
                <Route path="detail-user-package/:id" component={DetailUserPromotePackage} />
                <Route path="edit-user-package/:id" component={EditUserPromotePackage} />
            </Route>

            <Route path="promote">
                <Route path="list-boot-products" component={MerchantRequest} />
                <Route path="list-promote-products(/:promoteId/:userId)" component={ListPromoteProduct}/>
                <Route path="detail-promote-product(/:productId)" component={DetailPromoteProduct} />
                <Route path="list-expired-products" component={ListPromotedProductExpired} />
            </Route>

            <Route path="advertisers">
                <Route path="new" component={Advertisement}>
                    <Route path="category" component={CategoryAdvertiser}/>
                    <Route path="page" component={Advertiser}/>
                </Route>
                <Route path="list" component={AdvertiserList}>
                    <Route path="categories(/:page)" component={AdvertiserCategoryList}/>
                </Route>
                <Route path="list" component={AdvertiserList}>
                    <Route path="pages(/:page)" component={AdvertiserPageList}/>
                </Route>
                <Route path="category/detail(/:id)" component={CategoryAdvertiserDetail}/>

                <Route path="schedule" component={AdvertisementSchedule}/>
                <Route path="list(/:page)" component={AdvertiserList}/>
                <Route path="detail(/:id)" component={AdvertiserDetail} />
                <Route path="edit(/:id)(/:image)" component={AdvertiserEdit} />
                <Route path="renew" component={ModalRenew} />
                <Route path="append(/:id)" component={AppendMoreAdvertiser} />
            </Route>

            <Route path="advertisements">
                <Route path="add" component={AdvertisementAdd}/>
                <Route path="edit/:id" component={AdvertisementEdit}/>
                <Route path="list" component={AdvertisementList}/>
                <Route path="detail/:id" component={AdvertisementDetail}/>
                <Route path="schedule(/:page)" component={AdvertisementSchedule}/>

                <Route path="category/schedule" component={CategoryAdvertisementSchedule}/>
                <Route path="category/add" component={CategoryAdvertisementAdd}/>
                <Route path="category/list" component={CategoryAdvertisementList}/>
                <Route path="category/edit/:id" component={CategoryAdvertisementEdit}/>
            </Route>

            <Route path="reports">
                <IndexRoute component={IncomeIndex}/>
                <Route path="income" component={IncomeIndex}/>
                <Route path="product-report" component={ReportProduct}/>
                <Route path="product-detail/:productId" component={DetailProduct}/>
            </Route>
        </Route>

        {/** MERCHANT MANAGE PRODUCTS **/}
        <Route path="/merchant" component={UserDashboard} onEnter={checkAuthMerchant}>
            <IndexRoute component={MemberIndex}/>
            <Route path="ads" component={MemberIndex}/>
            <Route path="ads/add-cat" component={MemberAddProduct}/>
            <Route path="ads/add-info" component={MemberAddProduct}/>
            <Route path="ads/edit" component={MemberUpdateProduct}/>
            <Route path="profile" component={MemberIndex}/>
            <Route path="map" component={MemberIndex}/>
            <Route path="store" component={MemberIndex}/>
            <Route path="detail-product/:id" component={MemberDetailProduct}/>
            <Route path="promote-desc" component={PromoteDescription} />
            <Route path="form-promote-tobe-merchant" component={FormPromoteTobeMerchant} />
            <Route path="promote-merchant-payment(/:id)" component={PromoteMerchantPayment} />
            <Route path="notification/:id" component={Notification} />
            <Route path="notifications" component={Notifications} />
        </Route>
        
        {/** MEMBER MANAGE PRODUCTS **/}
        <Route path="/normal" component={UserDashboard} onEnter={checkAuthNormal}>
            <IndexRoute component={MemberIndex}/>
            <Route path="ads" component={MemberIndex}/>
            <Route path="ads/add-cat" component={MemberAddProduct}/>
            <Route path="ads/add-info" component={MemberAddProduct}/>
            <Route path="ads/edit" component={MemberUpdateProduct}/>
            <Route path="profile" component={MemberIndex}/>
            <Route path="map" component={MemberIndex}/>
            <Route path="store" component={MemberIndex}/>
            <Route path="detail-product/:id" component={MemberDetailProduct}/>
            <Route path="promote-desc" component={PromoteDescription} />
            <Route path="form-promote-tobe-merchant" component={FormPromoteTobeMerchant} />
            <Route path="promote-merchant-payment(/:id)" component={PromoteMerchantPayment} />
            <Route path="notification/:id" component={Notification} />
            <Route path="notifications" component={Notifications} />
        </Route>

        <Route path="*" component={NotFound}/>

    </Router>
);
export {router};