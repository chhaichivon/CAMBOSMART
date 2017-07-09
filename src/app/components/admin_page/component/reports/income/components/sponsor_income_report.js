import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Radio, Button, Table, Image ,Pagination, Row, Col, Form, FormGroup, ControlLabel ,FormControl } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import FormSelectField from './../../../../../shared_component/redux_form_fields/form_select_field';
import ExpiredField from './expired_field';
import FormField from './../../../../../shared_component/redux_form_fields/form_field';
import FormDatePicker from './../../../../../shared_component/redux_form_fields/form_datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormSubmit from './../../../../../shared_component/redux_form_fields/form_submit';
import { actionListAdvertiserIncomeDetail, actionListAdvertiserIncomeGrand } from './../../../../../../actions/admin/report/income/income_report';
import { loadState  } from './../../../../../../localstorages/local_storage';

let advertiser = {
    page :1,
    limit: 10,
    token: loadState() == undefined ? '' : loadState().token,
    advertisers : {
        page: "",
        city: "",
        startDate: "",
        endDate: "",
        name : ""
    }
};
let grandTotal = {
    page: "Home page",
    startDate: "",
    endDate: ""
}
let totalIncome = 0;

class SponsorsIncomeReport extends React.Component {
    constructor(){
        super();
        this.state = {
            startDate: null,
            endDate: null,
            packId: '',
            activePage: 1,
            grandTotal: false,
            detailTotal: false,
            pages: [
                'Home page', 'Category page',
                'Location page', 'Detail page'
            ],
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
        this.handleSelect = this.handleSelect.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.formSubmitGrand = this.formSubmitGrand.bind(this);
    }
    componentWillMount() {
        let today = new Date();
        advertiser.advertisers.startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        advertiser.advertisers.endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        this.props.actionListAdvertiserIncomeDetail(advertiser);
        grandTotal.startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        grandTotal.endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        this.props.actionListAdvertiserIncomeGrand(grandTotal);
    }

    static handlePrint(){
        let divToPrint = document.getElementById('sponsor-income-report');
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
            this.props.actionListAdvertiserIncomeGrand(grandTotal);
        }
        if(event.target.value == "detail"){
            this.setState({detailTotal: true});
            this.setState({grandTotal: false});
        }
    }

    formSubmit(value) {
        totalIncome = 0;
        let today = new Date();
        let page = "";
        let city = "";
        let startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        let endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        let name = "";

        if(value.page != undefined){
            page = value.page;
        }
        if (value.fromDate != undefined && value.toDate != undefined) {
            startDate = value.fromDate;
            endDate = value.toDate;
        }
        if (value.location != undefined) {
            city = value.location;
        }
        if (value.name != undefined) {
            name = value.name;
        }

        this.setState({
            activePage: 1
        });
        advertiser = {
            page :1,
            limit: 10,
            token: loadState() == undefined ? '' : loadState().token,
            advertisers : {
                "page": page,
                "city": city,
                "startDate": startDate,
                "endDate": endDate,
                "name" : name
            }
        };
        this.props.actionListAdvertiserIncomeDetail(advertiser);
    }

    formSubmitGrand(value){
        totalIncome = 0;
        let today = new Date();
        let page = "";
        let startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        let endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());

        if(value.page != undefined){
            page = value.page;
        }
        if (value.fromDate != undefined && value.toDate != undefined) {
            startDate = value.fromDate;
            endDate = value.toDate;
        }

