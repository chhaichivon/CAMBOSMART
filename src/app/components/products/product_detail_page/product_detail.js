import React from 'react';
import { zoom } from 'jquery-zoom';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionAdminGetProduct } from'../../../actions/admin/product/product';
import { actionPostStarRating, actionGetStarRatingByProIdAndIp } from './../../../actions/products/rating';
import { actionPostSubscribe, actionGetSubscribeByStoreIdAndUserId, actionDeleteSubscribe } from './../../../actions/store/subscribe';
import { countProductViewAction } from './../../../actions/products/products';
import { Row, Col, Image } from 'react-bootstrap';
import StarRating from 'react-star-rating';
import '../../../../../node_modules/react-star-rating/dist/css/react-star-rating.min.css';
import { saveState, loadState } from '../../../localstorages/local_storage';
import moment from 'moment';
import SweetAlert from 'sweetalert-react';
import './style.css';
import StoreInformation from './store_information';
import Galleries from './galleries';
import SubscribeStore from './subscribe_store';
import RatingProduct from './rating_product';
import FacebookComment from './facebook_comment';
import FacebookLikeShare from './facebook_like_share';
import ProductViewTotal from './product_view_total';

class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            storeId: "",
            categoryName: "",
            store_pro: []
        };
    }

    componentWillReceiveProps(data) {
        this.setState({
            storeId: Object.values(data.adminGetProduct.products[0]._id)[0],
            categoryName: data.adminGetProduct.products[0].categories.categoryName,
            store_pro: data.adminGetProduct.products[0].store_product
        });
        this.props.handleGetCategoryName(data.adminGetProduct.products[0].categories.categoryName);
    }

    componentWillMount() {
        let productIdUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        this.props.actionAdminGetProduct(productIdUrl);
    }

    render(){
        let  productView = '';
        if(this.state.storeId != "") window.sessionStorage.setItem("storeIdDetail", this.state.storeId);
            this.props.adminGetProduct != undefined ?
                this.props.adminGetProduct.products != undefined ?
                        this.props.adminGetProduct.products.map((product) => {
                            productView = product.views;
                        })
                    :
                    null
                :
                null
        return(
            <div className="row">
                <Col xs={12} sm={12} md={12} lg={12} className="product-detail">
                    <h3>{this.state.store_pro.productName}</h3>
                    <div className="img-detail">
                        <Galleries />
                        <Col xs={4} sm={4} md={4} className="box-user-info" style={{paddingTop: 10}}>
                            <StoreInformation />
                        </Col>
                    </div>
                    {/* Facebook Plugin */}
                    <Col xs={12} sm={12} md={12} lg={12} style={{marginTop: 15}}>
                        <div style={{marginLeft: 5}}>
                            <FacebookLikeShare />
                            <div id="frmRate" style={{marginTop: 10}}>
                                {/*<SubscribeStore storeId={this.state.storeId} />
                                &nbsp;&nbsp; */}
                                <RatingProduct />
                            </div>
                            <p style={{marginTop: 15, wordWrap: 'break-word', whiteSpace: 'pre-line'}}>{this.state.store_pro.productDescription}</p>
                            <ProductViewTotal total={productView}/>
                            <FacebookComment />
                        </div>
                    </Col>
                </Col>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log("DETAIL : ",state.adminGetProduct)
    return {
        adminGetProduct: state.adminGetProduct
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        actionAdminGetProduct
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);