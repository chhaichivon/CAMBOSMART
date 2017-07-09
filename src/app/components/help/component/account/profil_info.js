import React from 'react';
import { loadLanguage } from './../../../../localstorages/local_storage';
import './../help.css';
export default class ProfileInfo extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content profile-info">
                        {
                            loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                <div>
                                    <p className="head-title">I. Profile Information</p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/en/user_profile_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="head-title">I. ព័ត៏មានគណនី</p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/kh/user_profile_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content profile-info">
                        {
                            loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                <div>
                                    <p className="title">1. Update profile image by click on profile image after then click save</p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/change_profile.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">១. ប្តូររូបភាព Profile លោគអ្នកចុចលើ​ Profile រូចរករូបភាពលោគអ្នកចង់ដាក់​រូចចុច Save</p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/change_profile.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content profile-info">
                        {
                            loadLanguage() == "en" || loadLanguage() == undefined ?
                                <div>
                                    <p className="title">2. Update user name </p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/en/change_username_one_en.png"/>
                                    </div>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/en/change_username_two_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">២. ប្តូរឈ្មោះ </p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/kh/change_username_one_kh.png"/>
                                    </div>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/kh/change_username_two_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content profile-info">
                        {
                            loadLanguage() == "en" || loadLanguage() == undefined ?
                                <div>
                                    <p className="title">3. Add Register phone</p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/en/add_phone_one_en.png"/>
                                    </div>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/en/add_phone_two_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">៣. បន្ថែមទូរស័ព្ទ </p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/kh/add_phone_one_kh.png"/>
                                    </div>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/kh/add_phone_two_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content profile-info">
                        {
                            loadLanguage() == "en" || loadLanguage() == undefined ?
                                <div>
                                    <p className="title">4. Update Information</p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/en/update_information_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">៤. បន្ថែមព័ត៏មាន </p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/kh/update_information_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content profile-info">
                        {
                            loadLanguage() == "en" || loadLanguage() == undefined ?
                                <div>
                                    <p className="title">5. Change Password</p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/en/update_password_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">៥. ផ្លាស់ប្តូរលេខសម្ងាត់ </p>
                                    <div className="img-help-profile">
                                        <img src="/icon/help/account/profile/kh/update_password_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}