        this.setState({
            activePage: 1
        });
        grandTotal = {
            "page": page,
            "startDate": startDate,
            "endDate": endDate
        };
        this.props.actionListAdvertiserIncomeGrand(grandTotal);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        advertiser.page = eventKey;
        this.props.actionListAdvertiserIncomeDetail(advertiser);
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
                            <Col xs={12} sm={12} md={4} lg={6}>
                                <b>Page</b> : {grandTotal.page == '' ? 'All pages' : grandTotal.page } &nbsp;&nbsp;&nbsp;&nbsp;
                                <b>Date</b> : {SponsorsIncomeReport.dateFormat(grandTotal.startDate)} To {SponsorsIncomeReport.dateFormat(grandTotal.endDate)}
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={2}></Col>
                        </Row>
                        <br/>
                        <div className="row">
                            <form onSubmit={handleSubmit(this.formSubmitGrand)}>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-lg-4">
                                        <Field name="page" type="select" component={FormSelectField} placeholder="Advertisement page ..." values={this.state.pages} icon="fa fa-globe"/>
                                    </div>
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
                            <Row>
                                <Col xs={12} sm={12} md={11} lg={11}></Col>
                                <Col xs={12} sm={12} md={1} lg={1}>
                                    <Button bsStyle="primary" onClick={SponsorsIncomeReport.handlePrint}>Print</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="table-responsive wrap-member-table">
                                        <Table bordered hover responsive striped id="sponsor-income-report">
                                            <thead className="member-style-head">
                                            <tr className="lg">
                                                <th style={{textAlign: 'center'}}>NO</th>
                                                <th style={{textAlign: 'center'}}>PAGE</th>
                                                <th style={{textAlign: 'center'}}>ADS LOCATION</th>
                                                <th style={{textAlign: 'center'}}>PRICE</th>
                                                <th style={{textAlign: 'center'}}>IN USE</th>
                                                <th style={{textAlign: 'center'}}>INCOME</th>
                                            </tr>
                                            </thead>
                                            <tbody className="table-hover">
                                            { this.props.listAdvertiserIncomeGrand.advertisers == undefined  ?
                                                <tr>
                                                    <td colSpan="11">
                                                        <center><h3>RESULT NOT FOUND!</h3></center>
                                                    </td>
                                                </tr>
                                                :
                                                this.props.listAdvertiserIncomeGrand.advertisers.map((advertiser, index) => {
                                                    let total = 0;
                                                    advertiser.duration.forEach((element) => {
                                                        totalIncome = totalIncome + (element*advertiser.price);
                                                        total = total + (element*advertiser.price);
                                                    });
                                                    //totalIncome = totalIncome + (advertiser.price * advertiser.using);
                                                    return (
                                                        <tr key={index}>
                                                            {
                                                                this.state.activePage == 1 ?
                                                                    <td style={{textAlign: 'center'}}> { index + 1}</td>
                                                                    :
                                                                    <td style={{textAlign: 'center'}}> { index + ((this.state.activePage - 1) * 10) + 1 } </td>
                                                            }
                                                            <td > {advertiser.page}</td>
                                                            <td style={{textAlign: 'center'}}> {advertiser.location}</td>
                                                            <td style={{textAlign: 'center'}}> {"$ "+advertiser.price}</td>
                                                            <td style={{textAlign: 'center'}}> { advertiser.using + " users"}</td>
                                                            <td style={{textAlign: 'center'}}> { "$ " + total }</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            {
                                                this.props.listAdvertiserIncomeGrand.advertisers == undefined  ? null :
                                                    <tr>
                                                        <td colSpan={10} style={{textAlign: 'center'}}> <h3>Grand Total: $ {totalIncome}</h3> </td>
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
                {/* Detail advertiser detail income */}
                { this.state.detailTotal ?
                    <div className="row">
                        <Row>
                            <Col xs={12} sm={12} md={3} lg={3}></Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <b>Page</b> : {advertiser.advertisers.page == '' ? 'All pages' : advertiser.advertisers.page } &nbsp;&nbsp;&nbsp;&nbsp;
                                <b>Location</b> : {advertiser.advertisers.city == '' ? 'All locations' : advertiser.advertisers.city }
                            </Col>
                            <Col xs={12} sm={12} md={3} lg={3}></Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={12} sm={12} md={3} lg={3}></Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <b>Date</b> : {SponsorsIncomeReport.dateFormat(advertiser.advertisers.startDate)} To {SponsorsIncomeReport.dateFormat(advertiser.advertisers.endDate)} &nbsp;&nbsp;&nbsp;&nbsp;
                                <b>Page</b> : {advertiser.advertisers.name == '' ? 'All names' : advertiser.advertisers.name }
                            </Col>
                            <Col xs={12} sm={12} md={3} lg={3}></Col>
                        </Row>
                        <br/>
                        <form onSubmit={handleSubmit(this.formSubmit)}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <Field name="page" type="select" component={FormSelectField} placeholder="Advertisement page ..." values={this.state.pages} icon="fa fa-globe"/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <Field name="fromDate" component={FormDatePicker} placeholder="From Date" defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <Field name="toDate" component={FormDatePicker} placeholder="To Date" defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-5">
                                    <Field name="location" type="select" component={FormSelectField} placeholder="All Locations" values={this.state.provinces} icon="fa fa-map-marker"/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-5">
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
                                <Button bsStyle="primary" onClick={SponsorsIncomeReport.handlePrint}>Print</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="table-responsive wrap-member-table">
                                    <Table bordered hover responsive striped id="sponsor-income-report">
                                        <thead className="member-style-head">
                                        <tr className="lg">
                                            <th style={{textAlign: 'center'}}>NO</th>
                                            <th style={{textAlign: 'center'}}>PAGE</th>
                                            <th style={{textAlign: 'center'}}>ADS LOCATION</th>
                                            <th style={{textAlign: 'center'}}>PRICE</th>
                                            <th style={{textAlign: 'center'}}>COMPANY</th>
                                            <th style={{textAlign: 'center'}}>LOCATION</th>
                                            <th style={{textAlign: 'center'}}>CONTACT</th>
                                            <th style={{textAlign: 'center'}}>START DATE</th>
                                            <th style={{textAlign: 'center'}}>EXPIRED DATE</th>
                                            <th style={{textAlign: 'center'}}>INCOME</th>
                                        </tr>
                                        </thead>
                                        <tbody className="table-hover">
                                        { this.props.listAdvertiserIncomeDetail.advertisers == undefined  ?
                                            <tr>
                                                <td colSpan="11">
                                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                                </td>
                                            </tr>
                                            :
                                            this.props.listAdvertiserIncomeDetail.advertisers.map((advertiser, index) => {
                                                total = advertiser.total;
                                                return (
                                                    <tr key={index}>
                                                        {
                                                            this.state.activePage == 1 ?
                                                                <td style={{textAlign: 'center'}}> { index + 1}</td>
                                                                :
                                                                <td style={{textAlign: 'center'}}> { index + ((this.state.activePage - 1) * 10) + 1 } </td>
                                                        }
                                                        <td> {advertiser.page}</td>
                                                        <td style={{textAlign: 'center'}}> {advertiser.location}</td>
                                                        <td style={{textAlign: 'center'}}> {"$ "+advertiser.price}</td>
                                                        <td> {advertiser.company}</td>
                                                        <td> {advertiser.city}</td>
                                                        {advertiser.phones != undefined && advertiser.phones != '' ?
                                                            <td> {advertiser.phones[0]} </td> :
                                                            <td> {advertiser.email} </td>
                                                        }
                                                        <td style={{textAlign: 'center'}}> {SponsorsIncomeReport.dateFormat(advertiser.startDate) }</td>
                                                        <td style={{textAlign: 'center'}}> {SponsorsIncomeReport.dateFormat(advertiser.expireDate) }</td>
                                                        <td style={{textAlign: 'center'}}> { "$ " + (advertiser.price*advertiser.duration) }</td>
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
                                                    items={SponsorsIncomeReport.handleItem(total)}
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

SponsorsIncomeReport = reduxForm({
    form: 'form-list-advertiser',
    validate: function (values) {
        const errors = {};
        if (new Date(values.fromDate).getTime() > new Date(values.toDate).getTime()) {
            errors.toDate = 'It must greater or equal FROM DATE !!'
        }
        return errors
    }
})(SponsorsIncomeReport);

function mapStateToProps(state){
    if(state.listAdvertiserIncomeGrand.advertisers != undefined){
        totalIncome = 0;
    }
    return ({
        listAdvertiserIncomeDetail: state.listAdvertiserIncomeDetail,
        listAdvertiserIncomeGrand: state.listAdvertiserIncomeGrand
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionListAdvertiserIncomeDetail, actionListAdvertiserIncomeGrand },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SponsorsIncomeReport);