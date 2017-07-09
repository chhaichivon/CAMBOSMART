import React from 'react';
import FileUpload from './file_upload';
import './style.css';
import './prism.css';
import { loadState } from './../../../../../../localstorages/local_storage';
import {imageCompressor, dataURItoFile} from './../../../../../../utils/image_file_handling';

export default class Image4 extends React.Component {
    constructor() {
        super();
        this.state = {
            img: ''
        };
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleFileChange (data) {
        let message = "";
        let file = null;
        if (data.size == 1) {
            message = "File was too large, please try another !!";
            file = null;
        } else if (data.size == 0) {
            message = "File was too small, please try another !!";
            file = null;
        } else if (data.size == -1) {
            message = "File did not match any type of (jpeg, jpg, png, gif) !!";
            file = null;
        } else {
            this.setState({
                img: data.img
            });
            imageCompressor(data.img, data.size < 1024 ? data.size < 100 ? 0.5 : 0.95 : 0.8);
            setTimeout(() => {
                message = "";
                file = dataURItoFile(imageCompressor(data.img, data.size < 1024 ? data.size < 100 ? 0.5 : 0.95 : 0.8), data.name.toLowerCase().concat('.jpg'));
            }, 500);

        }
        setTimeout(() => {
            this.props.setFile4({file: file, message: message});
        }, 500);
    }

    /*setDateURI (dataURI) {
        const image = dataURItoFile(dataURI, loadState() != undefined ? loadState().user.userName.toLowerCase().concat("4.png") : "image4.png");
        if(image.size > 5242880){
            this.setState({
                dataURI: '',
                file: null,
                error: true
            });
        }else {
            this.setState({
                error: false,
                dataURI: dataURI,
                file: image
            });
        }
        this.props.setFile4(this.state.file, this.state.error);
    }*/

    render() {
        return (
            <div className="row">
                <div encType="multipart/form-data">
                    <div className="avatar-photo product">
                        <FileUpload handleFileChange={this.handleFileChange} />
                        <div className="avatar-edit product">
                            <i className="fa fa-camera">
                            </i>
                        </div>
                        <img src={this.state.img} style={{height:"120px",width:"120px"}}/>
                    </div>
                </div>
            </div>
        );
    }
}