import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionGetNotificationById } from '../../../app/actions/notification/notification'
import { loadState } from './../../localstorages/local_storage'
import moment from 'moment'
import './style.css'

let notification = {}

class Notification extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let notificationId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        console.log(loadState().token)
        this.props.actionGetNotificationById({
            token: loadState().token,
            id: notificationId
        })
    }
    render(){
        console.log('data ', notification)
        const handleNotificationIcons = () => {
            if(notification.notificationType == 'Promote Product') {
                return (<i className="fa fa-shopping-basket fa-fw" style={{color: '#359000'}} />)
            } else if(notification.notificationType == 'Promote Member') {
                return (<i className="fa fa-user-plus fa-fw" style={{color: '#0384C6'}} />)
            } else if(notification.notificationType == 'Block Product') {
                return (<i className="fa fa-ban fa-fw" style={{color: '#FF0000'}} />)
            } else {
                return (<i className="fa fa-comments fa-fw" />)
            }
        }
        return(
            <div className="notificationWrapper">
                <div className="title">
                    <div className="icon">
                        { handleNotificationIcons() }
                    </div>
                    <div className="type">
                        <span> { notification.notificationType } </span><br />
                        <small> { moment(notification.date).startOf().fromNow() } </small>
                    </div>
                </div>
                <div className="content">
                    { notification.description }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if(state.getNotification.code == 200) {
        notification = state.getNotification.data
    }
    return {
        getNotification: state.getNotification
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ actionGetNotificationById },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification)