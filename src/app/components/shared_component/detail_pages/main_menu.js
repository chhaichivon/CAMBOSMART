import React from 'react';

import {Nav , NavItem , NavDropdown,MenuItem,Navbar} from 'react-bootstrap';
export default class MainMenu extends React.Component{
    render(){
        return(
            <div className="container-fluid mainmenu">
            <Navbar>
                <Nav>
                    <NavItem eventKey={1} href="#">Coupons</NavItem>
                    <NavItem eventKey={2} href="#">Clearance</NavItem>
                    <NavItem eventKey={2} href="#">Best Deal</NavItem>
                </Nav>
            </Navbar>
                </div>

        );
    }
}
