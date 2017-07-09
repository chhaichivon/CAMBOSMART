import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionListAdvertiserIncomeGrand } from './../../../../actions/admin/report/income/income_report'
import { actionListCategoryIncome } from './../../../../actions/admin/report/income/income_report'

let grandTotal = {
    page: "",
    startDate: "",
    endDate: ""
}
let income = {
    startDate : "",
    endDate : "",
    name : ""
};
let totalIncome = 0;
let adsIncome = 0;
let catIncome = 0;

class Advertisement extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        let today = new Date();
        grandTotal.startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        grandTotal.endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        this.props.actionListAdvertiserIncomeGrand(grandTotal);

        income.startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        income.endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        this.props.actionListCategoryIncome(income);
    }

    render(){
        if(this.props.listAdvertiserIncomeGrand.advertisers != undefined) {
            let advertisers = this.props.listAdvertiserIncomeGrand.advertisers;
            advertisers.forEach((advertiser) => {
                advertiser.duration.forEach((element) => {
                    adsIncome = adsIncome + (element*advertiser.price);
                });
            });
        }
        if(this.props.listCategoryIncome.advertisers != undefined) {
            let categories = this.props.listCategoryIncome.advertisers;
            categories.forEach((advertiser) =>{
                catIncome = catIncome + (advertiser.advertise.duration * advertiser.advertise.price);
            });
        }
        totalIncome = adsIncome + catIncome;
        return(
            <div>
                <h4>TOTAL INCOME <small>Advertisement</small></h4>
                <div className="income_box_icon">
                    <i className="fa fa-bullhorn" style={{padding: '30px 33px'}} />
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
    if(state.listAdvertiserIncomeGrand.advertisers != undefined){
        totalIncome = 0;
        adsIncome = 0;
    }
    if(state.listCategoryIncome.advertisers != undefined){
        totalIncome = 0;
        catIncome = 0;
    }
    //console.log("Ads : ",state.listAdvertiserIncomeGrand)
    //console.log("Cat : ",state.listCategoryIncome)
    return{
        listAdvertiserIncomeGrand: state.listAdvertiserIncomeGrand,
        listCategoryIncome: state.listCategoryIncome
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({actionListAdvertiserIncomeGrand, actionListCategoryIncome}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Advertisement)