import React from 'react';
import axios from 'axios';
import {Row, Col, Alert, Thumbnail } from 'react-bootstrap';
import FileUpload from './file_upload';
import './style.css';
import './prism.css';
import { API_ENDPOINT, AUTH_CONFIG } from './../../../../../api/headers';
import { loadState } from './../../../../../localstorages/local_storage';

export default class ImageUpload extends React.Component {
    constructor() {
        super();
        this.state = {
            dataURI: '',
            error: false,
            message: ''
        };
        this.handleError = this.handleError .bind(this);
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    }

    handleError(error){
        this.setState({error: true, message: error});
    }

    handleAlertDismiss() {
        this.setState({error: false});
    }

    setDateURI (data) {
        this.setState({dataURI: data.dataURI});
        /*===============Try to upload================*/
        let formData = new FormData();
        formData.append('file', data.file);
        axios.post(API_ENDPOINT + `admin/advertiser/${this.props.id}/banner`, formData, AUTH_CONFIG(loadState() != undefined ? loadState().token : ''))
            .then(function (res) {
                console.log(res.data.data);
            })
            .catch(function (err) {
                if(err.response.status == 401){
                    location.href = "/cambo-admin";
                }else if(err.response.status == 500) {
                    location.href = "/server/error";
                }
            });
    }


    render() {
        return (
            <div className="row">
                <Row>
                    <Col lg={12}>
                        {this.state.error ?
                            <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} style={{width: '936px'}}>
                                <h4>Oh snap! You got an error!</h4>
                                <p>{this.state.message}</p>
                            </Alert>
                            :
                            null
                        }
                    </Col>
                </Row>
                <div encType="multipart/form-data">
                    <div className="avatar-photo advertiser-banner">
                        <FileUpload handleFileChange={this.setDateURI.bind(this)} handleError={this.handleError} />
                        <div className="avatar-edit advertiser-banner">
                            <i className="fa fa-camera">
                            </i>
                        </div>
                        {this.props.default != undefined && this.props.default != "" && this.state.dataURI == "" ?
                            <Thumbnail href="#" alt="171x180" src={`/images/advertisements/${this.props.default}`} style={{background: '#232f3e'}} />
                            :
                            <Thumbnail href="#" alt="171x180" src={this.state.dataURI} style={{background: '#232f3e'}}/>
                        }

                    </div>
                </div>
            </div>
        );
    }
}
