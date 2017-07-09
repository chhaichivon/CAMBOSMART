import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getAllProductAction } from '../../../actions/products/products';
import { Pagination } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import ProductGird from './../../shared_component/products/grid';
import AdvViewAllPage from '../../shared_component/advertisment/vertical';
import { displayAdvertisementsAction } from '../../../actions/admin/advertisement/advertisement';
import { loadLanguage } from './../../../localstorages/local_storage';
import './view_all.css';

let product = {
    start: 1,
    limit: 24,
    products:{
        categoryName:"",
        subCategoryName:"",
        location:"" ,
        productName:"",
        productType:"",
        dateRang:0,
        startPrice:0,
        endPrice:0
    }
};

class ProductItems extends  React.Component{

    constructor(props){
        super(props);
        this.state = {
            activePage: 1,
            col : 4,
            provinces: [
                'Phnom Penh', 'Banteay Meanchey',
                'Battambong', 'Kampong Cham', 'Kampong Chhnang',
                'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Koh Kong',
                'Kep', 'Kratie', 'Mondulkiri', 'Oddar Meanchey',
                'Pailin', 'Preah Sihanouk', 'Peah Vihear', 'Pursat',
                'Prey Veng', 'Ratanakiri', 'Siem Reap', 'Stung Treng', 'Svay Rieng',
                'Takeo', 'Tboung Khmum'
            ]
        };
        this.previous = this.previous.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount(){
        this.props.displayAdvertisementsAction();
        const param = this.props.location.query;
        this.setState({
            activePage: Number(this.props.params.page)
        });
        product.products.productType = param.t;
        product.start = Number(param.p);
        this.props.getAllProductAction(product);
    }

    next(total){
        const currentPage = ProductItems.handleItem(total);
        if(parseInt(product.start + 1) > currentPage) {
            product.start = currentPage;
        }else {
            product.start = parseInt(product.start + 1);
        }
        product.products.productType = param.t;
        this.props.getAllProductAction(product);
    }

    previous(){
        if(parseInt(product.start - 1) < 1) {
            product.start = 1;
        }else {
            product.start = parseInt(product.start -1);
        }
        this.props.getAllProductAction(product);
    }

    static handleItem(total) {
        if (total <= 24) {
            return 1
        } else if (total % 24 == 0) {
            return total / 24
        } else if (total % 24> 0) {
            return parseInt(total/24) + 1
        }
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        product.start = eventKey;
        this.props.getAllProductAction(product);
        browserHistory.push(`/products/view/grid/product?t=${product.products.productType}&p=${eventKey}`);
    }

    render(){
        let total = 0;
        if(this.props.listAllProductByType.products != undefined){
            this.props.listAllProductByType.products.map((product) => {
                total = product.total;
            })
        }

        const display = this.props.display;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };

        return(
            <div>
                <div className="sub-page row">
                    <div className="view-all grid-view-all col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="wrap-row-header wrap-row-product-view-all-grid">
                            <div className="col-sm-12 col-md-12 col-lg-12 wrap-header-product">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    {
                                        product.products.productType == 'normal' ?
                                            <h4 className="product-title">{loadLanguage() == "en" || loadLanguage() == undefined ? "NORMAL PRODUCTS" : "ផលិតផលចុងក្រោយ"}</h4>
                                            :null
                                    }
                                    {
                                        product.products.productType == 'gold' ?
                                            <h4 className="product-title">{loadLanguage() == "en" || loadLanguage() == undefined ? "GOLD PRODUCTS" : "ផលិតផលពិសេស"}</h4>
                                            : null
                                    }
                                    {
                                        product.products.productType== 'hot' ?
                                        <h4 className="product-title">{loadLanguage() == "en" || loadLanguage() == undefined ? "HOT PRODUCTS" : "ផលិតផលថ្មីៗ"}</h4>
                                        :null
                                    }
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <form className="pull-right custom-form-filter-product">
                                        <ul className="list-inline">
                                            <li>{loadLanguage() == "en" || loadLanguage() == undefined ? "View" : "មើលតាម"}:</li>
                                            <li>
                                                <Link to={`/products/view/list/product?t=${product.products.productType}&p=${product.start}`}><button className="wrap-button-grid-list"><i className="fa fa-list fa-1x" aria-hidden="true"></i></button></Link>{' '}
                                                <Link to={`/products/view/grid/product?t=${product.products.productType}&p=${product.start}`}><button className="wrap-button-grid-list" style={{ backgroundColor: "#f77416" }}><i className="fa fa-th fa-1x" aria-hidden="true"></i> </button></Link>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                            <hr className="line-title"/>
                        </div>
                        <div  className="wrap-row-product-view-all-grid">
                            <ProductGird col={this.state.col} products={this.props.listAllProductByType.products} type={product.products.productType} pageType={'view'}/>
                        </div>
                        <div className="wrap-center-normal-products">
                            {display.advertisements != undefined ?
                                <AdvViewAllPage display={getAdvertisement(display.advertisements, "LML4")}/>
                                :
                                <AdvViewAllPage />
                            }
                            {display.advertisements != undefined ?
                                <AdvViewAllPage display={getAdvertisement(display.advertisements, "LMR4")}/>
                                :
                                <AdvViewAllPage />
                            }
                            <br />
                        </div>
                    </div>
                    {total <= 24
                        ?
                        null
                        :
                        <Pagination style={{ float: 'right'}}
                                    prev
                                    next
                                    first
                                    last
                                    ellipsis
                                    boundaryLinks
                                    items={ProductItems.handleItem(total)}
                                    maxButtons={5}
                                    activePage={this.state.activePage}
                                    onSelect={this.handleSelect}
                        />
                    }
                </div>
            </div>
        );
    }
}

ProductItems = reduxForm({
    form: 'form-product-list',
    validate: function (values) {
        const errors = {};
        if (new Date(values.fromDate).getTime() > new Date(values.toDate).getTime()) {
            errors.toDate = 'It must greater or equal FROM DATE !!'
        }
        return errors
    }
})(ProductItems);

function mapStateToProps(state){
    return ({
        display: state.advertisementsDisplay,
        listAllProductByType: state.allProduct
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getAllProductAction,displayAdvertisementsAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductItems);