/**
 * Created by chhaichivon on 4/21/2017.
 */
import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { actionGetProductsByUsername } from './../../actions/products/products';
import ProductList from './../shared_component/products/list';
import { Pagination ,Row, Col, Tabs, Tab} from 'react-bootstrap';
import {loadLanguage} from './../../localstorages/local_storage'
import './store.css';
let product = {
    username:'',
    start: 1,
    limit: 10
};
let storeName = '';
class StoreProducts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activePage: 1,
            col : 3
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount(){
        product.username = this.props.username;
        product.start = this.props.page;

       // storeName = this.props.storeName != undefined ? this.props.storeName :'' ;
        this.props.actionGetProductsByUsername(product);
        this.setState({
            activePage: Number(this.props.products.page)
        });

    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        product.start = eventKey;
        this.props.actionGetProductsByUsername(product);
        browserHistory.push(`/store/${product.username}/${eventKey}`);
    }

    static handleItem(total) {

        if (total <= 10)
        {
            return 1
        }
        else if (total % 10 == 0)
        {
            return total / 10
        }
        else if (total % 10 > 0)
        {
            return parseInt(total / 10) + 1
        }
    }

    render(){
        let total = 0;
        if(this.props.listProductByUserName.products != undefined){
            this.props.listProductByUserName.products.map((product) => {
                total = product.total;
            })
        }


        this.props.userInformation != undefined ?
            this.props.userInformation.map((userInfo) => {
                storeName = userInfo.storeName;
            })
            : null

        return(
            <div>
                <br/>
                {
                    product.username != undefined || product.username == '' ?
                        <h4 className="title-store"><p className="store-name-cap">{loadLanguage() == "en" ||  loadLanguage() == undefined ? "Store Name " : "ឈ្មោះហាង" }: {storeName}</p></h4>
                        :
                        null
                }
                <ProductList col={this.state.col} products={this.props.listProductByUserName.products} type={'hot'}/>
                {total <= 10
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
                                items={StoreProducts.handleItem(total)}
                                maxButtons={5}
                                activePage={this.state.activePage}
                                onSelect={this.handleSelect}
                    />
                }

            </div>
        );
    }
}

function mapStateToProps(state){
    return ({
        listProductByUserName: state.productByUserName
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionGetProductsByUsername }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps) (StoreProducts);