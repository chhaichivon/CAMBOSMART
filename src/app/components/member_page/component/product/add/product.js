import React from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Row, Col, Breadcrumb, Button, Alert } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import FormSelectField from './../../../../shared_component/redux_form_fields/form_select_field';
import FormSelectCategory from './../../../../shared_component/redux_form_fields/form_select_category';
import FormTextArea from './../../../../shared_component/redux_form_fields/form_textarea';
import FormDatePicker from './../../../../shared_component/redux_form_fields/form_datepicker';
import Image1 from './images/image1';
import Image2 from './images/image2';
import Image3 from './images/image3';
import Image4 from './images/image4';
import Image5 from './images/image5';
import Image6 from './images/image6';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import {fetchThirdCategoriesAction} from './../../../../../actions/categories/category';
import {insertProductAction} from './../../../../../actions/member/common';
import {loadState, saveState, loadCategory,loadLanguage} from './../../../../../localstorages/local_storage';
import {API_ENDPOINT, AUTH_CONFIG} from './../../../../../api/headers';

let files = new Array(6);
let images = [];
let categories = [];

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            submit: false,
            status: false,
            message: '',
            error: false,
            imageError: '',
            start: null,
            end: null,
            check: false,
            provinces: [
                'Phnom Penh', 'Banteay Meanchey',
                'Battambong', 'Kampong Cham', 'Kampong Chhnang',
                'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Koh Kong',
                'Kep', 'Kratie', 'Mondulkiri', 'Oddar Meanchey',
                'Pailin', 'Preah Sihanouk', 'Peah Vihear', 'Pursat',
                'Prey Veng', 'Ratanakiri', 'Siem Reap', 'Stung Treng', 'Svay Rieng',
                'Takeo', 'Tboung Khmum'
            ],
            price: 0
        };
        Array.prototype.remove = function() {
            var what, a = arguments, L = a.length, ax;
            while (L && this.length) {
                what = a[--L];
                while ((ax = this.indexOf(what)) !== -1) {
                    this.splice(ax, 1);
                }
            }
            return this;
        };
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
        this.newPhone = this.newPhone.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
        this.setFile1 = this.setFile1.bind(this);
        this.setFile2 = this.setFile2.bind(this);
        this.setFile3 = this.setFile3.bind(this);
        this.setFile4 = this.setFile4.bind(this);
        this.setFile5 = this.setFile5.bind(this);
        this.setFile6 = this.setFile6.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
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

    setFile1(data){
        if(data.message != ""){
            this.setState({error: true, imageError: data.message});
        }else {
            this.setState({error: false, imageError: data.message});
            files[0] = data.file;
        }
    }
    setFile2(data){
        if(data.message != ""){
            this.setState({error: true, imageError: data.message});
        }else {
            this.setState({error: false, imageError: data.message});
            files[1] = data.file;
        }
        /*if(error){
            this.setState({error: error});
        }else {
            this.setState({error: false});
            files[1] = file;
        }*/
    }
    setFile3(data){
        if(data.message != ""){
            this.setState({error: true, imageError: data.message});
        }else {
            this.setState({error: false, imageError: data.message});
            files[2] = data.file;
        }
        /*if(error){
            this.setState({error: error});
        }else {
            this.setState({error: false});
            files[2] = file;
        }*/
    }
    setFile4(data){
        if(data.message != ""){
            this.setState({error: true, imageError: data.message});
        }else {
            this.setState({error: false, imageError: data.message});
            files[3] = data.file;
        }
        /*if(error){
            this.setState({error: error});
        }else {
            this.setState({error: false});
            files[3] = file;
        }*/
    }
    setFile5(data){
        if(data.message != ""){
            this.setState({error: true, imageError: data.message});
        }else {
            this.setState({error: false, imageError: data.message});
            files[4] = data.file;
        }
        /*if(error){
            this.setState({error: error});
        }else {
            this.setState({error: false});
            files[4] = file;
        }*/
    }
    setFile6(data){
        if(data.message != ""){
            this.setState({error: true, imageError: data.message});
        }else {
            this.setState({error: false, imageError: data.message});
            files[5] = data.file;
        }
        /*if(error){
            this.setState({error: error});
        }else {
            this.setState({error: false});
            files[5] = file;
        }*/
    }

    componentWillMount(){
        this.props.fetchThirdCategoriesAction({
                token: loadState() != undefined ? loadState().token : '',
                name: loadCategory() != undefined ? loadCategory().sub.categoryName : ''
            }
        );
    }

    componentWillReceiveProps(data) {
        if(data.thirdCategories.categories!=undefined){
            //   console.log("fff",data.listChild.categories)
            for(let i=0;i<data.thirdCategories.categories.length;i++){
                let categoryId=data.thirdCategories.categories[i].categoryId.$oid;
                let categoryName=data.thirdCategories.categories[i].categoryName;
                categories[i]={
                    categoryId:categoryId,
                    categoryName:categoryName
                }
            }
        }
        if (data.addProduct.code == 200) {
            this.handleUploadFile(data.addProduct.productId, files.remove(null));

        }else if(data.addProduct.code == 301 || data.addProduct.code == 4 || data.addProduct.code == 199 || data.addProduct.code == 400){
            this.setState({status: true, message: data.addProduct.message})
        }
    }

    formSubmit(value){
        const product = {
            token: loadState() != undefined ? loadState().token : '',
            product: {
                userId: loadState() != undefined ? loadState().user.userId : '',
                userType: loadState() != undefined ? loadState().user.userType : '',
                categoryId: value.thirdCategory != undefined ? value.thirdCategory : loadCategory().sub.categoryId.$oid,
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
                    status: 1
                }
            }
        };
        if(value.phone3 != ''){
            loadState().user.otherPhones = [value.phone2, value.phone3];
        }else {
            loadState().user.otherPhones = [value.phone2];
        }
        this.setState({submit: true});
        setTimeout(() => {this.setState({submit: false})}, 500);
        saveState(loadState());
        this.props.insertProductAction(product);
    }

    handleUploadFile(productId, files){
        if(files.length > 0){
            let formData = new FormData();
            for(let i=0; i<files.length; i++){
                formData.append('file['+i+']', files[i])
            }
            axios.post(API_ENDPOINT+'member/product/'+ productId + '/upload-images', formData, AUTH_CONFIG(loadState() != undefined ? loadState().token : ''))
                .then(function (res) {
                    //console.log(res.data.data.message);
                    location.href = '/'+loadState().user.userType
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }

    render(){
        const { handleSubmit, error, invalid, submitting } = this.props;
        return(
            <div className="container-fluid">
                <img id="cambosmart" src="/icon/cambo_site.png" style={{display: 'none'}}/>
                <form onSubmit={handleSubmit(this.formSubmit)}>
                    <Row>
                        <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                            <strong>
                                {
                                    loadLanguage() == "en" || loadLanguage() == undefined ? "Category" :"ប្រភេទ"
                                }
                                <span style={{color: 'red'}}> *</span>
                            </strong>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Breadcrumb>
                                <Breadcrumb.Item active>{loadCategory() != undefined ? loadCategory().main: null}</Breadcrumb.Item>
                                <Breadcrumb.Item active>{loadCategory() != undefined ? loadCategory().sub.categoryName: null}</Breadcrumb.Item>
                                <Breadcrumb.Item href={"/" + loadState().user.userType + "/ads/add-cat"}>Change</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                            <strong>
                                {
                                     loadLanguage() == "en" || loadLanguage() == undefined ? "Product Name" :"ឈ្មោះទំនិញ"
                                }
                                <span style={{color: 'red'}}> *</span>
                            </strong>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Field name="productName" component={FormField} label={ loadLanguage() == "en" ||  loadLanguage() == undefined ? "Product Name": "ឈ្មោះទំនិញ" } icon="fa fa-keyboard-o"/>
                        </Col>
                    </Row>
                    {categories.length > 0 ?
                        <Row>
                            <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                                <strong>
                                    {
                                        loadLanguage() == "en" || loadLanguage() == undefined ? "Type" :"ប្រភេទ"
                                    }
                                    <span style={{color: 'red'}}> *</span>
                                </strong>
                            </Col>
                            <Col xs={3} lg={3}>
                                <Field name="thirdCategory" type="select" component={FormSelectCategory} placeholder="Choose ads type ..." values={categories} icon="fa fa-keyboard-o"/>
                            </Col>
                        </Row> :null
                    }

                    <Row>
                        <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                            <strong>
                                {
                                    loadLanguage() == "en" || loadLanguage() == undefined ? "Description" :"អំពី"
                                }
                                <span style={{color: 'red'}}> *</span>
                            </strong>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Field name="description" component={FormTextArea} height="100px" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                            <strong>
                                {
                                    loadLanguage() == "en" || loadLanguage() == undefined ? "Price" :"តំលៃ"
                                }
                                <span style={{color: 'red'}}> *</span>
                            </strong>
                        </Col>
                        <Col xs={3} lg={3}>
                            <Field name="price" component={FormField} label={loadLanguage() == "en" || loadLanguage() == undefined ? "Price" :"តំលៃ"} icon="fa fa-usd"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                            <strong>
                                {
                                    loadLanguage() == "en" || loadLanguage() == undefined ? "Discount" :"បញ្ចុះតំលៃ"
                                }
                            </strong>
                        </Col>
                        <Col xs={3} lg={3}>
                            <Field name="discount" component={FormField} label={loadLanguage() == "en" || loadLanguage() == undefined ? "Discount" :"បញ្ចុះតំលៃ"} icon="fa fa-percent"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                            <strong>
                                {
                                    loadLanguage() == "en" || loadLanguage() == undefined ? "Discount Start" :"បញ្ចុះតំលៃចាប់ពី"
                                }
                            </strong>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Field name="startDate" component={FormDatePicker} placeholder={loadLanguage() == "en" || loadLanguage() == undefined ? "Discount Start" :"បញ្ចុះតំលៃចាប់ពី"}
                                   defaultDate={this.state.start} handleChange={this.handleStartDate}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                            <strong>
                                {
                                    loadLanguage() == "en" || loadLanguage() == undefined ? "Discount End" :"បញ្ចុះតំលៃរហូតដល់"
                                }
                            </strong>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Field name="endDate" component={FormDatePicker} placeholder={loadLanguage() == "en" || loadLanguage() == undefined ? "Discount End" :"បញ្ចុះតំលៃរហូតដល់"}
                                   defaultDate={this.state.end} handleChange={this.handleEndDate}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                            <strong>
                                {
                                    loadLanguage() == "en" || loadLanguage() == undefined ? "Add Photo" :"បញ្ចូលរូបភាព"
                                }
                                <span style={{color: 'red'}}> *</span>
                            </strong>
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
                        <Col lgOffset={2} xs={6}  lg={6}>
                            {this.state.error ?
                                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                                    <h4>Oh snap! You got an error!</h4>
                                    <p>{this.state.imageError}</p>
                                </Alert>
                                :
                                null
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col xsOffset={2} lgOffset={2} xs={10} lg={6}>
                            <div className="drop-image">
                                <ul style={{listStyle:"none",padding:"0px"}}>
                                    <li>
                                        <Image1 setFile1={this.setFile1}/>
                                    </li>
                                    <li>
                                        <Image2 setFile2={this.setFile2}/>
                                    </li>
                                    <li>
                                        <Image3 setFile3={this.setFile3}/>
                                    </li>
                                    <li>
                                        <Image4 setFile4={this.setFile4}/>
                                    </li>
                                    <br />
                                    <li>
                                        <Image5 setFile5={this.setFile5}/>
                                    </li>
                                    <li>
                                        <Image6 setFile6={this.setFile6}/>
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
                                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} style={{margin: '0px 0px 15px 0px'}}>
                                    <h4>Oh snap! You got an error!</h4>
                                    {this.state.message == 'Normal user can only add 5 products!' ?
                                        <div>
                                            <p>{this.state.message}</p>
                                            <a href="/normal/promote-desc">
                                                <ul className="list-inline">
                                                    <li><img src="/icon/gif/head_arrows_right_animation_clipart.gif"/></li>
                                                    <li><Button bsStyle="warning"><p style={{ fontSize: '15px',marginBottom: '0px', marginLeft: '5px' }}>Please upgrade to business account</p></Button></li>
                                                </ul>
                                            </a>
                                        </div>
                                        :
                                        <p>{this.state.message}</p>
                                    }

                                </Alert>
                                :
                                null
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                            <strong>
                                {
                                    loadLanguage() == "en" || loadLanguage() == undefined ? "Seller" :"អ្នកលក់"
                                }
                                <span style={{color: 'red'}}> *</span>
                            </strong>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Field name="seller" component={FormField} disabled label={loadLanguage() == "en" || loadLanguage() == undefined ? "Seller" :"អ្នកលក់"} icon="fa fa-user"/>
                        </Col>
                    </Row>
                    {loadState() != undefined ?
                        loadState().user.phone.length > 0 ?
                            <div>
                                <Row>
                                    <Col lg={2} xs={12} style={{marginTop: '10px'}}>
                                        <strong>
                                            {
                                                loadLanguage() == "en" || loadLanguage() == undefined ? "Phone" :"ទូរស័ព្ទ"
                                            }
                                            <span style={{color: 'red'}}> *</span>
                                        </strong>
                                    </Col>
                                    <Col lg={6} xs={12}>
                                        <Field name="phone1" component={FormField} disabled label="Phone number (Ex: 070900700)" icon="fa fa-phone"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col smOffset={2} mdOffset={2} lgOffset={2} xs={5} sm={5} md={5} lg={5}>
                                        <Field name="phone2" component={FormField} label="Phone number (Ex: 070900700)" icon="fa fa-phone"/>
                                    </Col>
                                    <Col xs={1} sm={1} md={1} lg={1}>
                                        <Button onClick={this.newPhone} style={{height: '40px'}}>
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
                                <Col lg={2} xs={2} style={{marginTop: '10px'}}>
                                    <strong>
                                        {
                                            loadLanguage() == "en" || loadLanguage() == undefined ? "Phone" :"ទូរស័ព្ទ"
                                        }
                                        <span style={{color: 'red'}}> *</span>
                                    </strong>
                                </Col>
                                <Col xs={5} sm={5} md={5} lg={5}>
                                    <Field name="phone2" component={FormField} label="Phone number (Ex: 070900700)" icon="fa fa-phone"/>
                                </Col>
                                <Col xs={1} sm={1} md={1} lg={1}>
                                    <Button onClick={this.newPhone} style={{height: '40px'}}>
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
                            <Col xs={2} sm="2" md={2} lg={2} style={{marginTop: '10px'}}>
                                <strong>
                                    {
                                        loadLanguage() == "en" || loadLanguage() == undefined ? "Phone" :"ទូរស័ព្ទ"
                                    }
                                    <span style={{color: 'red'}}> *</span>
                                </strong>
                            </Col>
                            <Col xs={5} sm={5} md={5} lg={5}>
                                <Field name="phone2" component={FormField} label="Phone number (Ex: 070900700)" icon="fa fa-phone"/>
                            </Col>
                            <Col xs={1} sm={1} md={1} lg={1}>
                                <Button onClick={this.newPhone} style={{height: '40px'}}>
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
                            <Col smOffset={2} mdOffset={2} lgOffset={2} xs={6} sm={6} md={6} lg={6}>
                                <Field name="phone3" component={FormField} label="Phone number (Ex: 070900700)" icon="fa fa-phone"/>
                            </Col>
                        </Row>
                        :
                        null
                    }
                    {loadState() != undefined ?
                        loadState().user.email != "" ?
                            <Row>
                                <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                                    <strong>
                                        {
                                            loadLanguage() == "en" || loadLanguage() == undefined ? "Email" :"អ៊ីម៉ែល"
                                        }
                                        <span style={{color: 'red'}}> *</span>
                                    </strong>
                                </Col>
                                <Col xs={6} lg={6}>
                                    <Field name="email" component={FormField} disabled label={loadLanguage() == "en" || loadLanguage() == undefined ? "Email" :"អ៊ីម៉ែល"} icon="fa fa-envelope"/>
                                </Col>
                            </Row>
                            :
                            <Row>
                                <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                                    <strong>
                                        {
                                            loadLanguage() == "en" || loadLanguage() == undefined ? "Email" :"អ៊ីម៉ែល"
                                        }<span style={{color: 'red'}}> *</span>
                                    </strong>
                                </Col>
                                <Col xs={6}lg={6}>
                                    <Field name="email1" component={FormField} label="Email (Ex: example@example.com" icon="fa fa-envelope"/>
                                </Col>
                            </Row>
                        :
                        <Row>
                            <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                                <strong>
                                    {
                                        loadLanguage() == "en" || loadLanguage() == undefined ? "Email" :"អ៊ីម៉ែល"
                                    }<span style={{color: 'red'}}> *</span>
                                </strong>
                            </Col>
                            <Col xs={6} lg={6}>
                                <Field name="email1" component={FormField} label="Email (Ex: example@example.com" icon="fa fa-envelope"/>
                            </Col>
                        </Row>
                    }

                    <Row>
                        <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                            <strong>
                                {
                                    loadLanguage() == "en" || loadLanguage() == undefined ? "Location" :"ទីតាំង"
                                }
                                <span style={{color: 'red'}}> *</span>
                            </strong>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Field name="location" type="select" component={FormSelectField} placeholder={loadLanguage() == "en" || loadLanguage() == undefined ? "Location" :"ទីតាំង"} values={this.state.provinces} icon="fa fa-map-marker"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={2} lg={2} style={{marginTop: '10px'}}>
                            <strong>
                                {
                                    loadLanguage() == "en" || loadLanguage() == undefined ? "Seller Address" :"អាសយដ្ឋានលក់"
                                }
                                <span style={{color: 'red'}}> *</span></strong>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Field name="address" component={FormTextArea} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={2} lgOffset={2} lg={2}>
                            <FormSubmit className="product-btn-free-post" error={error} invalid={invalid || this.state.submit} submitting={submitting} label={this.state.submit ? "Save..." : loadLanguage() == "en" || loadLanguage() == undefined ? "Save" :"រក្សាទុក"} />
                        </Col>
                        <Col xs={2} lg={2}>
                            <Button style={{ background: '#232f3e', color: 'white', height: '40px'}} onClick={() => location.href = `/${loadState().user.userType}`}>{loadLanguage() == "en" || loadLanguage() == undefined ? "Cancel" :"បោះបង់"}</Button>
                        </Col>
                    </Row>
                </form>
            </div>
        );
    }

}

Product = reduxForm({
    form: 'form_add_product',
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

        if ((values.startDate != "" && values.startDate != null) && (new Date(values.startDate).getTime() > new Date(values.endDate).getTime())) {
            errors.endDate = 'It must greater than START DATE !!'
        }

        if((values.startDate != "" && values.startDate != null) && (values.endDate == "" || values.endDate == null)){
            errors.startDate = 'END DATE can not empty !!'
        }
        if (values.type == undefined) {
            errors.type = "Please select your type";
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

})(Product);

function mapStateToProps(state) {
    return{
        thirdCategories: state.thirdCategories,
        addProduct: state.addProduct,
        initialValues: {
            seller: loadState() != undefined ? loadState().user.userName : '',
            phone1: loadState() != undefined ? loadState().user.phone.replace("+855","0") : '',
            email: loadState() != undefined ? loadState().user.email : '',
            location: loadState() != undefined ? loadState().user.location : '',
            address: loadState() != undefined ? loadState().user.address : '',
            phone2: loadState() != undefined ? loadState().user.otherPhones[0] : '',
            phone3: loadState() != undefined && loadState().user.otherPhones.length == 2 ? loadState().user.otherPhones[1] : '',
            discount: '',
            productName: '',
            description: ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchThirdCategoriesAction, insertProductAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)