import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Row, Col, Image, Table, Panel} from 'react-bootstrap';
import { actionMemberGetPromotedProduct } from './../../../../../actions/member/common';
import { loadState, saveProduct } from './../../../../../localstorages/local_storage';

let product = {
    token: loadState() != undefined ? loadState().token : '',
    id : ''
};

class MemberDetailProduct extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount() {
        product.id = this.props.params.id;
        this.props.actionMemberGetPromotedProduct(product);
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

    render(){
        const product = this.props.getPromotedProduct.product;
        return (
            <div >
                <br />
                <Link to="/merchant"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                <br/><br/>
                {product != undefined ?
                    <Row>
                        <Col xs={2} sm={2} md={2} lg={2}>
                            {
                                product.productImage[0] != "" ?
                                    <center><Image src={"/images/products/" +  product.productImage[0] } thumbnail /></center>
                                    :
                                    <center><Image src="/profile/default-profile.png" thumbnail /></center>
                            }
                        </Col>
                        <Col xs={9} sm={9} md={9} lg={9}>
                            <Panel header="Product Information">
                                <Table responsive>
                                    <tbody>
                                    <tr>
                                        <td><b>Name</b></td>
                                        <td>{product.productName}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Description</b></td>
                                        <td>{product.productDescription}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Original Price</b></td>
                                        <td>{product.price}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Discount</b></td>
                                        <td>{product.discount+"%"}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Price</b></td>
                                        <td>$ {product.price - (product.price*(product.discount/100))}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Discount From Date</b></td>
                                        <td>{MemberDetailProduct.dateFormat(product.discountFromDate)}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Discount End Date</b></td>
                                        <td>{MemberDetailProduct.dateFormat(product.discountEndDate)}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Product Type</b></td>
                                        <td>{product.productType}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Post Date</b></td>
                                        <td>{MemberDetailProduct.dateFormat(product.createDate)}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Status</b></td>
                                        <td>
                                            {product.status == -1 ? "Block" : null }
                                            {product.status == 0 ? "Deleted" : null }
                                            {product.status == 1 ? "Active" : null }
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

function mapStateToProps(state){
    //console.log("DETAIL PRODUCTS",state.getPromotedProduct)
    return{
        getPromotedProduct: state.getPromotedProduct
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionMemberGetPromotedProduct }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (MemberDetailProduct);