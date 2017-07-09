import React from 'react';
import { loadLanguage } from './../../../../localstorages/local_storage';
export default class StoreInfo extends React.Component{

    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                <div>
                                    <p className="head-title">I.Store Setting</p>
                                    <p className="">- Click on (store setting)</p>
                                    <p className="">* fill StoreName</p>
                                    <p className="">* fill About</p>
                                    <p className="">- Click Save</p>
                                    <div className="img-help">
                                        <img src="/icon/help/store/store1.jpg"/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="img-help">
                                        <img src="/icon/help/store/merhant3.jpg"/>
                                    </div>
                                    <br/>
                                    <div className="img-help">
                                        <img src="/icon/help/store/merchant4.jpg"/>
                                    </div>
                                    <br/>

                                    <br/>
                                </div>
                                :
                                <div>
                                    <p className="head-title">I.ការបំពេញពត៏មានរបស់ហាង</p>
                                    <p className="">- ចុចលើថេប (ស្លាកសញ្ញាហាង)</p>
                                    <p className="">* បំពេញឈ្មោះហាងដែលលោកអ្នកចូលចិត្ត</p>
                                    <p className="">* បំពេញពត៏មាន អំពីហាងរបស់លោកអ្នក </p>
                                    <p className="">- បន្ជាប់មក ចុចរក្សាទុកដើម្បីធ្វើការរក្សាទុកពត៏មានដែលលោកអ្នកបានបំពេញ</p>
                                    <div className="img-help">
                                        <img src="/icon/help/store/store1.jpg"/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="img-help">
                                        <img src="/icon/help/store/merhant3.jpg"/>
                                    </div>
                                    <br/>
                                    <div className="img-help">
                                        <img src="/icon/help/store/merchant4.jpg"/>
                                    </div>
                                    <br/>
                                    <br/>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}