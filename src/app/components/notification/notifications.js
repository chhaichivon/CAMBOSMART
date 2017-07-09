import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { actionAllGetNotificationsByUserId, actionUpdateDirtyNotification } from '../../../app/actions/notification/notification'
import { loadState } from './../../localstorages/local_storage'
import moment from 'moment'
import './style.css'

let notification = {}
let limit = 10

class Notification extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        setInterval(function(){ 
            this.props.actionAllGetNotificationsByUserId({
                token: loadState().token,
                userId: loadState().user.userId,
                limit: limit
            });
        }.bind(this), 1000);
    }

    handleViewDetailNotification = (id) => {
        this.props.actionUpdateDirtyNotification({
            token: loadState().token,
            id: Object.values(id)[0]
        })
    }

    handleSeeMore = () => {
        limit = limit + 10
    }

    render(){
        return(
            <div className="viewNotificationsWrapper"> 
                <div className="title">
                    <p>Your Notifications</p>
                </div>
                { notification != undefined ? 
                <div>
                    <ui>
                        { notification.detail != undefined ? notification.detail.map((notification, index) => {
                            const handleNotificationIcons = () => {
                                if(notification.type == 'Promote Product') {
                                    return (<i className="fa fa-shopping-basket fa-fw" style={{color: '#359000'}} />)
                                } else if(notification.type == 'Promote Member') {
                                    return (<i className="fa fa-user-plus fa-fw" style={{color: '#0384C6'}} />)
                                } else if(notification.type == 'Block Product') {
                                    return (<i className="fa fa-ban fa-fw" style={{color: '#FF0000'}} />)
                                } else {
                                    return (<i className="fa fa-comments fa-fw" />)
                                }
                            }
                            return(
                                <li key={index} style={{background: notification.isDirty === false ? '#E4E9F2' : '#F8F8F8'}}>
                                    <a href={
                                        window.location.origin + "/" 
                                        + (loadState().user.userType === 'normal' ? 'member' : loadState().user.userType)
                                        + "/notification/" + Object.values(notification._id)[0]} onClick={() => this.handleViewDetailNotification(notification._id)}>
                                        <div>
                                            { handleNotificationIcons() } &nbsp;
                                            {notification.type}
                                            <span className="pull-right small">{moment(notification.date).startOf().fromNow()}</span>
                                            <br/>&emsp;&emsp;&emsp;
                                            <small>
                                            {notification.description.length > 80 ? 
                                                notification.description.substring(0,80) + '...' 
                                                : notification.description.substring(0,80) 
                                            } </small>
                                        </div>
                                    </a>
                                </li>
                            )
                        }) : <li id="loadingNotifications" style={{minHeight: 600}}>
                                <center><img src="http://multihospedaje.net/images/loading.gif" /></center>
                            </li>
                        }
                    </ui>
                    <div style={{textAlign: 'center', paddingTop: 5}}>
                        <Link className="text-center" to="" onClick={this.handleSeeMore}>
                            <b>See More</b>
                        </Link>
                    </div>
                </div>
                : <div style={{padding: 15}}> <small>Not Found</small></div> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if(state.getAllNotifications.code == 200) {
        notification = state.getAllNotifications.data[0]
    }
    return {
        getAllNotifications: state.getAllNotifications,
        updateDirtyNotification: state.updateDirtyNotification
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ actionAllGetNotificationsByUserId, actionUpdateDirtyNotification },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification)