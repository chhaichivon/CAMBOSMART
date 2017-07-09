/**
 * Created by CHHAI CHIVON
 */
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import './../navigation.css';
import './../cambo_search/form_search.css';
class CamboLogo extends React.Component{
    render(){
        return(
            <div className="col-xs-2 col-sm-2 col-lg-2 wrapper-logo">
                <a href="/"> <img className="small-logo" src="/icon/cambo-smart3.png" alt="cambo logo"/></a>
            </div>
        );
    }
}
export default CamboLogo;