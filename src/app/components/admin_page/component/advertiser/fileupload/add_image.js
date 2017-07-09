import React from 'react';
import {Row, Col, Alert, Thumbnail } from 'react-bootstrap';
import FileUpload from './file_upload';
import './style.css';
import './prism.css';

export default class AddImage extends React.Component {
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
        this.props.handleUploadFile(data.file);
    }


    render() {
        return (
            <div className="row">
                <Row>
                    <Col lg={12}>
                        {this.state.error ?
                            <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} style={{marginLeft: '-15px', width: '275px'}}>
                                <h4>Oh snap! You got an error!</h4>
                                <p>{this.state.message}</p>
                            </Alert>
                            :
                            null
                        }
                    </Col>
                </Row>
                <div encType="multipart/form-data">
                    <div className="avatar-photo advertiser-banner-add advertiser-banner">
                        <FileUpload handleFileChange={this.setDateURI.bind(this)} handleError={this.handleError} />
                        <div className="avatar-edit advertiser-banner-add advertiser-banner">
                            <i className="fa fa-camera">
                            </i>
                        </div>
                        {this.state.dataURI != "" ?
                            <Thumbnail src={this.state.dataURI} style={{background: '#232f3e'}}/>
                            :
                            <Thumbnail src="/icon/spinner/advertisement-banner.png" style={{background: '#232f3e'}}/>
                        }

                    </div>
                </div>
            </div>
        );
    }
}
