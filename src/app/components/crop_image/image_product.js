import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import AvatarCropper from "react-avatar-cropper";
import FileUpload from './file_upload';
import './style.css';
import './prism.css';
import { saveState, loadState } from './../../localstorages/local_storage';
import ReactDOM from 'react-dom';


class ImageProduct extends React.Component {

    constructor() {
        super();
        this.state = {
           dataURI:''
        };
    }

    setDateURI (dataURI) {
        this.setState({
            dataURI:dataURI
        });

       this.props.setDateURI(this.state.dataURI);
    }



    render() {
        return (
            <div className="row">
                <form encType="multipart/form-data">
                    <div className="avatar-photo">
                        <FileUpload handleFileChange={this.setDateURI.bind(this)} />
                        <div className="avatar-edit">
                          <i className="fa fa-picture-o"></i>
                        </div>
                        <img  src={this.state.dataURI}  style={{height:"168px",width:"168px"}}/>
                    </div>
                </form>
            </div>
        );
    }
}


export default connect()(ImageProduct)