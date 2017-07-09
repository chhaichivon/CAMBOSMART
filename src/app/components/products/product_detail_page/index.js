import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import MenuLeft from './../../../components/home/menu_left';
import TabSpecialCategory from './../../home/special_category/tab_special_category';
import MainSlide from '../../shared_component/advertisment/main';
import Location from './../../shared_component/locations/Location';
import {displayAdvertisementsAction} from './../../../actions/admin/advertisement/advertisement';
import {fetchSpecialCategoriesAction} from './../../../actions/categories/category';
import {displayCategoryAdvertisementsAction} from './../../../actions/admin/advertisement/category_advertisement';
import AdvDetailHorizontal from '../../shared_component/advertisment/horizontal';
import ScrollToTop from 'react-scroll-up';

class IndexProduct extends React.Component{

    componentWillMount(){
        this.props.displayAdvertisementsAction();
        this.props.fetchSpecialCategoriesAction(7);
        this.props.displayCategoryAdvertisementsAction();
    }

    render(){
        const display = this.props.display;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };
        return(
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
                <div className="row">
                    <div className="detail-page col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        {display.advertisements != undefined ?
                            <MainSlide display={getAdvertisement(display.advertisements, "DT1")}/>
                            :
                            <MainSlide />
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="detail-page col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        {/*<MenuLeft/>*/}
                        { this.props.categoryAdvertisementDisplay.advertisements == undefined ? null :
                            <MenuLeft advertisements={this.props.categoryAdvertisementDisplay.advertisements}/>
                        }
                        {display.advertisements != undefined ?
                            <AdvDetailHorizontal display={getAdvertisement(display.advertisements, "DL1")}/>
                            :
                            <AdvDetailHorizontal />
                        }
                        {display.advertisements != undefined ?
                            <AdvDetailHorizontal display={getAdvertisement(display.advertisements, "DL2")}/>
                            :
                            <AdvDetailHorizontal />
                        }
                        {display.advertisements != undefined ?
                            <AdvDetailHorizontal display={getAdvertisement(display.advertisements, "DL3")}/>
                            :
                            <AdvDetailHorizontal />
                        }
                        {display.advertisements != undefined ?
                            <AdvDetailHorizontal display={getAdvertisement(display.advertisements, "DL4")}/>
                            :
                            <AdvDetailHorizontal />
                        }
                    </div>
                    <div className="detail-page col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        {
                            this.props.children
                        }
                    </div>
                </div>
                <div className="row">
                    { this.props.specialCategories.categories == undefined ? null :
                        this.props.specialCategories.categories.length <= 0 ? null :
                            <TabSpecialCategory categories={this.props.specialCategories.categories} />
                    }
                </div>
                <div className="row location">
                    <Location />
                </div>
                <br/>
            </div>
        )
    }s
}
function mapStateToProps(state) {
    return({
        display: state.advertisementsDisplay,
        specialCategories: state.specialCategories,
        categoryAdvertisementDisplay: state.categoryAdvertisementDisplay
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({displayAdvertisementsAction, fetchSpecialCategoriesAction, displayCategoryAdvertisementsAction}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps) (IndexProduct);