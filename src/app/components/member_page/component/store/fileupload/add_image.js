import React from 'react';
import axios from 'axios';
import FileUpload from './file_upload';
import './style.css';
import './prism.css';
import {API_ENDPOINT, AUTH_CONFIG} from './../../../../../api/headers';
import {dataURItoFile, bannerCompressor} from './../../../../../utils/image_file_handling';
import {loadState, saveStoreInfo, loadStoreInfo} from './../../../../../localstorages/local_storage';

export default class AddImage extends React.Component {
    constructor() {
        super();
        this.state = {
            dataURI: '',
            message: ''
        };
        console.log(JSON.stringify(loadStoreInfo()));
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload (data) {
        if(data.size == 1){
            this.setState({
                dataURI: '',
                message: "File was too large, please try another !!"
            });
        }else if(data.size == 0){
            this.setState({
                dataURI: '',
                message: "File was too small, please try another !!"
            });
        }else if(data.size == -1){
            this.setState({
                dataURI: '',
                message: "File did not match any type of (jpeg, jpg, png, gif) !!"
            });
        }else {
            this.setState({
                dataURI: data.img,
                message: ""
            });
            bannerCompressor(data.img, data.size < 1024 ? data.size < 100 ? 0.5 : 0.95 : 0.8);
            setTimeout(() => {
                let formData = new FormData();
                formData.append('file', dataURItoFile(bannerCompressor(data.img, data.size < 1024 ? data.size < 100 ? 0.5 : 0.95 : 0.8), data.name.toLowerCase().concat('.jpg')));
                axios.post(API_ENDPOINT + `member/${loadState() != undefined ? loadState().user.userId : ''}/store/upload-banner`, formData, AUTH_CONFIG(loadState() != undefined ? loadState().token : ''))
                    .then(function (res) {
                        let store = loadStoreInfo();
                        store.storeBanner = res.data.data.banner;
                        saveStoreInfo(store);
                        console.log(res.data);
                    })
                    .catch(function (err) {
                        if(err.response.status == 401){
                            location.href = "/sign-in";
                        }else if(err.response.status == 500) {
                            location.href = "/server/error";
                        }
                    });
            }, 500);
        }
    }

    render() {
        return (
            <div className="row">
                <div>
                    <p style={{marginLeft: '8px', color: 'red'}}>{this.state.message}</p>
                </div>
                <div encType="multipart/form-data">
                    <div className="avatar-photo store-banner-add store-banner">
                        <FileUpload handleFileChange={this.handleUpload} />
                        <div className="avatar-edit store-banner-add store-banner">
                            <i className="fa fa-camera">
                            </i>
                        </div>
                        {this.state.dataURI != "" ?
                            <img src={this.state.dataURI} style={{background: '#232f3e'}}/>
                            :
                            <img src={loadStoreInfo() != undefined ? loadStoreInfo().storeBanner != undefined ? `/images/stores/${loadStoreInfo().storeBanner}` : "" : ""} style={{background: '#232f3e'}}/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
