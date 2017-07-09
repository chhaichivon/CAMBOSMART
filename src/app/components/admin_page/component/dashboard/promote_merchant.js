import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchViewWebsiteAction} from '../../../../actions/admin/common'
import { actionListMemberPromoteIncomeGrand } from './../../../../actions/admin/report/income/income_report';

let grandTotal = {
    "startDate": "",
    "endDate": ""
}

let totalIncome = 0;

class PromoteMerchant extends React.Component {
    componentWillMount(){
        let today = new Date();
        grandTotal.startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        grandTotal.endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());

        this.props.actionListMemberPromoteIncomeGrand(grandTotal)
    }

    render(){
        if(this.props.listPromoteMemberIncomeGrand.incomes != undefined) {
            for (var i = 0; i < this.props.listPromoteMemberIncomeGrand.incomes.length; i++) { 
                totalIncome = totalIncome + this.props.listPromoteMemberIncomeGrand.incomes[i].users.length * this.props.listPromoteMemberIncomeGrand.incomes[i]._id.price
            }
        }

        return(
            <div>
                <h4>TOTAL INCOME <small>Promote Merchant</small></h4>
                <div className="income_box_icon">
                    <i className="fa fa-user-plus" style={{padding: '30px'}} />
                </div>
                <div className="income_box_text">
                    <p><b>This Month</b></p>
                    <h4>$ {totalIncome}</h4>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    
    if(state.listPromoteMemberIncomeGrand.incomes != undefined){
        totalIncome = 0;
    }
    return{
        listPromoteMemberIncomeGrand: state.listPromoteMemberIncomeGrand
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({actionListMemberPromoteIncomeGrand}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PromoteMerchant)