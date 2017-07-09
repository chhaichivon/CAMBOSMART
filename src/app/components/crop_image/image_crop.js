import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import AvatarCropper from "react-avatar-cropper";
import FileUpload from './file_upload';
import './style.css';
import './prism.css';
import { saveState, loadState } from './../../localstorages/local_storage';
import { API_ENDPOINT, AUTH_CONFIG } from './../../api/headers';
import {compressor} from './compressor';

let data = loadState();

class ImageCrop extends React.Component {
    constructor() {
        super();
        this.state = {
            cropperOpen: false,
            img: null,
            size: 0,
            name: '',
            croppedImg: `/images/profiles/${data.user.profileImage}`
        };
        this.handleCrop = this.handleCrop.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleRequestHide = this.handleRequestHide.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
    }

    componentWillMount(){
        this.setState({
            croppedImg: `/images/profiles/${data.user.profileImage}`
        })
    }

    handleUploadFile(file){
        let formData = new FormData();
        formData.append('file', file);
        axios.post(API_ENDPOINT+'users/member/'+data.user.userId+'/upload-image', formData, AUTH_CONFIG(data.token))
            .then(function (res) {
                data.user.profileImage = res.data.data.profileImage;
                saveState(data);
                console.log("success upload",res)
            })
            .catch(function (err) {
                if(err.response.status == 200){
                    window.location.href = data.user.userType == "normal" ? "/member/profile" : "/merchant/profile";
                }else if(err.response.status == 401){
                    window.location.href = "/sign-in";
                }else {

                }
            });
    }

    handleFileChange (data) {
        console.log(data.size);
        if(data.size == 1){
            this.props.imageError("File was too large, please try another !!");
        }else if(data.size == 0){
            this.props.imageError("File was too small, please try another !!");
        }else if(data.size == -1){
            this.props.imageError("File did not match any type of (jpeg, jpg, png, gif) !!");
        }else {
            this.props.imageError("");
            this.setState({
                img: data.img,
                size: data.size,
                name: data.name,
                croppedImg: this.state.croppedImg,
                cropperOpen: true
            });
        }
    }

    /**======convert base64 to file============*/
    static dataURItoFile(dataUri, fileName){
        let arr = dataUri.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bString = atob(arr[1]), n = bString.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bString.charCodeAt(n);
        }
        return new File([u8arr], fileName, {type:mime});
    }

    /**======cropping image============*/
    handleCrop (dataURI) {
        compressor(dataURI, 0.8);
        setTimeout(() => {
            //console.log("Data : " + compressor(dataURI, this.state.size < 1024 ? this.state.size < 100 ? 0.5 : 0.95 : 0.8));
            this.handleUploadFile(ImageCrop.dataURItoFile(compressor(dataURI, this.state.size < 1024 ? this.state.size < 100 ? 0.5 : 0.95 : 0.8), this.state.name.toLowerCase().concat(".jpg")));
            this.setState({
                cropperOpen: false,
                img: null,
                size: 0,
                name: '',
                croppedImg: dataURI
            });
        }, 500)
    }

    handleRequestHide () {
        this.setState({
            cropperOpen: false
        });
    }

    render() {
        return (
            <div className="row">
                <form encType="multipart/form-data">
                    <div className="avatar-photo">
                        <FileUpload handleFileChange={this.handleFileChange} />
                        <div className="avatar-edit">
                            <span>CLICK HERE</span>
                            <i className="fa fa-camera"></i>
                        </div>
                        <img src={this.state.croppedImg} />
                    </div>
                    {this.state.cropperOpen &&
                    <AvatarCropper
                        onRequestHide={this.handleRequestHide}
                        cropperOpen={this.state.cropperOpen}
                        onCrop={this.handleCrop}
                        image={this.state.img}
                        width={168}
                        height={168}
                        closeButtonCopy="CLOSE"
                        cropButtonCopy="SAVE"
                    />
                    }
                </form>
            </div>
        );
    }
}

export default connect()(ImageCrop)
