import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import { Field, reduxForm, reset } from 'redux-form';
import {connect} from "react-redux";
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import FormDatePicker from './../../../../shared_component/redux_form_fields/form_datepicker';
import MistakeField from './../components/mistake_field';
import {Row, Col, Image, Table,Modal,Button, Panel} from 'react-bootstrap';
import NameField from './../components/name_field';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';

import { actionAdminGetProduct,actionAdminUpdateStatusProduct } from'./../../../../../actions/admin/product/product';

class AdminDetailProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            mistakeDate: null,
            show:false
        };
        this.handleFromDate = this.handleFromDate.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    componentWillMount() {
        this.props.actionAdminGetProduct(this.props.params.productId);
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
    handleFromDate(date) {
        this.setState({
            mistakeDate: date
        });
    }
    formSubmit(values) {
       this.props.actionAdminUpdateStatusProduct(this.props.params);
       window.location.assign('/admin/products/detail-product/'+this.props.params.productId);
    }


    render() {
        let close = () => this.setState({ show: false});
        const { handleSubmit, submitting} = this.props;
        const product = this.props.adminGetProduct.products;
        console.log("product",product);
        return (
            <div >
                <br />
                <Link to="/admin/products/list-products"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                <br/><br/>
                {product != undefined ?
                    <Row>
                        <Col xsOffset={2} xs={8} sm={8} md={8} lg={8}>
                            {
                                product[0].store_product.productImage !=undefined ?
                                    <ul className="image-detail" >
                                    {
                                    product[0].store_product.productImage.map((image,i)=>{
                                        return(
                                              <li  key={i}>  <Image src={`/images/products/${image}`} thumbnail/></li>
                                        )
                                   })}
                                </ul>
                                    :
                                    null
                            }
                        </Col>
                        <Col xsOffset={2} xs={8} sm={8} md={8} lg={8}>
                            <Panel header="Product Information">
                                <Table responsive>
                                    <tbody>
                                    <tr>
                                        <td><b>Name</b></td>
                                        <td>{product[0].store_product.productName}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Description</b></td>
                                        <td>{product[0].store_product.productDescription}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Original Price</b></td>
                                        <td>{product[0].store_product.price}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Discount</b></td>
                                        <td>{product[0].store_product.discount+"%"}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Price</b></td>
                                        <td>$ {product[0].store_product.price - (product[0].store_product.price*(product[0].store_product.discount/100))}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Discount From Date</b></td>
                                        <td>{AdminDetailProduct.dateFormat(product[0].store_product.discountFromDate)}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Discount End Date</b></td>
                                        <td>{AdminDetailProduct.dateFormat(product[0].store_product.discountEndDate)}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Product Type</b></td>
                                        <td>{product[0].store_product.productType}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Store Name</b></td>
                                        <td>{product[0].storeName}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Location</b></td>
                                        <td>{product[0].store_user.city}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Post Date</b></td>
                                        <td>{AdminDetailProduct.dateFormat(product[0].store_product.createDate)}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Expired Date</b></td>
                                        <td>{AdminDetailProduct.dateFormat(product[0].store_product.expireDate)}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Block Date</b></td>
                                        <td>{AdminDetailProduct.dateFormat(product[0].store_product.blockDate)}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Status</b></td>
                                        <td>
                                            {product[0].store_product.status == -1 ? "Block" : null }
                                            {product[0].store_product.status == 0 ? "Deleted" : null }
                                            {product[0].store_product.status == 1 ? "Active" : null }
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Panel>
                        </Col>
                    </Row>
                    :
                    null
                }

            </div>
        );
    }
}
AdminDetailProduct = reduxForm({
    form: 'form_list_products',
    validate: function (values) {
        const errors = {};
        if(values.startDate != undefined){
            if(values.endDate == undefined ) {
                errors.endDate = "End Date cannot be empty!!"
            }
        }
        return errors;

    }
})(AdminDetailProduct);

function mapStateToProps(state) {
    return ({

        adminGetProduct: state.adminGetProduct,
        adminUpdateStatusProduct: state.adminUpdateStatusProduct
    });
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionAdminGetProduct, actionAdminUpdateStatusProduct }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminDetailProduct);