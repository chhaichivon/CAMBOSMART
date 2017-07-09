import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { loadState, clearLoginAdmin } from './../../../localstorages/local_storage';
import { userLogOut } from './../../../actions/user';
import './admin.css';
/* auto work */
import { actionUpdateExpiredMerchant } from './../../../actions/admin/merchant/merchant';
import { actionDeleteMemberRequestsExpired } from './../../../actions/admin/member/member';
import { actionUpdatePromotedProductExpired } from './../../../actions/admin/promoted_package/promote_product_package';
import { actionAdminListMemberRequest } from './../../../actions/admin/member/member';
import { actionAdminListUsers, actionAdminDeleteRequestPromoteExpired } from './../../../actions/admin/product/product';

let request = {
    page :1,
    limit: 10,
    token: loadState() == undefined ? '' : loadState().token,
    requested : {
        "name" : "",
        "location": "",
        "fromDate" : "2017-1-1",
        "toDate": "2017-12-31"
    }
};

let users = {
    page: 1,
    limit: 10,
    user: {
        city:"",
        fromDate: "2017-1-1",
        toDate:"2017-12-31",
        name:""
    }
};

let countMemberRequest = 0;
let countPromoteProduct = 0;

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount() {
        this.props.actionAdminListMemberRequest(request);
        this.props.actionAdminListUsers(users);
    }

    componentDidMount(){
        this.props.actionDeleteMemberRequestsExpired();
        this.props.actionAdminDeleteRequestPromoteExpired();
        this.props.actionUpdatePromotedProductExpired();
        setInterval(function(){
            this.props.actionUpdateExpiredMerchant();
        }.bind(this), 5000);
    }

    handleLogout(){
        this.props.userLogOut(loadState().token);
        clearLoginAdmin();
    }

    render(){
        let totalCountRequest = countMemberRequest + countPromoteProduct;
        return(
            <span>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/admin/dashboard"><img width="130" className="logo-dashboard-admin" src="/icon/cambo-smart3.png" style={{marginLeft: 20}} /></Link>
                </div>
                <ul className="nav navbar-top-links navbar-right" style={{marginTop: 7}}>
                    <li>
                        <a href="/">
                            <b><i className="fa fa-home" style={{fontSize: 18}}></i> Home</b>
                        </a>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-bell" />
                                { totalCountRequest == 0 ? null : 
                                <span className="badge" style={{marginLeft: -5}}>{totalCountRequest}</span>
                                }
                            &nbsp;<i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-alerts dropdown-user">
                            { countMemberRequest != 0 ? 
                            <li>
                                <a href={ location.origin + "/admin/members/list-request"}>
                                    <div>
                                        <i className="fa fa-user-plus"></i>&nbsp; Member request to be merchant.
                                    </div>
                                </a>
                            </li>
                            : null }
                            { countMemberRequest != 0 && countPromoteProduct != 0 ? <li className="divider"></li> : null }
                            { countPromoteProduct != 0 ?
                            <li>
                                <a href={ location.origin + "/admin/promote/list-boot-products"}>
                                    <div>
                                        <i className="fa fa-shopping-cart"></i> &nbsp; Member request promote product.
                                    </div>
                                </a>
                            </li>
                            : null }
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-user fa-fw"></i><i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="/admin/profile"><i className="fa fa-user fa-fw">Profile</i></a></li>
                            <li><Link to="" onClick={this.handleLogout}><i className="fa fa-sign-out fa-fw">Logout</i></Link></li>
                        </ul>
                    </li>
                </ul>
            </span>
        )
    }
}

function mapStateToProps(state) {
    if(state.listMemberRequest.requested != undefined) {
        countMemberRequest = state.listMemberRequest.requested.length;
    }
    if(state.adminListUsers.users != undefined){
        countPromoteProduct = state.adminListUsers.users.length;
    }
    return {
        userLogout : state.userLogout,
        deleteMemberRequestsExpired: state.deleteMemberRequestsExpired,
        updatePromotedProductsExpired: state.updatePromotedProductsExpired,
        updateExpiredMerchants : state.updateExpiredMerchants,
        listMemberRequest: state.listMemberRequest,
        adminListUsers: state.adminListUsers,
        adminDeleteRequestPromoteExpired: state.adminDeleteRequestPromoteExpired
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({userLogOut,
        actionUpdateExpiredMerchant,
        actionDeleteMemberRequestsExpired, 
        actionUpdatePromotedProductExpired,
        actionAdminListMemberRequest,
        actionAdminListUsers,
        actionAdminDeleteRequestPromoteExpired
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
