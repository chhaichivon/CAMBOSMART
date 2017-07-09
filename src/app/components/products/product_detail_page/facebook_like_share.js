import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionAdminGetProduct } from'../../../actions/admin/product/product';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';
const FacebookIcon = generateShareIcon('facebook');
const { FacebookShareButton } = ShareButtons;

class FacebookLikeShare extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            img: "",
            store_pro: []
        };
    }

    componentWillMount() {
        let productIdUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        this.props.actionAdminGetProduct(productIdUrl);
    }

    componentWillReceiveProps(data) {
        this.setState({
            store_pro: data.adminGetProduct.products[0].store_product,
            img: "/images/products/" + data.adminGetProduct.products[0].store_product.productImage[0],
        });
    }

    render(){
        var productIdUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        return(
            <div className="row">
               <div className="col-xs-1 share_button">
                   <FacebookShareButton
                       url={"http://cambosmart.com/products/detail/"+this.state.store_pro._id}
                       title={this.state.store_pro.productName}
                       picture={"http://cambosmart.com"+this.state.img}
                   >
                       <FacebookIcon size={32}  />
                   </FacebookShareButton>
                   <div className="share"><i className="fa fa-share-alt" aria-hidden="true"></i></div>
               </div>

                <div className="col-xs-2 like">
                <div className="fb-like"
                     data-href={ "http://cambosmart.com/products/detail/" + productIdUrl }
                     data-layout="standard"
                     data-action="like"
                     data-size="small"
                     data-show-faces="false"
                >
                </div>
                </div>
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
    return bindActionCreators({ actionAdminGetProduct }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(FacebookLikeShare);

//export default FacebookLikeShare;