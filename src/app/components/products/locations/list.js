
import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import ProductList from './../../shared_component/products/list';
import Pagination from './paginations';
import Filter from './filter';
import { getProductFilterHotLocationAction,getProductFilterGoldLocationAction,getProductFilterNormalLocationAction } from './../../../actions/products/products';
import { displayAdvertisementsAction } from './../../../actions/admin/advertisement/advertisement';
import AdvList from '../../shared_component/advertisment/vertical';
import { loadLanguage } from './../../../localstorages/local_storage';
let location = '';
let dateRang = 0;
let startPrice = 0;
let endPrice = 0 ;
let page = 1;

class ProductLocationList extends React.Component{

    constructor(){
        super();
        this.state ={
            col:'list'
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.handlePaging = this.handlePaging.bind(this);
    }

    doFilter(){
        this.props.getProductFilterHotLocationAction({
            start: page,
            limit: 6,
            products:{
                categoryName: '',
                subCategoryName: '',
                location:location,
                productName: '',
                productType:"hot",
                dateRang: dateRang,
                startPrice: startPrice,
                endPrice: endPrice
            }
        });
        this.props.getProductFilterGoldLocationAction({
            start: page,
            limit: 6,
            products:{
                categoryName: '',
                subCategoryName: '',
                location:location,
                productName: '',
                productType:"gold",
                dateRang: dateRang,
                startPrice: startPrice,
                endPrice: endPrice
            }
        });
        this.props.getProductFilterNormalLocationAction({
            start: page,
            limit: 12,
            products:{
                categoryName: '',
                subCategoryName: '',
                location:location,
                productName: '',
                productType:"normal",
                dateRang: dateRang,
                startPrice: startPrice,
                endPrice: endPrice
            }
        });
    }

    componentWillMount(){
        this.props.displayAdvertisementsAction();
        const param = this.props.location.query;
        location = param.l;
        page = param.p;
        dateRang = Number(param.dr);
        startPrice = Number(param.sp);
        endPrice = Number(param.ep);
        this.doFilter();
    }

    handleFilter(data){
        location = data.location;
        dateRang = Number(data.dateRang);
        startPrice = Number(data.startPrice);
        endPrice = Number(data.endPrice);
        this.doFilter();
    }

    handlePaging(value){
        page = value;
        this.doFilter();
    }

    render(){

        const display = this.props.display;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };
        const gridOrList = 'list';

        return(
            <div>
                {
                    this.props.listProductHotFilterLocationReducer != undefined && this.props.listProductGoldFilterLocationReducer != undefined && this.props.listProductNormalFilterLocationReducer != undefined ?
                        <div>
                            <div className="row row_product_category-filter">
                                <Filter gridOrList={gridOrList} handleFilter={this.handleFilter} location={location} page={page} />
                            </div>
                            <div className="row row_product_category">
                                <div className="row wrap-header-category-page" style={{ marginLeft: "0px",marginRight: "0px",backgroundColor: "white",marginBottom: "4px",border: "1px solid white" ,marginTop: '5px'}}>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <h4 className="product-title">HOT PRODUCTS</h4>
                                    </div>
                                    <div className="col-xs-6 col-md-6 col-lg-6">
                                        <form className="pull-right custom-form-filter-product">
                                            <ul className="list-inline">
                                                <li>{loadLanguage() == "en" || loadLanguage() == undefined ? "View" : "មើលតាម"}:</li>
                                                <li>
                                                    <Link to={`/products/location/list/location?l=${location.replace(" ","+")}&dr=${dateRang}&sp=${startPrice}&ep=${endPrice}&p=${page}`}>
                                                        <button className="wrap-button-grid-list" style={{ backgroundColor: "#f77416" }}><i className="fa fa-list fa-1x" aria-hidden="true"></i></button>
                                                    </Link>{' '}
                                                    <Link to={`/products/location/grid/location?l=${location.replace(" ","+")}&dr=${dateRang}&sp=${startPrice}&ep=${endPrice}&p=${page}`}>
                                                        <button className="wrap-button-grid-list"><i className="fa fa-th fa-1x" aria-hidden="true"></i></button>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                    <hr className="line-title" style={{ clear:"both" }}/>
                                </div>
                                <div className="container-card">
                                    <ProductList col={this.state.col} products = {this.props.listProductHotFilterLocationReducer.products} type={'hot'} pageType={'location'}/>
                                </div>
                            </div>
                            <div className="row row_ad_product_category">
                                {display.advertisements != undefined ?
                                    <AdvList display={getAdvertisement(display.advertisements, "LML1")}/>
                                    :
                                    <AdvList />
                                }
                                {display.advertisements != undefined ?
                                    <AdvList display={getAdvertisement(display.advertisements, "LMR1")}/>
                                    :
                                    <AdvList />
                                }
                            </div>
                            <div className="row row_product_category">
                                <div className="row wrap-header-category-page" style={{ marginLeft: "0px",marginRight: "0px",backgroundColor: "white",marginBottom: "4px",border: "1px solid white"}}>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <h4 className="product-title">GOLD PRODUCTS</h4>
                                    </div>
                                    <hr className="line-title" style={{ clear:"both" }}/>
                                </div>
                                <div className="container-card">
                                    <ProductList col={this.state.col} products = {this.props.listProductGoldFilterLocationReducer.products} type={'gold'} pageType={'location'}/>
                                </div>
                            </div>
                            <div className="row row_ad_product_category">
                                {display.advertisements != undefined ?
                                    <AdvList display={getAdvertisement(display.advertisements, "LML2")}/>
                                    :
                                    <AdvList />
                                }
                                {display.advertisements != undefined ?
                                    <AdvList display={getAdvertisement(display.advertisements, "LMR2")}/>
                                    :
                                    <AdvList />
                                }
                            </div>
                            <div className="row row_product_category">
                                <div className="row wrap-header-category-page" style={{ marginLeft: "0px",marginRight: "0px",backgroundColor: "white",marginBottom: "4px",border: "1px solid white"}}>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <h4 className="product-title">NORMAL PRODUCTS</h4>
                                    </div>
                                    <hr className="line-title" style={{ clear:"both" }}/>
                                </div>
                                <div className="container-card">
                                    <ProductList col={this.state.col} products = {this.props.listProductNormalFilterLocationReducer.products} type={'normal'} pageType={'location'}/>
                                </div>
                            </div>
                            <div className="row row_ad_product_category">
                                {display.advertisements != undefined ?
                                    <AdvList display={getAdvertisement(display.advertisements, "LML4")}/>
                                    :
                                    <AdvList />
                                }
                                {display.advertisements != undefined ?
                                    <AdvList display={getAdvertisement(display.advertisements, "LMR4")}/>
                                    :
                                    <AdvList />
                                }
                            </div>
                            <div className="row row_product_category">
                                <Pagination
                                    gridOrList={gridOrList}
                                    hot={this.props.listProductHotFilterLocationReducer.products}
                                    gold={this.props.listProductGoldFilterLocationReducer.products}
                                    normal={this.props.listProductNormalFilterLocationReducer.products}
                                    product={{location: location, page: page, dateRang: dateRang, startPrice: startPrice, endPrice: endPrice}}
                                    handlePaging={this.handlePaging}
                                />
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return ({
        display: state.advertisementsDisplay,
        listProductHotFilterLocationReducer: state.listProductHotFilterLocationReducer,
        listProductGoldFilterLocationReducer:state.listProductGoldFilterLocationReducer,
        listProductNormalFilterLocationReducer:state.listProductNormalFilterLocationReducer
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getProductFilterHotLocationAction,getProductFilterGoldLocationAction,getProductFilterNormalLocationAction,displayAdvertisementsAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductLocationList);
