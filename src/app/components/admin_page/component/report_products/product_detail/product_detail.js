import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Row, Col, Image, Table, Panel} from 'react-bootstrap';
//import './../list/style.css';
import { actionAdminGetProduct } from'./../../../../../actions/admin/product/product';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.actionAdminGetProduct(this.props.params.productId)
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

    render() {
        const product = this.props.adminGetProduct.products;
        return (
            <div >
                <br />
                <Link to="/admin/reports/product-report"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                <br/><br/>
                {product != undefined ?
                    <Row>
                        <Col xs={12} sm={12} md={2} lg={2}>
                            {
                                product[0].store_product.productImage[0] != "" ?
                                    <center><Image src={"/images/products/" +  product[0].store_product.productImage[0] } thumbnail /></center>
                                    :
                                    <center><Image src="/profile/default-profile.png" thumbnail /></center>
                            }
                        </Col>
                        <Col xs={12} sm={12} md={9} lg={9}>
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
                                        <td>{ProductDetail.dateFormat(product[0].store_product.discountFromDate)}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Discount End Date</b></td>
                                        <td>{ProductDetail.dateFormat(product[0].store_product.discountEndDate)}</td>
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
                                        <td>{ProductDetail.dateFormat(product[0].store_product.createDate)}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Expired Date</b></td>
                                        <td>{ProductDetail.dateFormat(product[0].store_product.expireDate)}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Block Date</b></td>
                                        <td>{ProductDetail.dateFormat(product[0].store_product.blockDate)}</td>
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

function mapStateToProps(state) {
    //console.log("Product:",state.adminGetProduct.products)
    return ({
        adminGetProduct: state.adminGetProduct
    });
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionAdminGetProduct }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);