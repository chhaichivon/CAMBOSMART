import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Tabs, Tab} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import FormField from './../../../shared_component/redux_form_fields/form_field';
import FormSimpleTextbox from './../../../shared_component/redux_form_fields/form_simple_textbox';
import FormSubmit from './../../../shared_component/redux_form_fields/form_submit';
import FormTextArea from './../../../shared_component/redux_form_fields/form_textarea';
import {updateCategoryAdvertisementAction} from './../../../../actions/admin/advertisement/category_advertisement';
import { loadState } from './../../../../localstorages/local_storage';

class CategoryAdvertisementEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(value) {
        this.props.updateCategoryAdvertisementAction({
            token: loadState() != undefined ? loadState().token : '',
            advertisement: {
                _id: {$oid: this.props.params.id},
                name: value.name,
                description: value.description,
                price: Number(value.price)
            }
        });
    }

    componentWillReceiveProps(data) {
        if (data.categoryAdvertisementUpdate.code == 200) {
            location.href = '/admin/advertisements/category/list';
        }else{
            if(data.categoryAdvertisementUpdate.message != undefined){
                document.getElementById('error_message').innerHTML = data.categoryAdvertisementUpdate.message;
            }
        }
    }

    render() {
        const {handleSubmit, error, invalid, submitting} = this.props;
        return (
            <div className="container-fluid">
                <br />
                <Link to="/admin/advertisements/category/list"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                <br/><br/>
                <div style={{borderStyle: 'groove'}}>
                    <center><h4 style={{color:'#f77416'}}><b><u>Category Advertisement Information</u></b></h4></center>
                    <form onSubmit={handleSubmit(this.formSubmit)}>
                        <Row>
                            <Col lgOffset={2} lg={10}>
                                <div id="error_message" style={{color: 'red'}}></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                <strong>Name <span style={{color: 'red'}}> *</span></strong>
                            </Col>
                            <Col lg={10}>
                                <Field name="name" type="text" component={FormField} disabled={true} icon="fa fa-keyboard-o"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                <strong>Description </strong>
                            </Col>
                            <Col lg={10}>
                                <Field name="description" component={FormTextArea} height="200px" label="Description"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                <strong>Price per month <span style={{color: 'red'}}> *</span></strong>
                            </Col>
                            <Col lg={10}>
                                <Field name="price" type="text" component={FormField} label="Price" icon="fa fa-usd"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lgOffset={10} lg={2}>
                                <FormSubmit error={error} invalid={invalid} submitting={submitting} label="Save"/>
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>
        );
    }
}

CategoryAdvertisementEdit = reduxForm({
    form: 'form_category_advertisement_add',
    validate: function (values) {
        const errors = {};
        let regex_price = /^(([1-9]\d*)|0)(\.\d{1,2})?$/;

        if (values.category == undefined || values.category == "") {
            errors.category = "Please select category !!";
        }

        if (values.name.charAt(0) == " " || values.name.length < 2 || values.name.length > 50) {
            errors.name = "Name must in between (2-50) characters !!"
        }

        if (!regex_price.test(values.price) || values.price == 0 || Number(values.price) > 100000) {
            errors.price = "Price must in between (1-100,000) and contain only number !!"
        }

        return errors
    }
})(CategoryAdvertisementEdit);

function mapStateToProps(state, own_props) {
    let advertisement = {
        name: '',
        description: '',
        price: ''
    };
    if(state.categoryAdvertisements.advertisements != undefined){
        advertisement = state.categoryAdvertisements.advertisements.find(advertisement => advertisement._id.$oid == own_props.params.id) || advertisement;
    }
    return {
        categoryAdvertisementUpdate: state.categoryAdvertisementUpdate,
        initialValues: advertisement
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateCategoryAdvertisementAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdvertisementEdit);