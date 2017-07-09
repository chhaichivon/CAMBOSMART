import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Tabs, Tab} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import FormField from './../../../shared_component/redux_form_fields/form_field';
import FormSelectCategory from './../../../shared_component/redux_form_fields/form_select_category';
import FormSimpleTextbox from './../../../shared_component/redux_form_fields/form_simple_textbox';
import FormSubmit from './../../../shared_component/redux_form_fields/form_submit';
import FormTextArea from './../../../shared_component/redux_form_fields/form_textarea';
import {fetchParentCategoriesAction} from './../../../../actions/admin/category/category';
import {insertCategoryAdvertisementAction} from './../../../../actions/admin/advertisement/category_advertisement';
import { loadState } from './../../../../localstorages/local_storage';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';

let categories = [];

class CategoryAdvertisementAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            success: false,
            error: false,
            exist: false
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    formSubmit(value) {
        this.props.insertCategoryAdvertisementAction({
            token: loadState() != undefined ? loadState().token : '',
            advertisement: {
                categoryId: {$oid: value.category},
                name: value.name,
                description: value.description,
                price: Number(value.price)
            }
        });
    }

    componentWillMount(){
        this.props.fetchParentCategoriesAction({
            token: loadState() != undefined ? loadState.token : '',
            start: 1,
            limit: 0
        });
    }

    componentWillReceiveProps(data) {
        if (data.categoryAdvertisementInsert.code == 200) {
            //location.href = '/admin/advertisements/category/list';
            this.setState({success : true})
        }
        if (data.categoryAdvertisementInsert.code == 400) {
            this.setState({error : true})
        }
        if (data.categoryAdvertisementInsert.code == 112) {
            this.setState({exist : true})
        }
    }

    handleSelect(event) {
        //alert(event.target.options[event.target.selectedIndex].innerHTML + event.target.value);
        this.setState({name: event.target.options[event.target.selectedIndex].innerHTML.trim()});
        document.getElementsByName('name')[0].focus();
    }

    render() {
        const {handleSubmit, error, invalid, submitting} = this.props;

        return (
            <div className="container-fluid">
                <br />
                <div id="showMessage" className="message"></div>
                <div style={{borderStyle: 'groove'}}>
                    <center><h4 style={{color:'#f77416'}}><b><u>Category Advertisement Information</u></b></h4></center>
                    <form onSubmit={handleSubmit(this.formSubmit)}>
                        <Row>
                            <Col lg={2} style={{marginTop: '7px', textAlign: 'right'}}>
                                <strong>Choose category <span style={{color: 'red'}}> *</span></strong>
                            </Col>
                            <Col lg={10}>
                                <Field name="category" type="select" onChange={this.handleSelect} component={FormSelectCategory} placeholder="Choose category ..." values={categories} icon="fa fa-indent"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                <strong>Name <span style={{color: 'red'}}> *</span></strong>
                            </Col>
                            <Col lg={10}>
                                <Field name="name" type="text" component={FormSimpleTextbox} values={this.state.name} label="Name" icon="fa fa-keyboard-o"/>
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
                    <SweetAlert
                        show={this.state.success}
                        type="success"
                        title="Successfully"
                        text="Successfully added new advertisement package."
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/advertisements/category/add"; }}
                    />
                    <SweetAlert
                        show={this.state.error}
                        type="error"
                        title="Something went wrong"
                        text="Fail with add new advertisement package."
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/advertisements/category/add"; }}
                    />
                    <SweetAlert
                        show={this.state.exist}
                        type="error"
                        title="Something went wrong"
                        text="This advertisement package already exist!"
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href = "/admin/advertisements/category/add"; }}
                    />
                </div>
            </div>
        );
    }
}

CategoryAdvertisementAdd = reduxForm({
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
})(CategoryAdvertisementAdd);

function mapStateToProps(state) {
    if(state.parentCategories.categories != undefined){
        state.parentCategories.categories.map((category, index) => {
            categories[index] = {
                categoryId: category._id.$oid,
                categoryName: category.categoryName
            };
        })
    }
    return {
        parentCategories: state.parentCategories,
        categoryAdvertisementInsert: state.categoryAdvertisementInsert,
        initialValues: {
            category: '',
            name: '',
            description: '',
            price: ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchParentCategoriesAction, insertCategoryAdvertisementAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdvertisementAdd);