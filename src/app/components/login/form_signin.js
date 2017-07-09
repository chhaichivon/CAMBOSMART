import React from 'react';
import { Row, Col, FormGroup, Checkbox} from './../../../../node_modules/react-bootstrap';
import './login.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from '../../../../node_modules/redux-form';
import FormField from './../shared_component/redux_form_fields/form_field';
import FormSubmit from './../shared_component/redux_form_fields/form_submit';
import FormSocial from './../shared_component/redux_form_fields/form_social';
import SweetAlert from 'sweetalert-react';
import './../../../../node_modules/sweetalert/dist/sweetalert.css';
import { userSingInAction, userLogOut } from './../../actions/user';
import { saveState, clearState, loadLanguage } from './../../localstorages/local_storage';

class FormSignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            submit: false,
            show: false
        };
        this.formSubmit = this.formSubmit.bind(this);
    }
    componentWillReceiveProps(data) {
        /*======================Check User　Type=========================*/
        if (data.data.user != null){
            /*if (data.data.user.userType.toLocaleLowerCase() == 'normal'){
                saveState(data.data);
                location.href = '/normal';
            }
            if (data.data.user.userType.toLocaleLowerCase() == 'merchant'){
                saveState(data.data);
                location.href = '/merchant';
            }*/
            if (data.data.user.userType.toLocaleLowerCase() == 'admin'){
                saveState(data.data);
                this.setState({ show: true});
                this.props.userLogOut(data.data.token);
                setTimeout(function () {
                    clearState();
                },1000)
            }else{
                saveState(data.data);
                location.href = data.data.user.userType;
            }
        }
        //User login not active guide go to verify code
        if(data.data.code == 200){

        }else if(data.data.code == 111 ){
            clearState();
            location.href = '/verify-code';
        }else{
            if(data.data.message != undefined){
                this.setState({submit: true, label: 'SIGN IN'});
                if (document.getElementById("error_message")) {
                    document.getElementById("error_message").innerHTML = data.data.message;
                }
                this.setState({submit: false});
            }
        }
    }
    formSubmit(values) {
        let regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regex_phone = /^0\d{8,9}$/;
        this.setState({submit: true});
        /*======================By Action=========================*/
        if (regex_email.test(values.emailOrPhone)) {
            const user = {
                email: values.emailOrPhone,
                password: values.password,
                phone: ""
            };
            this.props.userSingInAction(user);
        }
        if (regex_phone.test(values.emailOrPhone)) {
            const user = {
                email: "",
                password: values.password,
                phone: values.emailOrPhone.replace(values.emailOrPhone.charAt(0), "+855")
            };
            this.props.userSingInAction(user);
        }
    }
    render(){
        const { handleSubmit,error, invalid, submitting } = this.props;
        if(!invalid){
            setTimeout(() => {this.setState({submit: false})}, 500);
        }
        return(
            <div>
                <form onSubmit={handleSubmit(this.formSubmit)} className="wrap-full-form">
                   <Row className="wrap-row-form-login">
                       <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                           <p className="show-error" id="error_message">
                           </p>
                       </Col>
                   </Row>
                   <Row className="wrap-row-form-login">
                       <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                           <Field name="emailOrPhone" type="text" component={FormField} label={loadLanguage() == "en" || loadLanguage() == undefined ? "Phone or Email" : "ទូរស័ព្ទ​ ឬ​ អ៊ីម៉ែល"} icon="fa fa-phone"/>
                       </Col>
                   </Row>
                   <Row>
                       <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                           <Field name="password" type="password" component={FormField} label={loadLanguage() == "en" || loadLanguage() == undefined ? "Password" : "លេខសម្ងាត់"}icon="fa fa-key"/>
                       </Col>
                   </Row>
                   <Row>
                       <Col sm={6} xs={6} md={6} lg={6} className="login-page">
                           <FormGroup>
                               <Checkbox inline>{loadLanguage() == "en" || loadLanguage() == undefined ? "Remember" : "ចងចាំខ្ញុំ់"}</Checkbox>
                           </FormGroup>
                       </Col>
                       <Col sm={6} xs={6} md={6} lg={6} className="login-page">
                           <Link to="/forgetpassword"><p className="forget-password">{loadLanguage() == "en" || loadLanguage() == undefined ? "Forget Password?" : "ភ្លេចពាក្យសំងាត់?"}</p></Link>
                       </Col>
                   </Row>
                   <Row>
                       <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                           <FormSubmit error={error} invalid={invalid || this.state.submit} submitting={submitting} label={this.state.submit ?  loadLanguage() == "en" || loadLanguage() == undefined ? "Processing...": "ដំណើរការ..."  :  loadLanguage() == "en" || loadLanguage() == undefined ? "SIGN IN" : "ចូលគណនី "}/>
                       </Col>
                   </Row>
               </form>
                <Row className="wrap-row-form-login">
                    <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                        <fieldset>
                            <legend className="legend_style_sign_in">{loadLanguage() == "en" || loadLanguage() == undefined ? "OR LOGIN WITH" : "ចូលគណនីតាម"}</legend>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} xs={12} md={12} lg={12} className="login-page">
                        <span className="cambo-login-wrap-link-social"><FormSocial fb={"Login with Facebook"} g={"Login with Google"}/></span>
                    </Col>
                </Row>
                <SweetAlert
                    show={this.state.show}
                    type="error"
                    title="User Permission !!"
                    text="This user not allow sign in here !"
                    confirmButtonColor="#ff5a00"
                    onConfirm={() => setTimeout(function(){window.location.assign('/')}.bind(this), 10)}
                />
            </div>
        )
    }
}
const FormSignInUser = reduxForm({
    form: 'form_sign_in',
    validate: (values) => {
        let regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regex_phone = /^0\d{8,9}$/;

        const errors = {};
        if (!regex_email.test(values.emailOrPhone) && !regex_phone.test(values.emailOrPhone)) {
            errors.emailOrPhone = 'Phone number or Email is invalid !'
        }
        if(!values.password ||  values.password.length < 6){
            errors.password = 'Password is required least 6 characters !'
        }
        return errors
    }
})(FormSignIn);

function mapStateToProps(state) {
    return {
        data : state.userSignIn
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({userSingInAction, userLogOut},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(FormSignInUser) ;