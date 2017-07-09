import React from 'react';
import {Row, Col } from 'react-bootstrap';
import './location.css';
import { Link } from 'react-router';
import { languages } from './../../../utils/languages/location';
import { loadLanguage } from '../../../localstorages/local_storage';

class Location extends React.Component{

    constructor(){
        super();
        this.state = {
            lang: false
        }
    }

    render(){

        const url = (location) => {
            return `/products/location/grid/location?l=${location}&dr=0&sp=0&ep=0&p=1`;
        };

        return(
        <div>
            <div className="m-title-header custom-header">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h4 className="product-title">{loadLanguage() == 'en' ? 'LOCATIONS' : 'ផលិតផលតាមទីតាំង៖'}</h4>
                </div>
                <hr className="line-title" style={{ clear:"both" }}/>
            </div>

            <div className="wrap-location">
                <div className="row row-location">
                            {languages.map((language, index) =>{
                                return(
                                    <div key={index} className="col-xs-2 col-sm-2 col-md-2 col-lg-2 location">
                                        <ul className="ul-location ">
                                            <li style={{ fontFamily: 'khmer', fontWeight: 'normal',fontSize: '100%',lineHeight: 1.5}}><a href={url(language.lang[1].replace(' ','+'))}><i className="fa fa-angle-right" aria-hidden="true"></i>&nbsp;{loadLanguage() == 'en' ? language.lang[1]: language.lang[0]}</a></li>
                                        </ul>
                                    </div>

                                );
                            })}

                </div>
            </div>
        </div>
        )
    }
}

export default Location;