import React from 'react'
import './style.css'
import VisitorCounting from './visitor_counting'
import ProductCounting from './product_counting'
import NormalCounting from './normal_counting'
import MerchantCounting from './merchant_counting'
import PromoteMerchant from './promote_merchant'
import BootProduct from './boot_product'
import Advertisement from './advertisement'

class Dashbaord extends React.Component {
    render(){
        return(
            <div className="dashboard">
                <h3>&nbsp;&nbsp;Dashboard <small>Control panel</small></h3>
                <div className="row">
                    <div className="col-xs-6 col-md-3">
                        <div className="quick_box1">
                            <VisitorCounting />
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <div className="quick_box2">
                            <ProductCounting />
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <div className="quick_box3">
                            <NormalCounting />
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <div className="quick_box4">
                            <MerchantCounting />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="income_box">
                            <PromoteMerchant />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="income_box">
                            <BootProduct />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="income_box">
                            <Advertisement />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashbaord