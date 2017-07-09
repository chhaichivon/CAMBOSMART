import React from 'react';
import { Link, browserHistory} from 'react-router';
import { Panel, Button, Row, Col, Table, Image, Pagination, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { actionAdminListPromoteProductByUser, actionAdminApprovePromoteProduct, actionAdminDeletePromoteProduct } from './../../../../actions/admin/product/product';

let products = {
    promoteId: '',
    userId: ''
};

let status = {};
let id ='';
let ids = [];
let promoteType = "";
let success = false;
let error = false;
let d_id = "";
let new_price = 0;
let total_amount=0;

class ListPromoteProduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activePage: 1,
            updated_price: 0,
            deleted:{
                show: false,
                hide: false
            },
            sweetPropsDeleted: {
                type:"warning",
                title:"Delete?",
                text:"Are you sure want to delete this product?",
                showCancelButton:true
            }
        }
        success = false;
        error = false;
        this.props.adminApprovePromoteProduct.code = undefined;
    }

    componentWillMount() {
        if(this.props.params.userId != undefined || this.props.params.promoteId != undefined){
            localStorage.setItem("current_userId",this.props.params.userId);
            localStorage.setItem("current_promoteId",this.props.params.promoteId);
            products.userId = localStorage.getItem("current_userId");
            products.promoteId = localStorage.getItem("current_promoteId");
            this.props.actionAdminListPromoteProductByUser(products);
        }else{
            products.userId = localStorage.getItem("current_userId");
            products.promoteId = localStorage.getItem("current_promoteId");
            this.props.actionAdminListPromoteProductByUser(products);
        }
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

    handleApprove(){
        this.props.actionAdminApprovePromoteProduct({ id, ids, promoteType });
    }

    /* delete product */
    openDeleteProduct(_id, price){
        d_id = Object.values(_id)[0];
        new_price = new_price - price;
        this.setState({updated_price: new_price})
        this.setState({
            deleted: {
                show: true,
                hide: true
            }
        })
    }

    render(){
        if(this.props.adminListPromoteProductByUser.products != undefined) new_price = this.props.adminListPromoteProductByUser.products[0].price * this.props.adminListPromoteProductByUser.products.length;//this.props.adminListPromoteProductByUser.products[0].price;
        return(
            <div>
                <br/><br/>
                <Row>
                    <Col xs={12} sm={12} md={2} lg={2}>
                        <Link to="/admin/promote/list-boot-products"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2}></Col>
                    <Col xs={12} sm={12} md={2} lg={2}></Col>
                    <Col xs={12} sm={12} md={1} lg={1}></Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={6}>
                                    Total Money
                                </Col>
                                <Col sm={6}>
                                    <FormControl style={{color:'#E91E63',fontWeight:'bold'}} type="text" disabled value={"$ "+ new_price} />
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs={12} sm={12} md={1} lg={1}>
                        <Button bsStyle="primary" onClick={this.handleApprove.bind(this)}>Approve</Button>
                    </Col>
                </Row>
                <br/>
                { success == true ? <Panel header="Successfully approved merchant's request." bsStyle="success"></Panel> : null }
                { error == true ? <Panel header="Fail with approve merchant's request." bsStyle="danger"></Panel> : null }
                <div className="row">
                    <Table responsive bordered hover>
                        <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                        <tr>
                            <th style={{textAlign: 'center'}}>NO</th>
                            <th style={{textAlign: 'center'}}>IMAGE</th>
                            <th style={{textAlign: 'center'}}>NAME</th>
                            <th style={{textAlign: 'center'}}>PRICE</th>
                            <th style={{textAlign: 'center'}}>PROMOTE</th>
                            <th style={{textAlign: 'center'}}>DURATION</th>
                            <th style={{textAlign: 'center'}}>START DATE</th>
                            <th style={{textAlign: 'center'}}>EXPIRED DATE</th>
                            <th style={{textAlign: 'center'}}>PAY</th>
                            <th colSpan="2" style={{textAlign: 'center'}}>ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.adminListPromoteProductByUser.products == undefined ?
                            <tr>
                                <td colSpan="10">
                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                </td>
                            </tr>
                            :
                            this.props.adminListPromoteProductByUser.products.map((product, index) => {
                                total_amount = product.price;
                                ids.push(Object.values(product.promote_product._id)[0]);
                                id = Object.values(product._id)[0];
                                promoteType = product.typePromote;
                                let price = product.price;

                                return (
                                    <tr key={index}>
                                        {this.state.activeIndex == 1 ?
                                            <td style={{textAlign: 'center'}}>{index+1}</td> :
                                            <td style={{textAlign: 'center'}}>{index+((this.state.activePage-1)*10)+1}</td>
                                        }
                                        {product.promote_product.productImage[0] != undefined && product.promote_product.productImage[0] != "" ?
                                            <td>
                                                <Image src={"/images/products/" + product.promote_product.productImage[0]} circle width="25" height="25"/>
                                            </td>
                                            :
                                            <td>
                                                <Image src="/profile/default-profile.png" circle width="25" height="25"/>
                                            </td>
                                        }
                                        <td style={{textAlign: 'center'}}>{product.promote_product.productName}</td>
                                        <td style={{textAlign: 'center'}}>$ {product.promote_product.price}</td>
                                        <td style={{textAlign: 'center'}}>{product.typePromote}</td>
                                        <td style={{textAlign: 'center'}}>{product.duration +" weeks"}</td>
                                        <td style={{textAlign: 'center'}}>{ListPromoteProduct.dateFormat(product.startDate)}</td>
                                        <td style={{textAlign: 'center'}}>{ListPromoteProduct.dateFormat(product.endDate)}</td>
                                        <td style={{textAlign: 'center'}}>{"$ "+product.price}</td>
                                        <td style={{textAlign: 'center'}}>
                                            <Link to={"/admin/promote/detail-promote-product/"+Object.values(product.promote_product._id)} style={{"color":"green"}}>
                                                <i className="fa fa-check-square-o" aria-hidden="true">&nbsp;View</i>
                                            </Link>
                                        </td>
                                        <td style={{textAlign: 'center'}}>
                                            <Link to="" onClick={() => this.openDeleteProduct(product.promote_product._id, price)} style={{"color":"red"}}>
                                                <i className="fa fa-trash-o" aria-hidden="true">&nbsp;Delete</i>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </div>
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
                                    this.props.actionAdminDeletePromoteProduct(
                                        {
                                            productId: d_id,
                                            id: id
                                        }
                                    );
                                    setTimeout(function() {
                                        if(status != undefined){
                                            if(status.code == 200){
                                                this.setState({
                                                    sweetPropsDeleted: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"Product has been deleted successfully",
                                                        showCancelButton:false
                                                    },
                                                    deleted: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });
                                                setTimeout(function(){
                                                    window.location.assign('/admin/promote/list-promote-products/'+products.promoteId+'/'+products.userId);
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsDeleted: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot deleted this product",
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
        )
    }
}

function mapStateToProps(state) {
    if(state.adminListPromoteProductByUser.code != undefined ){

    }
    if(state.adminApprovePromoteProduct.code != undefined){
        success = true;
        error = false;
    }else{
        success = false;
    }
    if(state.adminDeletePromoteProduct.code != undefined){
        status = state.adminDeletePromoteProduct
    }
    return {
        adminListPromoteProductByUser: state.adminListPromoteProductByUser,
        adminDeletePromoteProduct: state.adminDeletePromoteProduct,
        adminApprovePromoteProduct: state.adminApprovePromoteProduct
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionAdminListPromoteProductByUser, actionAdminApprovePromoteProduct, actionAdminDeletePromoteProduct }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ListPromoteProduct)