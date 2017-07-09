import React from 'react';
import classNames from 'classnames';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import './memu_left.css';

export default class MenuLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: true,
            advertiser: true,
            merchant: true,
            member: true,
            category: true,
            product: true,
            promotedProductPackage: true,
            promotedUserPackage: true,
            advertisementPackage: true,
            categoryAdsPackage: true,
            report: true,
            others: true,
            mistake:true
        };
    }

    componentWillMount(){
        const pathname = window.location.pathname;
        if(pathname == "/admin/advertisers/list" || pathname == "/admin/advertisers/new"){
            this.setState({
                dashboard: true,
                advertiser: !this.state.advertiser,
                merchant: true,
                member: true,
                category: true,
                product: true,
                promotedProductPackage: true,
                promotedUserPackage: true,
                advertisementPackage: true,
                report: true,
                others: true,
                mistake:true
            })
        }else if(pathname == "/admin/merchants/list"){
            this.setState({
                dashboard: true,
                advertiser: true,
                merchant: !this.state.merchant,
                member: true,
                category: true,
                product: true,
                promotedProductPackage: true,
                promotedUserPackage: true,
                advertisementPackage: true,
                report: true,
                others: true,
                mistake:true
            })
        }else if(pathname == "/admin/members/list"){
            this.setState({
                dashboard: true,
                advertiser: true,
                merchant: true,
                member: !this.state.member,
                category: true,
                product: true,
                promotedProductPackage: true,
                promotedUserPackage: true,
                advertisementPackage: true,
                report: true,
                others: true,
                mistake:true
            })
        }else if(pathname == "/admin/advertisements/schedule" || pathname == "/admin/advertisements/add" || pathname == "/admin/advertisements/list"){
            this.setState({
                dashboard: true,
                advertiser: true,
                merchant: true,
                member: true,
                category: true,
                product: true,
                promotedProductPackage: true,
                promotedUserPackage: true,
                advertisementPackage: !this.state.advertisementPackage,
                report: true,
                others: true,
                mistake:true
            })
        }

    }

    render() {
        return (
            <span>
                <div className="navbar-default sidebar" role="navigation" style={{marginLeft: '1px'}}>
                    <div className="sidebar-nav">
                        <ul className="nav in" id="side-menu">
                            <li onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                    dashboard: !this.state.dashboard,
                                    advertiser: true,
                                    merchant: true,
                                    member: true,
                                    category: true,
                                    product: true,
                                    promotedProductPackage: true,
                                    promotedUserPackage: true,
                                    advertisementPackage: true,
                                    report: true,
                                    others: true,
                                    mistake:true
                                });
                                return false;
                            } }>
                                <Link to="/admin/dashboard" activeStyle={{backgroundColor:'#ff6903', fontWeight:'bold'}}>
                                    <i className="fa fa-dashboard" aria-hidden="true">&nbsp;&nbsp; Dashboard</i>
                                </Link>
                            </li>
                            {/*advertiser*/}
                            <li className={classNames({active: !this.state.advertiser})}>
                                <Link onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        dashboard: true,
                                        advertiser: !this.state.advertiser,
                                        merchant: true,
                                        member: true,
                                        category: true,
                                        product: true,
                                        promotedProductPackage: true,
                                        promotedUserPackage: true,
                                        advertisementPackage: true,
                                        report: true,
                                        others: true,
                                        mistake:true
                                    });
                                    return false;
                                } } to="">
                                    <i className="fa fa-users" aria-hidden="true">&nbsp;&nbsp; Advertiser</i>
                                    <span className="fa arrow"/>
                                </Link>
                                <ul
                                    className={
                                        classNames({
                                            'nav nav-second-level': true,
                                            collapse: this.state.advertiser
                                        })
                                    }
                                >
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/advertisers/new">
                                            <i className="fa fa-plus" aria-hidden="true">&nbsp;&nbsp;New</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/advertisers/list">
                                            <i className="fa fa-eye" aria-hidden="true">&nbsp;&nbsp;View</i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/*merchant*/}
                            <li className={classNames({active: !this.state.merchant})}>
                                <Link onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        dashboard: true,
                                        advertiser: true,
                                        merchant: !this.state.merchant,
                                        member: true,
                                        category: true,
                                        product: true,
                                        promotedProductPackage: true,
                                        promotedUserPackage: true,
                                        advertisementPackage: true,
                                        report: true,
                                        others: true,
                                        mistake:true
                                    });
                                    return false;
                                } } to="">
                                    <i className="fa fa-users" aria-hidden="true">&nbsp;&nbsp; Merchant</i><span className="fa arrow"/>
                                </Link>
                                <ul
                                    className={
                                        classNames({
                                            'nav nav-second-level': true,
                                            collapse: this.state.merchant
                                        })
                                    }
                                >
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/merchants/list">
                                            <i className="fa fa-eye" aria-hidden="true">&nbsp;&nbsp;View</i>
                                        </Link>
                                    </li>
                                    {/*<li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/merchants/list-merchants-expired">
                                            <i className="fa fa-clock-o" aria-hidden="true">&nbsp;&nbsp;Merchants Expired</i>
                                        </Link>
                                    </li>*/}
                                </ul>
                            </li>
                            {/*member*/}
                            <li className={classNames({active: !this.state.member})}>
                                <Link onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        dashboard: true,
                                        advertiser: true,
                                        merchant: true,
                                        member: !this.state.member,
                                        category: true,
                                        product: true,
                                        promotedProductPackage: true,
                                        promotedUserPackage: true,
                                        advertisementPackage: true,
                                        report: true,
                                        others: true,
                                        mistake:true
                                    });
                                    return false;
                                } } to="">
                                    <i className="fa fa-users" aria-hidden="true">&nbsp;&nbsp; Member</i><span className="fa arrow"/>
                                </Link>
                                <ul
                                    className={
                                        classNames({
                                            'nav nav-second-level': true,
                                            collapse: this.state.member
                                        })
                                    }
                                >
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/members/list">
                                            <i className="fa fa-eye" aria-hidden="true">&nbsp;&nbsp;View</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/members/list-request">
                                            <i className="fa fa-plus" aria-hidden="true">&nbsp;&nbsp;Request</i>
                                        </Link>
                                    </li>
                                    {/*<li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/members/list-request-expired">
                                            <i className="fa fa-clock-o" aria-hidden="true">&nbsp;&nbsp;Request Expired</i>
                                        </Link>
                                    </li>*/}
                                </ul>
                            </li>
                            {/*category*/}
                            <li className={classNames({active: !this.state.category})}>
                                <Link onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        dashboard: true,
                                        advertiser: true,
                                        merchant: true,
                                        member: true,
                                        category: !this.state.category,
                                        product: true,
                                        promotedProductPackage: true,
                                        promotedUserPackage: true,
                                        advertisementPackage: true,
                                        report: true,
                                        others: true,
                                        mistake:true
                                    });
                                    return false;
                                } } to="">
                                    <i className="fa fa-indent" aria-hidden="true">&nbsp;&nbsp; Category</i>
                                    <span className="fa arrow"/>
                                </Link>
                                <ul
                                    className={
                                        classNames({
                                            'nav nav-second-level': true,
                                            collapse: this.state.category
                                        })
                                    }
                                >
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/category/add-category">
                                            <i className="fa fa-plus" aria-hidden="true">&nbsp;&nbsp;New</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/category/list-category">
                                            <i className="fa fa-eye" aria-hidden="true">&nbsp;&nbsp;View</i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/*product*/}
                            <li className={classNames({active: !this.state.product})}>
                                <Link onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        dashboard: true,
                                        advertiser: true,
                                        merchant: true,
                                        member: true,
                                        category: true,
                                        product: !this.state.product,
                                        promotedProductPackage: true,
                                        promotedUserPackage: true,
                                        advertisementPackage: true,
                                        report: true,
                                        others: true,
                                        mistake:true
                                    });
                                    return false;
                                } } to="">
                                    <i className="fa fa-shopping-basket" aria-hidden="true">&nbsp;&nbsp; Products</i>
                                    <span className="fa arrow"/>
                                </Link>
                                <ul
                                    className={
                                        classNames({
                                            'nav nav-second-level': true,
                                            collapse: this.state.product
                                        })
                                    }
                                >
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/products/list-products">
                                            <i className="fa fa-eye" aria-hidden="true">&nbsp;&nbsp;View</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/promote/list-boot-products">
                                            <i className="fa fa-plus" aria-hidden="true">&nbsp;&nbsp;Request</i>
                                        </Link>
                                    </li>
                                    {/*<li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/promote/list-expired-products">
                                            <i className="fa fa-clock-o" aria-hidden="true">&nbsp;&nbsp;Promoted Expired</i>
                                        </Link>
                                    </li>*/}
                                </ul>
                            </li>
                            {/* promoted product package */}
                            <li className={classNames({active: !this.state.promotedUserPackage})}>
                                <Link onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        dashboard: true,
                                        advertiser: true,
                                        merchant: true,
                                        member: true,
                                        category: true,
                                        product: true,
                                        promotedProductPackage: !this.state.promotedProductPackage,
                                        promotedUserPackage: true,
                                        advertisementPackage: true,
                                        report: true,
                                        others: true,
                                        mistake:true
                                    });
                                    return false;
                                } } to="">
                                    <i className="fa fa-shopping-basket" aria-hidden="true">&nbsp;&nbsp; Promoted Product Package</i>
                                    <span className="fa arrow"/>
                                </Link>
                                <ul
                                    className={
                                        classNames({
                                            'nav nav-second-level': true,
                                            collapse: this.state.promotedProductPackage
                                        })
                                    }
                                >
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/package/add-package">
                                            <i className="fa fa-plus" aria-hidden="true">&nbsp;&nbsp;New</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/package/list-package">
                                            <i className="fa fa-eye" aria-hidden="true">&nbsp;&nbsp;View</i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* promoted user package */}
                            <li className={classNames({active: !this.state.promotedUserPackage})}>
                                <Link onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        dashboard: true,
                                        advertiser: true,
                                        merchant: true,
                                        member: true,
                                        category: true,
                                        product: true,
                                        promotedProductPackage: true,
                                        promotedUserPackage: !this.state.promotedUserPackage,
                                        advertisementPackage: true,
                                        report: true,
                                        others: true,
                                        mistake:true
                                    });
                                    return false;
                                } } to="">
                                    <i className="fa fa-user-secret" aria-hidden="true">&nbsp;&nbsp; Promoted User Package</i>
                                    <span className="fa arrow"/>
                                </Link>
                                <ul
                                    className={
                                        classNames({
                                            'nav nav-second-level': true,
                                            collapse: this.state.promotedUserPackage
                                        })
                                    }
                                >
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/user-package/add-user-package">
                                            <i className="fa fa-plus" aria-hidden="true">&nbsp;&nbsp;New</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/user-package/list-user-package">
                                            <i className="fa fa-eye" aria-hidden="true">&nbsp;&nbsp;View</i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/*advertisement package*/}
                            <li className={classNames({active: !this.state.advertisementPackage})}>
                                <Link onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        dashboard: true,
                                        advertiser: true,
                                        merchant: true,
                                        member: true,
                                        category: true,
                                        product: true,
                                        promotedProductPackage: true,
                                        advertisementPackage: !this.state.advertisementPackage,
                                        report: true,
                                        others: true,
                                        mistake:true
                                    });
                                    return false;
                                } } to="">
                                    <i className="fa fa-user-secret" aria-hidden="true">&nbsp;&nbsp; Advertisement Package</i>
                                    <span className="fa arrow"/>
                                </Link>
                                <ul
                                    className={
                                        classNames({
                                            'nav nav-second-level': true,
                                            collapse: this.state.advertisementPackage
                                        })
                                    }
                                >
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/advertisements/schedule">
                                            <i className="fa fa-clock-o" aria-hidden="true">&nbsp;&nbsp;Schedule</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/advertisements/add">
                                            <i className="fa fa-plus" aria-hidden="true">&nbsp;&nbsp;New</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/advertisements/list">
                                            <i className="fa fa-eye" aria-hidden="true">&nbsp;&nbsp;View</i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/*category advertisement package*/}
                            <li className={classNames({active: !this.state.categoryAdsPackage})}>
                                <Link onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        dashboard: true,
                                        advertiser: true,
                                        merchant: true,
                                        member: true,
                                        category: true,
                                        product: true,
                                        promotedProductPackage: true,
                                        categoryAdsPackage: !this.state.categoryAdsPackage,
                                        report: true,
                                        others: true,
                                        mistake:true
                                    });
                                    return false;
                                } } to="">
                                    <i className="fa fa-user-secret" aria-hidden="true">&nbsp;&nbsp; Category Ads Package</i>
                                    <span className="fa arrow"/>
                                </Link>
                                <ul
                                    className={
                                        classNames({
                                            'nav nav-second-level': true,
                                            collapse: this.state.categoryAdsPackage
                                        })
                                    }
                                >
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/advertisements/category/schedule">
                                            <i className="fa fa-clock-o" aria-hidden="true">&nbsp;&nbsp;Schedule</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/advertisements/category/add">
                                            <i className="fa fa-plus" aria-hidden="true">&nbsp;&nbsp;New</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/advertisements/category/list">
                                            <i className="fa fa-eye" aria-hidden="true">&nbsp;&nbsp;View</i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/*report*/}
                            <li className={classNames({active: !this.state.report})}>
                                <Link onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        dashboard: true,
                                        advertiser: true,
                                        merchant: true,
                                        member: true,
                                        category: true,
                                        product: true,
                                        promotedProductPackage: true,
                                        advertisementPackage: true,
                                        report: !this.state.report,
                                        others: true,
                                        mistake:true
                                    });
                                    return false;
                                } } to="">
                                    <i className="fa fa-bar-chart" aria-hidden="true">&nbsp;Reports</i><span className="fa arrow"/>
                                </Link>
                                <ul
                                    className={
                                        classNames({
                                            'nav nav-second-level': true,
                                            collapse: this.state.report
                                        })
                                    }
                                >
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/reports/product-report">
                                            <i className="fa fa-shopping-basket" aria-hidden="true">&nbsp;&nbsp;Products</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeStyle={{
                                            backgroundColor: '#ff6903',
                                            fontWeight: 'bold'
                                        }} to="/admin/reports/income">
                                            <i className="fa fa-money" aria-hidden="true">&nbsp;&nbsp;Income</i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*<Row >
                    <Col className="col-nave" md={2}>
                        <div className="navbar-default sidebar" role="navigation">
                            <div className="sidebar-nav">
                                <ul className="nav in" id="side-menu">
                                    <li className={classNames({ active: !this.state.elementsCollapsedSavingAccount })}>
                                        <Link onClick={(e) => {
                                            e.preventDefault();
                                            this.setState({ elementsCollapsedSavingAccount: !this.state.elementsCollapsedSavingAccount });
                                            return false;
                                        } } to="">Saving Account<span className="fa arrow" /></Link>
                                        <ul
                                            className={
                                                classNames({
                                                    'nav nav-second-level': true,
                                                    collapse: this.state.elementsCollapsedSavingAccount
                                                })
                                            }
                                        >
                                            <li>
                                                <Link activeStyle={{backgroundColor:'#ff6903', fontWeight:'bold'}} to="/services/payments/saving/accounts/new"><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;New</Link>
                                            </li>
                                            <li>
                                                <Link activeStyle={{backgroundColor:'#ff6903', fontWeight:'bold'}} to="/services/payments/saving/accounts/change"><i className="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;&nbsp;Change</Link>
                                            </li>
                                            <li>
                                                <Link activeStyle={{backgroundColor:'#ff6903', fontWeight:'bold'}} to="/services/payments/saving/accounts/delete"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;&nbsp;Delete</Link>
                                            </li>
                                            <li>
                                                <Link activeStyle={{backgroundColor:'#ff6903', fontWeight:'bold'}} to="/services/payments/saving/accounts/view"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View</Link>
                                            </li>
                                            <li>

                                                <Link activeStyle={{backgroundColor:'#ff6903', fontWeight:'bold'}} to="/services/payments/saving/accounts/print"><i className="fa fa-print" aria-hidden="true"></i>&nbsp;&nbsp;Print</Link>

                                            </li>
                                        </ul>
                                    </li>

                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ elementsCollapsedSavingAccount: true});
                                        return false;
                                    } }
                                    >
                                        <Link to="/services/payments/current/accounts" activeStyle={{backgroundColor:'#ff6903', fontWeight:'bold'}}>
                                            Current Account
                                        </Link>
                                    </li>

                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ elementsCollapsedSavingAccount: true});
                                        return false;
                                    } }>
                                        <Link to="/services/payments/fixed/accounts" activeStyle={{backgroundColor:'#ff6903', fontWeight:'bold'}}>
                                            Fixed Account
                                        </Link>
                                    </li>

                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ elementsCollapsedSavingAccount: true});
                                        return false;
                                    } }>
                                        <Link to="/services/payments/recurring/accounts" activeStyle={{backgroundColor:'#ff6903', fontWeight:'bold'}}>
                                            Recurring Account
                                        </Link>
                                    </li>

                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ elementsCollapsedSavingAccount: true});
                                        return false;
                                    } }>
                                        <Link to="/services/payments/installment/accounts" activeStyle={{backgroundColor:'#ff6903', fontWeight:'bold'}}>
                                            Installment Account
                                        </Link>
                                    </li>
                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ elementsCollapsedSavingAccount: true});
                                        return false;
                                    } }>
                                        <Link to="/services/payments/user/manual" activeStyle={{backgroundColor:'#ff6903', fontWeight:'bold'}}>User Manual</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={10}>
                        {this.props.children}
                    </Col>
                </Row>*/}
            </span>
        );
    }
}
