import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getNormalProductAction } from './../../../actions/products/products';
import {Form,Table,Image,Pagination,FormGroup,Button,FormControl,HelpBlock,Row,Col,InputGroup,Glyphicon} from 'react-bootstrap';
import ProductGird from './../../shared_component/products/grid';
import {loadLanguage} from './../../../localstorages/local_storage';

let product = {
    start: 1,
    limit: 16,
    products:{
        categoryName:"",
        subCategoryName:"",
        location:"" ,
        productName:"",
        productType:"normal",
        dateRang:0,
        startPrice:0,
        endPrice:0
    }
};

class NormalProduct extends React.Component{

    constructor(){
        super();
        this.state = {
            activePage: 1,
            col : 3
        };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    componentWillMount(){
        this.props.getNormalProductAction(product);
    }

    static handleItem(total) {
        console.log("Total Normal => ",total);
        if (total <= 16)
        {
            return 1
        }
        else if (total % 16 == 0)
        {
            return total / 16
        }
        else if (total % 16 > 0)
        {
            return parseInt(total / 16) + 1
        }
    }

    next(total){
        console.log("Total Normal => ", total);
        const currentPage = NormalProduct.handleItem(total);
        if(parseInt(product.start + 1) > currentPage) {
            product.start = currentPage;
        }else {
            product.start = parseInt(product.start + 1);
        }
        this.props.getNormalProductAction(product);
    }

    previous(){
        if(parseInt(product.start - 1) < 1) {
            product.start = 1;
        }else {
            product.start = parseInt(product.start -1);
        }
        this.props.getNormalProductAction(product);
    }

    render(){
        let total = 0;
        let type = 'normal';
        let pageStart = 1;
        if(this.props.listNormalProduct.products != undefined){
            this.props.listNormalProduct.products.map((product) => {
                total = product.total;
            })
        }

        return(
            <div>
                <div className="m-title-header custom-header">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 hot">
                        <a href={`/products/view/grid/product?t=${type}&p=${pageStart}`}><h4 className="product-title">{loadLanguage() == "en" || loadLanguage() == undefined ? "NORMAL PRODUCTS" : "ផលិតផលចុងក្រោយ"}</h4></a>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 hot">
                        <table className="wrap-table-right">
                            <thead>
                            <tr>
                                <td>
                                    <a href={`/products/view/grid/product?t=${type}&p=${pageStart}`}>{loadLanguage() == "en" || loadLanguage() == undefined ? "View All" : "បង្ហាញទាំងអស់"}</a>
                                </td>
                                <td>
                                    <ul className="list-view-all">
                                        <li>
                                            <a onClick={this.previous}><i className="fa fa-angle-up" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a onClick={() => this.next(total)}><i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <hr className="line-title"/>
                </div>
                <div className="m-title-header">
                    <ProductGird col={this.state.col} products={this.props.listNormalProduct.products} type={'normal'} pageType={'home'} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return ({
        listNormalProduct: state.normalProduct
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getNormalProductAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (NormalProduct);