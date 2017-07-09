import React from 'react';
import { loadLanguage } from './../../../../localstorages/local_storage';
import './../help.css';
export default class HowToForgetPasssword extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == 'en' ||  loadLanguage() == undefined ?
                                <div>
                                    <p className="head-title">I. How to Reset new password</p>
                                    <p className="title">1. Please click on button forget password</p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/forget_password/en/forget_password_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="head-title">I. របៀបភ្លេចលេខសម្ងាត់</p>
                                    <p className="title">១.សូមចុចលើភ្លេចពាក្យសម្ងាត់</p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/forget_password/kh/forget_password_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == 'en' ||  loadLanguage() == undefined ?
                                <div>
                                    <p className="title">2. Please Enter your Phone or Email to Reset new password</p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/forget_password/en/form_submit_forget_password_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">២.  សូមបញ្ចូលអ៊ីម៉ែល​​ ឬ លេខទូរស័ព្ទសំរាប់ប្តូរលេខសម្ងាត់ </p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/forget_password/kh/form_submit_forget_password_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        <div className="help-content">
                            {
                                loadLanguage() == 'en' ||  loadLanguage() == undefined ?
                                    <div>
                                        <p className="title">3. Please Enter your Phone or Email to Reset new password</p>
                                        <div className="img-help">
                                            <img src="/icon/help/account/forget_password/en/form_change_password_en.png"/>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <p className="title">៣. សូមបញ្ចូលអ៊ីម៉ែល​ ឬ លេខទូរស័ព្ទសំរាប់ប្តូរលេខសម្ងាត់ </p>
                                        <div className="img-help">
                                            <img src="/icon/help/account/forget_password/kh/form_change_password_kh.png"/>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        <div className="help-content">
                            {
                                loadLanguage() == 'en' ||  loadLanguage() == undefined ?
                                    <div>
                                        <p className="title">4. Please on ( Click here to login)</p>
                                        <div className="img-help">
                                            <img src="/icon/help/account/forget_password/en/message_successfully_change_password_en.png"/>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <p className="title">៤. សូមចុចចូលគណនី</p>
                                        <div className="img-help">
                                            <img src="/icon/help/account/forget_password/kh/message_successfully_change_password_kh.png"/>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}