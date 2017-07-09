import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionAdminCountMerchantMembers } from '../../../../actions/admin/merchant/merchant'
import { loadState } from './../../../../localstorages/local_storage'

class MerchantCounting extends React.Component {
    componentWillMount(){
        this.props.actionAdminCountMerchantMembers({
            token: loadState().token
        })
    }
    render(){
        return(
            <div>
                <span className="quick_box_text">
                    <h1><b>
                        {
                            this.props.adminCountMerchantMembers != undefined ? 
                                this.props.adminCountMerchantMembers.data : 0
                        }
                    </b></h1>
                    <p>Merchant</p>
                </span>
                <span className="quick_box_icon">
                    <i className="fa fa-users" />
                </span>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        adminCountMerchantMembers: state.adminCountMerchantMembers
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({actionAdminCountMerchantMembers}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MerchantCounting)