import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchViewWebsiteAction} from '../../../../actions/admin/common'

class VisitorCounting extends React.Component {
    componentWillMount(){
        this.props.fetchViewWebsiteAction({
            year: 0,
            month: 0,
            day: 0
        })
    }
    render(){
        return(
            <div>
                <span className="quick_box_text">
                    <h1><b>
                    { this.props.fetchWebsite.visitors == undefined ? null :
                        this.props.fetchWebsite.visitors.length <= 0 ? 0 :
                            this.props.fetchWebsite.visitors.length
                    }
                    </b></h1>
                    <p>Today's Visits</p>
                </span>
                <span className="quick_box_icon">
                    <i className="fa fa-eye" />
                </span>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        fetchWebsite: state.fetchWebsite
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchViewWebsiteAction}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(VisitorCounting)