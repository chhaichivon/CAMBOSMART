import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Button, Table, Row, Col, FormGroup, ControlLabel ,FormControl } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import ExpiredField from './expired_field';
import FormField from './../../../../../shared_component/redux_form_fields/form_field';
import FormDatePicker from './../../../../../shared_component/redux_form_fields/form_datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormSubmit from './../../../../../shared_component/redux_form_fields/form_submit';
import { actionListCategoryIncome } from './../../../../../../actions/admin/report/income/income_report';

let income = {
    startDate : "",
    endDate : "",
    name : ""
};
let totalIncome = 0;
class CategoryIncomeReport extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            activePage: 1
        };
        this.handleFromDate = this.handleFromDate.bind(this);
        this.handleToDate = this.handleToDate.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    componentWillMount() {
        let today = new Date();
        income.startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        income.endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
       this.props.actionListCategoryIncome(income);
    }

    static handlePrint(){
        let divToPrint = document.getElementById('category-income-report');
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

    formSubmit(value){
        totalIncome = 0;
        let today = new Date();
        let startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        let endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        let name = "";

        if (value.fromDate != undefined && value.toDate != undefined) {
            startDate = value.fromDate;
            endDate = value.toDate;
        }
        if (value.name != undefined) {
            name = value.name;
        }
        income = {
            startDate : startDate,
            endDate : endDate,
            name : name
        };
        this.props.actionListCategoryIncome(income);
    }


    render(){
        const {handleSubmit, submitting} = this.props;
        return(
            <div>
                <br/><br/><br/>
                <div className="row">
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}></Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <b>Date</b> : {CategoryIncomeReport.dateFormat(income.startDate)} To {CategoryIncomeReport.dateFormat(income.endDate)}
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}></Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}></Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <b>Name</b> : {income.name == "" ? 'All names' : income.name }
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}></Col>
                    </Row>
                    <br/><br/>
                    <form onSubmit={handleSubmit(this.formSubmit)}>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="fromDate" component={FormDatePicker} placeholder="From Date" defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="toDate" component={FormDatePicker} placeholder="To Date" defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-4">
                                <Field name="name" type="text" component={FormField} label="Name" icon="fa fa-user"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2">
                                <FormSubmit submitting={submitting}  label="SEARCH" icon="fa fa-search"/>
                            </div>
                        </div>
                    </form>
                </div>
                <Row>
                    <Col xs={12} sm={12} md={11} lg={11}></Col>
                    <Col xs={12} sm={12} md={1} lg={1}>
                        <Button bsStyle="primary" onClick={CategoryIncomeReport.handlePrint}>Print</Button>
                    </Col>
                </Row>
                <div className="table-responsive wrap-member-table">
                    <Table bordered hover responsive striped id="category-income-report">
                        <thead className="member-style-head">
                        <tr className="lg">
                            <th style={{textAlign: 'center'}}>NO</th>
                            <th style={{textAlign: 'center'}}>CATEGORY NAME</th>
                            <th style={{textAlign: 'center'}}>COMPANY</th>
                            <th style={{textAlign: 'center'}}>CONTACT</th>
                            <th style={{textAlign: 'center'}}>LOCATION</th>
                            <th style={{textAlign: 'center'}}>DURATION</th>
                            <th style={{textAlign: 'center'}}>PRICE</th>
                            <th style={{textAlign: 'center'}}>START DATE</th>
                            <th style={{textAlign: 'center'}}>EXPIRED DATE</th>
                            <th style={{textAlign: 'center'}}>INCOME</th>
                        </tr>
                        </thead>
                        <tbody className="table-hover">
                        { this.props.listCategoryIncome.advertisers == undefined  ?
                            <tr>
                                <td colSpan="9">
                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                </td>
                            </tr>
                            :
                            this.props.listCategoryIncome.advertisers.map((advertiser, index) => {
                                totalIncome = totalIncome + (advertiser.advertise.duration * advertiser.advertise.price);
                                return (
                                    <tr key={index}>
                                        {
                                            this.state.activePage == 1 ?
                                                <td style={{textAlign: 'center'}}> { index + 1}</td>
                                                :
                                                <td style={{textAlign: 'center'}}> { index + ((this.state.activePage - 1) * 10) + 1 } </td>
                                        }
                                        <td> {advertiser.name}</td>
                                        <td> {advertiser.advertiser.name}</td>
                                        <td> {advertiser.advertiser.phones[0]}</td>
                                        <td> {advertiser.advertiser.city}</td>
                                        <td> {advertiser.advertise.duration+" months"}</td>
                                        <td> {"$ "+advertiser.advertise.price}</td>
                                        <td> {CategoryIncomeReport.dateFormat(advertiser.advertise.startDate) }</td>
                                        <td> {CategoryIncomeReport.dateFormat(advertiser.advertise.expireDate) }</td>
                                        <td> { "$ " + (advertiser.advertise.duration * advertiser.advertise.price) }</td>
                                    </tr>
                                )
                            })
                        }
                        {
                            this.props.listCategoryIncome.advertisers == undefined  ? null :
                                <tr>
                                    <td colSpan={10} style={{textAlign: 'center'}}> <h3>Grand Total: $ {totalIncome}</h3> </td>
                                </tr>
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

CategoryIncomeReport = reduxForm({
    form: 'form-list-category-income',
    validate: function (values) {
        const errors = {};
        if (new Date(values.fromDate).getTime() > new Date(values.toDate).getTime()) {
            errors.toDate = 'It must greater or equal FROM DATE !!'
        }
        return errors
    }
})(CategoryIncomeReport);

function mapStateToProps(state){
    if(state.listCategoryIncome.advertisers != undefined){
        totalIncome = 0;
    }
    return ({
        listCategoryIncome: state.listCategoryIncome
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionListCategoryIncome },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIncomeReport);