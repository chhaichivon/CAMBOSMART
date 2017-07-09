import React from 'react';
import {connect} from 'react-redux';
import { Row, Col } from './../../../../node_modules/react-bootstrap';
import FormSocial from './../shared_component/redux_form_fields/form_social';
import { Field, reduxForm } from 'redux-form';
import FormField from './../shared_component/redux_form_fields/form_field';
import FormSubmit from './../shared_component/redux_form_fields/form_submit';
import AsyncFormField from './../shared_component/redux_form_fields/async_form_field';
import FormSelectField from './../shared_component/redux_form_fields/form_select_field';
import FormCheckbox from './../shared_component/redux_form_fields/form_checkbox';
import asyncValidate from './../shared_component/redux_form_validation/async_validation';
import { userSingUpAction  } from'./../../actions/user';
import { bindActionCreators } from 'redux';
import { saveState , loadLanguage} from './../../localstorages/local_storage';
import './login.css';




class FormSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            provinces: [
                'Phnom Penh', 'Banteay Meanchey',
                'Battambong', 'Kampong Cham', 'Kampong Chhnang',
                'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Koh Kong',
                'Kep', 'Kratie', 'Mondulkiri', 'Oddar Meanchey',
                'Pailin', 'Preah Sihanouk', 'Peah Vihear', 'Pursat',
                'Prey Veng', 'Ratanakiri', 'Siem Reap', 'Stung Treng', 'Svay Rieng',
                'Takeo', 'Tboung Khmum'
            ]
        };
        this.formSubmit = this.formSubmit.bind(this);
    }
    componentWillReceiveProps(data) {
        if(data.user.code == 200){
            saveState(data.user);
            location.href = '/verify-code';
        }else{
            if(data.user.message != undefined){
                this.setState({submit: false, label: 'SIGN UP'});
                if (document.getElementById("error_message")) {
                    document.getElementById("error_message").innerHTML = data.user.message;
                }
            }
        }
    }
    formSubmit(value) {
        this.setState({submit: true, label: 'Processing...'});
        let regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regex_phone = /^0\d{8,9}$/;

        sessionStorage.removeItem('phoneOremail');
        sessionStorage.setItem('phoneOremail',value.emailOrPhone);
        this.props.userSingUpAction(
            {
                userName: value.userName,
                email: regex_email.test(value.emailOrPhone) ? value.emailOrPhone : '',
                phone: regex_phone.test(value.emailOrPhone) ? value.emailOrPhone.replace(value.emailOrPhone.charAt(0), "+855") : '',
                city: value.location,
                password: value.password,
                socialId: ''
            }
        );
    }

    render() {
        const {handleSubmit, error, invalid, submitting} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.formSubmit)} className="wrap-full-form">
                    <Row>
                        <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                            <p className="show-error" id="error_message">
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                            <Field name="userName" type="text" component={FormField} label={loadLanguage() == "en" || loadLanguage() == undefined ? "Username (Ex: Cambosmart)" : "ឈ្មោះ (ខេមបូស្មាត)"} icon="fa fa-user"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                            <Field name="emailOrPhone" component={AsyncFormField} label={loadLanguage() == "en" || loadLanguage() == undefined ? "Phone or Email (Ex: 070900800)": "ទូរស័ព្ទ​ ឬ​ អ៊ីែមល"}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                            <Field name="location" type="select" component={FormSelectField} placeholder={loadLanguage() == "en" || loadLanguage() == undefined ? "Location" : "ទីតាំង" } values={this.state.provinces} icon="fa fa-map-marker"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                            <Field name="password" type="password" component={FormField} label={loadLanguage() == "en" || loadLanguage() == undefined ? "Password" : "លេខសម្ងាត់ "}
                                   icon="fa fa-key"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                            <Field name="confirmPassword" type="password" component={FormField} label={loadLanguage() == "en" || loadLanguage() == undefined ? "Confirm Password" : "បញ្ជាក់លេខសម្ងាត់ "}
                                   icon="fa fa-key"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                            <Field name="agreement" type="checkbox" component={FormCheckbox}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                            <FormSubmit error={error} invalid={invalid || this.state.submit} submitting={submitting} label={loadLanguage() == "en" || loadLanguage() == undefined ? "SIGN UP" : "ចុះឈ្មោះ"} />
                        </Col>
                    </Row>
                    <br/>
                </form>
                <Row>
                    <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                        <fieldset>
                            <legend className="legend_style_sign_in">{loadLanguage() == "en" || loadLanguage() == undefined ? "OR SIGNUP WITH" : "ចុះឈ្មោះតាម"}</legend>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                        <span className="cambo-login-wrap-link-social"><FormSocial fb={"SignUp with Facebook"} g={"SignUp with Google"}/></span>
                    </Col>
                </Row>
            </div>
        )
    }
}
const FormSignUpUser = reduxForm({
    form: 'form_sign_up',
    validate: (values) => {
        let regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regex_phone = /^0\d{8,9}$/;
        let regex_name = /^[a-zA-Z0-9_.-]*$/;
        const errors = {};
        if (!regex_name.test(values.userName) || values.userName.length < 2) {
            errors.userName = 'Please enter at least 2 characters without space !!'
        }
        if (!regex_email.test(values.emailOrPhone) && !regex_phone.test(values.emailOrPhone)) {
            errors.emailOrPhone = 'Email or Phone number is invalid (Ex: 070900800) !!'
        }
        if (!values.password || values.password.length < 6) {
            errors.password = 'Password is required least 6 characters !!'
        }
        if (values.password.length < 6) {
            errors.password = 'Please enter at least 6 characters !!'
        }
        if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Your password not match !!';
        }
        if (!(values.agreement)) {
            errors.agreement = "Please agree with policy !!";
        }
        if (values.location == undefined) {
            errors.location = "Please select your location !!";
        }
        return errors
    },
    asyncValidate,
    asyncBlurFields: ['userName', 'emailOrPhone']
})(FormSignUp);

function mapStateToProps(state) {
    return {
        user: state.userSignUp,
        initialValues: {
            userName: '',
            emailOrPhone: '',
            password: ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({userSingUpAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUpUser);