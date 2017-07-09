import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Table, Form, FormControl, FormGroup, Button, Image, Pagination, Row, Col, ControlLabel } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from './component/text_feild';
import TextAreaField from './component/text_area_field';
import FormSubmit from './component/button_submit_field';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { actionUpdatePromoteUserPackage } from './../../../../actions/admin/promote_user_package/promote_user_package';

class EditUserPromotePackage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            success : false,
            error : false
        }
        this.formSubmit = this.formSubmit.bind(this);
    }

    componentWillReceiveProps(data) {
        if(data.updatePromoteUserPackage.code == 200){
            this.setState({success:true});
        }
    }

    formSubmit(values) {
        let duration = 0;
        let price = 0;
        let description = "";
        if (values.duration != undefined) {
            duration = values.duration;
        }
        if (values.price != undefined) {
            price = values.price;
        }
        if (values.description != undefined) {
            description = values.description;
        }
        let packaged = {
            _id: this.props.params.id,
            duration: Number(duration),
            price: Number(price),
            description: description,
            status : 1
        }
        this.props.actionUpdatePromoteUserPackage(packaged);
    }

    render(){
        const {handleSubmit, submitting, reset} = this.props;
        return (
            <div>
                <br/><br/>
                <div>
                    <br/>
                    <Link to="/admin/user-package/list-user-package"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                    <center><h3 style={{color:'blue'}}><b><u>Edit Promoted User Package</u></b></h3></center>
                    <br/>
                    <Row>
                        <Col xs={12} sm={12} md={1} lg={1}></Col>
                        <Col xs={12} sm={12} md={10} lg={10}>
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
                                    <div className="col-xs-12 col-sm-12 col-lg-2">
                                        <FormSubmit submitting={submitting}  label="SAVE"/>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-lg-2"></div>
                                </div>
                            </form>
                            <SweetAlert
                                show={this.state.success}
                                type="success"
                                title="Successfully"
                                text="Successfully updated package."
                                confirmButtonColor="#ff5a00"
                                onConfirm={() => { location.href ="/admin/user-package/list-user-package"; }}
                            />
                            <SweetAlert
                                show={this.state.error}
                                type="error"
                                title="Something went wrong"
                                text="Fail with update package."
                                confirmButtonColor="#ff5a00"
                                onConfirm={() => { location.href ="/admin/user-package/list-user-package"; }}
                            />
                        </Col>
                        <Col xs={12} sm={12} md={1} lg={1}></Col>
                     </Row>
                </div>
            </div>
        )
    }
}

EditUserPromotePackage = reduxForm({
    form: 'form-add-package',
    validate: function (values) {
        const errors = {};
        var regPrice = /^\d{1,4}$/; // /^\d+\.*\d{1,4}$/;
        var regDuration = /^\d{1,4}$/;

        if (!regDuration.test(values.duration) || values.duration == "") {
            errors.duration = "Duration must contain only number !!"
        }

        if (!regPrice.test(values.price) || values.price == "") {
            errors.price = "Price must contain only number !!"
        }
        return errors
    }
})(EditUserPromotePackage);

function mapStateToProps(state, own_props){
    let userPackage = {
        duration: 0,
        price: 0,
        description: "",
        status : 1
    };
    function getId(_id) {
        if (_id == undefined) {
            return 0;
        } else {
            return Object.values(_id);
        }
    }
    if(state.listPromoteUserPackage.packages != undefined){
        const promotion = state.listPromoteUserPackage.packages.find(pack => getId(pack._id) == own_props.params.id) || userPackage;
        userPackage = {
            duration: promotion.duration,
            price: promotion.price,
            description: promotion.description,
            status : promotion.status
        }
    }
    return ({
        updatePromoteUserPackage: state.updatePromoteUserPackage,
        initialValues: userPackage
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionUpdatePromoteUserPackage },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPromotePackage);