import React from 'react';
import {Link} from 'react-router';
import {Row, Col} from 'react-bootstrap';
import {loadLanguage} from './../../../localstorages/local_storage';

export default class SuccessUpdateNewPassword extends React.Component {
    render(){
        return(
            <div>
                <br/><br/>
                <Row>
                    <Col xs={12} sm={12} md={2} lg={2}></Col>
                    <Col xs={12} sm={12} md={8} lg={8}>
                        <div style={{backgroundColor:'#80CBC4', border:'groove'}}>
                            <br/><br/><br/><br/><br/>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <span style={{fontSize:'14pt'}}>
                                {
                                    loadLanguage() == "en" ||  loadLanguage() == undefined ? "Successfully updated your new password. ":"ទទូលបានជោគជ័យក្នុងការប្តូរលេខសម្ងាត់។"
                                }
                            </span>
                            <Link to="/sign-in" style={{fontSize:'14pt', color:'blue'}}><b>
                                {
                                    loadLanguage() == "en" ||  loadLanguage() == undefined ? "Click Here to Login again" : "ចូលគណនី "
                                } </b></Link>
                            <br/><br/><br/><br/>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2}></Col>
                </Row>
                <br/><br/><br/><br/><br/>
            </div>
        )
    }
}