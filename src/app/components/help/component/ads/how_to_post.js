import React from 'react';
import { loadLanguage } from './../../../../localstorages/local_storage';
import './../help.css';
export default class HowToPostAd extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" ||  loadLanguage == undefined ?
                                <div>
                                    <p className="head-title">I. How to Post ads</p>
                                    <p className="title">1. If you want to post product , you must register to be member in cambosmart . you login to your account and then you click free ads at the right of website </p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/post/post/free_post_en.png"/>
                                    </div>

                                </div>
                                :
                                <div>
                                    <p className="head-title">I. របៀបដាក់លក់</p>
                                    <p className="title">១. ដើម្បីដាក់លក់ផលិតផល អ្នកត្រូចុះឈ្មោះជាសមាជិក Cambosmart ជាមុនសិន។ សូមចូលគណនីរបស់អ្នក (ចូលគណនី) បន្ទាប់មកចុចលើដាក់លក់ (ដាក់លក់) ដែលនៅផ្នែកខាងលើនៃខាងស្តាំគេហទំព័រ។</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/post/post/free_post_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" ||  loadLanguage == undefined ?
                                <div>
                                    <p className="title">2. Please select category for you post product items.  Example: If Electronics and after Television </p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/select-main-sub.png"/>
                                    </div>

                                </div>
                                :
                                <div>
                                    <p className="title">២. ជ្រើសរើសប្រភេទទៅតាមផលិតផលដែលអ្នកដាក់លក់។ ឧទាហរណ៍: ប្រសិនជាអ្នកចង់ដាក់លក់ឡាន មើលការណែនាំដូចខាងក្រោម៖</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/select-main-sub.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" ||  loadLanguage == undefined ?
                                <div>
                                    <p className="title">3. Please input all field and click on image thumnail product photos</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/fill-product.png"/>
                                    </div>

                                </div>
                                :
                                <div>
                                    <p className="title">៣. សូមបំពេញព័ត៏មានទំនិញរបស់លោគអ្នកអោយបានត្រឺមត្រូវ​​ព្រមទាំងរូបភាព ៖</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/fill-product.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" ||  loadLanguage == undefined ?
                                <div>
                                    <p className="title">2. Add your phone for contact and click save</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/save-product.png"/>
                                    </div>

                                </div>
                                :
                                <div>
                                    <p className="title">៤. សូមបំពេញព័ត៏មាន​​​​​​​អាសយដ្ឋានរបស់ លោគអ្នកអោយបានត្រឺមត្រូវ​​ហើយចុច  ​Save ៖</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/save-product.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>

            </div>
        )
    }
}