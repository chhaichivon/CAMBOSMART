import React from 'react';
import FormField from './../../shared_component/redux_form_fields/form_field';
import FormSubmit from './../../shared_component/redux_form_fields/form_submit';
import { Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import './login_admin.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSingInAction } from './../../../actions/user';
import { saveState, clearState } from './../../../localstorages/local_storage';
import { userLogOut } from './../../../actions/user';

class LoginAdmin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            submit: false
        };
        this.formSubmit = this.formSubmit.bind(this);
    }
    componentWillReceiveProps(data) {
        /*======================Check User　Type=========================*/
        if (data.data.user != null){
            if (data.data.user.userType.toLocaleLowerCase() == 'normal' || data.data.user.userType.toLocaleLowerCase() == 'merchant'){
                saveState(data.data);
                this.props.userLogOut(data.data.token);
                clearState();
            }else {
                saveState(data.data);
                sessionStorage.removeItem('admin_token');
                sessionStorage.setItem('admin_token', data.data.token);
                window.location.assign('/admin');
            }
        }
    }
    formSubmit(values) {
        let regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regex_phone = /^0\d{8,9}$/;
        this.setState({submit: true});
        setTimeout(() => {this.setState({submit: false})}, 500);
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
        const { handleSubmit, error, invalid, submitting } = this.props;
        if(!invalid){
            setTimeout(() => {this.setState({submit: false})}, 500);
        }
        return(
                <div className="background-login">
                    <Row className="wrap-row">
                        <Col xsOffset={4} mdOffset={4} lgOffset={4} xs={4} sm={4} md={4} lg={4}>
                            <div style={{marginTop: '35%', borderStyle: 'groove'}}>
                                <Row>
                                    <Col lg={12}>
                                        <center className="wrap-login-admin-login">
                                            <Link to="/">
                                                <img className="logo" src="/icon/cambo-smart3.png" />
                                            </Link>
                                        </center>
                                    </Col>
                                </Row>
                                {' '}
                                <Row>
                                    <Col xs={12} lg={12}>
                                        <form onSubmit={handleSubmit(this.formSubmit)}>
                                            <Row>
                                                <Col xs={12} lg={12}>
                                                    {
                                                        this.props.data.code !== undefined &&  this.props.data.code !== 200
                                                            ?
                                                            <p className="show-error">{ this.props.data.message}</p>
                                                            :
                                                            null
                                                    }
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} lg={12}>
                                                    <Field name="emailOrPhone" type="text" component={FormField} label="Phone or Email" icon="fa fa-phone"/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} lg={12}>
                                                    <Field name="password" type="password" component={FormField} label="Password" icon="fa fa-key"/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} lg={12}>
                                                    <a href="/forgetpassword"><p className="forget-password-admin">Forget Password</p></a>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} lg={12}>
                                                    <FormSubmit error={error} invalid={invalid || this.state.submit} submitting={submitting} label={this.state.submit ? "Processing..." : "SIGN IN"}/>
                                                </Col>
                                            </Row>
                                        </form>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
        )
    }
}
const FormSignInAdmin = reduxForm({
    form: 'form-admin-login',
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
})(LoginAdmin);

function mapStateToProps(state) {
    return {
        data : state.userSignIn,
        logout: state.userLogout
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({userSingInAction, userLogOut},dispatch)
}
export default  connect(mapStateToProps,mapDispatchToProps)(FormSignInAdmin);