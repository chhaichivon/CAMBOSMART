import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Tabs, Tab} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import FormField from './../../../shared_component/redux_form_fields/form_field';
import FormSelectField from './../../../shared_component/redux_form_fields/form_select_field';
import FormSimpleTextbox from './../../../shared_component/redux_form_fields/form_simple_textbox';
import FormSubmit from './../../../shared_component/redux_form_fields/form_submit';
import FormTextArea from './../../../shared_component/redux_form_fields/form_textarea';
import {insertAdvertisementAction, validateAdvertisementAction} from './../../../../actions/admin/advertisement/advertisement';
import {loadState} from './../../../../localstorages/local_storage';
import './index.css';
import FormHomePage from './easy_form/form_home_page';
import FormCategoryPage from './easy_form/form_category_page';
import FormLocationPage from './easy_form/form_location_page';
import FormDetailPage from './easy_form/form_detail_page';

class AdvertisementAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: ['Category page', 'Detail page', 'Home page', 'Location page'],
            page: '',
            location: ''
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    formSubmit(value) {
        this.props.insertAdvertisementAction({
            token: loadState() != undefined ? loadState().token : '',
            advertisement: {
                page: value.page,
                location: value.location,
                description: value.description,
                price: Number(value.price)
            }
        });
    }

    componentWillReceiveProps(data) {
        if (data.advertisementInsert.code == 200) {
            location.assign('/admin/advertisements/add')
        }
        this.props.initialValues.location = this.state.location;
    }

    handleSelect(event) {
        this.setState({page: event.target.value});
        this.props.validateAdvertisementAction({
            token: loadState() != undefined ? loadState().token : "",
            page: event.target.value
        });
    }

    handleClick(value) {
        this.setState({location: value});
        document.getElementsByName('location')[0].focus();
    }

    render() {
        const {handleSubmit, error, invalid, submitting} = this.props;

        return (
            <Row className="container-fluid">
                <br />
                <div id="showMessage" className="message"></div>
                <form onSubmit={handleSubmit(this.formSubmit)}>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="advertisement">
                        <Tab eventKey={1} title="Advertisement Information" disabled>
                            <br />
                            <Col lg={6}>
                                <Row>
                                    <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Page : </strong>
                                    </Col>
                                    <Col lg={8}>
                                        <Field name="page" type="select" onChange={this.handleSelect} component={FormSelectField} placeholder="Advertisement page ..." values={this.state.pages} icon="fa fa-globe"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Location : </strong>
                                    </Col>
                                    <Col lg={8}>
                                        <Field name="location" type="text" component={FormSimpleTextbox} values={this.state.location} label="Advertisement location" icon="fa fa-location-arrow"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Description : </strong>
                                    </Col>
                                    <Col lg={8}>
                                        <Field name="description" component={FormTextArea} height="200px" label="Advertisement description"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Price per month : </strong>
                                    </Col>
                                    <Col lg={8}>
                                        <Field name="price" type="text" component={FormField} label="Advertisement price" icon="fa fa-usd"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lgOffset={8} lg={4}>
                                        <FormSubmit error={error} invalid={invalid} submitting={submitting} label="Save"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                {this.state.page == "Home page" ?
                                    <FormHomePage handleClick={this.handleClick.bind(this)} advertisements={this.props.advertisementValidate.advertisements}/>
                                    :
                                    null
                                }
                                {this.state.page == "Category page" ?
                                    <FormCategoryPage handleClick={this.handleClick.bind(this)} advertisements={this.props.advertisementValidate.advertisements}/>
                                    :
                                    null
                                }
                                {this.state.page == "Location page" ?
                                    <FormLocationPage handleClick={this.handleClick.bind(this)} advertisements={this.props.advertisementValidate.advertisements}/>
                                    :
                                    null
                                }
                                {this.state.page == "Detail page" ?
                                    <FormDetailPage handleClick={this.handleClick.bind(this)} advertisements={this.props.advertisementValidate.advertisements}/>
                                    :
                                    null
                                }
                            </Col>
                        </Tab>
                    </Tabs>
                </form>
            </Row>
        );
    }
}

AdvertisementAdd = reduxForm({
    form: 'form_advertisement_add',
    validate: function (values) {
        const errors = {};
        let regex_price = /^(([1-9]\d*)|0)(\.\d{1,2})?$/;

        if (values.page == undefined || values.page == "") {
            errors.page = "Please select wanted advertisement page !!";
        }

        if (values.location.charAt(0) == " " || values.location.length < 2 || values.location.length > 20) {
            errors.location = "Location must in between (2-20) characters !!"
        }

        if (values.description.charAt(0) == " " || values.description.length < 2 || values.description.length > 1000) {
            errors.description = "Description must in between (2-1000) characters !!"
        }

        if (!regex_price.test(values.price) || values.price == 0 || Number(values.price) > 100000) {
            errors.price = "Price must in between (1-100,000) and contain only number !!"
        }

        return errors
    }
})(AdvertisementAdd);

function mapStateToProps(state) {
    return {
        advertisementValidate: state.advertisementValidate,
        advertisementInsert: state.advertisementInsert,
        initialValues: {
            page: '',
            location: '',
            description: '',
            price: ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({insertAdvertisementAction, validateAdvertisementAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementAdd);