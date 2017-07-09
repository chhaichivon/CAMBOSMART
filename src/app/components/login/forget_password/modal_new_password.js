import React, { PropTypes } from "react";
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from '../../../../../node_modules/redux-form';
import { Modal, Row, Col } from '../../../../../node_modules/react-bootstrap';
import FormField from './../../shared_component/redux_form_fields/form_field';
import FormSubmit from './../../shared_component/redux_form_fields/form_submit';
import { actionModalNewPassword, actionSetNewPassword, actionModalSignIn } from './../../../actions/user';
import './../login.css';

class ModalNewPassword extends React.Component{
    constructor(props){
        super(props);
        this.closeNewPassword = this.closeNewPassword.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    componentWillReceiveProps(data) {
        if(data.userSetPwd.code == 200){
            this.props.actionModalNewPassword(false);
            this.props.actionModalSignIn(true);
        }else if(data.userSetPwd.code == 109 || data.userSetPwd.code == 111){
            if(document.getElementById("error_msg_new_password")) {
                document.getElementById("error_msg_new_password").innerHTML = 'This Phone Number does not register with smartcambo.com yet.'
            }
        }else if(data.userSetPwd.code == 401){
            if(document.getElementById("error_msg_new_password")) {
                document.getElementById("error_msg_new_password").innerHTML = 'This Email does not register with smartcambo.com yet.'
            }
        }
    }

    closeNewPassword(){
        this.props.actionModalNewPassword(false);
        if(document.getElementById("error_msg_new_password")) {
            document.getElementById("error_msg_new_password").innerHTML = '';
        }
    }

    formSubmit(values){
        let new_password = {
            password: values.password,
            verifiedCode: localStorage.getItem('verifiedCode')
        };
        this.props.actionSetNewPassword(new_password);
    }

    render(){
        const { handleSubmit,error, invalid, submitting } = this.props;
        return(
            <div>
                <Modal keyboard={false} backdrop="static" show={this.props.modal.show} onHide={this.closeNewPassword}>
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
                                                <center>
                                                    <p>Please enter code that we just send to you.</p>
                                                </center>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12}>
                                                <center>
                                                    <p>If you do not receive verified code within 5 minutes,</p>
                                                </center>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12}>
                                                <center>
                                                    <span>Please click on <Link to="/" style={{"textDecoration":"underline","fontWeight":'bold'}}>Resend Code</Link></span>
                                                </center>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={3} xs={3}>
                                                <div>
                                                    <p id="error_msg_new_password" style={{ color: 'red'}}></p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12}>
                                                <Field name="verifiedCode" type="text" component={FormField} label="Verified Code" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12}>
                                                <Field name="password" type="password" component={FormField} label="New Password" icon="fa fa-key" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12}>
                                                <Field name="confirmPassword" type="password" component={FormField} label="Confirm Password" icon="fa fa-key" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12}>
                                                <FormSubmit error={error} invalid={invalid} submitting={submitting} label="SUBMIT"/>
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

const FormNewPassword = reduxForm({
    form: 'form_new_password',
    validate: function (values) {
        let regex_code=/^\d{6}$/;
        const errors = {};
        if(!regex_code.test(values.verifiedCode)){
            errors.verifiedCode="Verified code is required 6 digits !";
        }
        if(values.verifiedCode != localStorage.getItem('verifiedCode')){
            errors.verifiedCode="Verified code is not correct!";
        }
        if (!values.password ||  values.password.length < 6) {
            errors.password = 'Password is required at least 6 characters !'
        }
        if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Password did not match !';
        }
        return errors
    }
})(ModalNewPassword);


function mapStateToProps(state) {
    let modal;
    if(state.reducerModalNewPassword.modal){
        modal=state.reducerModalNewPassword.modal
    }else{
        modal={
            show:false
        }
    }
    return {
        modal: modal,
        userSetPwd: state.userResetPwd,
        initialValues: {
            password: '',
            confirmPassword: ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({actionModalNewPassword, actionSetNewPassword, actionModalSignIn}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormNewPassword);