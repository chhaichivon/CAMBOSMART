/**
 * Created by Naseat on 12/18/2016.
 */
import React from 'react';
import {Navbar,Grid,NavItem} from 'react-bootstrap';
import SearchHome from './../navigation/home_search.js';

export default class DetailNavigation extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div>
                <div className="container-fluid header">
                 <Grid>
                <Navbar.Form pullLeft className="navbarpullleft">
                    <SearchHome />
                </Navbar.Form>
                     <div>
                         <a href="#" className="hidden-xs hidden-sm cart">Cart[0]</a>
                     </div>

               </Grid>
                </div>
            </div>
        );
    }
}