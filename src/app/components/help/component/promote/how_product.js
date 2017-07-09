import React from 'react';
import {Image} from 'react-bootstrap';
import { loadLanguage } from './../../../../localstorages/local_storage';
import './../help.css';

export default class HowTobePromoteProduct extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == 'en' ||  loadLanguage() == undefined ?
                                <div>
                                    <p className="head-title">I. How to promote products</p>
                                    <p className="title">1. Click on button Promote.</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/1.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="head-title">I. របៀបប៊ូតផលិតផល</p>
                                    <p className="title">១. ចុចលើប៊ូតុង Promote</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/1.png"/>
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
                                    <p className="title">2. Click on icon basket.</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/2.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">២. ចុចលើរូបសញ្ញាកន្រ្តក</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/2.png"/>
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
                                    <p className="title">3. Choose package service to promote.</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/3.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">៣. ជ្រើសរើសយកកញ្ចប់សេវ៉ាកម្ម</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/3.png"/>
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
                                    <p className="title">4. Click on button Promote.</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/4.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">៤. ចុចលើប៊ូតុង Promote</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/4.png"/>
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
                                    <p className="title">5. Choose type of payment then click on button Next.</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/5.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">៥. ចុចលើប៊ូតុង Next</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/promote/5.png"/>
                                    </div>
                                </div>

                        }
                    </div>
                </div>

            </div>
        )
    }
}