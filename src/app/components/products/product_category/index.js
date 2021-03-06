import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import MenuLeft from './../../../components/home/menu_left';
import TabSpecialCategory from './../../home/special_category/tab_special_category';
import AdvCategory from '../../shared_component/advertisment/horizontal';
import {displayAdvertisementsAction} from './../../../actions/admin/advertisement/advertisement';
import {fetchSpecialCategoriesAction} from './../../../actions/categories/category';
import {displayCategoryAdvertisementsAction} from './../../../actions/admin/advertisement/category_advertisement';
import MainSlide from '../../shared_component/advertisment/main';
import Location from '../../shared_component/locations/Location';
import ScrollToTop from 'react-scroll-up';

class ProductCategoryIndex extends React.Component{

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
                    <div className="category col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        {display.advertisements != undefined ?
                            <MainSlide display={getAdvertisement(display.advertisements, "CT1")}/>
                            :
                            <MainSlide />
                        }
                    </div>
                </div>
                <div className="row">
                    <div className=" category col-xs-3">
                        {/*<MenuLeft/>*/}
                        { this.props.categoryAdvertisementDisplay.advertisements == undefined ? null :
                            <MenuLeft advertisements={this.props.categoryAdvertisementDisplay.advertisements}/>
                        }
                        {display.advertisements != undefined ?
                            <AdvCategory display={getAdvertisement(display.advertisements, "CL1")}/>
                            :
                            <AdvCategory />
                        }
                        {display.advertisements != undefined ?
                            <AdvCategory display={getAdvertisement(display.advertisements, "CL2")}/>
                            :
                            <AdvCategory />
                        }
                        {display.advertisements != undefined ?
                            <AdvCategory display={getAdvertisement(display.advertisements, "CL3")}/>
                            :
                            <AdvCategory />
                        }
                        {display.advertisements != undefined ?
                            <AdvCategory display={getAdvertisement(display.advertisements, "CL4")}/>
                            :
                            <AdvCategory />
                        }
                    </div>
                    <div className="category col-xs-9">
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
                {/* Location Product*/}
                <div className="row location">
                    <Location />
                </div>
                <br/>
            </div>
        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps) (ProductCategoryIndex);
