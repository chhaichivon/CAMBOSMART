import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionAdminCountTodayProducts } from '../../../../actions/admin/product/product'
import { loadState } from './../../../../localstorages/local_storage'

let countNumber = 0

class ProductCounting extends React.Component {
    componentWillMount(){
        this.props.actionAdminCountTodayProducts({
            token: loadState().token
        })
    }
    render(){
        return(
            <div>
                <span className="quick_box_text">
                    <h1><b>{countNumber}</b></h1>
                    <p>Today's Products</p>
                </span>
                <span className="quick_box_icon">
                    <i className="fa fa-shopping-cart" />
                </span>
            </div>
        )
    }
}

function mapStateToProps(state){
    if(state.adminCountTodayProducts != undefined) {
        countNumber = state.adminCountTodayProducts.data
    }
    return{
        adminCountTodayProducts: state.adminCountTodayProducts
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({actionAdminCountTodayProducts}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCounting)