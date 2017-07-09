import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { actionGetRelatedProducts } from './../../../actions/products/products';
import { displayAdvertisementsAction } from './../../../actions/admin/advertisement/advertisement';
import { Thumbnail,Form,Table,Image,Pagination,FormGroup,Button,FormControl,HelpBlock,Row,Col,InputGroup,Glyphicon } from 'react-bootstrap';
import './list_product.css';
import AdvGrid from '../../shared_component/advertisment/vertical';
import ProductGird from './../../shared_component/products/grid';

let product ={
    categoryName:'',
    productId:'',
    start: 1,
    limit: 6
};

class RelatedProducts extends React.Component {
    constructor() {
        super();
        this.state= {
            col : 4
        };

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    componentWillMount(){
        this.props.displayAdvertisementsAction();
    }

    componentWillReceiveProps(data) {
        if(data.categoryName != "") {
            product.productId  = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
            product.categoryName = data.categoryName;
            
            if(data.relatedProducts.code == undefined) {
                this.props.actionGetRelatedProducts(product);
            }

        }
    }
    static handleItem(total) {
        console.log("Total Normal => ",total);
        if (total <= 6)
        {
            return 1
        }
        else if (total % 6 == 0)
        {
            return total / 6
        }
        else if (total % 6 > 0)
        {
            return parseInt(total / 6) + 1
        }
    }

    next(total){
        const currentPage = RelatedProducts.handleItem(total);
        if(parseInt(product.start + 1) > currentPage) {
            product.start = currentPage;
        }else {
            product.start = parseInt(product.start + 1);
            this.props.actionGetRelatedProducts(product);
        }
    }
    previous(){
        if(parseInt(product.start - 1) < 1) {
            product.start = 1;
        }else {
            product.start = parseInt(product.start -1);
            this.props.actionGetRelatedProducts(product);
        }
    }

    render(){

        const display = this.props.display;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };

        let total = 0;
        if(this.props.relatedProducts.products != undefined){
            this.props.relatedProducts.products.map((product) => {
                total = product.total;
            })
        }

       /* console.log("Category Name related "+ this.props.categoryName);*/

        return(
            <div className="row">
                <div className="wrap-row-header" style={{ background:"white" }}>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 hot">
                        <h4 className="product-title">PRODUCTS RELATED</h4>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <table className="wrap-table-right">
                            <thead>
                            <tr>
                                <td>
                                    <ul className="list-view-all">
                                        <li>
                                            <a onClick={this.previous} ><i className="fa fa-angle-up" aria-hidden="true"></i></a>
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
                <ProductGird col={this.state.col} products={this.props.relatedProducts.products} type={'related'}/>
                <div  className="row wrap-center-normal-products"  style={{ marginLeft: "-10px", marginRight: "0px", marginTop:"6px",marginBottom:"6px"}}>

                </div>
                <div  className="row" style={{ marginBottom:"6px" , marginLeft:"0px"}}>
                    {display.advertisements != undefined ?
                        <AdvGrid display={getAdvertisement(display.advertisements, "DML1")}/>
                        :
                        <AdvGrid />
                    }
                    {display.advertisements != undefined ?
                        <AdvGrid display={getAdvertisement(display.advertisements, "DMR1")}/>
                        :
                        <AdvGrid />
                    }
                    <br />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        display: state.advertisementsDisplay,
        relatedProducts: state.relatedProducts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ displayAdvertisementsAction,actionGetRelatedProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);
