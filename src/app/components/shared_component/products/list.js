import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {Col} from 'react-bootstrap';
import AdvList from './../advertisment/vertical';
import { displayAdvertisementsAction} from '../../../actions/admin/advertisement/advertisement';
import {formatDate} from './../../../utils/format_date';
import './style.css';
class ProductList extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.displayAdvertisementsAction();
    }

    render(){
        let type = this.props.type != undefined ? this.props.type : 'normal';
        let isPage = this.props.pageType != undefined ? this.props.pageType : 'home';

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

        const display = this.props.display;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };


        function renderList(index, product){
            if(index > 0){
                return(
                    <div key={index}>
                        <Col xs={12} sm={12} md={12} lg={12} className="pro-list">
                            <div className="card custom-card-view-all-list">
                                <div className="row">
                                    <div className="col-xs-3 col-md-3 col-sm-3 col-lg-3">
                                        <a className="img-card-list"
                                           href={"/products/detail/" + product.id.$oid}>
                                            { product.images != undefined
                                                ?
                                                <img src={`/images/products/${product.images[0]}`} width={200} height={200} alt="171x180"/>
                                                :
                                                <img src="http://www.buildeeji.com/UploadedFiles/serviceprovider/483/no_image.gif" width={200} height={200} alt="171x180"/>
                                            }
                                        </a>
                                    </div>
                                    <div className="col-xs-9 col-md-9 col-sm-9 col-lg-9 list">
                                        <div className="card-content">
                                            <div className="row">
                                                <div className="col-xs-9 col-md-9 col-sm-9 col-lg-9 list">
                                                    <h3 className="title-product make-cute-title">{product.name}</h3>
                                                    <p className="make-cute-title">{product.description }</p>
                                                    <ul className="list-inline">
                                                        <li><p><i className="fa fa-list-alt m-icon" aria-hidden="true"></i>{' '}{product.categoryName}</p></li>
                                                        <li><p><i className="fa fa-map-marker m-icon" aria-hidden="true"></i>{' '}{product.location}</p></li>
                                                        <li><p><i className="fa fa-calendar m-icon" aria-hidden="true"></i>{' '}{formatDate(product.createDate)}</p></li>
                                                        <li><p><i className="fa fa-eye m-icon" aria-hidden="true"></i>{' '}{product.views} Views</p></li>
                                                        <li><p>&nbsp;{getDurationPost(product.createDate)} ago</p></li>
                                                    </ul>
                                                    { product.images == undefined ?
                                                        null
                                                        :
                                                        <ul className="list-inline">
                                                            { product.images.map((image, i)=>{
                                                                return (
                                                                    <li key={i}><img src={`/images/products/${image}`} height="40px" width="40px"/></li>
                                                                )
                                                            })
                                                            }
                                                        </ul>
                                                    }
                                                </div>
                                                {product.discountEndDate >= new Date().getTime() ?
                                                    product.discount > 0 ?
                                                            <div className="col-xs-3 col-md-3 col-sm-3 col-lg-3 list">
                                                                <row>
                                                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 discount-list">
                                                                        <p className="discount-list">{product.discount}% OFF</p>&nbsp;
                                                                    </div>
                                                                </row>
                                                                <row>
                                                                    <div className="push-right">
                                                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 price-list">
                                                                            <ul className="list-inline do-price-right">
                                                                                <li><p className="original-list"><strike
                                                                                    style={{ color:"red"}}>${product.price}</strike>
                                                                                </p></li>
                                                                                <li><p className="price-list">
                                                                                    ${product.price - (product.price * (product.discount / 100))} </p>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </row>
                                                            </div>
                                                        :
                                                            <div className="col-xs-3 col-md-3 col-sm-3 col-lg-3">
                                                                {/*<row>
                                                                    <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
                                                                        <p className="discount">{product.discount}% OFF</p>&nbsp;
                                                                    </div>
                                                                </row>*/}
                                                                <row>
                                                                    <div className="push-right">
                                                                        <ul className="list-inline do-price-right">
                                                                           {/* <li><p className="original"><strike style={{ color:"red"}}>${product.price}</strike></p></li>*/}
                                                                            <li><p className="price">${product.price - (product.price * (product.discount/100))}</p></li>
                                                                        </ul>
                                                                    </div>
                                                                </row>
                                                            </div>


                                                    :
                                                        <div className="col-xs-3 col-md-3 col-sm-3 col-lg-3">
                                                            {/*<row>
                                                                <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12" style={{  marginTop:"20px" ,marginLeft:"60px"}}>
                                                                    <span style={{ color:'#f77416', fontSize:'16px', fontWeight: 'bold'}}>{product.discount}0% OFF</span>
                                                                </div>
                                                            </row>*/}
                                                            <row>
                                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{  marginTop:"100px" }}>
                                                                    <div className="push-right">
                                                                        <ul className="list-inline">
                                                                            {/*<strike style={{ color:"red", marginTop: '10px'}}>${product.price}</strike>&nbsp;*/}
                                                                            <span style={{color:'green', fontSize:'20px', fontWeight: 'bold'}}>${product.price}</span>&nbsp;&nbsp;
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </row>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                )
            }else{
                return(
                    <div key={index}>
                        <Col xs={12} sm={12} md={12} lg={12} className="pro-list" >
                            <div className="card custom-card-view-all-list">
                                <div className="row">
                                    <div className="col-xs-3 col-md-3 col-sm-3 col-lg-3">
                                        <a className="img-card-list"
                                           href={"/products/detail/" + product.id.$oid}>
                                            { product.images != undefined
                                                ?
                                                <img src={`/images/products/${product.images[0]}`} width={200} height={200} alt="171x180"/>
                                                :
                                                <img src="http://www.buildeeji.com/UploadedFiles/serviceprovider/483/no_image.gif" width={200} height={200} alt="171x180"/>
                                            }
                                        </a>
                                    </div>
                                    <div className="col-xs-9 col-md-9 col-sm-9 col-lg-9 list">
                                        <div className="card-content">
                                            <div className="row">
                                                <div className="col-xs-9 col-md-9 col-sm-9 col-lg-9 list">
                                                    <h3 className="title-product make-cute-title">{product.name}</h3>
                                                    <p className="make-cute-title">{product.description }</p>
                                                    <ul className="list-inline">
                                                        <li><p><i className="fa fa-list-alt m-icon" aria-hidden="true"></i>{' '}{product.categoryName}</p></li>
                                                        <li><p><i className="fa fa-map-marker m-icon" aria-hidden="true"></i>{' '}{product.location}</p></li>
                                                        <li><p><i className="fa fa-calendar m-icon" aria-hidden="true"></i>{' '}{formatDate(product.createDate)}</p></li>
                                                        <li><p><i className="fa fa-eye m-icon" aria-hidden="true"></i>{' '}{product.views} Views</p></li>
                                                        <li><p>&nbsp;{getDurationPost(product.createDate)} ago</p></li>
                                                    </ul>
                                                    { product.images == undefined ?
                                                        null
                                                        :
                                                        <ul className="list-inline">
                                                            { product.images.map((image, i)=>{
                                                                return (
                                                                    <li key={i}><img src={`/images/products/${image}`} height="40px" width="40px"/></li>
                                                                )
                                                            })
                                                            }
                                                        </ul>
                                                    }
                                                </div>
                                                {product.discountEndDate >= new Date().getTime() ?
                                                    product.discount > 0 ?
                                                        <div className="col-xs-3 col-md-3 col-sm-3 col-lg-3">
                                                            <div>
                                                                <div className=" col-sm-12 col-xs-12 col-md-12 col-lg-12 discount-list">
                                                                    <p className="discount-list">{product.discount}% OFF</p>&nbsp;
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="push-right">
                                                                    <ul className="list-inline do-price-right">
                                                                        <li><p className="original"><strike style={{ color:"red"}}> ${product.price}</strike></p></li>
                                                                        <li><p className="price-list">${product.price - (product.price * (product.discount/100))}</p></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className="col-xs-3 col-md-3 col-sm-3 col-lg-3">
                                                            {/*<row>
                                                             <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
                                                             <p className="discount">{product.discount}% OFF</p>&nbsp;
                                                             </div>
                                                             </row>*/}
                                                            <row>
                                                                <div className="push-right">
                                                                    <ul className="list-inline do-price-right">
                                                                        {/* <li><p className="original"><strike style={{ color:"red"}}>${product.price}</strike></p></li>*/}
                                                                        <li><p className="price">${product.price - (product.price * (product.discount/100))}</p></li>
                                                                    </ul>
                                                                </div>
                                                            </row>
                                                        </div>

                                                    :
                                                        <div className="col-xs-3 col-md-3 col-sm-3 col-lg-3">
                                                            {/*<row>
                                                             <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12" style={{  marginTop:"20px" ,marginLeft:"60px"}}>
                                                             <span style={{ color:'#f77416', fontSize:'16px', fontWeight: 'bold'}}>{product.discount}0% OFF</span>
                                                             </div>
                                                             </row>*/}
                                                            <row>
                                                                <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12" style={{  marginTop:"100px" }}>
                                                                    <div className="push-right">
                                                                        <ul className="list-inline">
                                                                            {/*<strike style={{ color:"red", marginTop: '10px'}}>${product.price}</strike>&nbsp;*/}
                                                                            <span style={{color:'green', fontSize:'20px', fontWeight: 'bold'}}>${product.price}</span>&nbsp;&nbsp;
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </row>
                                                        </div>

                                                }
                                            </div>
                                        </div>
                                    </div>
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
                        <center><img src="/icon/spinner/default.gif" /></center>
                    </div>
                    :
                    this.props.products.map((pro, index) => {
                        if(isPage == 'view'){
                            if(this.props.products.length <= 6) {
                                if(index == this.props.products.length -1){
                                    return (
                                        <div key={index}>
                                            {renderList(-1, pro.product)}
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML1")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR1")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML2")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR2")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML3")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR3")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            }else if(this.props.products.length <= 12){
                                if(index == 6){
                                    return (
                                        <div key={index}>
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML1")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR1")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                            {renderList(-1, pro.product)}
                                        </div>
                                    )
                                }
                                if(index == this.props.products.length -1){
                                    return (
                                        <div key={index}>
                                            {renderList(-1, pro.product)}
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML2")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR2")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML3")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR3")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            }else if(this.props.products.length <= 18) {
                                if (index == 6) {
                                    return (
                                        <div key={index}>
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML1")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR1")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                            {renderList(-1, pro.product)}
                                        </div>
                                    )
                                }
                                if (index == 12) {
                                    return (
                                        <div key={index}>
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML2")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR2")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                            {renderList(-1, pro.product)}
                                        </div>
                                    )
                                }
                                if (index == this.props.products.length - 1) {
                                    return (
                                        <div key={index}>
                                            {renderList(-1, pro.product)}
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML3")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR3")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            }else {
                                if (index == 6) {
                                    return (
                                        <div key={index}>
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML1")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR1")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                            {renderList(-1, pro.product)}
                                        </div>
                                    )
                                }
                                if (index == 12) {
                                    return (
                                        <div key={index}>
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML2")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR2")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                            {renderList(-1, pro.product)}
                                        </div>
                                    )
                                }
                                if (index == 18) {
                                    return (
                                        <div key={index}>
                                            <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HML3")}/>
                                                    :
                                                    <AdvList />
                                                }
                                                {display.advertisements != undefined ?
                                                    <AdvList display={getAdvertisement(display.advertisements, "HMR3")}/>
                                                    :
                                                    <AdvList />
                                                }
                                            </div>
                                            {renderList(-1, pro.product)}
                                        </div>
                                    )
                                }
                            }
                        }else{
                            console.log("Page is => "+ isPage);
                            if(type == 'normal'){
                                if(isPage == 'home'){
                                    if(this.props.products.length > 6 && index == 6){
                                        return (
                                            <div key={index}>
                                                <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "HML3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "HMR3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                </div>
                                                {renderList(-1, pro.product)}
                                            </div>
                                        )
                                    }else if(this.props.products.length <= 6 && index == this.props.products.length - 1){
                                        return (
                                            <div key={index}>
                                                {renderList(-1, pro.product)}
                                                <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "HML3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "HMR3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                }else if(isPage == 'category'){
                                    if(this.props.products.length > 6 && index == 6){
                                        return (
                                            <div key={index}>
                                                <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "CML3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "CMR3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                </div>
                                                {renderList(-1, pro.product)}
                                            </div>
                                        )
                                    }else if(this.props.products.length <= 6 && index == this.props.products.length - 1){
                                        return (
                                            <div key={index}>
                                                {renderList(-1, pro.product)}
                                                <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "CML3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "CMR3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                }else if(isPage == 'location'){
                                    if(this.props.products.length > 6 && index == 6){
                                        return (
                                            <div key={index}>
                                                <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "LML3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "LMR3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                </div>
                                                {renderList(-1, pro.product)}
                                            </div>
                                        )
                                    }else if(this.props.products.length <= 6 && index == this.props.products.length - 1){
                                        return (
                                            <div key={index}>
                                                {renderList(-1, pro.product)}
                                                <div className="row wrap-center-normal-products list" style={{margin: "11px -2px 3px -10px"}}>
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "LML3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                    {display.advertisements != undefined ?
                                                        <AdvList display={getAdvertisement(display.advertisements, "LMR3")}/>
                                                        :
                                                        <AdvList />
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                }

                            }
                        }

                        return(
                            renderList(index, pro.product)
                        )
                    })
                }
            </div>
        );

    }
}
function mapStateToProps(state) {
    return({
        display: state.advertisementsDisplay
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ displayAdvertisementsAction }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductList);
