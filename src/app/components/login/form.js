/**
 * Created by CHHAI CHIVON
 */
import React from 'react';
import { Row, Col,FieldGroup,FormControl,Button,FormGroup,HelpBlock,ButtonGroup} from './../../../../node_modules/react-bootstrap';
import './login.css';
import FormSocial from './../shared_component/redux_form_fields/form_social';
import { Link } from 'react-router';
import { Field, reduxForm } from '../../../../node_modules/redux-form';
import FormField from './../shared_component/redux_form_fields/form_field';
import FormSubmit from './../shared_component/redux_form_fields/form_submit';
import { Tabs,Tab } from 'react-bootstrap';
import FormSignIn from './form_signin';
import FormSignUp from './form_signup';
import { loadLanguage } from './../../localstorages/local_storage';
class LoginTesting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           key:1
        };
    }
    componentWillMount(){
       /* if(FormSignIn.linkToSignUp.key == 1){
            return key = 1
        }
        else if(FormSignUp.linkToSignIn.key == 2){
            return key = 2
        }*/
        if((document.URL.match(/([^\/]*)\/*$/)[1]).localeCompare("sign-up") == 0){
            this.setState({key: 2})
        }else {
            this.setState({key: 1})
        }

    }
    render() {
        const { handleSubmit,error, invalid, submitting } = this.props;
        var style = {backgroundColor: this.color};
        return (
            <div className="container wrap-login">
                <div className="row login">
                    <Col sm={5} xs={5} md={5} lg={5} className="login-form">
                        <Tabs defaultActiveKey={this.state.key} className="tab-sign-in" animation={false}
                              id="controlled-tab-example">
                            <Tab eventKey={1} title={loadLanguage() == "en" || loadLanguage() == undefined ? "SignIn" : "ចូលគណនី"} className="tab-sign-in">
                                <div>
                                    <FormSignIn />
                                </div>
                            </Tab>
                            <Tab eventKey={2} title={loadLanguage() == "en" || loadLanguage() == undefined ? "SignUp" : "ចុះឈ្មោះ"}>
                                <div>
                                    <FormSignUp />
                                </div>
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col sm={7} xs={7} md={7} lg={7} className="login-content">
                        <center><h2>Cambosmart.com</h2></center>
                        <h4 style={{textAlign:"center"}}>Cambosmart {loadLanguage() == "en" || loadLanguage() == undefined ? "is an E-Commerce website in Cambodia which provides many special features for users and merchants to sell and buy products easily."
                            : "គឺជាគេហទំព័រមួយក្នុងប្រទេសកម្ពុជាដែលផ្តល់អោយនូវភាពងាយស្រួលទៅដល់អតិថិជនក្នុងការស្វែងរកទិញទំនិញតាមរយៈអនឡាញយ៉ាងសំបូរបែបនិងការដាក់លក់ផលិតផលយ៉ាងងាយស្រួលនៅលើគេហទំព័ររបស់យើង។"}</h4>
                        <span>{loadLanguage() == "en" || undefined ? "Get to know more about us, kindly read this : " : "ចង់ដឹងច្បាស់អំពីយើងបន្ថែ៖"}</span>
                        <ul className="item">
                            <Link to="/help/privacy">{ loadLanguage() == "en" || loadLanguage() == undefined ? "Term and Privacy" : "បទបញ្ជាផ្ទៃក្នុង" }</Link><br/>
                            <Link to="/help/about-us">{ loadLanguage() == "en" ||  loadLanguage() == undefined ? "Cambosmart.com Team" : "ក្រុមយើងខ្ញុំ"}</Link>
                        </ul>
                        <h5>{ loadLanguage() == "en" ||  loadLanguage() == undefined ? "Need help from Cambosmart?" : "ត្រូវការជំនួយពីក្រុមយើងខ្ញុំ៖"}</h5>
                        <ul className="item">
                            <Link to="/help">{ loadLanguage() == "en" || loadLanguage() == undefined ? "Help" : "ជំនួយ" }</Link><br/>
                        </ul>
                        <h5>{ loadLanguage() == "en" ||  loadLanguage() == undefined ? "Feel free to drop your questions with Cambosmart." : "ទំនាក់ទំនងទៅកាន់ក្រុមយើងខ្ញុំ៖"}</h5>
                        <ul className="item">
                            <Link to="/help/contact-us">{ loadLanguage() == "en" || loadLanguage() == undefined ? "Contact us" : "ទំនាក់ទំនង" }</Link><br/>
                        </ul>
                    </Col>
                </div>
                <br />
            </div>
        );
    }
}
const FormLoginTesting = reduxForm({
    form: 'form_login_test',
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
})(LoginTesting);
export default FormLoginTesting;