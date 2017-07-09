import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Radio, Button, Table, Image ,Pagination, Row, Col, Form, FormGroup, ControlLabel ,FormControl } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import FormSelectField from './../../../../../shared_component/redux_form_fields/form_select_field';
import FormSelectFieldStatus from './../../../../../shared_component/redux_form_fields/form_select_field_status';
import FormField from './../../../../../shared_component/redux_form_fields/form_field';
import { actionListMemberPromoteIncomeDetail, actionListMemberPromoteIncomeGrand } from './../../../../../../actions/admin/report/income/income_report';
import FormDatePicker from './../../../../../shared_component/redux_form_fields/form_datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormSubmit from './../../../../../shared_component/redux_form_fields/form_submit';
import { loadState  } from './../../../../../../localstorages/local_storage';

let promote = {
    page :1,
    limit: 10,
    token: loadState() == undefined ? '' : loadState().token,
    promoted : {
        "name" : "",
        "location": "",
        "fromDate" : "",
        "toDate": ""
    }
};
let grandTotal = {
    "startDate": "",
    "endDate": ""
};
let totalIncome = 0;
let totalRequests = 0;

class PromotedMembersIncomeReport extends React.Component {
    constructor(){
        super();
        this.state = {
            startDate: null,
            endDate: null,
            packId: '',
            activePage: 1,
            grandTotal: false,
            detailTotal: false,
            provinces: [
                'Phnom Penh', 'Banteay Meanchey',
                'Battambong', 'Kampong Cham', 'Kampong Chhnang',
                'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Koh Kong',
                'Kep', 'Kratie', 'Mondulkiri', 'Oddar Meanchey',
                'Pailin', 'Preah Sihanouk', 'Peah Vihear', 'Pursat',
                'Prey Veng', 'Ratanakiri', 'Siem Reap', 'Stung Treng', 'Svay Rieng',
                'Takeo', 'Tboung Khmum'
            ]
        };

        this.handleFromDate = this.handleFromDate.bind(this);
        this.handleToDate = this.handleToDate.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.formSubmitGrand = this.formSubmitGrand.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    componentWillMount() {
        //calculate date
        let today = new Date();
        promote.promoted.fromDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        promote.promoted.toDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        this.props.actionListMemberPromoteIncomeDetail(promote);
        grandTotal.startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        grandTotal.endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        this.props.actionListMemberPromoteIncomeGrand(grandTotal);
    }

    static handlePrint(){
        let divToPrint = document.getElementById('promote-income-report');
        let htmlToPrint = '' +
            '<style type="text/css">' +
            'table thead {' +
            'border:1px solid #000;'+
            'margin-right:0;' +
            'color:black'+
            'background-color:#000;'+
            '}' +
            'tr td {' +
            'border-bottom:1px solid gray;'+
            'background-color:#fff;'+
            '}' +
            '</style>';
        htmlToPrint += divToPrint.outerHTML;
        let newWin = window.open("");
        newWin.document.write('<center>'+"cambo-smart.com(report)"+'</center>');
        newWin.document.write(htmlToPrint);
        newWin.print();
        newWin.close();
    }

    static dateFormat(date) {
        let monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        let newDate = new Date(date);
        let day = newDate.getDate();
        let monthIndex = newDate.getMonth();
        let year = newDate.getFullYear();
        return day.toString().concat(" ", monthNames[monthIndex], " ", year.toString());
    }

    handleFromDate(date) {
        this.setState({
            startDate: date
        });
    }

    handleToDate(date) {
        this.setState({
            endDate: date
        });
    }

    getTypeIncome(event){
        if(event.target.value == "grand"){
            this.setState({grandTotal: true});
            this.setState({detailTotal: false});
            let today = new Date();
            let promoted = {
                "startDate": today.getFullYear()+"-"+(today.getMonth()+1)+"-1",
                "endDate": today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate())
            }
            this.props.actionListMemberPromoteIncomeGrand(promoted);
        }
        if(event.target.value == "detail"){
            this.setState({detailTotal: true});
            this.setState({grandTotal: false});
        }
    }

    formSubmit(value) {
        totalIncome = 0;
        let today = new Date();
        let name = '';
        let location = '';
        let fromDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        let toDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());

