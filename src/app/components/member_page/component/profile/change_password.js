import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {Row, Col, Panel, Accordion} from 'react-bootstrap';
import FormField from './../../../shared_component/redux_form_fields/form_field';
import FormSubmit from './../../../shared_component/redux_form_fields/form_submit';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { clearLoginState, loadState ,loadLanguage} from './../../../../localstorages/local_storage';
import { actionChangeMemberPassword } from './../../../../actions/member/common';
import { userLogOut } from './../../../../actions/user';
import './profiile.css';
class ChangePassword extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            type: 'error',
            title: '',
            text: ''

        };
        this.formSubmit = this.formSubmit.bind(this);
    }
    formSubmit(value) {
        const member = {
            token: loadState().token,
            member: {
                _id: loadState().user.userId,
                oldPassword: value.oldPassword,
                newPassword: value.newPassword
            }
        };
        this.props.actionChangeMemberPassword(member);
    }

    componentWillReceiveProps(data) {
        if (data.password.code == 200) {
            this.props.userLogOut(loadState().token);
            clearLoginState();
        }else if(data.password.code==112||data.password.code==109||data.password.code==404||data.password.code==400){
            this.setState({
                show: true,
                type: 'error',
                title: 'Something Wrong !',
                text: data.password.message
            })
        }
    }

    render() {
        const {handleSubmit, error, invalid, submitting} = this.props;
        return (
            <Row>
                <Accordion style={{ textAlign: 'center'}}>
                    <Panel
                        header={
                            <li style={{listStyle: 'none', textDecoration: 'none'}}>
                                {
                                    loadLanguage() == "en" || loadLanguage() == undefined ?
                                        <strong className="forget-password-title">CHANGE PASSWORD</strong>
                                        :
                                        <strong className="forget-password-title">ប្តូរលេខសម្ងាត់</strong>
                                }

                                <i className="fa fa-angle-double-down" style={{float: 'right'}}>
                                </i>
                            </li>
                        } eventKey="1"
                    >
                        <form onSubmit={handleSubmit(this.formSubmit)}>
                            <Col xs={12}lg={12}>
                                <Row>
                                    {
                                        loadLanguage() == "en" || loadLanguage() == undefined ?
                                            <Col xs={4} sm={4} md={4} lg={4} className="title-change-password">Old Password</Col>
                                                :
                                            <Col xs={4} sm={4} md={4} lg={4} className="title-change-password">លេខសម្ងាត់ចាស់</Col>
                                    }
                                    <Col xs={8} sm={8} md={8} lg={8}>
                                        <Field name="oldPassword" type="password" component={FormField} label={loadLanguage() == "en" || loadLanguage() == undefined ? "Old password" :"លេខសម្ងាត់ចាស់"} icon="fa fa-key"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12}lg={12}>
                                <Row>
                                    {
                                        loadLanguage() == "en" || loadLanguage() == undefined ?
                                            <Col xs={4} sm={4} md={4} lg={4} className="title-change-password">
                                                New Password
                                            </Col>
                                            :
                                            <Col xs={4} sm={4} md={4} lg={4} className="title-change-password">
                                                លេខសម្ងាត់ថ្មី
                                            </Col>
                                    }
                                    <Col xs={8} sm={8} md={8} lg={8}>
                                        <Field name="newPassword" type="password" component={FormField} label={loadLanguage() == "en" || loadLanguage() == undefined ? "New password" :"លេខសម្ងាត់ថ្មី"} icon="fa fa-key"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12}lg={12}>
                                <Row>
                                    {
                                        loadLanguage() == "en" || loadLanguage() == undefined ?
                                            <Col xs={4} sm={4} md={4} lg={4} className="title-change-password">
                                                Confirm Password
                                            </Col>
                                            :
                                            <Col xs={4} sm={4} md={4} lg={4} className="title-change-password">
                                                បញ្ជាក់លេខសម្ងាត់
                                            </Col>
                                    }
                                    <Col xs={8} sm={8} md={8} lg={8}>
                                        <Field name="confirmPassword" type="password" component={FormField} label={loadLanguage() == "en" || loadLanguage() == undefined ? "Confirm password" :"បញ្ជាក់លេខសម្ងាត់"} icon="fa fa-key"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} style={{float: 'right'}}>
                                <FormSubmit error={error} invalid={invalid} submitting={submitting} label="Save"/>
                            </Col>
                        </form>
                    </Panel>
                </Accordion>
                <SweetAlert
                    show={this.state.show}
                    type={this.state.type}
                    title={this.state.title}
                    text={this.state.text}
                    confirmButtonColor="#ff5a00"
                    onConfirm={() => window.location.assign('/normal')}
                />
            </Row>
        );
    }
}

ChangePassword = reduxForm({
    form: 'form_change_password',
    validate: function (values) {
        const errors = {};
        if (values.oldPassword.length == 0) {
            errors.oldPassword = "Password can not empty !!"
        }
        if (values.oldPassword.value != 0 && values.newPassword.value != 0) {
            if (values.oldPassword == values.newPassword) {
                errors.newPassword = 'Please input a new password !!'
            }
        }
        if (!values.newPassword || values.newPassword.length < 6) {
            errors.newPassword = 'Password is required least 6 digits !!'
        }
        if (values.newPassword.length < 6) {
            errors.newPassword = 'Please enter at least 6 digits !!'
        }
        if (values.confirmPassword !== values.newPassword) {
            errors.confirmPassword = 'Your password not match !!';
        }
        return errors
    }
})(ChangePassword);

function mapStateToProps(state) {
    return {
        password: state.password,
        logout: state.userLogout,
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionChangeMemberPassword, userLogOut }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)