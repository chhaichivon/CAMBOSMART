import React from 'react';
import HotProduct from './products/hot_product';
import GoldProduct from './products/gold_product';
import NormalProduct from './products/normal_product';
import Advertisment from '../shared_component/advertisment/advertisment';
import MenuLeft from'./menu_left';
import SubSlide from '../shared_component/advertisment/sub';
import MainSlide from '../shared_component/advertisment/main';
import TabSpecailCategory from './special_category/tab_special_category';
import Location from '../shared_component/common/Location';
import './../product_page/index.css';


class HomePageLayout extends React.Component{
      constructor(props){
            super(props);
      }

    render(){
        return(
            <div>
                {/* Block Top Slide Main Image */}
                <div className="image_top row">
                    <MainSlide/>
                </div>
                {/* Block Menu_Left */}
                <div className="row home-page">
                    <div className=" col-xs-3 col-md-3 col-lg-3 block-menu">
                        <MenuLeft/>
                    </div>
                    {/* Block Sub Slide */}
                    <div className=" col-xs-9 col-md-9 col-lg-9 block-sub-main-image">
                        <SubSlide/>
                    </div>
                </div>
                <br/>
                <div className="custome-body">
                    {
                        this.props.child
                    }
                </div>
                <br/>
                {/* Specail Category Product*/}
                <div className="tab_special_category row">
                    <TabSpecailCategory />
                </div>
                <br/>
                {/* Location Product*/}
                <div className="location row">
                    <Location />
                </div>
                <br/>
            </div>
        );
    }
}

export default HomePageLayout;