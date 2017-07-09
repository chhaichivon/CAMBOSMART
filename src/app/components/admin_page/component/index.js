import React from 'react';
import './../css/admin.css';
import {Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import VisitorDetail from './visitor/visitor_detail';
import Dashboard from './dashboard/dashboard';

export default class Index extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Dashboard />
            </div>
        );
    }

}