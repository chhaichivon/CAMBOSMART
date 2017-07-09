import React from 'react';
import { Button, Row, Col, Table, Image, Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionAdminListPromotedProductsExpired, actionUpdatePromotedProductExpired } from './../../../../../actions/admin/promoted_package/promote_product_package';

let products = {
    page : 1,
    limit : 10
};

class ListPromotedProductExpired extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            activePage: 1
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        this.props.actionAdminListPromotedProductsExpired(products);
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

    static handleItem(total) {
        if (total <= 10) {
            return 1
        } else if (total % 10 == 0) {
            return total / 10
        } else if (total % 10 > 0) {
            return parseInt(total/10) + 1
        }
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        products.page = eventKey;
        this.props.actionAdminListPromotedProductsExpired(products);
    }

    updateExpiredProduct(){
        this.props.actionUpdatePromotedProductExpired();
    }

    render(){
        let total = 0;
        return(
            <div>
                <br/><br/><br/>
                <Row>
                    <Col xs={12} sm={12} md={11} lg={11}></Col>
                    <Col xs={12} sm={12} md={1} lg={1}>
                        <Button bsStyle="primary" onClick={this.updateExpiredProduct.bind(this)}>UPDATED</Button>
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
                            <th style={{textAlign: 'center'}}>PRICE</th>
                            <th style={{textAlign: 'center'}}>DISCOUNT</th>
                            <th style={{textAlign: 'center'}}>POST DATE</th>
                            <th style={{textAlign: 'center'}}>EXPIRED DATE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.listPromotedProductsExpired.promoted == undefined ?
                            <tr>
                                <td colSpan="9">
                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                </td>
                            </tr>
                            :
                            this.props.listPromotedProductsExpired.promoted.map((product, index) => {
                                total = product.total;
                                return (
                                    <tr key={index}>
                                        {this.state.activeIndex == 1 ?
                                            <td style={{textAlign: 'center'}}>{index+1}</td> :
                                            <td style={{textAlign: 'center'}}>{index+((this.state.activePage-1)*10)+1}</td>
                                        }
                                        {product.products.productImage[0] != undefined && product.products.productImage[0] != "" ?
                                            <td>
                                                <Image src={"/images/products/" + product.products.productImage[0]} circle width="25" height="25"/>
                                            </td>
                                            :
                                            <td>
                                                <Image src="/profile/default-profile.png" circle width="25" height="25"/>
                                            </td>
                                        }
                                        <td >{product.products.productName}</td>
                                        <td >{"$ "+product.products.price}</td>
                                        <td >{product.products.price + " %"}</td>
                                        <td >{ListPromotedProductExpired.dateFormat(product.products.createDate)}</td>
                                        <td >{ListPromotedProductExpired.dateFormat(product.products.expireDate)}</td>
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
                                    items={ListPromotedProductExpired.handleItem(total)}
                                    maxButtons={5}
                                    activePage={this.state.activePage}
                                    onSelect={this.handleSelect}
                        />
                    }

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listPromotedProductsExpired: state.listPromotedProductsExpired,
        updatePromotedProductsExpired: state.updatePromotedProductsExpired
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionAdminListPromotedProductsExpired, actionUpdatePromotedProductExpired }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPromotedProductExpired)

