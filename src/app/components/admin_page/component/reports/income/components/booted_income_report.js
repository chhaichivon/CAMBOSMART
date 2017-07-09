import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Table, Image, Pagination, Button, Row, Col, Form, FormGroup, ControlLabel, FormControl, Radio } from 'react-bootstrap';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormSubmit from './../../../../../shared_component/redux_form_fields/form_submit';
import FormDatePicker from './../../../../../shared_component/redux_form_fields/form_datepicker';
import UserTypeField from './user_type_field';
import { actionListBootProductIncomeDetail, actionListBootProductIncomeGrand } from './../../../../../../actions/admin/report/income/income_report';
import { remove } from './../../../../../../utils/remove_duplicate_elements';

let bootIncome = {
    startDate: "",
    endDate : "",
    userType : "",
    start: 1,
    limit: 10
};
let grandTotal = {
    startDate: "",
    endDate: ""
};
let totalIncome = 0;

class BootedProductsIncomeReport extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            startDate: null,
            endDate: null,
            activePage: 1,
            grandTotal: false,
            detailTotal: false
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.formSubmitGrand = this.formSubmitGrand.bind(this);
        this.handleFromDate = this.handleFromDate.bind(this);
        this.handleToDate = this.handleToDate.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    componentWillMount(){
        let today = new Date();
        bootIncome.startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        bootIncome.endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        this.props.actionListBootProductIncomeDetail(bootIncome);
        grandTotal.startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        grandTotal.endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        this.props.actionListBootProductIncomeGrand(grandTotal);
    }
    getTypeIncome(event){
        if(event.target.value == "grand"){
            this.setState({grandTotal: true});
            this.setState({detailTotal: false});
        }
        if(event.target.value == "detail"){
            this.setState({detailTotal: true});
            this.setState({grandTotal: false});
        }
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

    static handlePrint(){
        let divToPrint = document.getElementById('booted-income-report');
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

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        bootIncome.start = eventKey;
        this.props.actionListBootProductIncomeDetail(bootIncome);
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

    formSubmit(value) {
        totalIncome = 0;
        let today = new Date();
        let startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        let endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());
        let userType = "";

        if (value.startDate != undefined && value.endDate != undefined) {
            startDate = value.startDate;
            endDate = value.endDate;
        }
        if (value.status != undefined) {
            userType = value.status;
        }
        bootIncome.startDate = startDate;
        bootIncome.endDate = endDate;
        bootIncome.userType = userType;
        this.props.actionListBootProductIncomeDetail(bootIncome);
    }
    formSubmitGrand(value){
        totalIncome = 0;
        let today = new Date();
        let startDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-1";
        let endDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(new Date(today.getFullYear(), (today.getMonth()+1), 0).getDate());

        if (value.startDate != undefined && value.endDate != undefined) {
            startDate = value.startDate;
            endDate = value.endDate;
        }
        grandTotal.startDate = startDate;
        grandTotal.endDate = endDate;
        this.props.actionListBootProductIncomeGrand(grandTotal);
    }

    render(){
        let total = 0;
        const {handleSubmit, submitting} = this.props;
        return(
            <div>
                <br/><br/>
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
                {/* Display grand total of promoted products */}
                { this.state.grandTotal ?
                    <div>
                        <Row>
                            <Col xs={12} sm={12} md={4} lg={4}></Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <b>Date</b> : {BootedProductsIncomeReport.dateFormat(grandTotal.startDate)} To {BootedProductsIncomeReport.dateFormat(grandTotal.endDate)} &nbsp;&nbsp;&nbsp;&nbsp;
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}></Col>
                        </Row>
                        <br/>
                        <div>
                            <div className="row list-product">
                                <form onSubmit={handleSubmit(this.formSubmitGrand)}>
                                    <div className="row list-product">
                                        <div className="col-xs-12 col-sm-12 col-lg-4"></div>
                                        <div className="col-xs-12 col-sm-12 col-lg-3">
                                            <Field name="startDate" component={FormDatePicker} placeholder="From Date"
                                                   defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-lg-3">
                                            <Field name="endDate" component={FormDatePicker} placeholder="To Date"
                                                   defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-lg-2">
                                            <FormSubmit submitting={submitting} label="SEARCH" icon="fa fa-search"/>
                                        </div>
                                    </div>
                                    <br/>
                                </form>
                            </div>
                            <Row>
                                <Col xs={12} sm={12} md={11} lg={11}></Col>
                                <Col xs={12} sm={12} md={1} lg={1}>
                                    <Button bsStyle="primary" onClick={BootedProductsIncomeReport.handlePrint}>Print</Button>
                                </Col>
                            </Row>
                            <br/>
                            <div className="row">
                                <Table responsive bordered hover id="booted-income-report" style={{marginLeft: '20px', width:'96%'}}>
                                    <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                                    <tr>
                                        <th style={{textAlign: 'center'}}>NO</th>
                                        <th style={{textAlign: 'center'}}>PACKAGE TYPE</th>
                                        <th style={{textAlign: 'center'}}>PRICE</th>
                                        <th style={{textAlign: 'center'}}>TOTAL USERS</th>
                                        <th style={{textAlign: 'center'}}>TOTAL PRODUCTS</th>
                                        <th style={{textAlign: 'center'}}>INCOME</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.props.listBootProductIncomeGrand.incomes == undefined ?
                                        <tr>
                                            <td colSpan="8">
                                                <center><h3>RESULT NOT FOUND!</h3></center>
                                            </td>
                                        </tr>
                                        :
                                        this.props.listBootProductIncomeGrand.incomes.map((income, index) => {
                                            totalIncome = totalIncome+(income.totalProducts * income._id.price);
                                            let newUsers = [];
                                            if(income.users != undefined){
                                                // convert array object to array string
                                                let arrUsers = income.users.map((user) => {
                                                    return user['$oid'];
                                                });
                                                // remove duplicate array items
                                                newUsers = arrUsers.filter((item, pos, self) => {
                                                    return self.indexOf(item) == pos;
                                                })

                                            }
                                            return (
                                                <tr key={index}>
                                                    <td style={{textAlign: 'center'}}>{index+1}</td>
                                                    <td style={{textAlign: 'center'}}>{income._id.type + " " + income._id.duration + " weeks"}</td>
                                                    <td style={{textAlign: 'center'}}>{"$ "+income._id.price}</td>
                                                    <td style={{textAlign: 'center'}}>{ newUsers.length + " users"}</td>
                                                    <td style={{textAlign: 'center'}}>{income.totalProducts +" products"}</td>
                                                    <td style={{textAlign: 'center'}}>{"$ " + (income.totalProducts * income._id.price) }</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    {
                                        this.props.listBootProductIncomeGrand.incomes == undefined ? null :
                                        <tr>
                                            <td style={{textAlign: 'center'}} colSpan={7}>
                                                <h3>Grand Total: $ {totalIncome}</h3>
                                            </td>
                                        </tr>
                                    }
                                    </tbody>
                                </Table>
                            </div>
                            <br/><br/><br/><br/>
                        </div>
                    </div>
                    :
                    null
                }
                {/* Display detail products income */}
                { this.state.detailTotal ?
                <div>
                    <Row>
                        <Col xs={12} sm={12} md={3} lg={3}></Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <b>Date</b> : {BootedProductsIncomeReport.dateFormat(bootIncome.startDate)} To {BootedProductsIncomeReport.dateFormat(bootIncome.endDate)} &nbsp;&nbsp;&nbsp;&nbsp;
                            <b>User Type</b> : {bootIncome.userType == '' ? 'All types' : bootIncome.userType } &nbsp;&nbsp;&nbsp;&nbsp;
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3}></Col>
                    </Row>
                    <br/>
                <div className="row list-product">
                    <form onSubmit={handleSubmit(this.formSubmit)}>
                        <div className="row list-product">
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="startDate" component={FormDatePicker} placeholder="From Date"
                                       defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="endDate" component={FormDatePicker} placeholder="To Date"
                                       defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-4">
                                <Field name="status" type="select" component={UserTypeField}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2">
                                <FormSubmit submitting={submitting} label="SEARCH" icon="fa fa-search"/>
                            </div>
                        </div>
                        <br/>
                    </form>
                </div>
                <Row>
                <Col xs={12} sm={12} md={11} lg={11}></Col>
                <Col xs={12} sm={12} md={1} lg={1}>
                    <Button bsStyle="primary" onClick={BootedProductsIncomeReport.handlePrint}>Print</Button>
                </Col>
                </Row>
                <br/>
                    <div className="row">
                    <Table responsive bordered hover id="booted-income-report" style={{marginLeft: '20px', width:'96%'}}>
                    <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                    <tr>
                    <th style={{textAlign: 'center'}}>NO</th>
                    <th style={{textAlign: 'center'}}>NAME</th>
                    <th style={{textAlign: 'center'}}>USER TYPE</th>
                    <th style={{textAlign: 'center'}}>PROMOTED TYPE</th>
                    <th style={{textAlign: 'center'}}>PRICE</th>
                    <th style={{textAlign: 'center'}}>QUANTITY</th>
                    <th style={{textAlign: 'center'}}>INCOME</th>
                    </tr>
                    </thead>
                    <tbody>
                {this.props.listBootProductIncomeDetail.incomes == undefined ?
                    <tr>
                    <td colSpan="8">
                    <center><h3>RESULT NOT FOUND!</h3></center>
                    </td>
                    </tr>
                    :
                    this.props.listBootProductIncomeDetail.incomes.map((income, index) => {
                    //total = member.total;
                    return (
                    <tr key={index}>
                    <td style={{textAlign: 'center'}}>{index+1}</td>
                        {income.profile[0] != undefined && income.profile[0] != "" ?
                            <td>
                                <Image src={"/images/profiles/" + income.profile[0]} circle width="25" height="25"/>
                                &nbsp;{income._id.userName}
                            </td>
                            :
                            <td>
                                <Image src="/profile/default-profile.png" circle width="25" height="25"/>
                                &nbsp;{income._id.userName}
                            </td>
                        }
                        {/*<td>{income._id.userName}</td>*/}
                    <td style={{textAlign: 'center'}}>{income._id.userType}</td>
                    <td style={{textAlign: 'center'}}>{income._id.type+" "+income._id.duration +" weeks"}</td>
                    <td style={{textAlign: 'center'}}>{"$ "+income._id.price}</td>
                    <td style={{textAlign: 'center'}}>{income.totalProducts}</td>
                    <td style={{textAlign: 'center'}}>{"$ " + (income.totalProducts * income._id.price) }</td>
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
                    items={BootedProductsIncomeReport.handleItem(total)}
                    maxButtons={5}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect}
                    />
                }
                    </div>
                    <br/><br/><br/><br/>
                    </div>
                    : null
                }
            </div>
        )
    }
}

BootedProductsIncomeReport = reduxForm({
    form: 'form_list_boot_product_income',
    validate: function (values) {
        const errors = {};
        if(values.startDate != undefined){
            if(values.endDate == undefined ) {
                errors.endDate = "End Date cannot be empty!!"
            }
        }
        if(values.endDate != undefined){
            if(values.startDate == undefined ) {
                errors.endDate = "Start Date cannot be empty!!"
            }
        }
        if (new Date(values.startDate).getTime() > new Date(values.endDate).getTime()) {
            errors.endDate = 'End Date must greater or equal Start Date !!'
        }
        if(Number(values.minPrice) > Number(values.maxPrice)){
            errors.maxPrice = 'Max Price must greater or equal Min Price !!'
        }
        return errors
    }
})(BootedProductsIncomeReport);

function mapStateToProps(state) {
    if(state.listBootProductIncomeGrand.code != undefined){
        totalIncome = 0;
    }
    return {
        listBootProductIncomeDetail: state.listBootProductIncomeDetail,
        listBootProductIncomeGrand: state.listBootProductIncomeGrand
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionListBootProductIncomeDetail, actionListBootProductIncomeGrand }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BootedProductsIncomeReport)
