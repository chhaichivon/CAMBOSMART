import React from 'react';
import { zoom } from 'jquery-zoom';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionAdminGetProduct } from'../../../actions/admin/product/product';
import { Row, Col, Image } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';

class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            galleries: [],
            img: "",
            photoIndex: 0,
            isOpen: false
        };
    }

    componentWillReceiveProps(data) {
        this.setState({
            galleries: data.adminGetProduct.products[0].store_product.productImage,
            img: "/images/products/" + data.adminGetProduct.products[0].store_product.productImage[0],
        });
    }

    componentWillMount() {
        var productIdUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        this.props.actionAdminGetProduct(productIdUrl);
    }

    changeImage(path) {
        let index = this.state.galleries.findIndex((item => item === path));
        this.setState({
            img: "/images/products/" + path,
            photoIndex: index
        });
    }

    renderGalleries = (imgs) => {
        const settings = {
            className: 'center',
            infinite: false,
            centerPadding: '60px',
            slidesToShow: 5,
            swipeToSlide: true,
            responsive: [ { breakpoint: 364, settings: { slidesToShow: 2} },{ breakpoint: 515, settings: { slidesToShow: 3 } }]
        };
        const products = this.props.adminGetProduct.products;
        return(
            <div>
                {products != undefined ?
                    <Slider {...settings}>
                        {this.state.galleries.map((imgs, index) => 
                            <a key={index} onClick={() => {this.changeImage(imgs)}}>
                                <img width="80" height="80" src={"/images/products/" + imgs}/>
                            </a>
                        )}
                    </Slider>
                :
                null
                }
            </div>
        );
    }
    render(){
        const {
            photoIndex,
            isOpen,
        } = this.state;

        return(
            <div>
                <Col xs={8} sm={8} md={8} className="padding_left_right">
                    <Col xs={12} sm={12} md={12} className="padding_left_right">
                        <span className='zoom'>
                            <a href="javascript:(0)" onClick={() => this.setState({ isOpen: true })}>
                                <img src={this.state.img} />
                            </a>
                        </span>
                    </Col>
                    <Col xs={12} sm={12} md={12} className="padding_left_right sub-gallery">
                        {this.renderGalleries()}
                    </Col>
                </Col>
                {isOpen &&
                    <Lightbox
                        mainSrc={"/images/products/" + this.state.galleries[photoIndex]}
                        nextSrc={"/images/products/" + this.state.galleries[(photoIndex + 1) % this.state.galleries.length]}
                        prevSrc={"/images/products/" + this.state.galleries[(photoIndex + this.state.galleries.length - 1) % this.state.galleries.length]}

                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + this.state.galleries.length - 1) % this.state.galleries.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % this.state.galleries.length,
                        })}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
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