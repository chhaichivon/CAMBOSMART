import React from 'react';
import { Panel, Button, Col, Row} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionSetNewPassword } from '../../../actions/user';
import FormField from './../../shared_component/redux_form_fields/form_field';
import FormSubmit from './../../shared_component/redux_form_fields/form_submit';
import { actionSendMailOrPhone } from '../../../actions/user';
import { loadLanguage } from './../../../localstorages/local_storage';

class SetNewPassword extends React.Component {
    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.state={
            isProcessing:false
        };
    }

    formSubmit(values){
        var new_password={
            password: values.password,
            verifiedCode: localStorage.getItem('verifiedCode')
        };
        this.props.actionSetNewPassword(new_password);
    }

    resendCode(value){
        this.setState({isProcessing:true});
        if(localStorage.getItem("phoneNumber") != undefined){
            let contact={
                email: '',
                phone: localStorage.getItem("phoneNumber")
            };
            this.props.actionSendMailOrPhone(contact);
        }
        if(localStorage.getItem("email") != undefined){
            let contact={
                email: localStorage.getItem("email"),
                phone: ''
            };
            this.props.actionSendMailOrPhone(contact);
        }
        let c=60;
        let id = setInterval(()=> {
            c--;
            if(c < 0) {
                if(document.getElementById("showWaitingTime")) {
                    document.getElementById("showWaitingTime").innerHTML = "";
                }
                clearInterval(id);
                this.setState({isProcessing: false});
            } else {
                if(document.getElementById("showWaitingTime")) {
                    document.getElementById("showWaitingTime").innerHTML ="Please wait for "+c+"s to send code again";
                }
            }
        }, 1000);
    }

    render(){
        const {handleSubmit, submitting, invalid} = this.props;
        return(
            <div className="container-fluid user-nav">
                <div className="container">
                    <br/><br/>
                    <Row>
                        <Col xs={2} sm={2} md={2} lg={2}></Col>
                        <Col xs={8} sm={8} md={8} lg={8}>
                            <Panel header="Set New Password">
                                <Row>
                                    <Col xs={2} sm={2} md={2} lg={2}></Col>
                                    <Col xs={8} sm={8} md={8} lg={8}>
                                        <center>
                                            <p>
                                                {
                                                    loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                            "Please enter code that we just send to you."
                                                        :
                                                            "សូមបញ្ចូលលេខកូដសម្ងាត់ដែលក្រុមការងារ Cambosmart ផ្ញើរទៅកាន់អ្នក។"
                                                }
                                            </p>
                                        </center>
                                        <center>
                                            <p>
                                                { loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                    "If you do not receive verified code within 5 minutes,"
                                                    :
                                                    "ប្រសិនបើលោកអ្នកមិនបានទទូលលេខកូដសម្ងាត់ក្នុងរយះពេល ៥ នាទីនោះទេ"
                                                }
                                            </p>
                                            <p>
                                                {
                                                    loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                        "Please click on Resend Code"
                                                        :
                                                        "សូមចុចផ្ញើលេខកូដម្តងទៀត"
                                                }
                                            </p>
                                        </center>

                                        <form onSubmit={handleSubmit(this.formSubmit)}>
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-lg-12">
                                                    <Field name="code" type="text" component={FormField} label={loadLanguage() == "en" ||  loadLanguage() == undefined ? "Verified Code":"លេខកូដ" } icon="fa fa-qrcode"/>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-lg-12">
                                                    <Field name="password" type="password" component={FormField} label={loadLanguage() == "en" ||  loadLanguage() == undefined ? "New Password" :"លេខសម្ងាត់" } icon="fa fa-key"/>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-lg-12">
                                                    <Field name="confirm_password" type="password" component={FormField} label={loadLanguage() == "en" ||  loadLanguage() == undefined ? "Confirm Password":"លេខសម្ងាត់ម្តងទៀត" }  icon="fa fa-key"/>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-lg-3">
                                                    <FormSubmit disabled={this.props.invalid||this.state.isProcessing} submitting={submitting} label={loadLanguage() == "en" ||  loadLanguage() == undefined ? "SEND":"ផ្ញើរ" } />
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-lg-5">
                                                    <Button href="" bsStyle="warning" disabled={this.state.isProcessing} onClick={this.resendCode.bind(this)}>{loadLanguage() == "en" ||  loadLanguage() == undefined ? "Resend Code":"ផ្ញើរម្តងទៀត" } </Button>
                                                    <div id="showWaitingTime" className="message"></div>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-lg-4"></div>
                                            </div>
                                        </form>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2}></Col>
                                </Row>
                            </Panel>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2}></Col>
                    </Row>
                </div>
                <br/><br/>
            </div>
        )
    }
}

SetNewPassword = reduxForm({
    form: 'user_reset_password',
    validate: function(values){
        var regex_code = /^[0-9]{4,8}$/;
        var regex_password = /^[a-zA-Z0-9]{6,40}$/;

        const errors ={ };
        if(!regex_code.test(values.code)){
            errors.code= 'verified code is invalid';
        }
        if(values.code != localStorage.getItem('verifiedCode')){
            errors.code= 'verified code is not correct';
        }
        if(!regex_password.test(values.password)){
            errors.password = 'password must be at least 6 characters';
        }
        if(values.password != values.confirm_password){
            errors.confirm_password = 'password and confirm password are not match';
        }
        return errors
    }
})(SetNewPassword);

function mapDispatchToProps(dispatch){
    return bindActionCreators({actionSetNewPassword, actionSendMailOrPhone},dispatch)
}

function mapStateToProps(state){
    if(state.userResetPwd.code ==200){
        window.location.assign('/success-update-password');
    }
    if(state.userForgetPwd.code == 200){
        localStorage.setItem("verifiedCode",state.userForgetPwd.user.verifiedCode);
    }
    return {
        user:state.userResetPwd,
        userForgetPwd: state.userForgetPwd
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetNewPassword)