import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import AsyncFormField from './../../components/shared_component/redux_form_fields/async_form_field';
import FormSubmit from './../../components/shared_component/redux_form_fields/form_submit';
import { Row, Col, Panel } from '../../../../node_modules/react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import './login.css';
import { userVerifyCodeAction } from './../../actions/user';
import { VERIFY_SOCIAL_ACCOUNT_PHONE } from './../../actions/user';
import { loadSocialId, loadLanguage } from './../../localstorages/local_storage';

class AddPhone extends React.Component{
    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(value){
        this.props.dispatch({
            type:VERIFY_SOCIAL_ACCOUNT_PHONE,
            user: {
                firstName: '',
                lastName: '',
                email: '',
                phone: value.phone.replace(value.phone.charAt(0),"+855"),
                city: '',
                password: '',
                socialId: loadSocialId()
            }
        });
        /* save phone or email */
        sessionStorage.removeItem('phoneOremail');
        sessionStorage.setItem('phoneOremail',value.phone);
    }

    componentWillReceiveProps(data) {
        if(data.result.code == 200){
            window.location.assign('/verify-code');
        }else if(data.result.code == 112 || data.result.code == 109) {
            if (document.getElementById("error_verify_phone_msg")) {
                document.getElementById("error_verify_phone_msg").innerHTML = data.result.message;
            }
        }
    }

    render(){
        const { handleSubmit,error, invalid, submitting } = this.props;
        return (
            <div className="container-fluid wrap-form-forgetpassword">
                <form onSubmit={handleSubmit(this.formSubmit.bind(this))} >
                    <Row>
                        <Col mdOffset={3} lgOffset={3} xsOffset={3} md={6} lg={6} xs={6}>
                            <Panel header={<center><strong className="forget-password-title">{ loadLanguage() == "en" ||  loadLanguage() == undefined ? "PHONE VERIFICATION":"បញ្ជាក់លេខទូរស័ព្ទ"}</strong></center>} collapsible expanded={true}>
                                <Row>
                                    <Col xs={12}>
                                        <div id="error_verify_phone_msg" style={{ color: 'red'}}></div>
                                    </Col>
                                </Row>
                                &nbsp;
                                <Row>
                                    <Col xs={12}>
                                        <Field name="phone" type="text" component={AsyncFormField} label={ loadLanguage() == "en" ||  loadLanguage() == undefined ? "Phone Number (Ex: 070900800)" : "ទូរស័ព្ទ (Ex: 070900800)"} icon="fa fa-phone"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <FormSubmit error={error} invalid={invalid} submitting={submitting} label={ loadLanguage() == "en" ||  loadLanguage() == undefined ? "SUBMIT":"បញ្ចូន"}/>
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
const FormAddPhone = reduxForm({
    form: 'form_add_phone',
    validate: function (values) {
        let regex_phone = /^0[1-9]\d{7,8}$/;
        const error={};
        if(!regex_phone.test(values.phone)){
            error.phone = 'Phone number is invalid';
        }
        return error
    }
})(AddPhone);
function mapDispatchToProps(dispatch){
    return bindActionCreators({ userVerifyCodeAction },dispatch)
}
function mapStateToProps(state) {
    return {
        result: state.verifySocialAccountPhone
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormAddPhone);