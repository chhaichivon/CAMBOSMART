import React from 'react';
import {connect} from 'react-redux';
import FormField from './../../components/shared_component/redux_form_fields/form_field';
import FormSubmit from './../../components/shared_component/redux_form_fields/form_submit';
import { Row, Col, Panel, Button } from '../../../../node_modules/react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import './login.css';
import { VERIFY_CODE, SEND_CODE_AGAIN } from './../../actions/user';
import { saveState ,loadLanguage } from './../../localstorages/local_storage';

class VerifyCode extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            disable: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        this.props.dispatch({
            type:VERIFY_CODE,
            code:values.numberCode
        })
    }
    sendCodeAgain(){
        this.setState({disable: true});
        var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regex_phone = /^0\d{8,9}$/;
        /* get phone or email */
        let emailOrPhone = sessionStorage.getItem('phoneOremail');
        this.props.dispatch(
            {
                type:SEND_CODE_AGAIN,
                emailOrPhone:{
                    email: regex_email.test( emailOrPhone) ?  emailOrPhone : '',
                    phone: regex_phone.test( emailOrPhone) ?  emailOrPhone.replace( emailOrPhone.charAt(0), "+855") : '',
                }
            }
        );
        let c=60;
        let t;
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
            if(c == 0){
                this.setState({disable: false});
            }
        }, 1000);

    }

    componentWillReceiveProps(data) {
        if(data.result.code == 200){
            if(data.result.user !== undefined){
                saveState(data.result);
                location.href = `/${data.result.user.userType}`;
            }
        }else {
            if (document.getElementById("error_verify_code_msg")) {
                document.getElementById("error_verify_code_msg").innerHTML = data.result.message == undefined ? '' : data.result.message;
            }
        }
    }
    render(){
        const { handleSubmit,error, invalid, submitting } = this.props;
        return (
            <div className="wrap-form-forgetpassword">
                <form onSubmit={handleSubmit(this.handleSubmit.bind(this))} >
                    <Row>
                        <Col mdOffset={3} xsOffset={3} lgOffset={3} xs={6} md={6} lg={6}>
                            <Panel header={<center><strong className="forget-password-title">{ loadLanguage() == "en" ||  loadLanguage() == undefined ?"CODE VERIFICATION":"បញ្ជាក់លេខកូដ" }</strong></center>} collapsible expanded={true}>
                                <Row>
                                    <Col xs={12} lg={12}>
                                        {
                                            loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                <center>
                                                    Please enter the code that we just send to you(<b>{sessionStorage.getItem("phoneOremail")}</b>).
                                                    <p>If you do not receive an SMS verification code within a minute,</p>
                                                    Please click <span style={{fontWeight: 'bold'}}>Send code again</span>.
                                                </center>
                                                :
                                                <center>
                                                    សូមបញ្ចូលលេខកូដដែលយើងខ្ញុំបានផ្ញើរទៅកាន់អ្នក។(<b>{sessionStorage.getItem("phoneOremail")}</b>)
                                                    <p>ប្រសិនបើលោកអ្នកមិនបានទទួលបានសារលេខកូដនោះទេ</p>
                                                    សូមចុច  <span style={{fontWeight: 'bold'}}>បញ្ជូនលេខកូដម្តងទៀត</span>.
                                                </center>
                                        }

                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <center><div id="error_verify_code_msg" style={{ color: 'red'}}></div></center>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} lg={12}>
                                        <Field name="numberCode" type="text" component={FormField} label={ loadLanguage() == "en" ||  loadLanguage() == undefined ? "Verified Code":"លេខកូដ" } icon="fa fa-keyboard-o"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} lg={6}>
                                        <FormSubmit error={error} invalid={invalid} submitting={submitting} label={ loadLanguage() == "en" ||  loadLanguage() == undefined ? "Submit":"បញ្ជូន" }/>
                                    </Col>
                                    <Col xs={6} lg={6}>
                                        <Button block bsStyle="warning" disabled={this.state.disable} onClick={this.sendCodeAgain.bind(this)}>{ loadLanguage() == "en" ||  loadLanguage() == undefined ? "Send code again":"បញ្ជូនលេខកូដម្តងទៀត" }</Button>
                                        <div id="showWaitingTime" className="message"></div>
                                    </Col>
                                </Row>
                            </Panel>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}
const FormVerifyCode = reduxForm({
    form: 'form_verify_code',
    validate: function (values) {
        var regex_code=/^\d{6}$/;
        const error={};
        if(!regex_code.test(values.numberCode)){
            error.numberCode="Please enter 6 numbers.";
        }
        return error
    }
})(VerifyCode);
function mapStateToProps(state) {
    return {
        result: state.verifyCode,
        acceptCode:state.sendCodeAgain,
    }
}

export default connect(mapStateToProps)(FormVerifyCode);