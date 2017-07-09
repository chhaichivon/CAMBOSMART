import React from 'react';
import { loadLanguage } from './../../../../localstorages/local_storage';
import './../help.css';
export  default class Map extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == 'en' ||  loadLanguage() == undefined ?
                                <div>
                                    <p className="head-title">I. How to Set Map</p>
                                    <p className="title">1. Click on Tap Set Map</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/map/save-map.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="head-title">I. របៀបដាក់ទីតាំងលើ​ Map</p>
                                    <p className="title">១. ចុចលើ Marker ដើម្បីកំណត់ទីតាំង</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/map/map_kh.png"/>
                                    </div>
                                </div>

                        }
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="help-content">
                        {
                            loadLanguage() == 'en' ||  loadLanguage() == undefined ?
                                <div>
                                    <p className="title">2. Click on icon map (color red) and move anywhere that you want to set the location and then click on button save</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/map/after-save-map.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="title">២. ជ្រើសរើសទីតាំងរូចហើយដាក់ Marker រួូចចុចលើពាក្យរក្សាទុក</p>
                                    <div className="img-help_login">
                                        <img src="/icon/help/map/after-save-map.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}