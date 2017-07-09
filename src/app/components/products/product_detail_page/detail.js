/**
 * Created by chhaichivon on 4/12/2017.
 */
import React from 'react';
import RelatedProducts from './related';
import RecentlyProducts from './recently';
import ProductDetail from './product_detail';
import RuleBuyProduct from './rule_buy_products';
class Detail extends React.Component{
    constructor(){
        super();
        this.state ={
            categoryName:''
        }
    }
    handleGetCategoryName = (categoryName) => {
        this.setState({
            categoryName :  categoryName
        })
    };
    render(){
        return(
            <div>
                <ProductDetail handleGetCategoryName={this.handleGetCategoryName} />
                <RuleBuyProduct />
                <RelatedProducts  categoryName={this.state.categoryName} />
                <RecentlyProducts />
            </div>
        )
    }
}
export default Detail;