import React from 'react';
import { loadLanguage } from './../../../../localstorages/local_storage';
import './../help.css';
export default class HowToLogIn extends React.Component{

    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <div className="help-content">
                       {
                           loadLanguage() == "en" ||  loadLanguage() == undefined ?
                               <div>
                                   <p className="head-title">I. How to Login with Personal Account</p>
                                   <p className="title">1. click on LogIn Button</p>
                                   <div className="img-help">
                                       <img src="/icon/help/account/login/en/login_en.png"/>
                                   </div>
                               </div>
                               :
                               <div>
                                   <p className="head-title">I. របៀបចូលគណនីផ្ទាល់ខ្លួន</p>
                                   <p className="title">១. ចុចលើពាក្យថាចូលគណនី</p>
                                   <div className="img-help">
                                        <img src="/icon/help/account/login/kh/login_kh.png"/>
                                   </div>
                               </div>
                       }
                   </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" || loadLanguage() == undefined ?
                                <div>
                                    <p className="title">2. Fill in textbox (Email or Phone number) and Click Button SignIn</p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/login/en/submit_form_login_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">២. សូមបញ្ចួលអ៊ីម៉ែល ​ឬ លេខទូរស័ព្ទ រូចចុចលើពាក្យចូលគណនី</p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/login/kh/submit_form_login_kh.png"/>
                                    </div>
                                </div>
                        }

                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ marginTop:"20px" }}>
                    <div className="help-content">
                        {
                            loadLanguage() == "en" || loadLanguage() == undefined ?
                                <div>
                                    <p className="head-title">II. How to Login with Social Account</p>
                                    <p className="title">1. click on LogIn with facebook or Login with google Button</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/account/login/social/login_social.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="head-title">II. របៀបចូលគណនីតាម Facebook ឬ Gmail </p>
                                    <p className="title">១. ចុចលើពាក្យថា Login with Facebook  ឬ  Login with gmail </p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/account/login/social/login_social.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" || loadLanguage() == undefined ?
                                <div>
                                    <p className="title">2. Add your phone number to get verify code</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/account/login/social/add_phone_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">២. បញ្ចូលលេខទូរស័ព្ទ ដើម្បីទទួលបានលេខកូដ</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/account/login/social/add_phone_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" || loadLanguage() == undefined ?
                                <div>
                                    <p className="title">3. Add your verify code</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/account/login/social/verify_code_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">៣. បញ្ចូលលេខកូដ ហើយចុចបញ្ជួន</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/account/login/social/verify_code_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>

            </div>
        )
    }
}