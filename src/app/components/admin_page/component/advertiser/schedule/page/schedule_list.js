import React from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import FormTextBox from './../../../../../shared_component/redux_form_fields/form_simple_textbox';
import FormDatePicker from './../../../../../shared_component/redux_form_fields/form_datepicker';
import moment from 'moment';
import {formatDate} from './../../../../../../utils/format_date';

class ScheduleList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            start: null,
            end: null
        };
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleStartDate(date) {
        this.setState({
            start: date
        });
    }

    formSubmit(value) {
        //TODO: to post end date to advertiser page
        let longStartDate = new Date(this.state.start);
        let expireDate = moment(longStartDate.setMonth(longStartDate.getMonth() + parseInt(this.state.value))).format("YYYY-MM-DD");

        this.props.handleAdvertisement({
            back: true,
            duration: parseInt(this.state.value),
            startDate: value.startDate,
            expireDate: expireDate
        });
    }

    render(){
        //TODO: to print end date in to textbox
        let periodOfMonth = parseInt(this.state.value);
        let formatStartDate = new Date(this.state.start);
        let result = formatStartDate.setMonth(formatStartDate.getMonth() + periodOfMonth);
        let eDate = moment(result).format("YYYY-MM-DD");

        const { handleSubmit, submitting } = this.props;

        return(
            <div>
                <Row style={{width: '100%', marginLeft: '13px'}}>
                    <Col lg={3} style={{marginTop: '10px',textAlign: 'right'}}>
                        <strong>Location: </strong>
                    </Col>
                    <Col lg={9}>
                        <Field name="location" type="text" component={FormTextBox} label="Advertisement location" icon="fa fa-location-arrow" values={this.props.location} disabled />
                    </Col>
                </Row>
                <div className="advertisement">
                    { this.props.advertisements.length > 0 ?
                        <Table className="advertisement" responsive bordered hover id="schedule">
                            <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                            <tr>
                                <th rowSpan={2} style={{textAlign: 'center'}}>No</th>
                                <th style={{textAlign: 'center'}}>ADVERTISER</th>
                                <th style={{textAlign: 'center'}}>START DATE</th>
                                <th style={{textAlign: 'center'}}>EXPIRE DATE</th>
                            </tr>
                            </thead>
                            <tbody>
                            { this.props.advertisements.map((advertisement, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{textAlign: 'center'}}>{index + 1}</td>
                                        <td style={{textAlign: 'center'}}>{advertisement.name}</td>
                                        <td style={{textAlign: 'center'}}>{formatDate(advertisement.startDate)}</td>
                                        <td style={{textAlign: 'center'}}>{formatDate(advertisement.expireDate)}</td>
                                    </tr>
                                )
                            })
                            }
                            </tbody>
                        </Table>
                        :
                        <Table responsive bordered hover id="schedule">
                            <thead style={{
                                backgroundColor: '#ff6903',
                                color: 'white',
                                border: '2px solid #ff6903'
                            }}>
                            <tr>
                                <th rowSpan={2} style={{textAlign: 'center'}}>No</th>
                                <th style={{textAlign: 'center'}}>ADVERTISER</th>
                                <th style={{textAlign: 'center'}}>START DATE</th>
                                <th style={{textAlign: 'center'}}>EXPIRE DATE</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan="7">
                                    <center><h3>Advertisement are available !</h3></center>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    }
                </div>
                <form onSubmit={handleSubmit(this.formSubmit)}>
                    <Row style={{width: '100%', marginLeft: '14px'}}>
                        <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                            <strong>Duration <span style={{color: 'red'}}>*</span></strong>
                        </Col>
                        <Col lg={9}>
                            <Field name="duration" type="text"
                                   component={FormTextBox}
                                   handleChange={this.handleChange}
                                   values={this.state.value}
                                   label="Period of Month" icon="fa fa-clock-o"/>
                        </Col>
                    </Row>

                    <Row style={{width: '100%', marginLeft: '14px'}}>
                        <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                            <strong>Start Date <span style={{color: 'red'}}>*</span></strong>
                        </Col>
                        <Col lg={9}>

                            <Field name="startDate"
                                   component={FormDatePicker}
                                   placeholder="Start Date"
                                   defaultDate={this.state.start}
                                   handleChange={this.handleStartDate}/>
                        </Col>
                    </Row>
                    <Row style={{width: '100%', marginLeft: '14px'}}>
                        <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                            <strong>End Date : </strong>
                        </Col>
                        <Col lg={9}>
                            <Field name="endDate"
                                   component={FormTextBox}
                                   values={eDate !== 'Invalid date' ? eDate : ''}
                                   label="End Date"
                                   icon="fa fa-calendar" disabled
                            />
                        </Col>
                    </Row>

                    <Row style={{marginRight: '45px'}}>
                        <Col mdOffset={10} md={2} lg={12} >
                            <Button type="submit" disabled={submitting} style={{background: '#ff6903', color: 'white', fontWeight: 'normal', height: '40px'}}>
                                <i className="fa fa-plus"/>{'  '}Add New
                            </Button>
                        </Col>
                    </Row>
                </form>
            </div>
        );
    }
}

ScheduleList = reduxForm({
    form: 'form_advertisement_schedule',
    validate: function (values) {
        const errors = {};
        let regex_duration = /^\d+$/;

        if(!regex_duration.test(values.duration) || Number(values.duration) <= 0 || Number(values.duration) > 24){
            errors.duration = "Duration must in between (1-24) !!"
        }

        if(values.startDate == undefined) {
            errors.startDate = 'Date is invalid !!'
        }
        return errors
    }
})(ScheduleList);

export default ScheduleList;