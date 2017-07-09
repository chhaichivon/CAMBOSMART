import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { actionGetRecentlyProducts } from './../../../actions/products/products';
import { displayAdvertisementsAction } from './../../../actions/admin/advertisement/advertisement';
import { Thumbnail,Form,Table,Image,Pagination,FormGroup,Button,FormControl,HelpBlock,Row,Col,InputGroup,Glyphicon } from 'react-bootstrap';
import './list_product.css';
import AdvGrid from '../../shared_component/advertisment/vertical';
import ProductGird from './../../shared_component/products/grid';
let product = {
    start : 1,
    limit : 18
};
class RecentlyProducts extends React.Component {
    constructor() {
        super();
        this.state ={
            col : 4
        };

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    componentWillMount(){
        this.props.actionGetRecentlyProducts(product);
        this.props.displayAdvertisementsAction();
    }

    static handleItem(total) {
        console.log("Total Normal => ",total);
        if (total <= 18)
        {
            return 1
        }
        else if (total % 18 == 0)
        {
            return total / 18
        }
        else if (total % 18 > 0)
        {
            return parseInt(total / 18) + 1
        }
    }

    next(total){
        const currentPage = RecentlyProducts.handleItem(total);
        if(parseInt(product.start + 1) > currentPage) {
            product.start = currentPage;
        }else {
            product.start = parseInt(product.start + 1);
            this.props.actionGetRecentlyProducts(product);
        }
    }
    previous(){
        if(parseInt(product.start - 1) < 1) {
            product.start = 1;
        }else {
            product.start = parseInt(product.start -1);
            this.props.actionGetRecentlyProducts(product);
        }
    }


    render(){

        const display = this.props.display;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };
        let total = 0;
        if(this.props.recentlyProducts.products != undefined){
            this.props.recentlyProducts.products.map((product) => {
                total = product.total;
            })
        }


        return(
            <div className="row">
               <div className="wrap-row-header" style={{ background:"white" }}>
                   <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 hot">
                       <h4 className="product-title">PRODUCTS RECENTLY</h4>
                   </div>
                   <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                       <table className="wrap-table-right">
                           <thead>
                           <tr>
                               <td>
                                   <ul className="list-view-all">
                                       <li>
                                           <a onClick={this.previous}  ><i className="fa fa-angle-up" aria-hidden="true"></i></a>
                                       </li>
                                       <li>
                                           <a onClick={() => this.next(total)} ><i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                       </li>
                                   </ul>
                               </td>
                           </tr>
                           </thead>
                       </table>
                   </div>
                   <hr className="line-title"/>
                </div>
                <ProductGird col={this.state.col} products={this.props.recentlyProducts.products}  pageType={'detail'} type={'recently'}/>
                <div className="row wrap-center-normal-products">
                    {display.advertisements != undefined ?
                        <AdvGrid display={getAdvertisement(display.advertisements, "DML4")}/>
                        :
                        <AdvGrid />
                    }
                    {display.advertisements != undefined ?
                        <AdvGrid display={getAdvertisement(display.advertisements, "DMR4")}/>
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
        recentlyProducts: state.recentlyProducts
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({actionGetRecentlyProducts,displayAdvertisementsAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentlyProducts);
