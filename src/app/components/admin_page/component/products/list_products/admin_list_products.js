import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Table, Image, Pagination, Button, Row, Col } from 'react-bootstrap';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import LocationField from './../components/location_filed';
import ProductTypeField from  './../components/type_field';
import StatusField from './../components/status_field';
import MinPriceFiled from './../components/min_price_field';
import MaxPriceFiled from './../components/max_price_field';
import NameField from './../components/name_field';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import FormDatePicker from './../../../../shared_component/redux_form_fields/form_datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { actionAdminListProducts, actionAdminUpdateProductStatus, actionAdminDeleteProduct } from './../../../../../actions/admin/product/product';
import { actionPostNotification } from '../../../../../actions/notification/notification';
import { loadState  } from './../../../../../localstorages/local_storage';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';

let products = {
    page: 1,
    limit: 10,
    product: {
        storeLocation:"",
        productType: "",
        status: 1,
        fromDate: "1700-1-1",
        toDate: "1700-12-1",
        startPrice: -1,
        endPrice: -1,
        name: ""
    }
};

let id='';
let d_id = "";
let status = {};
let userId = {};
let blockDescription = "";

class AdminListProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: null,
            endDate: null,
            activePage: 1,
            block:{
                show: false,
                hide: false
            },
            sweetPropsBlock: {
                type:"warning",
                title:"Block Product?",
                text:"Are you sure want to block this product?",
                showCancelButton:true
            },
            unblock:{
                show: false,
                hide: false
            },
            sweetPropsUnblock: {
                type:"warning",
                title:"Unblock Product?",
                text:"Are you sure want to unblock this product?",
                showCancelButton:true
            },
            deleted:{
                show: false,
                hide: false
            },
            sweetPropsDeleted: {
                type:"warning",
                title:"Delete Product?",
                text:"Are you sure want to delete this product?",
                showCancelButton:true
            },
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

        this.handleFromDate = this.handleFromDate.bind(this);
        this.handleToDate = this.handleToDate.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        this.props.actionAdminListProducts(products);
    }

    static dateFormat(date) {
        let monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        let newDate = new Date(date);
        let day = newDate.getDate();
        let monthIndex = newDate.getMonth();
        let year = newDate.getFullYear();
        return day.toString().concat(" ", monthNames[monthIndex], " ", year.toString());
    }

    static changeStatus(status) {
        if (status == 1) {
            return 'Active';
        } else {
            return 'Block';
        }
    }

    handleFromDate(date) {
        this.setState({
            startDate: date
        });
    }

    handleToDate(date) {
        this.setState({
            endDate: date
        });
    }

    formSubmit(value) {
        let productLocation = "";
        let productName = "";
        let productType = "";
        let productStatus = 1;
        let startDate = "1700-1-1";
        let endDate = "1700-12-1";
        let minPrice = -1;
        let maxPrice = -1;

        if (value.productName != undefined) {
            productName = value.productName;
        }
        if (value.productLocation != undefined) {
            productLocation = value.productLocation;
        }
        if (value.productStatus != undefined) {
            productStatus = Number(value.productStatus);
        }
        if (value.productType != undefined) {
            productType = value.productType;
        }
        if (value.startDate != undefined && value.endDate != undefined) {
            startDate = value.startDate;
            endDate = value.endDate;
        }
        if (value.minPrice != undefined && value.maxPrice != undefined) {
            minPrice = Number(value.minPrice);
            maxPrice = Number(value.maxPrice);
        }

        this.setState({
            activePage: 1
        });
        products.product = {
                storeLocation: productLocation,
                productType: productType,
                status: productStatus,
                fromDate: startDate,
                toDate: endDate,
                startPrice: minPrice,
                endPrice: maxPrice,
                name: productName
        };
        this.props.actionAdminListProducts(products);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        products.page = eventKey;
        products.limit = 10;
        this.props.actionAdminListProducts(products);
    }

    static handleItem(total) {
        if (total <= 10) {
            return 1
        } else if (total % 10 == 0) {
            return total / 10
        } else if (total % 10 > 0) {
            return parseInt(total/10) + 1
        }
    }

    /* block product */
    openBlockProduct(_id, product){
        id = Object.values(_id)[0];
        userId = product.store_user._id;
        blockDescription = 'សួស្តី ' + product.store_user.userName + ','
            + "\r\n" + 'ទំនិញឈ្មោះ "' + product.store_product.productName + '" ដែលអ្នកបានធ្វើការដាក់លក់ គឺត្រូវបានខុសទៅនឹង បទបញ្ជានៃការដាក់លក់ទំនិញនៅលើគេហទំព័ររបស់ cambosmart.com យើងខ្ញុំ។ '
            + "\r\n" + 'គណនីរបស់លោកអ្នកនឹងត្រូវបានបិទដោយស្វ័យប្រវត្តិ ប្រសិនបើលោកអ្នកនូវតែបំពានទៅលើគោលការណ៍ណាមួយរបស់ក្រុមហ៊ុនចំនួន 3 ដង។ រក្សាសិទ្ធដោយ cambosmart.com ៕'
            + "\r\n"
            + "\r\n"
            + 'Hi ' + product.store_user.userName + ','
            + "\r\n" + 'Product name "' + product.store_product.productName + '" which has sold is wrong with AD POSTING RULES on the website of our cambosmart.com.'
            + "\r\n" + 'Your account will be disabled automatically if you violate any policy of 3 times. Copyright cambosmart.com. All rights reserved' ;

        this.setState({
            block: {
                show: true,
                hide: true
            }
        });
    }
    /* unblock product */
    openUnblockProduct(_id){
        id = Object.values(_id)[0];
        this.setState({
            unblock: {
                show: true,
                hide: true
            }
        })
    }
    /* delete product */
    openDeleteProduct(_id){
        d_id = Object.values(_id)[0];
        this.setState({
            deleted: {
                show: true,
                hide: true
            }
        })
    }

    handleReset(data){
       location.href="/admin/products/list-products"
    }

    render() {
        const {handleSubmit, submitting} = this.props;
        let total = 0;
        return (
            <div>
                <br/>
                <div className="row list-product">
                    <form onSubmit={handleSubmit(this.formSubmit)}>
                        <div className="row list-product">
                            <div className="col-xs-12 col-sm-12 col-lg-2">
                                <Field name="productLocation" type="select" component={LocationField} placeholder="All Locations" values={this.state.provinces} icon="fa fa-map-marker"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2">
                                <Field name="productType" type="select" component={ProductTypeField}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2">
                                <Field name="productStatus" type="select" component={StatusField}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="startDate" component={FormDatePicker} placeholder="From Date"
                                       defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="endDate" component={FormDatePicker} placeholder="To Date"
                                       defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="minPrice" type="text" values={this.state.minPrice} component={MinPriceFiled} label="Min Price" icon="fa fa-money"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="maxPrice" type="text" values={this.state.maxPrice} component={MaxPriceFiled} label="Max Price" icon="fa fa-money"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-4">
                                <Field name="productName" type="text" component={NameField} label="Name" icon="fa fa-pencil"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2">
                                <FormSubmit submitting={submitting} label="SEARCH" icon="fa fa-search"/>
                            </div>
                        </div>
                    </form>
                </div>
                <Row>
                    <Col xs={6} sm={6} md={11} lg={11}></Col>
                    <Col xs={6} sm={6} md={1} lg={1}>
                        <Button bsStyle="info" onClick={this.handleReset.bind(this)}>Reset</Button>
                    </Col>
                </Row>
                <br/>
                <div className="row">
                    <Table responsive bordered hover>
                        <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                        <tr>
                            <th style={{textAlign: 'center'}}>NO</th>
                            <th style={{textAlign: 'center'}}>IMAGE</th>
                            <th style={{textAlign: 'center'}}>NAME</th>
                            <th style={{textAlign: 'center'}}>TYPE</th>
                            <th style={{textAlign: 'center'}}>PRICE</th>
                            <th style={{textAlign: 'center'}}>LOCATION</th>
                            <th style={{textAlign: 'center'}}>POST DATE</th>
                            <th style={{textAlign: 'center'}}>STATUS</th>
                            <th colSpan="3" style={{textAlign: 'center'}}>ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.adminListProducts.products == undefined ?
                            <tr>
                                <td colSpan="9">
                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                </td>
                            </tr>
                            :
                            this.props.adminListProducts.products.map((product, index) => {
                                total = product.total;
                                return (
                                    <tr key={index}>
                                        {this.state.activeIndex == 1 ?
                                            <td style={{textAlign: 'center'}}>{index+1}</td> :
                                            <td style={{textAlign: 'center'}}>{index+((this.state.activePage-1)*10)+1}</td>
                                        }
                                        {product.store_product.productImage != undefined && product.store_product.productImage != "" ?
                                            <td>
                                                <Image src={"/images/products/" + product.store_product.productImage[0]} circle width="25" height="25"/>
                                            </td>
                                            :
                                            <td>
                                                <Image src="/profile/default-profile.png" circle width="25" height="25"/>
                                            </td>
                                        }
                                        <td >{product.store_product.productName}</td>
                                        <td >{product.store_product.productType}</td>
                                        <td >{"$ "+product.store_product.price}</td>
                                        { product.store_user.city == undefined ? null: <td>{product.store_user.city}</td> }
                                        <td >{AdminListProduct.dateFormat(product.store_product.createDate)}</td>
                                        <td >{AdminListProduct.changeStatus(product.store_product.status)}</td>
                                        <td style={{textAlign: 'center'}}>
                                            <Link to={"/admin/products/detail-product/"+Object.values(product.store_product._id)} style={{"color":"#03A9F4"}}>
                                                <i className="fa fa-eye" aria-hidden="true">&nbsp;View</i>
                                            </Link>
                                        </td>
                                    {/* block product */}
                                    { loadState().user.userType !== 'editor' ? 
                                        <td style={{textAlign: 'center'}}>
                                            {   product.store_product.status == 1 ?
                                                <Link to="" onClick={() => this.openBlockProduct(product.store_product._id, product)} style={{"color": "red"}}>
                                                    <i className="fa fa-ban" aria-hidden="true">&nbsp;Block</i>
                                                </Link> : null
                                            }
                                            {/* unblock product */}
                                            {   product.store_product.status == -1 ?
                                                <Link to="" onClick={() => this.openUnblockProduct(product.store_product._id)} style={{"color": "blue"}}>
                                                    <i className="fa fa-unlock-alt" aria-hidden="true">&nbsp;Unblock</i>
                                                </Link> : null
                                            }
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            {/* delete product */}
                                            {   product.store_product.status == -1 ?
                                                <Link to="" onClick={() => this.openDeleteProduct(product.store_product._id)} style={{"color": "red"}}>
                                                    <i className="fa fa-ban" aria-hidden="true">&nbsp;Delete</i>
                                                </Link> : null
                                            }

                                        </td>
                                        : null }
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                    {total <= 10
                        ?
                        null
                        :
                        <Pagination style={{ float: 'right'}}
                                    prev
                                    next
                                    first
                                    last
                                    ellipsis
                                    boundaryLinks
                                    items={AdminListProduct.handleItem(total)}
                                    maxButtons={5}
                                    activePage={this.state.activePage}
                                    onSelect={this.handleSelect}
                        />
                    }
                    {/* sweet alert to block product */}
                    <SweetAlert
                        show={this.state.block.show}
                        type={this.state.sweetPropsBlock.type}
                        title={this.state.sweetPropsBlock.title}
                        text={this.state.sweetPropsBlock.text}
                        showCancelButton={this.state.sweetPropsBlock.showCancelButton}
                        confirmButtonColor="#ff5a00"
                        onConfirm={
                            () => {
                                if(this.state.block.show && this.state.block.hide) {
                                    this.props.actionAdminUpdateProductStatus({id: id, status: -1});
                                    setTimeout(function() {
                                        if(status != undefined){
                                            if(status.code == 200){
                                                this.setState({
                                                    sweetPropsBlock: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"Product has been block successfully.",
                                                        showCancelButton:false
                                                    },
                                                    block: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });
                                                this.props.actionPostNotification({
                                                    token: loadState().token,
                                                    notification: {
                                                        userId: userId,
                                                        notificationType: "Block Product",
                                                        description: blockDescription,
                                                        isView: false,
                                                        isDirty: false
                                                    }
                                                });
                                                setTimeout(function(){
                                                    window.location.assign('/admin/products/list-products');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsBlock: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot block this product.",
                                                        showCancelButton:false
                                                    },
                                                    block: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                })
                                            }
                                        }}.bind(this), 200);
                                }else {
                                    this.setState({
                                        sweetPropsBlock: {
                                            type:"warning",
                                            title:"Are you sure?",
                                            text:"You want to block this product?",
                                            showCancelButton:true
                                        },
                                        block: {
                                            show: false,
                                            hide: false
                                        }
                                    })
                                }
                            }
                        }
                        onCancel={() => this.setState({block: {show: false, hide: false}})}
                    />
                    {/* sweet alert to unblock product */}
                    <SweetAlert
                        show={this.state.unblock.show}
                        type={this.state.sweetPropsUnblock.type}
                        title={this.state.sweetPropsUnblock.title}
                        text={this.state.sweetPropsUnblock.text}
                        showCancelButton={this.state.sweetPropsUnblock.showCancelButton}
                        confirmButtonColor="#ff5a00"
                        onConfirm={
                            () => {
                                if(this.state.unblock.show && this.state.unblock.hide) {
                                    this.props.actionAdminUpdateProductStatus({id: id, status: 1});
                                    setTimeout(function() {
                                        if(status != undefined){
                                            if(status.code == 200){
                                                this.setState({
                                                    sweetPropsUnblock: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"Product has been unblock successfully.",
                                                        showCancelButton:false
                                                    },
                                                    unblock: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });
                                                setTimeout(function(){
                                                    window.location.assign('/admin/products/list-products');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsUnblock: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot unblock this product.",
                                                        showCancelButton:false
                                                    },
                                                    unblock: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                })
                                            }
                                        }}.bind(this), 200);
                                }else {
                                    this.setState({
                                        sweetPropsUnblock: {
                                            type:"warning",
                                            title:"Are you sure?",
                                            text:"You want to unblock this product?",
                                            showCancelButton:true
                                        },
                                        unblock: {
                                            show: false,
                                            hide: false
                                        }
                                    })
                                }
                            }
                        }
                        onCancel={() => this.setState({unblock: {show: false, hide: false}})}
                    />
                    {/* sweet alert to delete product */}
                    <SweetAlert
                        show={this.state.deleted.show}
                        type={this.state.sweetPropsDeleted.type}
                        title={this.state.sweetPropsDeleted.title}
                        text={this.state.sweetPropsDeleted.text}
                        showCancelButton={this.state.sweetPropsDeleted.showCancelButton}
                        confirmButtonColor="#ff5a00"
                        onConfirm={
                            () => {
                                if(this.state.deleted.show && this.state.deleted.hide) {
                                    this.props.actionAdminDeleteProduct(d_id);
                                    setTimeout(function() {
                                        if(status != undefined){
                                            if(status.code == 200){
                                                this.setState({
                                                    sweetPropsDeleted: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"Product have been deleted successfully.",
                                                        showCancelButton:false
                                                    },
                                                    deleted: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });
                                                setTimeout(function(){
                                                    window.location.assign('/admin/products/list-products');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsDeleted: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot deleted this product.",
                                                        showCancelButton:false
                                                    },
                                                    deleted: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                })
                                            }
                                        }}.bind(this), 200);
                                }else {
                                    this.setState({
                                        sweetPropsDeleted: {
                                            type:"warning",
                                            title:"Are you sure?",
                                            text:"You want to delete this product?",
                                            showCancelButton:true
                                        },
                                        deleted: {
                                            show: false,
                                            hide: false
                                        }
                                    })
                                }
                            }
                        }
                        onCancel={() => this.setState({deleted: {show: false, hide: false}})}
                    />
                </div>
            </div>
        );
    }
}


