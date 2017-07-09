import React from 'react';
import {Link} from 'react-router';
import {Panel, Col, Row} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionSendMailOrPhone} from '../../../actions/user';
import FormField from './../../shared_component/redux_form_fields/form_field';
import FormSubmit from './../../shared_component/redux_form_fields/form_submit';
import {loadLanguage} from './../../../localstorages/local_storage';
import SweetAlert from 'sweetalert-react';
import './../../../../../node_modules/sweetalert/dist/sweetalert.css';

class ForgetPassword extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorEmail : false,
            errorPhone : false,
            isProcessing : false
        };
        this.formSubmit = this.formSubmit.bind(this);
    }

    componentWillReceiveProps(data) {
        if(data.userForgetPwd.code == 109 || data.userForgetPwd.code == 111){
            this.setState({errorPhone:true});
        }
        if(data.userForgetPwd.code == 401){
            this.setState({errorEmail:true});
        }
    }

    formSubmit(values){
        this.setState({isProcessing : true});
        var regex_phone=/^[0-9]{9,10}$/;
        if(regex_phone.test(values.contacts)){
            var numbers="+855"+values.contacts.substring(1);
            localStorage.setItem("phoneNumber", numbers);
            this.props.actionSendMailOrPhone({
                email: '',
                phone: numbers
            });
        }else{
            localStorage.setItem("email",values.contacts);
            this.props.actionSendMailOrPhone({
                email: values.contacts,
                phone: ''
            });
        }
    }

    render(){
        const {handleSubmit, submitting, invalid, error} = this.props;
        return(
            <div className="container-fluid user-nav">
                <div className="container">
                    <br/><br/>
                    <Row>
                        <Col xs={2} sm={2} md={2} lg={2}></Col>
                        <Col xs={8} sm={8} md={8} lg={8}>
                            <Panel header='Forget Password?'>
                                <Row>
                                    <Col xs={2} sm={2} md={2} lg={2}></Col>
                                    <Col xs={8} sm={8} md={8} lg={8}>
                                        <h5>{ loadLanguage() == "en" ||  loadLanguage() ==  undefined ? "Reset Password or" : "ប្តូលេខកូដ ឬ" } <Link to="/sign-up" style={{fontWeight:"bold"}}>{ loadLanguage() == "en" ||  loadLanguage() == undefined ? "Sign Up":"ចុះឈ្មោះ " }</Link></h5>
                                        <br/>
                                        {loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                                <p>
                                                    Enter your phone number or email address and we'll send you a verification
                                                    code.
                                                    <b>This process may take a few minutes</b>, If you still haven’t received
                                                    your verification code or activation email,
                                                    enter your phone number or email below and we’ll send you another.
                                                </p>
                                                :
                                                <p>
                                                    សូមបញ្ចូលលេខទូរសព្ទ័ឬអ៊ីម៉េលរបស់លោកអ្នក។យើងខ្ញុំនិងធ្វើការផ្ញើលេខកូដសំងាត់ទៅកាន់អ្នក។
                                                    &nbsp;  <b>រង់ចាំប្រហែល២ឬ៣នាទី។</b>ប្រសិនបើលោកអ្នកមិនបានទទួលលេខកូដសំងាត់តាមរយៈសារទូរសព្ទ័ឬអ៊ីម៉េល សូមធ្វើការបញ្ចូលលេខទូរសព្ទ័ឬអ៊ីម៉េលរបស់លោកអ្នកម្តងទៀត រួចចុចបញ្ជូន។
                                                </p>
                                        }
                                        <br/>
                                        <form onSubmit={handleSubmit(this.formSubmit)}>
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-lg-9">
                                                    <Field name="contacts" type="text" component={FormField}
                                                           label={ loadLanguage() == "en" ||  loadLanguage() ==  undefined  ? "Phone/Email" : "ទូរស័ព្ទ​ ឬ​  អ៊ីម៉ែល"} icon="fa fa-mobile"/>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-lg-3">
                                                    <FormSubmit error={error} invalid={invalid||this.state.isProcessing} submitting={submitting} label={this.state.isProcessing ? "Sending" : "SEND"}/>
                                                </div>
                                            </div>
                                        </form>
                                        <SweetAlert
                                            show={this.state.errorPhone}
                                            type="error"
                                            title="Something went wrong"
                                            text="This Phone Number does not register with Cambosmart.com yet."
                                            confirmButtonColor="#ff5a00"
                                            onConfirm={() => { location.href ="/forgetpassword"; }}
                                        />
                                        <SweetAlert
                                            show={this.state.errorEmail}
                                            type="error"
                                            title="Something went wrong"
                                            text="This Email does not register with Cambosmart.com yet."
                                            confirmButtonColor="#ff5a00"
                                            onConfirm={() => { location.href ="/forgetpassword"; }}
                                        />
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

ForgetPassword = reduxForm({
    form: 'user_forget_password',
    validate: function(values){
        var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regex_phone=/^[0-9]{9,10}$/;
        const errors ={ };
        if(!regex_email.test(values.contacts) && !regex_phone.test(values.contacts)){
            errors.contacts = 'Phone number or Email is invalid'
        }
        return errors
    }
})(ForgetPassword);

function mapStateToProps(state){
    if(state.userForgetPwd.user != undefined) {
        localStorage.setItem('verifiedCode', state.userForgetPwd.user.verifiedCode);
        window.location.assign('/setnewpassword');
    }
    return ({
        userForgetPwd: state.userForgetPwd
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({actionSendMailOrPhone},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword)