
/**
 * Created by CHHAI CHIVON
 */

import React from 'react';
import './admin.css';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router';
class NavigationLeft extends React.Component{
    constructor(props){
        super(props);
        this.state={
            in1:false,
            in2:false,
            in3:false,
            in4:false,
            in5:false,
            in6:false,
            in7:false
        };
        this.adminShowIn1=this.adminShowIn1.bind(this);
        this.adminShowIn2=this.adminShowIn2.bind(this);
        this.adminShowIn3=this.adminShowIn3.bind(this);
        this.adminShowIn4=this.adminShowIn4.bind(this);
        this.adminShowIn5=this.adminShowIn5.bind(this);
        this.adminShowIn6=this.adminShowIn6.bind(this);
        this.adminShowIn7=this.adminShowIn7.bind(this); // category menu
    }
    adminShowIn1(){
        this.setState({
            in1:!this.state.in1
        })
    }
    adminShowIn2(){
        this.setState({
            in2:!this.state.in2
        })
    }
    adminShowIn3(){
        this.setState({
            in3:!this.state.in3
        })
    }
    adminShowIn4(){
        this.setState({
            in4:!this.state.in4
        })
    }
    adminShowIn5(){
        this.setState({
            in5:!this.state.in5
        })
    }
    adminShowIn6(){
        this.setState({
            in6:!this.state.in6
        })
    }
    /* category menu */
    adminShowIn7(){
        this.setState({
            in7:!this.state.in7
        })
    }
    render(){
        return (
            <span>
                <div className="navbar-default sidebar" role="navigation">
                     <div className="sidebar-nav navbar-collapse">
                         <ul className="nav" id="side-menu">
                             <li>
                                 <Link to="/admin"><i className="fa fa-dashboard fa-fw"></i>&nbsp; Dashboard</Link>
                             </li>
                             {/* category menu */}
                             <li onClick={this.adminShowIn7}>
                                 <Link to="">
                                     <i className="fa fa-indent" aria-hidden="true">&nbsp;Category</i><span className="fa arrow"></span>
                                 </Link>
                                 {
                                     this.state.in7 ?
                                         <ul className="nav nav-second-level">
                                             <Link to="/admin/category/add-category">
                                                 <li>
                                                     <p className="submit_item">Add Category</p>
                                                 </li>
                                             </Link>
                                             <Link to="/admin/category/list-category">
                                                 <li>
                                                     <p className="submit_item">List Category</p>
                                                 </li>
                                             </Link>
                                         </ul>
                                         : null
                                 }

                             </li>
                             <li onClick={this.adminShowIn1}>
                                  <Link to="">
                                      <i className="fa fa-shopping-basket" aria-hidden="true">&nbsp;Products</i><span className="fa arrow"></span>
                                  </Link>
                                 {
                                     this.state.in1 ?
                                         <ul className="nav nav-second-level">
                                             <Link to="/admin/products/stock-management">
                                                 <li>
                                                     <p className="submit_item">Stock Management</p>
                                                 </li>
                                             </Link>
                                             <Link to="">
                                                 <li>
                                                     <p className="submit_item">Report</p>
                                                 </li>
                                             </Link>
                                         </ul>
                                         : null
                                 }

                             </li>
                             <li onClick={this.adminShowIn2}>
                                  <Link to="">
                                     <i className="fa fa-flag" aria-hidden="true">&nbsp;Merchant</i><span className="fa arrow"></span>
                                  </Link>
                                 {
                                     this.state.in2 ?
                                         <ul className="nav nav-second-level">
                                             <Link to="/admin/merchants">
                                                 <li >
                                                     <p className="submit_item">List Merchant</p>
                                                 </li>
                                             </Link>
                                             <Link  to="/admin/merchants/request">
                                                 <li>
                                                     <p className="submit_item">Request</p>
                                                 </li>
                                             </Link>
                                         </ul>
                                         : null
                                 }

                             </li>
                             <li onClick={this.adminShowIn3}>
                                  <Link to="/admin/advertiser">
                                      <i className="fa fa-user-secret" aria-hidden="true">&nbsp;Advertiser</i><span className="fa arrow"></span>
                                  </Link>
                                 {
                                     this.state.in3 ?
                                         <ul className="nav nav-second-level">
                                             <Link to="/admin/advertiser/new">
                                                 <li>
                                                     <p className="submit_item">New</p>
                                                 </li>
                                             </Link>
                                             <Link to="">
                                             <li>
                                                 <p className="submit_item">View</p>
                                             </li>
                                             </Link>
                                             <Link to="">
                                             <li>
                                                 <p className="submit_item" >Schedule</p>
                                             </li>
                                             </Link>
                                             <Link to="">
                                             <li>
                                                 <p className="submit_item">Print</p>
                                             </li>
                                             </Link>
                                         </ul>
                                         : null
                                 }

                             </li>
                             <li onClick={this.adminShowIn4}>
                                  <Link to="">
                                      <i className="fa fa-users" aria-hidden="true">&nbsp;Members</i><span className="fa arrow"></span>
                                  </Link>
                                 {
                                     this.state.in4 ?
                                         <ul className="nav nav-second-level">
                                             <Link to="/admin/member/list">
                                                 <li>
                                                     <p className="submit_item">List Member</p>
                                                 </li>
                                             </Link>
                                         </ul>
                                         : null
                                 }

                             </li>
                             <li onClick={this.adminShowIn5}>
                                  <Link to="">
                                      <i className="fa fa-bar-chart" aria-hidden="true">&nbsp;Reports</i><span className="fa arrow"></span>
                                  </Link>
                                 {
                                     this.state.in5 ?
                                         <ul className="nav nav-second-level">
                                             <Link to="">
                                                 <li>
                                                     <p className="submit_item">Flot Charts</p>
                                                 </li>
                                             </Link>
                                             <Link to="">
                                                 <li>
                                                     <p className="submit_item">Morris.js Charts</p>
                                                 </li>
                                             </Link>
                                         </ul>
                                         : null
                                 }

                             </li>
                             <li onClick={this.adminShowIn6}>
                                 <Link to="">
                                     <i className="fa fa-files-o fa-fw">&nbsp;Other</i><span className="fa arrow"></span>
                                 </Link>
                                 {
                                     this.state.in6 ?
                                         <ul className="nav nav-second-level">
                                             <Link to="">
                                                 <li>
                                                     <p className="submit_item" >Blank Page</p>
                                                 </li>
                                             </Link>
                                             <Link to="">
                                                 <li>
                                                     <p className="submit_item">Login Page</p>
                                                 </li>
                                             </Link>
                                             <Link to="/admin/setting">
                                                 <li>
                                                     <p className="submit_item">Profile setting</p>
                                                 </li>
                                             </Link>

                                         </ul>
                                         : null
                                 }
                             </li>
                         </ul>
                      </div>
                </div>
            </span>
        );
    }
}
export default NavigationLeft;
