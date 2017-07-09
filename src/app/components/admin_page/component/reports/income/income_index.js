import React from 'react';
import { Link} from 'react-router';
import { Tabs,Tab,Button,Row,Col,Media } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/* import child components */
import PromotedMembersIncomeReport from './components/promoted_income_report';
import BootedProductsIncomeReport from './components/booted_income_report';
import SponsorsIncomeReport from './components/sponsor_income_report';
import CategoryIncomeReport from './components/category_income_report';

class IncomeIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            key: 1
        };
    }
    componentWillMount(){
    }

    render(){
        return(
            <div className="container manage-ads">
                <br/>
                <div>
                    <Tabs defaultActiveKey={this.state.key} animation={false} id="controlled-tab-admin-report" className="tab-special-category-merchant">
                        <Tab eventKey={1} className="tab-title"
                             title={<i className="fa fa-users" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;Promoting Merchants</i>}
                        >
                            <PromotedMembersIncomeReport />
                        </Tab>

                        <Tab eventKey={2}
                             title={<i className="fa fa-shopping-basket" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;Booting Products</i>}
                        >
                            <BootedProductsIncomeReport />
                        </Tab>

                        <Tab eventKey={3}
                             title={<i className="fa fa-user-secret" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;Page Advertisers</i>}
                        >
                            <SponsorsIncomeReport />
                        </Tab>
                        <Tab eventKey={4}
                             title={<i className="fa fa-list" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;Category Advertisers</i>}
                        >
                        <CategoryIncomeReport />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
        getStore:state.getStore
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({},dispatch);
}
export default connect(mapStateToProps , mapDispatchToProps) (IncomeIndex);

