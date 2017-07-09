import React from 'react';
import { loadLanguage } from './../../../../localstorages/local_storage';
import './../help.css';
export default class MangeAds extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" ||  loadLanguage == undefined ?
                                <div>
                                    <p className="head-title">I. How to manage post ads</p>
                                    <p className="title">1. If you want to post product , you must register to be member in cambosmart . you login to your account and then you click free ads at the right of website </p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/post/manage/manage_ads_en.png"/>
                                    </div>
                                    <p className="title">
                                        1)  (Free Post): For post products to sell.
                                    </p>
                                    <p className="title">
                                        2)  (Promote Product) For promote products to hot product or goal products.
                                    </p>
                                    <p className="title">
                                        3)  (Renew): Update products to post new.
                                    </p>
                                    <p className="title">
                                        4)  (Delete): Delete products from cambosmart.
                                    </p>
                                    <p className="title">
                                        5)  (Edit): Change products information.
                                    </p>
                                </div>
                                :
                                <div>
                                    <p className="head-title">I. របៀបគ្រប់គ្រងការដាក់លក់</p>
                                    <p className="title">១. ដើម្បីចូលទៅកាន់ទំព័រគ្រងការដាក់លក់ អ្នកត្រូវធ្វើការចូលគណនី (ចូលគណនី) បន្ទាប់មកសូមចុចលើគ្រប់គ្រងផលិតផល (ការគ្រប់គ្រង់ទំនិញ) ដែលនៅខាងលើផ្នែកខាងស្តាំនៃទំព័រ។។</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/post/manage/manage_ads_kh.png"/>
                                    </div>
                                    <p className="title">
                                        1) ផ្សាយលក់ (Post an Ad): សំរាប់ធ្វើការដាក់លក់។
                                    </p>
                                    <p className="title">
                                        2) លោកអ្នកអាច (Promote Product) ។
                                    </p>
                                    <p className="title">
                                        3) ធ្វើអោយថ្មី (Renew): ធ្វើអោយការដាក់លក់របស់អ្នកឡើងទៅលើ ឬ ដាក់លក់សាជាថ្មី។
                                    </p>
                                    <p className="title">
                                        4) លុប (Delete): សំរាប់លប់ការដាក់លក់របស់អ្នក។
                                    </p>
                                    <p className="title">
                                        5) កែ (Edit): សំរាប់ធ្វើការកែប្រែទិន្នន័យរសប់ការដាក់លក់របស់អ្នក ។
                                    </p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}