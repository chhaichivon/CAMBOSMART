import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Tabs, Tab, Row, Col, Breadcrumb, Button, Alert } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import FormSelectField from './../../../../shared_component/redux_form_fields/form_select_field';
import FormTextArea from './../../../../shared_component/redux_form_fields/form_textarea';
import FormDatePicker from './../../../../shared_component/redux_form_fields/form_datepicker';
import Image1 from './images/image1';
import Image2 from './images/image2';
import Image3 from './images/image3';
import Image4 from './images/image4';
import Image5 from './images/image5';
import Image6 from './images/image6';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import {updateProductAction, removeProductImageAction} from './../../../../../actions/member/common';
import {loadState, saveState, loadProduct, saveProduct} from './../../../../../localstorages/local_storage';
import moment from 'moment';
import './images/style.css';

class ProductEdit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status: false,
            message: '',
            error: false,
            start: loadProduct() != undefined ? loadProduct().discountFromDate > 0 ? moment(loadProduct().discountFromDate): null : null,
            end: loadProduct() != undefined ? loadProduct().discountEndDate > 0 ? moment(loadProduct().discountEndDate) : null : null,
            check: false,
            provinces: [
                'Phnom Penh', 'Banteay Meanchey',
                'Battambong', 'Kampong Cham', 'Kampong Chhnang',
                'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Koh Kong',
                'Kep', 'Kratie', 'Mondulkiri', 'Oddar Meanchey',
                'Pailin', 'Preah Sihanouk', 'Peah Vihear', 'Pursat',
                'Prey Veng', 'Ratanakiri', 'Siem Reap', 'Stung Treng', 'Svay Rieng',
                'Takeo', 'Tboung Khmum'
            ]
        };

        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
        this.newPhone = this.newPhone.bind(this);
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.setError1 = this.setError1.bind(this);
        this.setError2 = this.setError2.bind(this);
        this.setError3 = this.setError3.bind(this);
        this.setError4 = this.setError4.bind(this);
        this.setError5 = this.setError5.bind(this);
        this.setError6 = this.setError6.bind(this);
    }

    handleStartDate(date) {
        this.setState({
            start: date
        });
    }

    handleEndDate(date) {
        this.setState({
            end: date
        });
    }

    newPhone(){
        this.setState({check: !this.state.check});
    }

    handleAlertDismiss() {
        this.setState({error: false, status: false});
    }

    setError1(message){
        if(message != ""){
            this.setState({error: true, message: message});
        }else{
            this.setState({error: false, message: message});
        }
    }
    setError2(message){
        if(message != ""){
            this.setState({error: true, message: message});
        }else{
            this.setState({error: false, message: message});
        }
    }
    setError3(message){
        if(message != ""){
            this.setState({error: true, message: message});
        }else{
            this.setState({error: false, message: message});
        }
    }
    setError4(message){
        if(message != ""){
            this.setState({error: true, message: message});
        }else{
            this.setState({error: false, message: message});
        }
    }
    setError5(message){
        if(message != ""){
            this.setState({error: true, message: message});
        }else{
            this.setState({error: false, message: message});
        }
    }
    setError6(message){
        if(message != ""){
            this.setState({error: true, message: message});
        }else{
            this.setState({error: false, message: message});
        }
    }

    componentWillReceiveProps(data) {
        if (data.updateProduct.code == 200) {
            location.href = `/${loadState().user.userType}/ads`;
        }else if(data.updateProduct.code == 400){
            this.setState({status: true, message: data.updateProduct.message})
        }
        if(data.removeImage.code == 200){
            location.href = `/${loadState().user.userType}/ads/edit`;
        }
    }

    formSubmit(value){
        const product = {
            token: loadState() != undefined ? loadState().token : '',
            product: {
                userId: loadState() != undefined ? loadState().user.userId : '',
                productId: loadProduct() != undefined ? loadProduct()._id.$oid : '',
                phones: value.phone3 != undefined && value.phone3 != "" ? [value.phone2, value.phone3] : [value.phone2],
                location: value.location,
                address: value.address,
                product:{
                    productName: value.productName.trim(),
                    productDescription: value.description.trim(),
                    price: Number(value.price),
                    discount: value.discount != '' ? Number(value.discount) : 0,
                    discountFromDate: value.startDate != undefined && value.startDate != "" ? value.startDate : "1970-1-1",
                    discountEndDate: value.endDate != undefined && value.endDate != "" ? value.endDate : "1970-1-1",
                    status: 0
                }
            }
        };
        let newState = loadState();
        if(value.phone3 != ''){
            newState.user.otherPhones = [value.phone2, value.phone3];
            newState.user.address = value.address;
            newState.user.location = value.location;
            saveState(newState);
        }else {
            newState.user.otherPhones = [value.phone2];
            newState.user.address = value.address;
            newState.user.location = value.location;
            saveState(newState);
        }
        this.props.updateProductAction(product);
    }

    handleRemoveImage(image){
        let product = loadProduct();
        let images = product == undefined ? [] : product.productImage;
        let index = images.indexOf(image);
        if (index > -1) {
            images.splice(index, 1);
            product.productImage = images;
            saveProduct(product);
        }
        this.props.removeProductImageAction({
            token: loadState() != undefined ? loadState().token : '',
            id: loadProduct() != undefined ? loadProduct()._id.$oid : '',
            image: image
        });
    }

    render(){
        const { handleSubmit, error, invalid, submitting } = this.props;
        return(
            <div>
                <img id="cambosmart" src="/icon/cambo_site.png" style={{display: 'none'}}/>
                <div className="container manage-ads">
                    <br/>
                    <div>
                        <Tabs defaultActiveKey={3} className="tab-special-category" animation={false} id="controlled-tab-example">
                            <Tab eventKey={1} title={<center><i style={{ border: '3px solid white', borderRadius: '100%', fontWeight: 'bold'}}>&nbsp;&nbsp;Start&nbsp;&nbsp;</i></center>} disabled>
                            </Tab>
                            <Tab eventKey={2} className="tab-title"
                                 title={<div><i style={{ border: '3px solid white', borderRadius: '60%', fontWeight: 'bold'}}>&nbsp;1&nbsp;&nbsp;</i>&nbsp;Select Category</div>}
                                 disabled
                            >
                            </Tab>
                            <Tab eventKey={3}
                                 title={<div><i style={{ border: '3px solid white', borderRadius: '60%', fontWeight: 'bold'}}>&nbsp;2&nbsp;&nbsp;</i>&nbsp;Ads Information</div>}
                                 disabled
                            >
                                <br />
                                <div className="container-fluid">
                                    <form onSubmit={handleSubmit(this.formSubmit)}>
                                        <Row>
                                            <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                <strong>Category<span style={{color: 'red'}}> *</span></strong>
                                            </Col>
                                            <Col xs={6} lg={6}>
                                                <Breadcrumb>
                                                    <Breadcrumb.Item active>
                                                        {loadProduct() != undefined ?
                                                            loadProduct().mainCategory.categoryName.length > 0 ?
                                                                loadProduct().mainCategory.categoryName
                                                                : loadProduct().subCategory.categoryName
                                                            : loadProduct().subCategory.categoryName}
                                                    </Breadcrumb.Item>
                                                    <Breadcrumb.Item active>
                                                        {loadProduct() != undefined ?
                                                                loadProduct().mainCategory.categoryName.length > 0 ?
                                                                    loadProduct().subCategory.categoryName
                                                                    : loadProduct().category.categoryName
                                                                : loadProduct().category.categoryName
                                                        }
                                                    </Breadcrumb.Item>
                                                    {loadProduct() != undefined ?
                                                        loadProduct().mainCategory.categoryName.length > 0 && loadProduct().subCategory.categoryName.length > 0 ?
                                                            <Breadcrumb.Item active>
                                                                {loadProduct().category.categoryName}
                                                            </Breadcrumb.Item>
                                                            : null
                                                        : null
                                                    }
                                                </Breadcrumb>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                <strong>Product Name<span style={{color: 'red'}}> *</span></strong>
                                            </Col>
                                            <Col xs={6} lg={6}>
                                                <Field name="productName" component={FormField} label="Product Name" icon="fa fa-keyboard-o"/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                <strong>Description<span style={{color: 'red'}}> *</span></strong>
                                            </Col>
                                            <Col xs={6} lg={6}>
                                                <Field name="description" component={FormTextArea} height="100px" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                <strong>Price<span style={{color: 'red'}}> *</span></strong>
                                            </Col>
                                            <Col xs={3} lg={3}>
                                                <Field name="price" component={FormField} label="Price" icon="fa fa-usd"/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                <strong>Discount</strong>
                                            </Col>
                                            <Col xs={3}lg={3}>
                                                <Field name="discount" component={FormField} label="Discount" icon="fa fa-percent"/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                <strong>Discount Start</strong>
                                            </Col>
                                            <Col xs={6} lg={6}>
                                                <Field name="startDate" component={FormDatePicker} placeholder="Discount start date"
                                                       defaultDate={this.state.start} handleChange={this.handleStartDate}/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                <strong>Discount End</strong>
                                            </Col>
                                            <Col xs={6} lg={6}>
                                                <Field name="endDate" component={FormDatePicker} placeholder="Discount end date"
                                                       defaultDate={this.state.end} handleChange={this.handleEndDate}/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                <strong>Add Photo<span style={{color: 'red'}}> *</span></strong>
                                            </Col>
                                            <Col xs={8} lg={8}>
                                                <div>
                                                    <span style={{fontFamily: 'Bayon', fontSize: '16px'}}>សូមធ្វើការបញ្ចូលរូបភាពផលិតផលដែលលោកអ្នកមានបំណង់ដាក់លក់។</span>
                                                    <div style={{ fontSize: '12px', color: 'green'}}>
                                                        www.cambosmart.com រក្សាសិទ្ទិក្នុងការ បិទផ្សាយ ឬលុបចោល
                                                        <br />
                                                        នូវរាល់​ផលិតផលទាំងឡាយណាដែលបានបំពេញខុសលក្ខ័ណកំណត់។
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col lgOffset={2}xs={6} lg={6}>
                                                {this.state.error ?
                                                    <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                                                        <h4>Oh snap! You got an error!</h4>
                                                        <p>{this.state.message}</p>
                                                    </Alert>
                                                    :
                                                    null
                                                }
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xsOffset={2} xs={6} lgOffset={2} lg={6}>
                                                <div className="drop-image">
                                                    <ul style={{listStyle:"none",padding:"0px"}}>
                                                        <li>
                                                            <a onClick={() => this.handleRemoveImage(loadProduct() != undefined ? (loadProduct().productImage.length > 0 ? loadProduct().productImage[0] : 'example.jpg') : 'example.jpg')} style={{marginLeft: '5px'}}>
                                                                Remove
                                                            </a>
                                                            <Image1 handleError1={this.setError1}/>
                                                        </li>
                                                        <li >
                                                            <a onClick={() => this.handleRemoveImage(loadProduct() != undefined ? (loadProduct().productImage.length > 1 ? loadProduct().productImage[1] : 'example.jpg') : 'example.jpg')} style={{marginLeft: '5px'}}>
                                                                Remove
                                                            </a>
                                                            <Image2 handleError2={this.setError2}/>
                                                        </li>
                                                        <li>
                                                            <a onClick={() => this.handleRemoveImage(loadProduct() != undefined ? (loadProduct().productImage.length > 2 ? loadProduct().productImage[2] : 'example.jpg') : 'example.jpg')} style={{marginLeft: '5px'}}>
                                                                Remove
                                                            </a>
                                                            <Image3 handleError3={this.setError3}/>
                                                        </li>
                                                        <li>
                                                            <a onClick={() => this.handleRemoveImage(loadProduct() != undefined ? (loadProduct().productImage.length > 3 ? loadProduct().productImage[3] : 'example.jpg') : 'example.jpg')} style={{marginLeft: '5px'}}>
                                                                Remove
                                                            </a>
                                                            <Image4 handleError4={this.setError4}/>
                                                        </li>
                                                        <li>
                                                            <a onClick={() => this.handleRemoveImage(loadProduct() != undefined ? (loadProduct().productImage.length > 4 ? loadProduct().productImage[4] : 'example.jpg') : 'example.jpg')} style={{marginLeft: '5px'}}>
                                                                Remove
                                                            </a>
                                                            <Image5 handleError5={this.setError5}/>
                                                        </li>
                                                        <li>
                                                            <a onClick={() => this.handleRemoveImage(loadProduct() != undefined ? (loadProduct().productImage.length > 5 ? loadProduct().productImage[5] : 'example.jpg') : 'example.jpg')} style={{marginLeft: '5px'}}>
                                                                Remove
                                                            </a>
                                                            <Image6 handleError6={this.setError6}/>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br />
                                        {/*Seller information */}
                                        <Row>
                                            <Col lgOffset={2} xs={6} lg={6}>
                                                {this.state.status ?
                                                    <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                                                        <h4>Oh snap! You got an error!</h4>
                                                        <p>{this.state.message}</p>
                                                    </Alert>
                                                    :
                                                    null
                                                }
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                <strong>Seller<span style={{color: 'red'}}> *</span></strong>
                                            </Col>
                                            <Col xs={6} lg={6}>
                                                <Field name="seller" component={FormField} disabled label="Seller Name" icon="fa fa-user"/>
                                            </Col>
                                        </Row>
                                        {loadState() != undefined ?
                                            loadState().user.phone.length > 0 ?
                                                <div>
                                                    <Row>
                                                        <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                            <strong>Phone<span style={{color: 'red'}}> *</span></strong>
                                                        </Col>
                                                        <Col xs={6} lg={6} >
                                                            <Field name="phone1" component={FormField} disabled label="Phone number (Ex: 070900700)" icon="fa fa-phone"/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xsOffset={2}  mdOffset={2} lgOffset={2} xs={5} sm={5} md={5} lg={5}>
                                                            <Field name="phone2" component={FormField} label="Phone number (Ex: 070900700)" icon="fa fa-phone"/>
                                                        </Col>
                                                        <Col xs={1} sm={1} md={1} lg={1}>
                                                            <Button onClick={this.newPhone} style={{height: '40px', float: 'left'}}>
                                                                {this.state.check ?
                                                                    <i className="fa fa-minus-circle" aria-hidden="true" style={{color: 'red'}}>
                                                                    </i>
                                                                    :
                                                                    <i className="fa fa-plus-circle" aria-hidden="true" style={{color: '#f77416'}}>
                                                                    </i>
                                                                }
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                :
                                                <Row>
                                                    <Col xs={2}lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                        <strong>Phone<span style={{color: 'red'}}> *</span></strong>
                                                    </Col>
                                                    <Col xs={5} sm={5} md={5} lg={5}>
                                                        <Field name="phone2" component={FormField} label="Phone number (Ex: 070900700)" icon="fa fa-phone"/>
                                                    </Col>
                                                    <Col xs={1} sm={1} md={1} lg={1}>
                                                        <Button onClick={this.newPhone} style={{height: '40px', float: 'left'}}>
                                                            {this.state.check ?
                                                                <i className="fa fa-minus-circle" aria-hidden="true" style={{color: 'red'}}>
                                                                </i>
                                                                :
                                                                <i className="fa fa-plus-circle" aria-hidden="true" style={{color: '#f77416'}}>
                                                                </i>
                                                            }
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            :
                                            <Row>
                                                <Col xs={2} sm={2} md={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                    <strong>Phone<span style={{color: 'red'}}> *</span></strong>
                                                </Col>
                                                <Col xs={5} sm={5} md={5} lg={5}>
                                                    <Field name="phone2" component={FormField} label="Phone number (Ex: 070900700)" icon="fa fa-phone"/>
                                                </Col>
                                                <Col xs={1} sm={1} md={1} lg={1}>
                                                    <Button onClick={this.newPhone} style={{height: '40px', float: 'left'}}>
                                                        {this.state.check ?
                                                            <i className="fa fa-minus-circle" aria-hidden="true" style={{color: 'red'}}>
                                                            </i>
                                                            :
                                                            <i className="fa fa-plus-circle" aria-hidden="true" style={{color: '#f77416'}}>
                                                            </i>
                                                        }
                                                    </Button>
                                                </Col>
                                            </Row>
                                        }
                                        {this.state.check ?
                                            <Row>
                                                <Col  mdOffset={2} lgOffset={2} xs={6} sm={6} md={6} lg={6}>
                                                    <Field name="phone3" component={FormField} label="Phone number (Ex: 070900700)" icon="fa fa-phone"/>
                                                </Col>
                                            </Row>
                                            :
                                            null
                                        }
                                        {loadState() != undefined ?
                                            loadState().user.email != "" ?
                                                <Row>
                                                    <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                        <strong>Email<span style={{color: 'red'}}> *</span></strong>
                                                    </Col>
                                                    <Col xs={6} lg={6}>
                                                        <Field name="email" component={FormField} disabled label="Email" icon="fa fa-envelope"/>
                                                    </Col>
                                                </Row>
                                                :
                                                <Row>
                                                    <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                        <strong>Email<span style={{color: 'red'}}> *</span></strong>
                                                    </Col>
                                                    <Col xs={6} lg={6}>
                                                        <Field name="email1" component={FormField} label="Email (Ex: example@example.com" icon="fa fa-envelope"/>
                                                    </Col>
                                                </Row>
                                            :
                                            <Row>
                                                <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                    <strong>Email<span style={{color: 'red'}}> *</span></strong>
                                                </Col>
                                                <Col xs={6} lg={6}>
                                                    <Field name="email1" component={FormField} label="Email (Ex: example@example.com" icon="fa fa-envelope"/>
                                                </Col>
                                            </Row>
                                        }

                                        <Row>
                                            <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                <strong>Location<span style={{color: 'red'}}> *</span></strong>
                                            </Col>
                                            <Col xs={6} lg={6}>
                                                <Field name="location" type="select" component={FormSelectField} placeholder="All Locations" values={this.state.provinces} icon="fa fa-map-marker"/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={2} lg={2} style={{marginTop: '10px', textAlign: 'left'}}>
                                                <strong>Seller Address<span style={{color: 'red'}}> *</span></strong>
                                            </Col>
                                            <Col xs={6} lg={6}>
                                                <Field name="address" component={FormTextArea} />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col lgOffset={2} xs={2} lg={2}>
                                                <FormSubmit error={error} invalid={invalid} submitting={submitting} label="Save" />
                                            </Col>
                                            <Col xs={2} lg={2}>
                                                <Button style={{ background: '#232f3e', color: 'white', height: '40px'}} onClick={() => location.href = `/${loadState().user.userType}`}>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Tab>
                            <Tab eventKey={4} title={<center><i style={{ border: '3px solid white', borderRadius: '100%', fontWeight: 'bold'}}>&nbsp;&nbsp;Finish&nbsp;&nbsp;</i></center>} disabled>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}

ProductEdit = reduxForm({
    form: 'form_update_product_info',
    validate: function (values) {
        let regex_phone = /^0[1-9]\d{7,8}$/;
        let regex_price=/^(([1-9]\d*)|0)(\.\d{1,2})?$/;
        let regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const errors = {};

        if(values.productName.charAt(0) == " " || values.productName.length < 2 || values.productName.length > 50){
            errors.productName="Name must in between (2-50) characters !!"
        }

        if (values.thirdCategory == undefined || values.thirdCategory == "") {
            errors.thirdCategory = "Please ads type !!";
        }

        if(values.description.charAt(0) == " " || values.description.length < 2 || values.description.length > 4850){
            errors.description="Description must in between (2-4850) characters !!"
        }

        if(!regex_price.test(values.price) || values.price == 0 || Number(values.price) > 10000000){
            errors.price="Price must in between (0.1 - 10,000,000) and contain only number !!"
        }
        if(values.discount != "" && values.discount != undefined){
            if(!regex_price.test(values.discount) || values.discount > 100){
                errors.discount = "Discount must in between (0-100) and contain only number !!"
            }
            if(values.startDate == "" || values.startDate == undefined){
                errors.discount = 'Discount start date is require !!'
            }
        }else {}

        if (new Date(values.startDate).getTime() > new Date(values.endDate).getTime()) {
            errors.endDate = 'It must greater than START DATE !!'
        }

        if(values.startDate != "" && values.endDate == ""){
            errors.startDate = 'It must less than END DATE !!'
        }

        if(!regex_phone.test(values.phone2)){
            errors.phone2 = "Phone number is invalid !!"
        }
        if(!regex_phone.test(values.phone3)){
            errors.phone3 = "Phone number is invalid !!"
        }
        if(values.email1 != "" && values.email1 != undefined){
            if(!regex_email.test(values.email1)){
                errors.email1 = "Email is invalid !!"
            }
        }
        if (values.location == undefined || values.location == "") {
            errors.location = "Please select your location !!";
        }
        if(values.address.charAt(0) == " " || values.address.length < 2 || values.address.length > 100){
            errors.address="Address must in between (2-100) characters !!"
        }

        return errors
    }

})(ProductEdit);

function mapStateToProps(state) {
    return{
        updateProduct: state.updateProduct,
        removeImage: state.removeImage,
        initialValues: {
            productName: loadProduct() != undefined ? loadProduct().productName : '',
            description: loadProduct() != undefined ? loadProduct().productDescription : '',
            price: loadProduct() != undefined ? loadProduct().price : '',
            discount: loadProduct() != undefined ? loadProduct().discount : '',
            startDate: loadProduct() != undefined ? moment(loadProduct().discountFromDate).format('YYYY-MM-DD') : '',
            endDate: loadProduct() != undefined ? moment(loadProduct().discountEndDate).format('YYYY-MM-DD') : '',
            seller: loadState() != undefined ? loadState().user.userName : '',
            phone1: loadState() != undefined ? loadState().user.phone.replace("+855","0") : '',
            email: loadState() != undefined ? loadState().user.email : '',
            location: loadState() != undefined ? loadState().user.location : '',
            address: loadState() != undefined ? loadState().user.address : '',
            phone2: loadState() != undefined ? loadState().user.otherPhones[0] : '',
            phone3: loadState() != undefined && loadState().user.otherPhones.length == 2 ? loadState().user.otherPhones[1] : ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateProductAction, removeProductImageAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit)