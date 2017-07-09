import React from 'react';
import { loadLanguage } from './../../../../localstorages/local_storage';
import './../help.css';
export default class HowToRegister extends React.Component{

    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" || loadLanguage() == undefined ?
                                <div>
                                    <p className="head-title">I.How to Register with Personal Account</p>
                                    <p className="title">1.Click on Join Free button</p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/register/en/register_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="head-title">I.របៀបចុះឈ្មោះគណនីផ្ទាល់ខ្លួន</p>
                                    <p className="title">១.ដើម្បីធ្វើការចុះឈ្មោះ សូមលោក​អ្នកចុចលើ ចុះឈ្មោះ (ចុះឈ្មោះ) ដែលនៅផ្នែកខាងល់គេហទំព័រ។</p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/register/kh/register_kh.png"/>
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
                                    <p className="title">2.Fill text in text box and Click Button SignUp</p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/register/en/form_submit_register_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">២.សូមបំពេញនូវប្រអប់ដែលមានដូចខាងក្រោម ហើយចុចពាក្យចុះឈ្មោះ</p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/register/kh/form_submit_register_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}