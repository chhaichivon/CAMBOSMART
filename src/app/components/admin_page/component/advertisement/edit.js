import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Tabs, Tab, Button} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import FormField from './../../../shared_component/redux_form_fields/form_field';
import FormSubmit from './../../../shared_component/redux_form_fields/form_submit';
import FormTextArea from './../../../shared_component/redux_form_fields/form_textarea';
import { updateAdvertisementAction} from './../../../../actions/admin/advertisement/advertisement';
import { loadState } from './../../../../localstorages/local_storage';
import './index.css';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';

class AdvertisementEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(value) {
        this.props.updateAdvertisementAction({
            token: loadState() != undefined ? loadState().token : '',
            advertisement: {
                _id: {$oid: this.props.params.id},
                page: value.page,
                location: value.location,
                description: value.description,
                price: Number(value.price)
            }
        });
    }

    componentWillReceiveProps(data){
        if(data.advertisementUpdate.code == 200){
            location.assign("/admin/advertisements/list");
        }else if(data.advertisementUpdate.code == 400){
            this.setState({ error: true});
        }
    }

    render() {
        const {handleSubmit, error, invalid, submitting} = this.props;
        return (
            <Row className="container-fluid">
                <br />
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
                                        <Field name="page" type="text" component={FormField} disabled={true} label="Advertisement page" icon="fa fa-globe"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Location : </strong>
                                    </Col>
                                    <Col lg={8}>
                                        <Field name="location" type="text" component={FormField} disabled={true} label="Advertisement location" icon="fa fa-location-arrow"/>
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
                                    <Col lgOffset={4} lg={4}>
                                        <Button onClick={() => location.assign('/admin/advertisements/list')} style={{height: '40px', width: '122.66px'}}>Cancel</Button>
                                    </Col>
                                    <Col lg={4}>
                                        <FormSubmit error={error} invalid={invalid} submitting={submitting} label="Save"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Tab>
                    </Tabs>
                </form>
                <SweetAlert
                    show={this.state.error}
                    type="error"
                    title="Something wrong !!"
                    text="Can not update this advertisement !"
                    confirmButtonColor="#ff5a00"
                    onConfirm={() => setTimeout(function(){location.assign('/admin/advertisements/list')}.bind(this), 100)}
                />
            </Row>
        );
    }
}

AdvertisementEdit = reduxForm({
    form: 'form_advertisement_edit',
    validate: function (values) {
        const errors = {};
        let regex_price = /^\d+$/;

        if (values.page.charAt(0) == " " || values.page.length < 4 || values.page.length > 20) {
            errors.page = "Page must in between (4-20) characters !!"
        }

        if (values.location.charAt(0) == " " || values.location.length < 2 || values.location.length > 20) {
            errors.location = "Location must in between (2-20) characters !!"
        }

        if (values.description.charAt(0) == " " || values.description.length < 2 || values.description.length > 1000) {
            errors.description = "Description must in between (2-1000) characters !!"
        }

        if (!regex_price.test(values.price) || values.price == "") {
            errors.price = "Price must contain only number !!"
        }

        return errors
    }
})(AdvertisementEdit);

function mapStateToProps(state, own_props) {
    let advertisement = {
        page: '',
        location: '',
        description: '',
        price: '',
        advertise: []
    };
    if(state.advertisementValidate.advertisements != undefined){
        advertisement = state.advertisementValidate.advertisements.find(advertisement => advertisement._id.$oid == own_props.params.id);
    }
    console.log("ADS : " + JSON.stringify(advertisement));
    return ({
        advertisementUpdate: state.advertisementUpdate,
        initialValues: advertisement
    });
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateAdvertisementAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementEdit);