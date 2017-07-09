import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionAdminGetProduct } from'../../../actions/admin/product/product';
import { actionGetTotalStarRatingByProductId } from './../../../actions/products/rating';
import { Row, Col, Image } from 'react-bootstrap';
import moment from 'moment';
import StarRating from 'react-star-rating';
import { loadLanguage } from './../../../localstorages/local_storage';

let productIdUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

class StoreInformation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            store_pro: [],
            store_user: [],
            other_phones: [],
            total_rating: []
        };
    }

    componentWillMount() {
        this.props.actionAdminGetProduct(productIdUrl);
        this.props.actionGetTotalStarRatingByProductId(productIdUrl);
    }

    componentWillReceiveProps(data) {
        if(data.adminGetProduct.products != undefined) {
            this.setState({
                products: data.adminGetProduct.products[0],
                store_pro: data.adminGetProduct.products[0].store_product,
                store_user: data.adminGetProduct.products[0].store_user,
                other_phones: data.adminGetProduct.products[0].store_user.otherPhones
            });
        }
        if(data.getTotalStarRating[0] != undefined) {
            this.setState({
                total_rating: data.getTotalStarRating[0].detail
            });
        }
    }

    render(){
        Array.prototype.sum = function (prop) {
            var total = 0
            for ( var i = 0, _len = this.length; i < _len; i++ ) {
                total += this[i][prop]
            }
            return total
        }

        let today = new Date().getTime();
        let amountRating = 0;
        let totalStar = 0;
        if(this.state.total_rating != undefined) {
            amountRating = this.state.total_rating.sum('amount');
            totalStar = this.state.total_rating.sum('total');
        }

        let averageRating = totalStar / amountRating;
        averageRating = Math.floor(averageRating * 10) / 10;

        return(
            <div>
                <p className="bold_16">{loadLanguage() == "en" || loadLanguage() == undefined ? "Price" : "តម្លៃ"}:
                    <span className="bold_20_orange"> US ${ this.state.store_pro.discountEndDate > today ? 
                        this.state.store_pro.price - (this.state.store_pro.price * (this.state.store_pro.discount/100))
                        : this.state.store_pro.price
                    }</span>
                    <strike>{this.state.store_pro.discount != 0 && this.state.store_pro.discountEndDate > today ? ' US $'+ this.state.store_pro.price : null}</strike>
                </p>
                { this.state.store_pro.discount != 0.0 && this.state.store_pro.discountEndDate > today ? <p className="bold_16">{loadLanguage() == "en" || loadLanguage() == undefined ? "Discount" : "បញ្ចុះតម្លៃ"}: <span className="bold_20_orange">
                { this.state.store_pro.discount }.00%</span>
                    </p> 
                : null }
                {this.state.store_pro.discount != 0 && this.state.store_pro.discountEndDate > today ? 
                    <p className="bold_16">{loadLanguage() == "en" || loadLanguage() == undefined ? "Expired" : "ផុតកំណត់"}: {moment(this.state.store_pro.discountEndDate).format("DD-MMM-YYYY")}</p>
                    : null
                }
                <StarRating name="small-rating" 
                    caption={averageRating.toString() !== 'NaN' ? averageRating.toString() : null} 
                    size={20} totalStars={5} 
                    rating={averageRating.toString() !== 'NaN' ? parseInt(averageRating) : 0.1} 
                    /> <small>( { amountRating } Ratings)</small>
                <h4><b>{loadLanguage() == "en" || loadLanguage() == undefined ? "CONTACT OWNER" : "ម្ចាស់ទំនិញ"}:</b></h4>
                <p style={{lineHeight: 1.8}}>
                    <b>{loadLanguage() == "en" || loadLanguage() == undefined ? "Name" : "ឈ្មោះ"}: </b>{this.state.store_user.userName} <br/>
                    <b>{loadLanguage() == "en" || loadLanguage() == undefined ? "Shop" : "ហាង"}: </b>{this.state.products.storeName} <br/>
                    <b>{loadLanguage() == "en" || loadLanguage() == undefined ? "Phone" : "ទូរសព្ទ័"}:</b>{this.state.store_user.phone != "" ? this.state.store_user.phone :
                        (this.state.other_phones != "") ? 
                            ((this.state.other_phones[1] == null) ?  this.state.other_phones[0] 
                            : this.state.other_phones[0] + " / " + this.state.other_phones[1]) 
                        : null
                    }
                    {(this.state.other_phones != "" && this.state.store_user.phone != "") ? <br/> : null}
                    &emsp;&emsp;&emsp;&ensp;&nbsp;
                    {(this.state.other_phones != "" && this.state.store_user.phone != "") ? 
                        ((this.state.other_phones[1] == null) ?  this.state.other_phones[0] 
                        : this.state.other_phones[0] + " / " + this.state.other_phones[1]) 
                    : null
                    }<br/>
                    <b>{loadLanguage() == "en" || loadLanguage() == undefined ? "Email" : "អ៊ីម៉ែល"}: </b>{this.state.store_user.email}<br/>
                    <b>{loadLanguage() == "en" || loadLanguage() == undefined ? "Location" : "ទីតាំង"}: </b>{this.state.store_user.city}

                </p>
                <ul className="list-inline">
                    <li><a  className="viewstore" href={`/store/${this.state.store_user.userName}/${'1'}`}><p style={{ fontSize:"16px", fontWeight: 'bold'}}> {loadLanguage() == "en" || loadLanguage() == undefined ? "View all products" : "បង្ហាញទំនិញទាំងអស់"}</p></a></li>
                    {/*<li><img src="/icon/gif/head_arrows_left_animation_clipart.gif"/></li>*/}
                </ul>
                <Row>
                    {/*<Col sm={8}>
                        <p className="bold_16_orange"><i className="fa fa-comments-o"/> <span className="display_underline">{loadLanguage() == "en" || loadLanguage() == undefined ? "Chat to owner" : "ផ្ញើសារ"}:</span></p>
                        <div style={{marginTop: 25}}>
                            <a href="" title="facebook"><span className="social_icon_circle" style={{padding: '5px 10px', fontFamily: 'Arial'}}><i className="fa fa-facebook"/></span></a>
                            <a href="" title="LINE"><span className="social_icon_circle" style={{padding: '5px 6px', fontFamily: 'Arial'}}><i className="fa fa-comment"/></span></a>
                            <a href="" title="whatsapp"><span className="social_icon_circle" style={{padding: '5px 7px', fontFamily: 'Arial'}}><i className="fa fa-whatsapp"/></span></a>
                        </div>
                    </Col>*/}
                    <Col xs={12} sm={12} style={{paddingLeft: '5px',marginBottom:'2px'}}>
                        <a  className="map-product" href={'/store/'+ this.state.store_user.userName +'/contact'} target="_new">
                            <Image width="250" height="80" style={{border: '3px solid #f1e6e0'}}
                            src="http://www.sfmission.com/gallery_files/site_pics/Asia/Cambodia/Phnom-Penh/Maps_and_Guides/Phnom-Penh-google-maps.jpg" />
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        adminGetProduct: state.adminGetProduct,
        getTotalStarRating: state.getTotalStarRating
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        actionAdminGetProduct,
        actionGetTotalStarRatingByProductId
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(StoreInformation);