import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import ProductGird from './../../shared_component/products/grid';
import Pagination from './paginations';
import Filter from './filter';
import { getProductFilterHotAction,getProductFilterGoldAction,getProductFilterNormalAction } from './../../../actions/products/products';
import { displayAdvertisementsAction } from './../../../actions/admin/advertisement/advertisement';
import ThirdCategory from './third_category';
import AdvGrid from '../../shared_component/advertisment/vertical';
import './style.css';
import { loadLanguage } from './../../../localstorages/local_storage';
let category = '';
let subCategory = '';
let productName='';
let location = '';
let dateRang = 0;
let startPrice = 0;
let endPrice = 0;
let page = 1;
let grid = '';

class ProductCategoryGrid extends React.Component{

    constructor(){
        super();
        this.state =  {
            col : 4
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
                limit: 12,
                products: {
                    categoryName: category,
                    subCategoryName: subCategory,
                    location: location,
                    productName:productName,
                    productType: "normal",
                    dateRang: dateRang,
                    startPrice: startPrice,
                    endPrice: endPrice
                }
            });
        }
    }

    handleFilter(data){
        category = data.category;
        subCategory = data.subCategory;
        productName = data.productName;
        location = data.location;
        dateRang = Number(data.dateRang);
        startPrice = Number(data.startPrice);
        endPrice = Number(data.endPrice);
        this.doFilter();
    }

    componentWillMount(){
        this.props.displayAdvertisementsAction();
        const param = this.props.location.query;
        category = param.c;
        subCategory = param.s != undefined ? param.s : '';
        productName = param.n;
        location = param.l;
        page = param.p;
        dateRang = Number(param.dr);
        startPrice = Number(param.sp);
        endPrice = Number(param.ep);


        console.log("Category "+  param.c + " SubCategory "+ param.s + " Product Name " +  param.n + " Location " +  param.l + " Page  " +  param.p + " Start Price  "+  param.dr + " End Price "+  param.ep)
        this.doFilter();
    }

    handlePaging(value){
        page = value;
        this.doFilter();
    }

    handleSubCategory(value){
        subCategory = value.subCategory;
        this.doFilter();
        browserHistory.push(`/products/category/grid/category?c=${category.split(' ').join('+')}&s=${subCategory.split(' ').join('+')}&n=${ productName.split(' ').join('+') }&l=${location.replace(" ","+")}&dr=${dateRang}&sp=${startPrice}&ep=${endPrice}&p=${page}`);
    }

    render(){
        grid = 'grid';

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
                                <Filter gridOrList={grid} handleFilter={this.handleFilter} category={category} subCategory={subCategory} product={productName} location={location} dateRang={dateRang} startPrice={startPrice} endPrice={endPrice} page={page}/>
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
                                <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6">
                                    <h4 className="product-title">HOT PRODUCTS</h4>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xs-6">
                                    <form className="pull-right custom-form-filter-product">
                                        <ul className="list-inline">
                                            <li>{loadLanguage() == "en" || loadLanguage() == undefined ? "View" : "មើលតាម"}:</li>
                                            <li>
                                                <Link to={`/products/category/list/category?c=${category.split(" ").join("+")}&s=${subCategory}&n=${productName.split(" ").join("+")}&l=${location}&dr=${dateRang}&sp=${startPrice}&ep=${endPrice}&p=${page}`}>
                                                    <button className="wrap-button-grid-list"><i className="fa fa-list fa-1x" aria-hidden="true"></i></button>
                                                </Link>{' '}
                                                <Link to={`/products/category/grid/category?c=${category.split(" ").join("+")}$s=${subCategory}&n=${productName.split(" ").join("+")}&l=${location}&dr=${dateRang}&sp=${startPrice}&ep=${endPrice}&p=${page}`}>
                                                    <button className="wrap-button-grid-list" style={{ backgroundColor: "#f77416" }}><i className="fa fa-th fa-1x" aria-hidden="true"></i></button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                                <hr className="line-title"/>
                            </div>
                            <div className="container-card">
                                <ProductGird col={this.state.col} products = {this.props.listProductHotFilterReducer.products} category={category} type={'hot'} pageType={'category'}/>
                            </div>
                        </div>
                        <div className="row row_ad_product_category">
                            {display.advertisements != undefined ?
                                <AdvGrid display={getAdvertisement(display.advertisements, "CML1")}/>
                                :
                                <AdvGrid />
                            }
                            {display.advertisements != undefined ?
                                <AdvGrid display={getAdvertisement(display.advertisements, "CMR1")}/>
                                :
                                <AdvGrid />
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
                                <ProductGird col={this.state.col}  products = {this.props.listProductGoldFilterReducer.products} category={category} type={'gold'} pageType={'category'}/>
                            </div>
                        </div>
                        <div className="row row_ad_product_category">
                            {display.advertisements != undefined ?
                                <AdvGrid display={getAdvertisement(display.advertisements, "CML2")}/>
                                :
                                <AdvGrid />
                            }
                            {display.advertisements != undefined ?
                                <AdvGrid display={getAdvertisement(display.advertisements, "CMR2")}/>
                                :
                                <AdvGrid />
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
                                <ProductGird col={this.state.col} products = {this.props.listProductNormalFilterReducer.products} category={category} type={'normal'} pageType={'category'}/>
                            </div>
                        </div>
                        <div className="row row_ad_product_category">
                            {display.advertisements != undefined ?
                                <AdvGrid display={getAdvertisement(display.advertisements, "CML4")}/>
                                :
                                <AdvGrid />
                            }
                            {display.advertisements != undefined ?
                                <AdvGrid display={getAdvertisement(display.advertisements, "CMR4")}/>
                                :
                                <AdvGrid />
                            }
                        </div>
                        <div className="row row_product_category">
                            <Pagination
                                gridOrList={grid}
                                hot={this.props.listProductHotFilterReducer.products}
                                gold={this.props.listProductGoldFilterReducer.products}
                                normal={this.props.listProductNormalFilterReducer.products}
                                product={{category: category, productName: productName, subCategory: subCategory, location: location, page: page, dateRang: dateRang, startPrice: startPrice, endPrice: endPrice}}
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
        listProductHotFilterReducer: state.listProductHotFilterReducer,
        listProductGoldFilterReducer:state.listProductGoldFilterReducer,
        listProductNormalFilterReducer:state.listProductNormalFilterReducer
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getProductFilterHotAction,getProductFilterGoldAction,getProductFilterNormalAction,displayAdvertisementsAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductCategoryGrid);