        if (value.name != undefined) {
            name = value.name;
        }
        if (value.location != undefined) {
            location = value.location;
        }
        if (value.fromDate != undefined && value.toDate != undefined) {
            fromDate = value.fromDate;
            toDate = value.toDate;
        }
        this.setState({
            activePage: 1
        });
        promote = {
            page :1,
            limit: 10,
            token: loadState() == undefined ? '' : loadState().token,
            promoted : {
                "name" : name,
                "location": location,
                "fromDate" : fromDate,
                "toDate": toDate
            }
        };
        this.props.actionListMemberPromoteIncomeDetail(promote);
    }
    formSubmitGrand(value){
        totalIncome = 0;
        let today = new Date();
        let fromDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        let toDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());

        if (value.fromDate != undefined && value.toDate != undefined) {
            fromDate = value.fromDate;
            toDate = value.toDate;
        }
        this.setState({
            activePage: 1
        });
        grandTotal = {
            "startDate": fromDate,
            "endDate": toDate
        };
        this.props.actionListMemberPromoteIncomeGrand(grandTotal);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        request.page = eventKey;
        this.props.actionListMemberPromoteIncomeDetail(request);
    }

    static handleItem(total) {
        if (total <= 10) {
            return 1
        } else if (total % 10 == 0) {
            return total / 10
        } else if (total % 10 > 0) {
            return parseInt(total/10) + 1
        }
    }

    render(){
        let total = 0;
        const {handleSubmit, submitting} = this.props;
        return(
            <div>
                <br />
                {/* display grand total or detail total*/}
                <div style={{textAlign:'center'}}>
                    <FormGroup>
                        <Radio inline name="type-income"
                               value="detail"
                               onChange={this.getTypeIncome.bind(this)}>
                            Detail Report
                        </Radio>
                        {' '}
                        <Radio inline name="type-income"
                               value="grand"
                               onChange={this.getTypeIncome.bind(this)}>
                            Grand Total Report
                        </Radio>
                    </FormGroup>
                </div>
                <hr/>
                <br/>
                {/* Grand total promote members income */}
                { this.state.grandTotal ?
                    <div>
                        <Row>
                            <Col xs={12} sm={12} md={4} lg={4}></Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <b>Date</b> : {PromotedMembersIncomeReport.dateFormat(grandTotal.startDate)} To {PromotedMembersIncomeReport.dateFormat(grandTotal.endDate)} &nbsp;&nbsp;&nbsp;&nbsp;
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}></Col>
                        </Row>
                        <br/><br/>
                        <div className="row">
                            <form onSubmit={handleSubmit(this.formSubmitGrand)}>
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-lg-3">
                                        <Field name="fromDate" component={FormDatePicker} placeholder="From Date" defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-lg-3">
                                        <Field name="toDate" component={FormDatePicker} placeholder="To Date" defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-lg-2">
                                        <FormSubmit submitting={submitting}  label="SEARCH" icon="fa fa-search"/>
                                    </div>
                                </div>
                            </form>
                            <br/>
                            <Row>
                                <Col xs={12} sm={12} md={11} lg={11}></Col>
                                <Col xs={12} sm={12} md={1} lg={1}>
                                    <Button bsStyle="primary" onClick={PromotedMembersIncomeReport.handlePrint}>Print</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="table-responsive wrap-member-table">
                                        <Table bordered hover responsive striped id="promote-income-report">
                                            <thead className="member-style-head">
                                            <tr className="lg">
                                                <th style={{textAlign: 'center'}}>NO</th>
                                                <th style={{textAlign: 'center'}}>PACKAGE TYPE</th>
                                                <th style={{textAlign: 'center'}}>TOTAL MEMBERS</th>
                                                <th style={{textAlign: 'center'}}>INCOME</th>
                                            </tr>
                                            </thead>
                                            <tbody className="table-hover">
                                            { this.props.listPromoteMemberIncomeGrand.incomes == undefined  ?
                                                <tr>
                                                    <td colSpan="4">
                                                        <center><h3>RESULT NOT FOUND!</h3></center>
                                                    </td>
                                                </tr>
                                                :
                                                this.props.listPromoteMemberIncomeGrand.incomes.map((promote, index) => {
                                                    totalIncome = totalIncome + (promote.users.length*promote._id.price);
                                                    return (
                                                        <tr key={index}>    
                                                            {
                                                                this.state.activePage == 1 ?
                                                                    <td style={{textAlign: 'center'}}> { index + 1}</td>
                                                                    :
                                                                    <td style={{textAlign: 'center'}}> { index + ((this.state.activePage - 1) * 10) + 1 } </td>
                                                            }
                                                            <td style={{textAlign: 'center'}}> {promote._id.duration +" months "+" $ "+promote._id.price }</td>
                                                            <td style={{textAlign: 'center'}}> {promote.users.length +" users" }</td>
                                                            <td style={{textAlign: 'center'}}> {"$ "+ (promote.users.length*promote._id.price) }</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            { this.props.listPromoteMemberIncomeGrand.incomes == undefined  ? null :
                                                <tr>
                                                    <td colSpan="4">
                                                        <center><h3>Grand Total : $ {totalIncome}</h3></center>
                                                    </td>
                                                </tr>
                                            }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    :
                    null
                }
                {/* Detail promote members income */}
                { this.state.detailTotal ?
                    <div className="row">
                        <Row>
                            <Col xs={12} sm={12} md={4} lg={4}></Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <b>Date</b> : {PromotedMembersIncomeReport.dateFormat(promote.promoted.fromDate)} To {PromotedMembersIncomeReport.dateFormat(promote.promoted.toDate)} &nbsp;&nbsp;&nbsp;&nbsp;
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}></Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={12} sm={12} md={4} lg={4}></Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <b>Location</b> : {promote.promoted.location == '' ? 'All locations' : promote.promoted.location} &nbsp;&nbsp;&nbsp;&nbsp;
                                <b>Name</b> : {promote.promoted.name == '' ? 'All names' : promote.promoted.name }
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}></Col>
                        </Row>
                        <br/><br/>
                        <form onSubmit={handleSubmit(this.formSubmit)}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <Field name="location" type="select" component={FormSelectField} placeholder="All Locations" values={this.state.provinces} icon="fa fa-map-marker"/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <Field name="fromDate" component={FormDatePicker} placeholder="From Date" defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <Field name="toDate" component={FormDatePicker} placeholder="To Date" defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-6">
                                    <Field name="name" type="text" component={FormField} label="Name" icon="fa fa-user"/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-2">
                                    <FormSubmit submitting={submitting}  label="SEARCH" icon="fa fa-search"/>
                                </div>
                            </div>
                        </form>
                        <br/>
                        <Row>
                            <Col xs={12} sm={12} md={11} lg={11}></Col>
                            <Col xs={12} sm={12} md={1} lg={1}>
                                <Button bsStyle="primary" onClick={PromotedMembersIncomeReport.handlePrint}>Print</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="table-responsive wrap-member-table">
                                    <Table bordered hover responsive striped id="promote-income-report">
                                        <thead className="member-style-head">
                                        <tr className="lg">
                                            <th style={{textAlign: 'center'}}>NO</th>
                                            <th>NAME</th>
                                            <th style={{textAlign: 'center'}}>LOCATION</th>
                                            <th style={{textAlign: 'center'}}>CONTACT</th>
                                            <th style={{textAlign: 'center'}}>JOINED DATE</th>
                                            <th style={{textAlign: 'center'}}>TYPE</th>
                                            <th style={{textAlign: 'center'}}>PRICE</th>
                                            <th style={{textAlign: 'center'}}>START DATE</th>
                                            <th style={{textAlign: 'center'}}>EXPIRED DATE</th>
                                        </tr>
                                        </thead>
                                        <tbody className="table-hover">
                                        { this.props.listPromoteMemberIncomeDetail.requested == undefined  ?
                                            <tr>
                                                <td colSpan="10">
                                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                                </td>
                                            </tr>
                                            :
                                            this.props.listPromoteMemberIncomeDetail.requested.map((member, index) => {
                                                total = member.total;
                                                totalRequests = total;
                                                return (
                                                    <tr key={index}>
                                                        {
                                                            this.state.activePage == 1 ?
                                                                <td style={{textAlign: 'center'}}> { index + 1}</td>
                                                                :
                                                                <td style={{textAlign: 'center'}}> { index + ((this.state.activePage - 1) * 10) + 1 } </td>
                                                        }

                                                        {member.users[0].profileImage != undefined && member.users[0].profileImage != "" ?
                                                            <td>
                                                                <Image src={"/images/profiles/" + member.users[0].profileImage} circle width="25" height="25"/>
                                                                &nbsp;{member.users[0].userName}
                                                            </td>
                                                            :
                                                            <td>
                                                                <Image src="/profile/default-profile.png" circle width="25" height="25"/>
                                                                &nbsp;{member.users[0].userName}
                                                            </td>
                                                        }

                                                        <td> {member.users[0].city }</td>
                                                        {member.users[0].phone != undefined && member.users[0].phone != '' ?
                                                            <td> {member.users[0].phone.replace("+855", "0")} </td> :
                                                            <td> {member.users[0].email} </td>
                                                        }
                                                        <td> {PromotedMembersIncomeReport.dateFormat(member.users[0].dateJoin) }</td>
                                                        <td> {member.duration + " months $ " + member.price }</td>
                                                        <td style={{textAlign: 'center'}}> {"$ " + member.price }</td>
                                                        <td> {PromotedMembersIncomeReport.dateFormat(member.startDate) }</td>
                                                        <td> {PromotedMembersIncomeReport.dateFormat(member.endDate) }</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </Table>
                                    {total <= 10
                                        ?
                                        null
                                        :
                                        <Pagination style={{ float: 'right'}}
                                                    prev
                                                    next
                                                    first
                                                    last
                                                    ellipsis
                                                    boundaryLinks
                                                    items={PromotedMembersIncomeReport.handleItem(total)}
                                                    maxButtons={5}
                                                    activePage={this.state.activePage}
                                                    onSelect={this.handleSelect}
                                        />
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>
                    :null
                }
            </div>
        )
    }
}

PromotedMembersIncomeReport = reduxForm({
    form: 'form-list-request',
    validate: function (values) {
        const errors = {};
        if (new Date(values.fromDate).getTime() > new Date(values.toDate).getTime()) {
            errors.toDate = 'It must greater or equal FROM DATE !!'
        }
        return errors
    }
})(PromotedMembersIncomeReport);

function mapStateToProps(state){
    if(state.listPromoteMemberIncomeGrand.incomes != undefined){
        totalIncome = 0;
        totalRequests = 0;
    }
    return ({
        listPromoteMemberIncomeDetail: state.listPromoteMemberIncomeDetail,
        listPromoteMemberIncomeGrand: state.listPromoteMemberIncomeGrand
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionListMemberPromoteIncomeDetail, actionListMemberPromoteIncomeGrand },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PromotedMembersIncomeReport);