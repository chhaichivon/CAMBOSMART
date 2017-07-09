import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import ProductList from './../../shared_component/products/list';
import Pagination from './paginations';
import Filter from './filter';
import { getProductFilterHotAction,getProductFilterGoldAction,getProductFilterNormalAction } from './../../../actions/products/products';
import { displayAdvertisementsAction } from './../../../actions/admin/advertisement/advertisement';
import ThirdCategory from './third_category';
import AdvList from '../../shared_component/advertisment/vertical';
import { loadLanguage } from './../../../localstorages/local_storage';
let category = '';
let subCategory = '';
let productName='';
let location = '';
let dateRang = 0;
let startPrice = 0;
let endPrice = 0;
let page = 1;

class ProductCategoryList extends React.Component{

    constructor(){
        super();
        this.state ={
            categoryName : '',
            page : 1,
            col:'list'
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.handlePaging = this.handlePaging.bind(this);
        this.handleSubCategory = this.handleSubCategory.bind(this);
    }

    doFilter() {
        if(category == 'all') {
            this.props.getProductFilterHotAction({
                start: page,
                limit: 6,
                products: {
                    categoryName: '',
                    subCategoryName: subCategory,
                    location: location,
                    productName: '',
                    productType: "hot",
                    dateRang: dateRang,
                    startPrice: startPrice,
                    endPrice: endPrice
                }
            });
            this.props.getProductFilterGoldAction({
                start: page,
                limit: 6,
                products: {
                    categoryName: '',
                    subCategoryName: subCategory,
                    location: location,
                    productName: '',
                    productType: "gold",
                    dateRang: dateRang,
                    startPrice: startPrice,
                    endPrice: endPrice
                }
            });
            this.props.getProductFilterNormalAction({
                start: page,
                limit: 12,
                products: {
                    categoryName: '',
                    subCategoryName: subCategory,
                    location: location,
                    productName: '',
                    productType: "normal",
                    dateRang: dateRang,
                    startPrice: startPrice,
                    endPrice: endPrice
                }
            });
        }
        else {
            this.props.getProductFilterHotAction({
                start: page,
                limit: 6,
                products: {
                    categoryName: category,
                    subCategoryName: subCategory,
                    location: location,
                    productName: productName,
                    productType: "hot",
                    dateRang: dateRang,
                    startPrice: startPrice,
                    endPrice: endPrice
                }
            });
            this.props.getProductFilterGoldAction({
                start: page,
                limit: 6,
                products: {
                    categoryName: category,
                    subCategoryName: subCategory,
                    location: location,
                    productName: productName,
                    productType: "gold",
                    dateRang: dateRang,
                    startPrice: startPrice,
                    endPrice: endPrice
                }
            });
            this.props.getProductFilterNormalAction({
                start: page,
                limit: 13,
                products: {
                    categoryName: category,
                    subCategoryName: subCategory,
                    location: location,
                    productName: productName,
                    productType: "normal",
                    dateRang: dateRang,
                    startPrice: startPrice,
                    endPrice: endPrice
                }
            });
        }
    }

    componentWillMount(){
        this.props.displayAdvertisementsAction();
        const param = this.props.location.query;
        category = param.c;
        location = param.l;
        productName=param.n;
        page = param.p;
        dateRang = Number(param.dr);
        startPrice = Number(param.sp);
        endPrice = Number(param.ep);
        this.doFilter();
    }

    handleFilter(data){
        category = data.category;
        subCategory = data.subCategory;
        location = data.location != undefined ? data.location : '';
        dateRang = Number(data.dateRang);
        startPrice = Number(data.startPrice);
        endPrice = Number(data.endPrice);
        this.doFilter();
    }

    handlePaging(value){
        page = value;
        this.doFilter();
    }

    handleSubCategory(value){
        subCategory = value.subCategory;
        this.doFilter();
        browserHistory.push(`/products/category/list/category?c=${category.split(' ').join('+')}&s=${subCategory.split(' ').join('+')}&n=${productName.split(' ').join('+')}&l=${location.replace(" ", "+")}&dr=${dateRang}&sp=${startPrice}&ep=${endPrice}&p=${page}`);
    }

    render(){
        const list ='list';

        const display = this.props.display;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };

        return(
        <div>
            {
                this.props.listProductHotFilterReducer != undefined && this.props.listProductGoldFilterReducer != undefined && this.props.listProductNormalFilterReducer != undefined ?
                    <div>
                        <div className="row row_product_category-filter">
                            <Filter gridOrList={list}  handleFilter={this.handleFilter} category={category} subCategory={subCategory} product={productName} location={location} dateRang={dateRang} startPrice={startPrice} endPrice={endPrice} page={page} />
                        </div>
                        {
                            category != 'all' ||  category != undefined ?
                                <div className="row row_product_category" style={{ background: "white", marginTop: "3px", marginBottom: "5px" }}>
                                    <ThirdCategory category={category} handleSubCategory={this.handleSubCategory}  />
                                </div>
                                : null
                        }
                        <div className="row row_product_category">
                            <div className="row wrap-header-category-page category-title-header">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h4 className="product-title">HOT PRODUCTS</h4>
                                </div>
                                <div className="col-xs-6 col-md-6 col-lg-6 col-xs-6">
                                    <form className="pull-right custom-form-filter-product">
                                        <ul className="list-inline">
                                            <li>{loadLanguage() == "en" || loadLanguage() == undefined ? "View" : "មើលតាម"}:</li>
                                            <li>
                                                <Link to={`/products/category/list/category?c=${category.split(" ").join("+")}&s=${subCategory}&n=${productName.split(" ").join("+")}&l=${location}&dr=${dateRang}&sp=${startPrice}&ep=${endPrice}&p=${page}`}>
                                                    <button className="wrap-button-grid-list" style={{ backgroundColor: "#f77416" }}><i className="fa fa-list fa-1x" aria-hidden="true"></i></button>
                                                </Link>{' '}
                                                <Link to={`/products/category/grid/category?c=${category.split(" ").join("+")}&s=${subCategory}&n=${productName.split(" ").join("+")}&l=${location}&dr=${dateRang}&sp=${startPrice}&ep=${endPrice}&p=${page}`}>
                                                    <button className="wrap-button-grid-list"><i className="fa fa-th fa-1x" aria-hidden="true"></i></button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                                <hr className="line-title" style={{ clear:"both" }}/>
                            </div>
                            <div className="container-card">
                                <ProductList col={this.state.col} products = {this.props.listProductHotFilterReducer.products}  type={'hot'} pageType={'category'}/>
                            </div>
                        </div>
                        <div className="row row_ad_product_category" style={{ marginTop:"6px" }}>
                            {display.advertisements != undefined ?
                                <AdvList display={getAdvertisement(display.advertisements, "CML1")}/>
                                :
                                <AdvList />
                            }
                            {display.advertisements != undefined ?
                                <AdvList display={getAdvertisement(display.advertisements, "CMR1")}/>
                                :
                                <AdvList />
                            }
                        </div>
                        <div className="row row_product_category">
                            <div className="row wrap-header-category-page category-title-header">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <h4 className="product-title">GOLD PRODUCTS</h4>
                                </div>
                                <hr className="line-title" style={{ clear:"both" }}/>
                            </div>
                            <div className="container-card">
                                <ProductList col={this.state.col} products = {this.props.listProductGoldFilterReducer.products} type={'gold'}pageType={'category'}/>
                            </div>
                        </div>
                        <div className="row row_ad_product_category" style={{ marginTop:"6px" }}>
                            {display.advertisements != undefined ?
                                <AdvList display={getAdvertisement(display.advertisements, "CML2")}/>
                                :
                                <AdvList />
                            }
                            {display.advertisements != undefined ?
                                <AdvList display={getAdvertisement(display.advertisements, "CMR2")}/>
                                :
                                <AdvList />
                            }
                        </div>
                        <div className="row row_product_category">
                            <div className="row wrap-header-category-page category-title-header">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <h4 className="product-title">NORMAL PRODUCTS</h4>
                                </div>
                                <hr className="line-title" style={{ clear:"both" }}/>
                            </div>
                            <div className="container-card">
                                <ProductList col={this.state.col} products = {this.props.listProductNormalFilterReducer.products} type={'normal'} pageType={'category'}/>
                            </div>
                            <div className="row row_ad_product_category wrap-list-adv" style={{marginBottom: "9px", marginLeft: "-10px", marginTop:"6px"}}>
                                {display.advertisements != undefined ?
                                    <AdvList display={getAdvertisement(display.advertisements, "CML4")}/>
                                    :
                                    <AdvList />
                                }
                                {display.advertisements != undefined ?
                                    <AdvList display={getAdvertisement(display.advertisements, "CMR4")}/>
                                    :
                                    <AdvList />
                                }
                            </div>
                        </div>
                        <Pagination
                            gridOrList={list}
                            hot={this.props.listProductHotFilterReducer.products}
                            gold={this.props.listProductGoldFilterReducer.products}
                            normal={this.props.listProductNormalFilterReducer.products}
                            product={{category: category,productName:productName,location: location, page: page, dateRang: dateRang, startPrice: startPrice, endPrice: endPrice}}
                            handlePaging={this.handlePaging}
                        />
                    </div>
                    : null
            }
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
        display: state.advertisementsDisplay,
        listProductHotFilterReducer: state.listProductHotFilterReducer,
        listProductGoldFilterReducer: state.listProductGoldFilterReducer,
        listProductNormalFilterReducer: state.listProductNormalFilterReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getProductFilterHotAction,getProductFilterGoldAction,getProductFilterNormalAction,displayAdvertisementsAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductCategoryList);
