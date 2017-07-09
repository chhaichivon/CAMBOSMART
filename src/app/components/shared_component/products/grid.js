import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {Col,Row} from 'react-bootstrap';
import AdvGrid from '../../shared_component/advertisment/vertical';
import {displayAdvertisementsAction} from '../../../actions/admin/advertisement/advertisement';
import {countProductViewAction} from '../../../actions/products/products';
import './style.css';

class ProductGrid extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.displayAdvertisementsAction();
    }

    handleViewDetail(id){
        this.props.countProductViewAction(id);
        location.href = `/products/detail/${id}`;
    }

    render(){
        let column = this.props.col != undefined ? this.props.col :  3;
        let type = this.props.type != undefined ? this.props.type : 'normal';
        let isPage = this.props.pageType != undefined ? this.props.pageType : 'home';

        const display = this.props.display;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };

        function getDurationPost(createDate){
            const date = parseInt(new Date().getTime() -createDate);
            if(date < 60000){
                return '1 minutes';
            }else if(date < 3600000){
                return `${parseInt(date/60000)} minutes`;
            }else if(date < 86400000){
                return `${parseInt(date/3600000)} hours`;
            }else if(date < 604800000){
                return `${parseInt(date/86400000)} days`;
            }else if(date < 2629746000){
                return `${parseInt(date/604800000)} weeks`;
            }else if(date < 31556952000){
                return `${parseInt(date/2629746000)} months`;
            }else {
                return `${parseInt(date/31556952000)} years`;
            }
        }
        function renderGrid(handleViewDetail, check, id, createDate, images, name, location, views, discount, expireDate, price){
            if(check < 0){
                return(
                    <div>
                        <Col className="product" xs={column} sm={column} md={column} lg={column}>
                            <div className="card custom-card">
                                <a className="img-card" onClick={handleViewDetail}>
                                    { images != undefined ?
                                        <img src={`/images/products/${images[0]}`} width={200} height={200} alt="171x180"/>
                                        :
                                        <img src="http://www.buildeeji.com/UploadedFiles/serviceprovider/483/no_image.gif" width={200} height={200} alt="171x180"/>
                                    }
                                </a>
                                <div className="card-content" style={{marginTop: '-10px'}}>
                                    <h3 className="title-product make-cute-title-grid">{name}</h3>
                                    &nbsp;
                                    <Row style={{margin: '-10px 0 6px -20px'}}>
                                        <Col xs={12} lg={12}>
                                            <i className="location fa fa-map-marker">
                                                &nbsp; {location}
                                            </i>
                                        </Col>
                                    </Row>
                                    {/*<Row style={{margin: '5px 0 0 -20px'}}>
                                        <Col xs={5} lg={5}>
                                            <i className="location fa fa-eye">&nbsp;{views} views</i>
                                        </Col>
                                        <Col xs={7}  lg={7}>
                                            <p>&nbsp;{getDurationPost(createDate)} ago</p>
                                        </Col>
                                    </Row>*/}
                                    {expireDate >= new Date().getTime() ?
                                        <Row className="row-content-product">
                                            { discount > 0 ?
                                                <div>
                                                    <Col xs={4} lg={4} className="wrap-content-product-grid">
                                                        <span className="discount"> {discount}%OFF</span>&nbsp;
                                                    </Col>
                                                    <Col xs={12} lg={12} className="wrap-content-product">
                                                            <span className="iPrice">
                                                                    <strike className="original-price">${price}</strike>&nbsp;
                                                                <span className="price-after-discount">${price - (price * (discount/100))}</span>
                                                            </span>
                                                    </Col>
                                                </div>
                                                :
                                                <div>
                                                    <Col xs={4} lg={4} className="wrap-content-product-grid">
                                                        <span className="discount"></span>&nbsp;
                                                    </Col>
                                                    <Col xs={12} lg={12} className="wrap-content-product">
                                                        <span className="price-after-discount">${price - (price * (discount/100))}</span>
                                                    </Col>
                                                </div>
                                            }
                                        </Row>
                                        :
                                        <Row className="row-content-product">
                                            <div>
                                                <Col xs={4} lg={4} className="wrap-content-product-grid">
                                                    <span className="discount-null"></span>&nbsp;
                                                </Col>
                                                <Col xs={12}lg={12} className="wrap-content-product">
                                                    <span className="price-after-discount">${price}</span>
                                                </Col>
                                            </div>
                                        </Row>
                                    }
                                </div>
                            </div>
                        </Col>
                    </div>
                )
            }else{
                return(
                    <div key={check}>
                        <Col className="product" key={check} xs={column} sm={column}  md={column} lg={column}>
                            <div className="card custom-card">
                                <a className="img-card" onClick={handleViewDetail}> {/*`/products/detail/${id}`*/}
                                    { images != undefined ?
                                        <img src={`/images/products/${images[0]}`} width={200} height={200} alt="171x180"/>
                                        :
                                        <img src="http://www.buildeeji.com/UploadedFiles/serviceprovider/483/no_image.gif" width={200} height={200} alt="171x180"/>
                                    }
                                </a>
                                <div className="card-content" style={{marginTop: '-10px'}}>
                                    <h3 className="title-product make-cute-title-grid">{name}</h3>
                                    &nbsp;
                                    <Row style={{margin: '-10px 0 6px -20px'}}>
                                        <Col xs={12}lg={12}>
                                            <i className="location fa fa-map-marker">
                                                &nbsp; {location}
                                            </i>
                                        </Col>
                                    </Row>
                                    {/*<Row style={{margin: '5px 0 0 -20px'}}>
                                        <Col lg={5}>
                                            <i className="location fa fa-eye">&nbsp;{views} views</i>
                                        </Col>
                                        <Col lg={7}>
                                            <p>&nbsp;{getDurationPost(createDate)} ago</p>
                                        </Col>
                                    </Row>*/}
                                    {expireDate >= new Date().getTime() ?
                                        <Row className="row-content-product">
                                            { discount > 0 ?
                                                <div>
                                                    <Col xs={4} lg={4} className="wrap-content-product-grid">
                                                        <span className="discount">{discount}%OFF</span>&nbsp;
                                                    </Col>
                                                    <Col  xs={12} lg={12} className="wrap-content-product">
                                                            <span className="iPrice">
                                                                <strike className="original-price">${price}</strike>&nbsp;
                                                                <span className="price-after-discount">${price - (price * (discount/100))}</span>
                                                            </span>
                                                    </Col>
                                                </div>
                                                :
                                                <div>
                                                    <Col  xs={4} lg={4} className="wrap-content-product-grid">
                                                        <span className="discount"></span>&nbsp;
                                                    </Col>
                                                    <Col  xs={12} lg={12} className="wrap-content-product">
                                                        <span className="price-after-discount">${price - (price * (discount/100))}</span>
                                                    </Col>
                                                </div>
                                            }
                                        </Row>
                                        :
                                        <Row className="row-content-product">
                                            <div>
                                                <Col  xs={4} lg={4} className="wrap-content-product-grid">
                                                    <span className="discount-null"></span>&nbsp;
                                                </Col>
                                                <Col  xs={12} lg={12} className="wrap-content-product">
                                                    <span className="price-after-discount">${price}</span>
                                                </Col>
                                            </div>
                                        </Row>
                                    }
                                </div>
                            </div>
                        </Col>
                    </div>
                )
            }
        }

        return(
            <div>
                { this.props.products == undefined ?
                    <div>
                        <center><img src="/icon/spinner/default.gif"/></center>
                    </div>
                    :

                    this.props.products.length == 0 ?

                        /*PRODUCT RECENTLY*/
                        isPage == 'detail' ?
                            type == 'recently' ?
                                <div>
                                    <div className="row col-lg-12 col-md-12" style={{ marginBottom:"6px"}}>
                                        {display.advertisements != undefined ?
                                            <AdvGrid display={getAdvertisement(display.advertisements, "DML2")}/>
                                            :
                                            <AdvGrid />
                                        }
                                        {display.advertisements != undefined ?
                                            <AdvGrid display={getAdvertisement(display.advertisements, "DMR2")}/>
                                            :
                                            <AdvGrid />
                                        }
                                    </div>
                                    <div className="row col-lg-12 col-md-12" style={{ marginBottom:"6px"}}>
                                        {display.advertisements != undefined ?
                                            <AdvGrid display={getAdvertisement(display.advertisements, "DML3")}/>
                                            :
                                            <AdvGrid />
                                        }
                                        {display.advertisements != undefined ?
                                            <AdvGrid display={getAdvertisement(display.advertisements, "DMR3")}/>
                                            :
                                            <AdvGrid />
                                        }
                                    </div>
                                </div>
                                :null
                            :


                        type != 'normal' ?
                            <div>
                                <center><h4>Product Not Found</h4></center>
                            </div>
                            :
                            <div>
                                <div>
                                    <center><h4>Product Not Found</h4></center>
                                </div>
                                {
                                    isPage == 'home' ?
                                        <div className="row" style={{ marginBottom:"6px"}}>
                                            {display.advertisements != undefined ?
                                                <AdvGrid display={getAdvertisement(display.advertisements, "HML3")}/>
                                                :
                                                <AdvGrid />
                                            }
                                            {display.advertisements != undefined ?
                                                <AdvGrid display={getAdvertisement(display.advertisements, "HMR3")}/>
                                                :
                                                <AdvGrid />
                                            }
                                        </div>
                                        :
                                        null
                                }
                                {
                                    isPage == 'category' ?
                                        <div className="row" style={{ marginBottom:"6px",marginLeft:"0px"}}>
                                            {display.advertisements != undefined ?
                                                <AdvGrid display={getAdvertisement(display.advertisements, "CML3")}/>
                                                :
                                                <AdvGrid />
                                            }
                                            {display.advertisements != undefined ?
                                                <AdvGrid display={getAdvertisement(display.advertisements, "CMR3")}/>
                                                :
                                                <AdvGrid />
                                            }
                                        </div>
                                        :
                                        null
                                }
                                {
                                    isPage == 'location' ?
                                        <div className="row" style={{ marginBottom:"6px",marginLeft:'-4px' }}>
                                            {display.advertisements != undefined ?
                                                <AdvGrid display={getAdvertisement(display.advertisements, "LML3")}/>
                                                :
                                                <AdvGrid />
                                            }
                                            {display.advertisements != undefined ?
                                                <AdvGrid display={getAdvertisement(display.advertisements, "LMR3")}/>
                                                :
                                                <AdvGrid />
                                            }
                                        </div>
                                        :
                                        null
                                }
                            </div>
                        :
                        this.props.products.map((pro, index) => {
                            /*special*/
                            if(isPage == 'special'){
                                return(
                                    <div key={index}>
                                        {
                                            renderGrid(
                                                () => this.handleViewDetail(pro.product.id.$oid),
                                                -1,
                                                pro.product.id.$oid,
                                                pro.product.createDate,
                                                pro.product.images,
                                                pro.product.name,
                                                pro.product.location,
                                                pro.product.views,
                                                pro.product.discount,
                                                pro.product.discountEndDate,
                                                pro.product.price
                                            )
                                        }
                                    </div>
                                )
                            }
                            if(column == 3 && type == 'normal' && this.props.products.length > 8 && index == 8){
                                return(
                                    <div key={index}>
                                        <div className="row col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            {display.advertisements != undefined ?
                                                <AdvGrid display={getAdvertisement(display.advertisements, "HML3")}/>
                                                :
                                                <AdvGrid />
                                            }
                                            {display.advertisements != undefined ?
                                                <AdvGrid display={getAdvertisement(display.advertisements, "HMR3")}/>
                                                :
                                                <AdvGrid />
                                            }
                                        </div>
                                        {renderGrid(
                                            () => this.handleViewDetail(pro.product.id.$oid),
                                            -1,
                                            pro.product.id.$oid,
                                            pro.product.createDate,
                                            pro.product.images,
                                            pro.product.name,
                                            pro.product.location,
                                            pro.product.views,
                                            pro.product.discount,
                                            pro.product.discountEndDate,
                                            pro.product.price
                                        )}
                                    </div>
                                )
                            }else if(column == 3 && type == 'normal' && this.props.products.length <= 8 && index == this.props.products.length-1){
                                return(
                                    <div key={index}>
                                        {renderGrid(
                                            () => this.handleViewDetail(pro.product.id.$oid),
                                            -1,
                                            pro.product.id.$oid,
                                            pro.product.createDate,
                                            pro.product.images,
                                            pro.product.name,
                                            pro.product.location,
                                            pro.product.views,
                                            pro.product.discount,
                                            pro.product.discountEndDate,
                                            pro.product.price
                                        )}
                                        <div className="hml3 col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            {display.advertisements != undefined ?
                                                <AdvGrid display={getAdvertisement(display.advertisements, "HML3")}/>
                                                :
                                                <AdvGrid />
                                            }
                                            {display.advertisements != undefined ?
                                                <AdvGrid display={getAdvertisement(display.advertisements, "HMR3")}/>
                                                :
                                                <AdvGrid />
                                            }
                                        </div>
                                        &nbsp;
                                    </div>
                                )
                            }
                            if(column == 4){
                                /*product recently product detail*/
                                if(isPage == 'detail'){
                                    if(this.props.products.length <= 6) {
                                        if(index == this.props.products.length -1){
                                            return (
                                                <div key={index}>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                    <div className="dml2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DML2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DMR2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    <div className="sml3 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }else if(this.props.products.length <= 12){
                                        if(index == 6){
                                            return (
                                                <div key={index}>
                                                    <div className="dml2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DML2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DMR2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }
                                        if(index == this.props.products.length -1){
                                            return (
                                                <div key={index}>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                    <div className="dml3 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }else if(this.props.products.length <= 18) {
                                        if (index == 6) {
                                            return (
                                                <div key={index}>
                                                    <div className="detail col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DML2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DMR2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }
                                        if (index == 12) {
                                            return (
                                                <div key={index}>
                                                    <div className="detail col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "DMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }
                                    }
                                }
                                /*view all page*/
                                if(isPage == 'view'){
                                    if(this.props.products.length <= 6) {
                                        if(index == this.props.products.length -1){
                                            return (
                                                <div key={index}>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                    <div className="hml1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML1")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR1")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    <div className="hml1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    <div className="hml3 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }else if(this.props.products.length <= 12){
                                        if(index == 6){
                                            return (
                                                <div key={index}>
                                                    <div className="hml1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML1")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR1")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }
                                        if(index == this.props.products.length -1){
                                            return (
                                                <div key={index}>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                    <div className="hml2 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginBottom: "6px"}}>
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    <div className="hml3 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }else if(this.props.products.length <= 18) {
                                        if (index == 6) {
                                            return (
                                                <div key={index}>
                                                    <div className="hml1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML1")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR1")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }
                                        if (index == 12) {
                                            return (
                                                <div key={index}>
                                                    <div className="hml2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }
                                        if (index == this.props.products.length - 1) {
                                            return (
                                                <div key={index}>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                    <div className="hml3 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }else {
                                        if (index == 6) {
                                            return (
                                                <div key={index}>
                                                    <div className="hml1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML1")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR1")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }
                                        if (index == 12) {
                                            return (
                                                <div key={index}>
                                                    <div className="hml2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR2")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }
                                        if (index == 18) {
                                            return (
                                                <div key={index}>
                                                    <div className="hml3 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }
                                    }
                                }else {
                                    /*home page*/
                                    if(isPage == 'home'){
                                        if(type == 'normal' && this.props.products.length > 6 && index == 6){
                                            return (
                                                <div key={index}>
                                                    <div className="home-page col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }else if(type == 'normal' && this.props.products.length <= 6 && index == this.props.products.length - 1){
                                            return (
                                                <div key={index}>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                    <div className="home-page col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }
                                    /*category page*/
                                    if(isPage == 'category'){
                                        if(type == 'normal' && this.props.products.length > 6 && index == 6){
                                            return (
                                                <div key={index}>
                                                    <div className="category col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "CML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "CMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }else if(type == 'normal' && this.props.products.length <= 6 && index == this.props.products.length - 1){
                                            return (
                                                <div key={index}>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                    <div className="category col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "CML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "CMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }else{
                                        /*location page*/
                                        if(type == 'normal' && this.props.products.length > 6 && index == 6){
                                            return (
                                                <div key={index}>
                                                    <div className="location col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                </div>
                                            )
                                        }else if(type == 'normal' && this.props.products.length <= 6 && index == this.props.products.length - 1){
                                            return (
                                                <div key={index}>
                                                    {renderGrid(
                                                        () => this.handleViewDetail(pro.product.id.$oid),
                                                        -1,
                                                        pro.product.id.$oid,
                                                        pro.product.createDate,
                                                        pro.product.images,
                                                        pro.product.name,
                                                        pro.product.location,
                                                        pro.product.views,
                                                        pro.product.discount,
                                                        pro.product.discountEndDate,
                                                        pro.product.price
                                                    )}
                                                    <div className="location col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LML3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                        {display.advertisements != undefined ?
                                                            <AdvGrid display={getAdvertisement(display.advertisements, "LMR3")}/>
                                                            :
                                                            <AdvGrid />
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }
                                }
                            }
                            return(
                                renderGrid(
                                    () => this.handleViewDetail(pro.product.id.$oid),
                                    index,
                                    pro.product.id.$oid,
                                    pro.product.createDate,
                                    pro.product.images,
                                    pro.product.name,
                                    pro.product.location,
                                    pro.product.views,
                                    pro.product.discount,
                                    pro.product.discountEndDate,
                                    pro.product.price
                                )
                            )
                        })
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    //console.log("COUNTER : " + JSON.stringify(state.countProductView));
    return({
        display: state.advertisementsDisplay,
        countProductView: state.countProductView
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({displayAdvertisementsAction, countProductViewAction}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductGrid);
