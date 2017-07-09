import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import MainSlide from '../shared_component/advertisment/main';
import SubSlide from '../shared_component/advertisment/sub';
import MenuLeft from './menu_left';
import TabSpecialCategory from './special_category/tab_special_category';
import Location from '../shared_component/locations/Location';
import ScrollToTop from 'react-scroll-up';
import {displayAdvertisementsAction} from '../../../app/actions/admin/advertisement/advertisement';
import {countViewWebsiteAction} from './../../../app/actions/admin/common';
import {fetchSpecialCategoriesAction} from './../../actions/categories/category';
import {displayCategoryAdvertisementsAction} from './../../actions/admin/advertisement/category_advertisement';
import { loadCountry } from './../../localstorages/local_storage';

import './carosoul.css';
import './home.css';

 class Home extends React.Component {

    constructor(props) {
        super(props);
        this.props.countViewWebsiteAction();
    }

    componentWillMount(){
        this.props.displayAdvertisementsAction();
        this.props.fetchSpecialCategoriesAction(7);
        this.props.displayCategoryAdvertisementsAction();
    }

    render() {
        const display = this.props.display;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };

        return (
            <div>
                <ScrollToTop style={{
                    position: 'fixed',
                    bottom: '20%',
                    right: '1.33%',
                    cursor: 'pointer',
                    transitionDuration: '0.2s',
                    transitionTimingFunction: 'linear',
                    transitionDelay: '0s'
                }}
                                 showUnder={160}>
                    <span><i className="fa fa-arrow-circle-o-up" style={{color: 'rgb(254, 189, 105)', fontSize: '45px' }}>&nbsp;</i></span>
                </ScrollToTop>
                {/* Block Top Slide Main Image */}
                <div className="row">
                    {display.advertisements != undefined ?
                        <MainSlide display={getAdvertisement(display.advertisements, "HT1")} />
                        :
                        <MainSlide />
                    }
                </div>
                {/* Block Menu_Left */}

                <div className="row">
                    <div className="col-xs-3 block-menu">
                        { this.props.categoryAdvertisementDisplay.advertisements == undefined ? null :
                            <MenuLeft advertisements={this.props.categoryAdvertisementDisplay.advertisements}/>
                        }
                    </div>
                    {/* Block Sub Slide */}
                    <div className="col-xs-9 sub-advertise">
                        {display.advertisements != undefined ?
                            <SubSlide display={getAdvertisement(display.advertisements, "HT2")} />
                            :
                            <SubSlide />
                        }
                    </div>
                </div>
                <br/>
                <div className="row">
                    {
                        this.props.children
                    }
                </div>
                <br />
                {/* Special Category Product*/}
                <div className="tab_special_category row">
                    { this.props.specialCategories.categories == undefined ? null :
                        this.props.specialCategories.categories.length <= 0 ? null :
                            <TabSpecialCategory categories={this.props.specialCategories.categories} />
                    }
                </div>
                {/* Location Product*/}
                <div className="row location">
                    <Location />
                </div>
                <br/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return({
        display: state.advertisementsDisplay,
        countWebsite: state.countWebsite,
        specialCategories: state.specialCategories,
        categoryAdvertisementDisplay: state.categoryAdvertisementDisplay
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({displayAdvertisementsAction, countViewWebsiteAction, fetchSpecialCategoriesAction, displayCategoryAdvertisementsAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
