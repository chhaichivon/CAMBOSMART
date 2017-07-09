import React, { PropTypes } from "react";
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from '../../../../../node_modules/redux-form';
import { Modal, Row, Col } from '../../../../../node_modules/react-bootstrap';
import FormField from './../../shared_component/redux_form_fields/form_field';
import FormSubmit from './../../shared_component/redux_form_fields/form_submit';

import { actionModalForgetPassword, actionModalNewPassword, actionModalSignUp, actionSendMailOrPhone } from './../../../actions/user';

class ModalForgetPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            processing: false
        };
        this.closeForgetPassword = this.closeForgetPassword.bind(this);
        this.openSignUp = this.openSignUp.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    componentWillReceiveProps(data) {
        //this.setState({processing: false})
        if(data.userForgetPwd.code == 200){
            localStorage.setItem('verifiedCode', data.userForgetPwd.user.verifiedCode);
            this.props.actionModalForgetPassword(false);
            this.props.actionModalNewPassword(true);
        }else if(data.userForgetPwd.code == 109 || data.userForgetPwd.code == 111){
            if(document.getElementById("error_msg_forget_password")) {
                document.getElementById("error_msg_forget_password").innerHTML = 'This Phone Number does not register with smartcambo.com yet.'
            }
        }else if(data.userForgetPwd.code == 401){
            if(document.getElementById("error_msg_forget_password")) {
                document.getElementById("error_msg_forget_password").innerHTML = 'This Email does not register with smartcambo.com yet.'
            }
        }
    }

    openSignUp(){
        this.props.actionModalForgetPassword(false);
        this.props.actionModalSignUp(true);
    }

    closeForgetPassword(){
        this.props.actionModalForgetPassword(false);
        if(document.getElementById("error_msg_forget_password")) {
            document.getElementById("error_msg_forget_password").innerHTML = '';
        }
    }

    formSubmit(values) {
        this.setState({processing: true});
        let regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regex_phone = /^0\d{8,9}$/;
        let contact = {};
        if (regex_email.test(values.emailOrPhone)){
            contact={
                email: values.emailOrPhone,
                phone:""
            };
        }else if (regex_phone.test(values.emailOrPhone)){
            contact={
                email: "",
                phone:values.emailOrPhone.replace(values.emailOrPhone.charAt(0),"+855")
            };
        }
        this.props.actionSendMailOrPhone(contact);
    }

    render(){
        const { handleSubmit,error, invalid, submitting } = this.props;
        return(
            <div>
                <Modal keyboard={false} backdrop="static" show={this.props.modal.show} onHide={this.closeForgetPassword}>
                    <Modal.Header closeButton>
                        <Modal.Title><center><img src="/icon/cambo-smart3.png" /></center></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <Row>
                                <Col xs={12} sm={12}>
                                    <form onSubmit={handleSubmit(this.formSubmit)}>
                                        <Row>
                                            <Col xs={12} sm={12}>
                                                <label style={{ fontSize:"14px"}}>Reset password or <Link to="/" onClick={this.openSignUp} ><em>Sign up</em></Link></label>
                                                <br/>
                                                <p>
                                                    Enter your phone number or email address and we'll send you a verify code.
                                                    This process may take a few minutes, If you still haven’t received your verified code or activation email,
                                                    enter your phone number or email below and we’ll send you another.
                                                </p>
                                                <br/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12} xs={12}>
                                                <div>
                                                    <p id="error_msg_forget_password" style={{ color: 'red'}}></p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12}>
                                                <Field name="emailOrPhone" type="text" component={FormField} label="Phone or Email" icon="fa fa-phone"/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12}>
                                                <center>{this.state.processing?<img src="icon/loader.gif"/> :null}<br/></center> <br/>
                                                <FormSubmit error={error} invalid={invalid||this.state.processing} submitting={submitting} label="SUBMIT"/>
                                            </Col>
                                        </Row>
                                    </form>
                                </Col>
                            </Row>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

const FormForgetPassword = reduxForm({
    form: 'form_forget_password',
    validate: function (values) {
        let regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regex_phone = /^0\d{8,9}$/;
        const errors = {};
        if (!regex_email.test(values.emailOrPhone) && !regex_phone.test(values.emailOrPhone)) {
            errors.emailOrPhone = 'Phone number or Email is invalid !'
        }
        return errors;
    }
})(ModalForgetPassword);

function mapStateToProps(state) {
    let modal;
    if(state.reducerModalForgetPassword.modal){
        modal=state.reducerModalForgetPassword.modal
    }else{
        modal={
            show:false
        }
    }
    return {
        modal: modal,
        userForgetPwd: state.userForgetPwd
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({actionModalForgetPassword, actionModalSignUp, actionSendMailOrPhone, actionModalNewPassword},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormForgetPassword);