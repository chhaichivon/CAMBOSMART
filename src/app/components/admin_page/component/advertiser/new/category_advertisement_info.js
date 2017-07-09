import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, FormGroup, FormControl, Alert } from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import FormSelectField from './../../../../shared_component/redux_form_fields/form_select_field';
import FormTextBox from './../../../../shared_component/redux_form_fields/form_simple_textbox';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import FormTextArea from './../../../../shared_component/redux_form_fields/form_textarea';
import AddImage from './../fileupload/add_image';
import { API_ENDPOINT, AUTH_CONFIG } from './../../../../../api/headers';
import { loadState, clearLoginAdmin } from './../../../../../localstorages/local_storage';
import {insertCategoryAdvertiserAction} from './../../../../../actions/admin/advertisement/category_advertisement';
import SweetAlert from 'sweetalert-react';
import '../../../../../../../node_modules/sweetalert/dist/sweetalert.css';

class CategoryAdvertisementInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            provinces: [
                'Phnom Penh', 'Banteay Meanchey',
                'Battambong', 'Kampong Cham', 'Kampong Chhnang',
                'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Koh Kong',
                'Kep', 'Kratie', 'Mondulkiri', 'Oddar Meanchey',
                'Pailin', 'Preah Sihanouk', 'Peah Vihear', 'Pursat',
                'Prey Veng', 'Ratanakiri', 'Siem Reap', 'Stung Treng', 'Svay Rieng',
                'Takeo', 'Tboung Khmum'
            ],
            file: null,
            fail: false,
            message: '',
            error: false,
            phone2: false
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
        this.addPhone = this.addPhone.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.setFile = this.setFile.bind(this);
    }

    addPhone(){
        this.setState({phone2: !this.state.phone2});
    }

    handleBack(){
        this.props.handleBack(false);
    }

    formSubmit(value){
        if(this.state.file != undefined && this.state.file != null && this.state.file != ""){
            this.props.insertCategoryAdvertiserAction({
                token: loadState() != undefined ? loadState().token : '',
                advertiser: {
                    id: this.props.advertisement.id,
                    advertiser: {
                        name: value.name,
                        description: value.description,
                        phones: value.phone2 != "" ? [value.phone1, value.phone2] : [value.phone1],
                        email: value.email,
                        city: value.city,
                        address: value.address,
                        image: "",
                        url: value.url
                    },
                    advertise: {
                        duration: this.props.advertisement.duration,
                        startDate: this.props.advertisement.startDate,
                        expireDate: this.props.advertisement.expireDate,
                        price: this.props.advertisement.price,
                        discount: value.discount !== undefined ? Number(value.discount) : 0.0
                    }
                }
            });
        }else {
            this.setState({error: true});
        }
    }

    handleUploadFile(id, file){
        /*===============Try to upload================*/
        let formData = new FormData();
        formData.append('file', file);
        axios.post(API_ENDPOINT + `admin/advertiser/${id}/banner`, formData, AUTH_CONFIG(loadState() != undefined ? loadState().token : ''))
            .then(function (res) {
                console.log(res.data.data);
                location.href = '/admin/advertisers/list';
            })
            .catch(function (err) {
                if (err.response.status == 401) {
                    clearLoginAdmin();
                } else if (err.response.status == 500) {
                    location.href = '/server/error';
                }
            });
    }

    componentWillReceiveProps(data) {
        if (data.categoryAdvertiser.code == 200) {
            this.handleUploadFile(data.categoryAdvertiser.id, this.state.file);
        } else if (data.categoryAdvertiser.code == 400 || data.categoryAdvertiser.code == 112) {
            this.setState({
                fail: true,
                message: data.categoryAdvertiser.message
            })
        }
    }

    handleAlertDismiss() {
        this.setState({error: false});
    }

    setFile(value){
        this.setState({file: value})
    }

    render() {
        const { handleSubmit, error, invalid, submitting } = this.props;
        console.log("Advertisement : " + JSON.stringify(this.props.advertisement))
        return (
            <div>
                <form onSubmit={handleSubmit(this.formSubmit)}>
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Name <span style={{color: 'red'}}>*</span></strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="name" type="text" component={FormField} label="Company name" icon="fa fa-user"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Description <span style={{color: 'red'}}>*</span></strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="description" component={FormTextArea} label="Company description"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Website : </strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="url" type="text" component={FormField} label="https://www.example.com" icon="fa fa-globe"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Phone <span style={{color: 'red'}}>*</span> </strong>
                                </Col>
                                <Col lg={7}>
                                    <Field name="phone1" component={FormField} label="Phone (Ex: 070123456)" icon="fa fa-phone"/>
                                </Col>
                                <Col lg={1}>
                                    <Button onClick={this.addPhone} style={{height: '40px', float: 'right'}}>
                                        {this.state.phone2 ?
                                            <i className="fa fa-minus-circle" aria-hidden="true" style={{color: 'red'}}>
                                            </i>
                                            :
                                            <i className="fa fa-plus-circle" aria-hidden="true" />
                                        }
                                    </Button>
                                </Col>
                            </Row>
                            {this.state.phone2 ?
                                <Row>
                                    <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Phone 2 : </strong>
                                    </Col>
                                    <Col lg={8}>
                                        <Field name="phone2" component={FormField} label="Phone (Ex: 070123456)" icon="fa fa-phone"/>
                                    </Col>
                                </Row>
                                :
                                null
                            }
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Email <span style={{color: 'red'}}>*</span></strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="email" type="email" component={FormField} label="example@info.com" icon="fa fa-envelope"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Location <span style={{color: 'red'}}>*</span> </strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="city" type="select" component={FormSelectField} placeholder="Location" values={this.state.provinces} icon="fa fa-map-marker"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Address <span style={{color: 'red'}}>*</span> </strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="address" component={FormTextArea} label="E.g : #168E0, Khan Toul Kork, Phnom Pehn, Cambodia"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lgOffset={4} lg={8}>
                                    {this.state.error ?
                                        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} style={{marginLeft: '0px', width: '275px'}}>
                                            <h4>Oh snap! You got an error!</h4>
                                            <p>Banner could not be empty.</p>
                                        </Alert>
                                        :
                                        null
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{textAlign: 'right'}}>
                                    <strong>Banner <span style={{color: 'red'}}>*</span> </strong>
                                </Col>
                                <Col lg={8}>
                                    <AddImage handleUploadFile={this.setFile} />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Discount : </strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="discount" type="text" component={FormField} label="Discount" icon="fa fa-percent"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Ads Page : </strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="adsName" values={this.props.advertisement.name} type="text" component={FormTextBox} label="Ads Page" icon="fa fa-arrows" disabled/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Price : </strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="price" values={this.props.advertisement.price} type="text" component={FormTextBox} label="Price" icon="fa fa-usd" disabled/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Start Date : </strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="startDate" values={this.props.advertisement.startDate} component={FormTextBox} label="Start Date" icon="fa fa-calendar" disabled/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>End Date : </strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="endDate" values={this.props.advertisement.expireDate} component={FormTextBox} label="End Date" icon="fa fa-calendar" disabled/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Duration : </strong>
                                </Col>
                                <Col lg={8}>
                                    <Field name="endDate"
                                           values={this.props.advertisement.duration===1 ?
                                           this.props.advertisement.duration + ' Month'
                                               : this.props.advertisement.duration + ' Months'}
                                           component={FormTextBox}
                                           label="End Date" icon="fa fa-clock-o" disabled/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{marginTop: '10px', textAlign: 'right'}}>
                                    <strong>Description : </strong>
                                </Col>
                                <Col lg={8}>
                                    <FormGroup>
                                        <FormControl value={this.props.advertisement.description} componentClass="textarea" style={{height: 150}} disabled/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col mdOffset={6} md={3} style={{paddingRight: 0}}>
                                    <Button bsStyle="danger" block onClick={this.handleBack}>Cancel</Button>
                                </Col>
                                <Col md={3}>
                                    <FormSubmit error={error} invalid={invalid} submitting={submitting} label="Save"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </form>
                <SweetAlert
                    show={this.state.fail}
                    type="error"
                    title="Something wrong !!"
                    text={this.state.message}
                    confirmButtonColor="#ff5a00"
                    onConfirm={() => setTimeout(function(){location.href = '/admin/advertisers/list'}.bind(this), 100)}
                />
            </div>
        );
    }
}

