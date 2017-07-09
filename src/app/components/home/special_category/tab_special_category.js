import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Tabs,Tab } from 'react-bootstrap';
import './special_category.css';
import ProductByCategory from './product_by_category';
import {Carousel}from 'react-bootstrap';
import {getProductSpecialCategoryAction} from './../../../actions/products/products';
import {loadLanguage} from './../../../localstorages/local_storage';

let categories = [];

let product = {
    categoryName:'Unknown',
    start: 1,
    limit: 4
};
class TabSpecialCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            key: 1,
            categoryName: ''
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        product.categoryName = this.props.categories[0].sub.categoryName;
        this.props.getProductSpecialCategoryAction(product);
    }

    handleSelect(eventKey) {
        this.setState({
            key: eventKey
        });
        product.start = 1;
        product.categoryName = categories[eventKey-1];//category[eventKey -1].nameEn;
        this.props.getProductSpecialCategoryAction(product);
    }

    handlePanging(data){
        product.start = data.start;
        this.props.getProductSpecialCategoryAction(product);

    }
    render() {
        let styleHideBoarder = {
            border: '0px solid white'
        };

        return (
            <div className="row wrap-row-location" style={{marginTop: "-12px"}}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 wrap-header-category">
                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-special"
                          className="tab-special-category" style={styleHideBoarder}>
                        { this.props.categories == undefined ? null :
                            this.props.categories.map((popular, index)=> {
                                if (popular.sub != undefined) {
                                    categories.push(popular.sub.categoryName);
                                    return (
                                        <Tab key={index} eventKey={index + 1} title={loadLanguage() == "en" || loadLanguage() == undefined ? popular.sub.categoryName+` (${popular.categoryName})`  : popular.sub.khName+` (${popular.khName})`} style={styleHideBoarder}>
                                            <ProductByCategory handlePanging={this.handlePanging.bind(this)} products={this.props.products}/>
                                        </Tab>
                                    )
                                }
                            })
                        }
                    </Tabs>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return ({
        products: state.productSpecialCategory
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getProductSpecialCategoryAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabSpecialCategory);
