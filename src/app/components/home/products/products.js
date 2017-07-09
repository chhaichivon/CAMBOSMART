import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import HotProduct from './hot';
import GoldProduct from './gold';
import NormalProduct from './normal';
import AdvHomePage from '../../shared_component/advertisment/vertical';
import { displayAdvertisementsAction } from '../../../actions/admin/advertisement/advertisement';
import './../home.css';

class Product extends React.Component{

    constructor(){
        super();
        this.state =  {
            col : 3
        }
    }

    componentWillMount(){
        this.props.displayAdvertisementsAction();
    }

    render(){

        const display = this.props.display;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };

        return(
            <div>
                <div className="row">
                    <HotProduct />
                </div>
                <div className="row" style={{ marginBottom:"6px" }}>
                    {display.advertisements != undefined ?
                        <AdvHomePage display={getAdvertisement(display.advertisements, "HML1")}/>
                        :
                        <AdvHomePage />
                    }
                    {display.advertisements != undefined ?
                        <AdvHomePage display={getAdvertisement(display.advertisements, "HMR1")}/>
                        :
                        <AdvHomePage />
                    }
                </div>
                <div className="row">
                   <GoldProduct />
                </div>
                <div className="row" style={{ marginBottom:"-14px" }}>
                    {display.advertisements != undefined ?
                        <AdvHomePage display={getAdvertisement(display.advertisements, "HML2")}/>
                        :
                        <AdvHomePage />
                    }
                    {display.advertisements != undefined ?
                        <AdvHomePage display={getAdvertisement(display.advertisements, "HMR2")}/>
                        :
                        <AdvHomePage />
                    }
                </div>
                <br/>
                <div className="row">
                   <NormalProduct />
                </div>
                <div className="row normalBottom" style={{ marginBottom:'-20px' }}>
                    {display.advertisements != undefined ?
                        <AdvHomePage display={getAdvertisement(display.advertisements, "HML4")}/>
                        :
                        <AdvHomePage />
                    }
                    {display.advertisements != undefined ?
                        <AdvHomePage display={getAdvertisement(display.advertisements, "HMR4")}/>
                        :
                        <AdvHomePage />
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return({
        display: state.advertisementsDisplay
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ displayAdvertisementsAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Product);