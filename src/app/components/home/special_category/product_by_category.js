import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {Carousel}from 'react-bootstrap';
import Product from './../../shared_component/products/grid';
import './special_category.css';

let product = {
    categoryName:'',
    start: 1,
    limit: 4
};

class ProductByCategory extends React.Component{

    constructor(){
        super();
        this.state = {
            activePage: 1,
            col: 3
        };
        this.previous = this.previous.bind(this);
    }

    static handleItem(total) {
        if (total <= 4) {
            return 1;
        } else if (total % 4 == 0) {
            return total / 4;
        } else if (total % 4 > 0) {
            return parseInt(total / 4) + 1;
        }
    }

    next(total){
        product.categoryName = this.props.categoryName;
        const currentPage = ProductByCategory.handleItem(total);
        if(parseInt(product.start + 1) > currentPage) {
            product.start = currentPage;
        }else {
            product.start = parseInt(product.start + 1);
        }
        this.setState({activePage: product.start});
        this.props.handlePanging(product);
    }

    previous(){
        if(parseInt(product.start - 1) < 1) {
            product.start = 1;
        }else {
            product.start = parseInt(product.start -1);
        }
        this.setState({activePage: product.start});
        this.props.handlePanging(product);
    }

    render(){
        let total = 0;

        if(this.props.products.products != undefined){
            this.props.products.products.map((product) => {
                total = product.total;
                product.categoryName = product.product.categoryName;
            })
        }
        return(
            <div className="m-title-header">
                <div className="carousel custom-carousel">
                    <div>
                        <Product col={this.state.col} products={this.props.products.products} pageType={'special'} />
                    </div>
                    { this.state.activePage > 1 ?
                        <a onClick={this.previous} className="left carousel-control" data-slide="prev"><i className="special-cat glyphicon glyphicon-chevron-left"></i></a>
                        : null
                    }
                    { this.state.activePage == ProductByCategory.handleItem(total) ?
                        null
                        :
                        <a onClick={() => this.next(total)} className="right carousel-control" data-slide="next"><i className="special-cat glyphicon glyphicon-chevron-right"></i></a>
                    }
                </div>
            </div>
        );
    }

}

export default (ProductByCategory);