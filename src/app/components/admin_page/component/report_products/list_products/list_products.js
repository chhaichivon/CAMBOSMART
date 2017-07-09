import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Table, Image, Pagination, Button, Row, Col } from 'react-bootstrap';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import LocationField from './../../products/components/location_filed';
import ProductTypeField from  './../../products/components/type_field';
import UserTypeField from './../component/user_type_field';
import StatusField from './../../products/components/status_field';
import MinPriceFiled from './../../products/components/min_price_field';
import MaxPriceFiled from './../../products/components/max_price_field';
import NameField from './../../products/components/name_field';
import UserNameField from './../component/user_name_field';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import FormDatePicker from './../../../../shared_component/redux_form_fields/form_datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { actionAdminListProductsReport } from './../../../../../actions/admin/product/product';
import './report-por.css';

let products = {
    page: 1,
    limit: 20,
    product: {
        storeLocation:"",
        productType: "",
        status: 1,
        fromDate: "1700-1-1",
        toDate: "1700-12-1",
        startPrice: -1,
        endPrice: -1,
        userName: "",
        userType:""
    }
};

let id='';
let d_id = "";
let status = {};
class ListProduct extends React.Component{
    static handlePrint(){
        let divToPrint = document.getElementById('product-report');
        let htmlToPrint = '' +
            '<style type="text/css">' +
            'table thead {' +
            'border:1px solid #000;'+
            'margin-right:0;' +
            'color:black'+
            'background-color:#000;'+
            '}' +
            'tr td {' +
            'border-bottom:1px solid gray;'+
            'background-color:#fff;'+
            '}' +
            '</style>';
        htmlToPrint += divToPrint.outerHTML;
        let newWin = window.open("");
        newWin.document.write('<center>'+"cambo-smart.com(report)"+'</center>');
        newWin.document.write(htmlToPrint);
        newWin.print();
        newWin.close();

    }

