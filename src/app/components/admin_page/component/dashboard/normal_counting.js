import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionAdminCountNormalMembers } from '../../../../actions/admin/member/member'
import { loadState } from './../../../../localstorages/local_storage'

class NormalCounting extends React.Component {
    componentWillMount(){
        this.props.actionAdminCountNormalMembers({
            token: loadState().token
        })
    }
    render(){
        return(
            <div>
                <span className="quick_box_text">
                    <h1><b>
                        {
                            this.props.adminCountNormalMembers != undefined ?
                                this.props.adminCountNormalMembers.data : 0
                        }
                    </b></h1>
                    <p>Normal Members</p>
                </span>
                <span className="quick_box_icon">
                    <i className="fa fa-user" />
                </span>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        adminCountNormalMembers: state.adminCountNormalMembers
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({actionAdminCountNormalMembers}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(NormalCounting)