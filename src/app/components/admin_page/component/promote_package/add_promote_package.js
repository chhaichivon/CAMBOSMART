import React from 'react';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import FormSelectField from './../../../shared_component/redux_form_fields/form_select_field';
import FormField from './../../../shared_component/redux_form_fields/form_field';
import FormSubmit from './../../../shared_component/redux_form_fields/form_submit';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { actionAdminSavePromotedPackage } from './../../../../actions/admin/promoted_package/promote_product_package';

let typePromote = "";
let duration = "";
let price = "";
let description = "";
let success = false;
let error = false;

class AddPromotedProductPackage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            success : false,
            error : false,
            types: [ 'hot', 'gold' ]
        }
        this.formSubmit = this.formSubmit.bind(this);
        this.props.savePromotedProductPackage.code = undefined;
    }
    componentWillMount(){
        this.props.savePromotedProductPackage.code = undefined;
    }

    componentWillReceiveProps(data) {
        if(data.savePromotedProductPackage.code == 200){
            this.setState({success:true});
        }
    }

    formSubmit(value){
        let types = '';
        let duration = 0;
        let price = 0;
        let description = "";

        if(value.promote != undefined){
            types = value.promote;
        }
        if(value.duration != undefined){
            duration = value.duration;
        }
        if(value.price != undefined){
            price = value.price;
        }
        if(value.description != undefined){
            description = value.description;
        }
        let promoted = {
            typePromote : types,
            duration: Number(duration),
            price: Number(price),
            description: description,
            status : 1
        }
        this.props.actionAdminSavePromotedPackage(promoted);
    }

    render(){
        const {handleSubmit, submitting, reset} = this.props;
        return(
            <div>
                <br/><br/><br/>
                <Row>
                    <Col xs={12} sm={12} md={2} lg={2}></Col>
                    <Col xs={12} sm={12} md={8} lg={8}>
                            <br/>
                            <center><h4 style={{color:'blue'}}><b><u>Add Promoted Product Package</u></b></h4></center>
                            <form onSubmit={handleSubmit(this.formSubmit)}>
                                <FormGroup controlId="type_promoted">
                                    <Col componentClass={ControlLabel} xs={12} sm={12} md={3} lg={3}>
                                        Type Promoted{' '}<span style={{color: "red"}}>*</span>
                                    </Col>
                                    <Col xs={12} sm={12} md={9} lg={9}>
                                        <Field name="promote" type="select" onChange={this.handleSelect} component={FormSelectField} placeholder="Product Type" values={this.state.types} icon="fa fa-shopping-bag"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="duration">
                                    <Col componentClass={ControlLabel} xs={12} sm={12} md={3} lg={3}>
                                        Duration{' '}<span style={{color: "red"}}>*</span>
                                    </Col>
                                    <Col xs={12} sm={12} md={9} lg={9}>
                                        <Field name="duration" type="text" component={FormField} label="Duration as week. Ex: 1, 2, 3, 4 , ...." icon="fa fa-clock-o"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="price">
                                    <Col componentClass={ControlLabel} xs={12} sm={12} md={3} lg={3}>
                                        Price{' '}<span style={{color: "red"}}>*</span>
                                    </Col>
                                    <Col xs={12} sm={12} md={9} lg={9}>
                                        <Field name="price" type="text" component={FormField} label="Price as $" icon="fa fa-money"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="description">
                                    <Col componentClass={ControlLabel} xs={12} sm={12} md={3} lg={3}>
                                        Description{' '}
                                    </Col>
                                    <Col xs={12} sm={12} md={9} lg={9}>
                                        <Field name="description" type="text" component={FormField} label="Enter description" icon="fa fa-sticky-note-o"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col xs={12} sm={12} md={8} lg={8}></Col>
                                    <Col xs={12} sm={12} md={2} lg={2}>

                                    </Col>
                                    <Col xs={12} sm={12} md={2} lg={2}>
                                        <FormSubmit submitting={submitting}  label="SAVE"/>
                                    </Col>
                                </FormGroup>
                            </form>
                        <SweetAlert
                            show={this.state.success}
                            type="success"
                            title="Successfully"
                            text="Successfully added new package."
                            confirmButtonColor="#ff5a00"
                            onConfirm={() => { location.href ="/admin/package/add-package"; }}
                        />
                        <SweetAlert
                            show={this.state.error}
                            type="error"
                            title="Something went wrong"
                            text="Fail with add new package."
                            confirmButtonColor="#ff5a00"
                            onConfirm={() => { location.href ="/admin/package/add-package"; }}
                        />
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2}></Col>
                </Row>
            </div>
        )
    }
}

AddPromotedProductPackage = reduxForm({
    form: 'form-add-promoted-product-package',
    validate: function (values) {
        const errors = {};
        var regPrice = /^(([1-9]\d{1,7})|0)(\.\d{1,2})?$/;
        var regDuration = /^\d{1,4}$/;

        if(values.promote == undefined || values.promote == ""){
            errors.promote = "Promote Type cannot be empty!"
        }
        if(!regDuration.test(values.duration) || values.duration == ""){
            errors.duration = "Duration must contain only number!"
        }
        if (!regPrice.test(values.price) || values.price == "") {
            errors.price = "Price must contain only number!"
        }
        return errors
    }
})(AddPromotedProductPackage);

function mapStateToProps(state) {
    return {
        savePromotedProductPackage: state.savePromotedProductPackage
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionAdminSavePromotedPackage }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPromotedProductPackage)