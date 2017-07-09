import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Table, Button, Image, Pagination, Row, Col, ControlLabel } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from './component/text_feild';
import TextAreaField from './component/text_area_field';
import FormSubmit from './component/button_submit_field';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { actionSavePromoteUserPackage } from './../../../../actions/admin/promote_user_package/promote_user_package';


class AddUserPromotePackage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            success : false,
            error : false
        };
        this.formSubmit = this.formSubmit.bind(this);
    }

    componentWillReceiveProps(data) {
        if(data.savePromoteUserPackage.code == 200){
            this.setState({success:true});
        }
    }

    formSubmit(value) {
        let duration = 0;
        let price = 0;
        let description = "";
        if (value.duration != undefined) {
            duration = value.duration;
        }
        if (value.price != undefined) {
            price = value.price;
        }
        if (value.description != undefined) {
            description = value.description;
        }
        let packaged = {
            duration: Number(duration),
            price: Number(price),
            description: description,
            status : 1
        }
        this.props.actionSavePromoteUserPackage(packaged);
    }

    render(){
        const {handleSubmit, reset, submitting} = this.props;
        return (
            <div>
                <br/><br/>
                <div>
                    <br/>
                    <center><h3 style={{color:'blue'}}><b><u>Add Promoted User Package</u></b></h3></center>
                    <br/>
                    <form onSubmit={handleSubmit(this.formSubmit)}>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-2"></div>
                            <div className="col-xs-12 col-sm-12 col-lg-1">
                                <ControlLabel>Duration</ControlLabel>{' '}<span style={{color: "red"}}>*</span>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-7">
                                <Field name="duration" type="text" component={TextField} label="Duration as Month. Ex: 1, 2, 3, 4 , ...." icon="fa fa-calendar"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-2"></div>
                            <div className="col-xs-12 col-sm-12 col-lg-1">
                                <ControlLabel>Price</ControlLabel>{' '}<span style={{color: "red"}}>*</span>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-7">
                                <Field name="price" type="text" component={TextField} label="Price as $" icon="fa fa-money"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-2"></div>
                            <div className="col-xs-12 col-sm-12 col-lg-1">
                                <ControlLabel>Description</ControlLabel>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-7">
                                <Field name="description" type="textarea" component={TextAreaField} height="150px" label="Description"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-8"></div>
                            <div className="col-xs-12 col-sm-12 col-lg-1">
                                <Button bsStyle="warning" onClick={reset}>CLEAR</Button>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-1">
                                <FormSubmit submitting={submitting}  label="SAVE"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2"></div>
                        </div>
                    </form>
                </div>
                <SweetAlert
                    show={this.state.success}
                    type="success"
                    title="Successfully"
                    text="Successfully added new package."
                    confirmButtonColor="#ff5a00"
                    onConfirm={() => { location.href ="/admin/user-package/add-user-package"; }}
                />
                <SweetAlert
                    show={this.state.error}
                    type="error"
                    title="Something went wrong"
                    text="Fail with add new package."
                    confirmButtonColor="#ff5a00"
                    onConfirm={() => { location.href ="/admin/user-package/add-user-package"; }}
                />
            </div>
        )
    }
}

AddUserPromotePackage = reduxForm({
    form: 'form-add-package',
    validate: function (values) {
        const errors = {};
        var regPrice = /^(([1-9]\d{1,7})|0)(\.\d{1,2})?$/;
        var regDuration = /^\d{1,4}$/;

        if (!regDuration.test(values.duration) || values.duration == "") {
            errors.duration = "Duration must contain only number !!"
        }

        if (!regPrice.test(values.price) || values.price == "") {
            errors.price = "Price must contain only number !!"
        }
        return errors
    }
})(AddUserPromotePackage);

function mapStateToProps(state){
    return ({
        savePromoteUserPackage: state.savePromoteUserPackage
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionSavePromoteUserPackage },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPromotePackage);