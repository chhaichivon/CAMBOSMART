import React from 'react';
import {Image} from 'react-bootstrap';
import { loadLanguage } from './../../../../localstorages/local_storage';
import './../help.css';

export default class HowTobeMerchant extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == 'en' ||  loadLanguage() == undefined ?
                                <div>
                                    <p className="head-title">I. How to promote to be Merchant</p>
                                    <p className="title">1. Click on button Upgrade to Business Account.</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/m1.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="head-title">I. របៀបប្តូគណនីធម្មតាទៅកាន់គណនីជំនួញ</p>
                                    <p className="title">១. ចុចលើប៊ូតុង Upgrade to Business Account</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/m1.png"/>
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
                                    <p className="title">2. Click on button REQUEST.</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/m2.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title"> ២. ចុចលើប៊ូតុង REQUEST</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/m2.png"/>
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
                                    <p className="title">3. Choose package service to promote and then click on button Request.</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/m3.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">៣. ជ្រើសរើសយកកញ្ចប់សេវ៉ាកម្មនិងបន្ទាប់មកចុចលើប៊ូតុង Request</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/m3.png"/>
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
                                    <p className="title">4. Choose type of payment</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/m4.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">៤. ជ្រើសរើសប្រភេទនៃការបង់លុយ</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/m4.png"/>
                                    </div>
                                </div>

                        }
                    </div>
                </div>

            </div>
        )
    }
}