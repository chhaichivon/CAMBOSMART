/**
 * Created by CHHAI CHIVON
 */
import React from 'react';
import {Carousel}from 'react-bootstrap'
import MainSlide from '../shared_component/advertisment/main';
import MenuLeft from './menu_left/all_category_menu';
import Location from './../shared_component/locations/Location';
class IndexProduct extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <MainSlide/>
                </div>
                <div className="row">
                    {
                        this.props.children
                    }
                </div>
                <div className="row">
                    <Location />
                </div>
            </div>
        )
    }
}

export default IndexProduct;