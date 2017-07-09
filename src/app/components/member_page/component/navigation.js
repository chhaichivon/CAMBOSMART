import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Row } from 'react-bootstrap';
import { loadState,clearState,loadLanguage } from './../../../localstorages/local_storage';
import { actionAllGetNotificationsByUserId, 
    actionCountNotification,
    actionUpdateAllNotification, 
    actionUpdateDirtyNotification } from '../../../actions/notification/notification';
import { userLogOut } from './../../../actions/user';
import moment from 'moment';
import './index.css';
let countNotView = 0;
let notification = {};
class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidMount(){
        setInterval(function(){ 
            this.props.actionCountNotification({
                token: loadState().token,
                userId: loadState().user.userId
            })
            this.props.actionAllGetNotificationsByUserId({
                token: loadState().token,
                userId: loadState().user.userId,
                limit: 10
            });
        }.bind(this), 3000);
    }
    handleLogout(){
        this.props.userLogOut(loadState().token);
        clearState();
    }
    static checkSettingLink(){
        if (loadState() !== undefined) {
            if(loadState().user !== undefined){
                if (loadState().user.userType == "merchant") {
                    window.location.assign('/merchant/profile')
                }
                if (loadState().user.userType == "normal") {
                    window.location.assign('/normal/profile')
                }
            }
        }else{
            window.location.assign('/');
        }
    }
    handleClearNotification = () => {
        this.props.actionUpdateAllNotification({
            token: loadState().token,
            userId: loadState().user.userId
        })
    };
    
    handleViewDetailNotification = (id) => {
        this.props.actionUpdateDirtyNotification({
            token: loadState().token,
            id: Object.values(id)[0]
        })
    };
    render(){
        return(
            <div className="container member-navigation">
                <div className="">
                    <Link to="/"><img className="logo" src="/icon/cambo-smart3.png" /></Link>
                </div>
                <div className="member-navigation-icon navbar-right">
                    <span>
                        <Link to="/">
                            <i className="fa fa-home fa-nav" />
                        </Link>
                    </span>
                    <span className="dropdown">
                        <a data-toggle="dropdown" href="#" onClick={this.handleClearNotification}>
                            <i className="fa fa-globe fa-nav" />
                            {
                                countNotView !== 0 ? <span className="badge">{countNotView}</span> : null
                            }
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                            <div style={{padding: 5, borderBottom: '1px solid lightgray'}}>
                                <b>Notifications</b>
                            </div>
                            { notification != undefined ? 
                                <div>
                                    { notification.detail != undefined ? notification.detail.slice(0, 5).map((notification, index) => {
                                        const handleNotificationIcons = () => {
                                            if(notification.type == 'Promote Product') {
                                                return (<i className="fa fa-shopping-basket fa-fw" style={{color: '#359000'}} />);
                                            } else if(notification.type == 'Promote Member') {
                                                return (<i className="fa fa-user-plus fa-fw" style={{color: '#0384C6'}} />);
                                            } else if(notification.type == 'Block Product') {
                                                return (<i className="fa fa-ban fa-fw" style={{color: '#FF0000'}} />);
                                            } else {
                                                return (<i className="fa fa-comments fa-fw" />);
                                            }
                                        }
                                        return(
                                            <li key={index} style={{background: notification.isDirty === false ? '#E4E9F2' : '#fff'}}>
                                                <a href={
                                                    window.location.origin + "/" 
                                                    + loadState().user.userType
                                                    + "/notification/" + Object.values(notification._id)[0]} onClick={() => this.handleViewDetailNotification(notification._id)}>
                                                    <div>
                                                        { handleNotificationIcons() } &nbsp;
                                                        {notification.type}
                                                        <span className="pull-right text-muted small">{moment(notification.date).startOf().fromNow()}</span>
                                                        <br/>&emsp;&emsp;
                                                        <small>
                                                        {notification.description.length > 30 ? 
                                                            notification.description.substring(0,30) + '...' 
                                                            : notification.description.substring(0,30) 
                                                        } </small>
                                                    </div>
                                                </a>
                                            </li>
                                        );
                                    }) : <li>
                                            <center><img width="24" src="https://www.tiles.co.nz/Portals/_default/SkinObjects/loader.gif" /></center>
                                        </li> 
                                    }
                                </div>
                                :
                                <li style={{textAlign: 'center', padding: 5}}>
                                    <small>Not Found</small>
                                </li>
                            }
                            <div style={{textAlign: 'center', padding: 5}}>
                                <a className="text-center" href={ 
                                    window.location.origin + "/" 
                                    + loadState().user.userType
                                    + "/notifications"}>
                                    <b>See All Alerts</b>
                                </a>
                            </div>
                        </ul>
                    </span>
                    <span className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-user fa-nav" />
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a onClick={Navigation.checkSettingLink}><i className="fa fa-user fa-fw">&nbsp;&nbsp;<span className="title_user">Profile</span></i></a></li>
                            <li><a onClick={Navigation.checkSettingLink}><i className="fa fa-gear fa-fw">&nbsp;&nbsp;<span className="title_user">Settings</span></i></a></li>
                            <li><Link to="/" onClick={this.handleLogout}><i className="fa fa-sign-out fa-fw">&nbsp;&nbsp;<span className="title_user">Logout</span></i></Link></li>
                        </ul>
                    </span>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    if(state.countNotification.code == 200){
        if(state.countNotification.data.length == 0){
            countNotView = 0;
        } else {
            countNotView = state.countNotification.data[0].count
        }
    }
    if(state.getAllNotifications.code == 200){
        notification = state.getAllNotifications.data[0]
    }
    return {
        userLogout : state.userLogout,
        countNotification: state.countNotification,
        getAllNotifications: state.getAllNotifications,
        updateAllNotification: state.updateAllNotification,
        updateDirtyNotification: state.updateDirtyNotification
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        userLogOut, 
        actionCountNotification, 
        actionAllGetNotificationsByUserId, 
        actionUpdateAllNotification, 
        actionUpdateDirtyNotification }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);