    constructor() {
        super();
        this.state = {
            startDate: null,
            endDate: null,
            activePage: 1,
            block: {
                show: false,
                hide: false
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
        this.props.actionAdminListProductsReport(products);
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
        let userName = "";
        let userType = "";
        let productType = "";
        let productStatus = 1;
        let startDate = "1700-1-1";
        let endDate = "1700-12-1";
        let minPrice = -1;
        let maxPrice = -1;


        if(value.userName != undefined ){
            userName = value.userName;
        }
        if(value.userType != undefined ){
            userType = value.userType;
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
            userName:userName,
            userType:userType
        };
        this.props.actionAdminListProductsReport(products);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        products.page = eventKey;
        products.limit = 20;
        this.props.actionAdminListProductsReport(products);
    }

    static handleItem(total) {
        if (total <= 20) {
            return 1
        } else if (total % 20 == 0) {
            return total / 20
        } else if (total % 20 > 0) {
            return parseInt(total/20) + 1
        }
    }


    handleReset(data){
        location.href="/admin/reports/product-report"
    }

    render(){
        const {handleSubmit, submitting} = this.props;
        let total = 0;
        return (
            <div>
                <br/>
                <div className="row list-product-report">
                    <form onSubmit={handleSubmit(this.formSubmit)}>
                        <div className="row list-product-report">
                            <div className="col-xs-12 col-sm-12 col-lg-2 report">
                                <Field name="productLocation" type="select" component={LocationField} placeholder="All Locations" values={this.state.provinces} icon="fa fa-map-marker"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2 report">
                                <Field name="productType" type="select" component={ProductTypeField}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2 report">
                                <Field name="productStatus" type="select" component={StatusField}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3 report">
                                <Field name="startDate" component={FormDatePicker} placeholder="From Date"
                                       defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3 report">
                                <Field name="endDate" component={FormDatePicker} placeholder="To Date"
                                       defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-2 report">
                                <Field name="minPrice" type="text" valuse={this.state.minPrice} component={MinPriceFiled} label="Min Price" icon="fa fa-money"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2 report">
                                <Field name="maxPrice" type="text" values={this.state.maxPrice} component={MaxPriceFiled} label="Max Price" icon="fa fa-money"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2 report">
                                <Field name="userType" type="select" component={UserTypeField}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3 report">
                                <Field name="userName" type="text" component={UserNameField} label="User Name" icon="fa fa-pencil"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2 search">
                                <FormSubmit submitting={submitting} label="SEARCH" icon="fa fa-search"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-1">
                                <Button className="reset-button" bsStyle="info" onClick={this.handleReset.bind(this)}>Reset</Button>
                            </div>

                        </div>
                    </form>
                </div>
                <Row>
                    <Col xs={6} sm={6} md={10} lg={10}>

                                <div className="wrap-report">
                                    {
                                        this.props.adminListProductReport.products == undefined ? null :
                                        <ul className="all-product">
                                            {
                                                this.props.adminListProductReport.products.map((product, index) => {
                                                    total = product.total
                                                })}
                                            <li>Total Product:</li>
                                            <li>{total}</li>
                                        </ul>
                                    }
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={2} lg={2} style={{ paddingRight:'0px' }}>

                        <Button className="print-button" bsStyle="info" onClick={ListProduct.handlePrint}><i className="print fa fa-print" aria-hidden="true"></i>Print</Button>
                    </Col>
                </Row>
                <br/>
                <div className="row">
                    <Table responsive bordered hover id="product-report">
                        <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                        <tr>
                            <th style={{textAlign: 'center'}}>NO</th>
                            <th style={{textAlign: 'center'}}>IMAGE</th>
                            <th style={{textAlign: 'center'}}>USER NAME</th>
                            <th style={{textAlign: 'center'}}>USER TYPE</th>
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
                        {this.props.adminListProductReport.products == undefined ?
                            <tr>
                                <td colSpan="9">
                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                </td>
                            </tr>
                            :
                            this.props.adminListProductReport.products.map((product, index) => {
                                total = product.total;
                                //console.log("TOTAL",total)
                                return (
                                    <tr key={index}>
                                        {this.state.activeIndex == 1 ?
                                            <td style={{textAlign: 'center'}}>{index+1}</td> :
                                            <td style={{textAlign: 'center'}}>{index+((this.state.activePage-1)*20)+1}</td>
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
                                        { product.store_user.userName == undefined ? null: <td>{product.store_user.userName}</td> }
                                        { product.store_user.userType == undefined ? null: <td>{product.store_user.userType}</td> }
                                        <td >{product.store_product.productName}</td>
                                        <td >{product.store_product.productType}</td>
                                        <td >{product.store_product.price}</td>
                                        { product.store_user.city == undefined ? null: <td>{product.store_user.city}</td> }
                                        <td >{ListProduct.dateFormat(product.store_product.createDate)}</td>
                                        <td >{ListProduct.changeStatus(product.store_product.status)}</td>
                                        <td style={{textAlign: 'center'}}>
                                            <Link to={"/admin/reports/product-detail/"+Object.values(product.store_product._id)} style={{"color":"#03A9F4"}}>
                                                <i className="fa fa-eye" aria-hidden="true">&nbsp;View</i>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                    {total <=20
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
                                    items={ListProduct.handleItem(total)}
                                    maxButtons={5}
                                    activePage={this.state.activePage}
                                    onSelect={this.handleSelect}
                        />
                    }
                </div>
            </div>
        );
    }
}
ListProduct = reduxForm({
    form: 'form_report_products',
    validate: function (values) {
        let regex_float = /^-?\d*(\.\d+)?$/;
        const errors = {};
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
        if(values.startDate != undefined){
            if(values.endDate == undefined ) {
                errors.endDate = "End Date cannot be empty!!"
            }
        }
        if(values.endDate != undefined){
            if(values.startDate == undefined ) {
                errors.endDate = "Start Date cannot be empty!!"
            }
        }
        if(values.minPrice != undefined){
            if(values.maxPrice == undefined ){
                errors.maxPrice = "Max Price cannot be empty!!"
            }
        }
        if(values.maxPrice != undefined){
            if(values.minPrice == undefined ){
                errors.minPrice = "Min Price cannot be empty!!"
            }
        }
        if (new Date(values.startDate).getTime() > new Date(values.endDate).getTime()) {
            errors.endDate = 'End Date must greater or equal Start Date !!'
        }
        if(Number(values.minPrice) > Number(values.maxPrice)){
            errors.maxPrice = 'Max Price must greater or equal Min Price !!'
        }
        return errors
    }
})(ListProduct);
function mapStateToProps(state) {
    return {
        adminListProductReport: state.adminListProductReport
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionAdminListProductsReport }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct)