AdminListProduct = reduxForm({
    form: 'form_list_products',
    validate: function (values) {
        const errors = {};
        let regex_float = /^-?\d*(\.\d+)?$/;
        if (values.minPrice != '') {
            if(!regex_float.test(values.minPrice)){
                errors.minPrice = 'Please enter number only!'
            }
        }else {}

        if(Number(values.minPrice) >= 0 && (Number(values.maxPrice) < Number(values.minPrice))){
            errors.maxPrice = 'End price must greater than or equal start price !'
        }else{}

        if (values.maxPrice != '') {
            if(!regex_float.test(values.maxPrice)){
                errors.maxPrice = 'Please enter number only!'
            }

        }else {}

        if (new Date(values.startDate).getTime() > new Date(values.endDate).getTime()) {
            errors.endDate = 'End Date must greater or equal Start Date !!'
        }
        if(Number(values.minPrice) > Number(values.maxPrice)){
            errors.maxPrice = 'Max Price must greater or equal Min Price !!'
        }
        return errors
    }
})(AdminListProduct);

function mapStateToProps(state) {
    if(state.adminUpdateProductStatus.code != undefined){
        status = state.adminUpdateProductStatus
    }
    if(state.adminDeleteProduct.code != undefined){
        status = state.adminDeleteProduct
    }
    return {
        adminListProducts: state.adminListProducts,
        adminUpdateProductStatus: state.adminUpdateProductStatus,
        adminDeleteProduct: state.adminDeleteProduct,
        postNotification: state.postNotification
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionAdminListProducts, actionAdminUpdateProductStatus, actionAdminDeleteProduct, actionPostNotification }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminListProduct)
