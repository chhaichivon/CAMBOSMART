import React from 'react';
import { loadLanguage } from './../../../../localstorages/local_storage';
export default class StoreBanner extends React.Component{

    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                <div>
                                    <p className="head-title">I.Store Setting (add banner)</p>
                                    <p className="title">Click on 01 (store setting) and after click on 02 and save</p>
                                    <div className="img-help">
                                        <img src="/icon/help/store/store1.png"/>
                                    </div>
                                    <br/>
                                    <div className="img-help">
                                        <img src="/icon/help/store/merchant02.png"/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="img-help">
                                        <img src="/icon/help/store/merchant4.png"/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="img-help">
                                        <img src="/icon/help/store/merhant3.png"/>
                                    </div>
                                    <br/>
                                    <br/>
                                </div>
                                :
                                <div>
                                    <p className="head-title">I.ការដាក់បាដា(Store Setting)</p>
                                    <p className="title">1.ចុចលើថេបលេខ 01(ដាក់បាដា) បន្ជាប់មក ចុចលេខ 02 ហើយចុលើពាក្យរក្សាទុក</p>
                                    <div className="img-help">
                                        <img src="/icon/help/store/store1.png"/>
                                    </div>
                                    <br/>
                                    <div className="img-help">
                                        <img src="/icon/help/store/merchant02.png"/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="img-help">
                                        <img src="/icon/help/store/merchant4.png"/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="img-help">
                                        <img src="/icon/help/store/merhant3.png"/>
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