CategoryAdvertisementInfo = reduxForm({
    form: 'form_category_advertisement_info',
    validate: function (values) {
        const errors = {};
        let regex_phone = /^0[1-9]\d{7,8}$/;
        let regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regex_url = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
        let regex_discount=/^(([1-9]\d*)|0)(\.\d{1,2})?$/;

        if(values.name.charAt(0) == " " || values.name.length < 2 || values.name.length > 50){
            errors.name="Name must in between (2-50) characters !!"
        }
        if(values.description.charAt(0) == " " || values.description.length < 2 || values.description.length > 4850){
            errors.description="Description must in between (2-4850) characters !!"
        }
        if (!regex_phone.test(values.phone1)) {
            errors.phone1 = 'Phone number is invalid !!';
        }
        if (values.phone2 != undefined && values.phone2 != "") {
            if (!regex_phone.test(values.phone2)) {
                errors.phone2 = 'Phone number is invalid !!';
            }else{}
        }

        if(!regex_email.test(values.email)){
            errors.email = "Email is invalid !!";
        }

        if(values.url != ""){
            if (!regex_url.test(values.url)) {
                errors.url = 'Website is invalid !!';
            }else {}
        }else {}

        if (values.city == undefined || values.city == "") {
            errors.city = "Please select your province or city !!";
        }

        if(values.address.charAt(0) == " " || values.address.length < 2 || values.address.length > 100){
            errors.address="Address must in between (2-100) characters !!"
        }

        if(values.discount != ""){
            if(!regex_discount.test(values.discount) || Number(values.discount) > 100){
                errors.discount = "Discount must in between (0-100) !!";
            }else {}
        }else {}

        return errors
    }
})(CategoryAdvertisementInfo);

function mapStateToProps(state){
    return{
        categoryAdvertiser: state.categoryAdvertiser,
        initialValues: {
            name: '',
            description: '',
            email: '',
            url: '',
            phone1: '',
            phone2: '',
            city: '',
            address: '',
            discount: ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({insertCategoryAdvertiserAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (CategoryAdvertisementInfo);