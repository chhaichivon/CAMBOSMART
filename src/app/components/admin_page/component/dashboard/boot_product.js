import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchViewWebsiteAction} from '../../../../actions/admin/common'
import { actionListBootProductIncomeGrand } from './../../../../actions/admin/report/income/income_report'

let grandTotal = {
    startDate: "",
    endDate: ""
}
let totalIncome = 0

class BootProduct extends React.Component {
    componentWillMount(){
        let today = new Date();
        grandTotal.startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        grandTotal.endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        this.props.actionListBootProductIncomeGrand(grandTotal);
    }
    render(){
        if(this.props.listBootProductIncomeGrand.incomes != undefined) {
            for (var i = 0; i < this.props.listBootProductIncomeGrand.incomes.length; i++) { 
                totalIncome = totalIncome + this.props.listBootProductIncomeGrand.incomes[i].totalProducts * this.props.listBootProductIncomeGrand.incomes[i]._id.price
            }
        }
        return(
            <div>
                <h4>TOTAL INCOME <small>Boot Poducts</small></h4>
                <div className="income_box_icon">
                    <i className="fa fa-shopping-basket" style={{padding: '30px'}} />
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
    if(state.listBootProductIncomeGrand.code != undefined){
        totalIncome = 0;
    }
    return{
        listBootProductIncomeGrand: state.listBootProductIncomeGrand
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({actionListBootProductIncomeGrand}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BootProduct)