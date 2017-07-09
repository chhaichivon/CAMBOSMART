import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Row, Col, Button, Table } from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import FormTextBox from './../../../shared_component/redux_form_fields/form_simple_textbox';
import FormField from './../../../shared_component/redux_form_fields/form_field';
import FormDatePicker from './../../../shared_component/redux_form_fields/form_datepicker';
import moment from 'moment';
import {formatDate} from './../../../../utils/format_date';
import {renewAdvertiserAction} from './../../../../actions/admin/advertisement/advertiser';
import {loadState} from './../../../../localstorages/local_storage';

class ModalRenew extends React.Component {
    constructor(props) {
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

    componentWillReceiveProps(data){
        if(data.advertiserRenew.code == 200){
            location.href = '/admin/advertisers/list';
        }else{
            if(data.advertiserRenew.message != undefined){
                document.getElementById('error_message').innerHTML = data.advertiserRenew.message
            }
        }
    }

    formSubmit(value) {
        //TODO: to post end date to advertiser page
        let longStartDate = new Date(this.state.start);
        let expireDate = moment(longStartDate.setMonth(longStartDate.getMonth() + parseInt(this.state.value))).format("YYYY-MM-DD");

        console.log(JSON.stringify(this.props.renew));
        this.props.renewAdvertiserAction({
            token: loadState() != undefined ? loadState().token : '',
            advertiser: {
                id: this.props.renew.categoryId,
                page: this.props.renew.page,
                location: this.props.renew.location,
                advertise:{
                    id: {$oid: this.props.renew.id},
                    duration: parseInt(this.state.value),
                    startDate: value.startDate,
                    expireDate: expireDate,
                    price: this.props.renew.price,
                    discount: value.discount != undefined ? Number(value.discount) : 0
                }
            }
        });
    }

    render() {
        //TODO: to print end date in to textbox
        let periodOfMonth = parseInt(this.state.value);
        let formatStartDate = new Date(this.state.start);
        let result = formatStartDate.setMonth(formatStartDate.getMonth() + periodOfMonth);
        let eDate = moment(result).format("YYYY-MM-DD");
        const { handleSubmit, submitting } = this.props;

        return (
            <div>
                <Modal keyboard={false} backdrop="static" show={this.props.renew.modalShow} onHide={() => location.href = '/admin/advertisers/list'}>
                    <Modal.Header closeButton>
                        <Modal.Title><center style={{color: '#232f3e', fontWeight: 'bold'}}>RE-NEW ADVERTISER</center></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        { this.props.advertisements == undefined ? null :
                            <div>
                                <div className="advertisement">
                                    { this.props.advertisements.length > 0 ?
                                        <Table className="advertisement" responsive bordered hover id="schedule">
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
                                            <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                                            <tr>
                                                <th style={{textAlign: 'center'}}>No</th>
                                                <th style={{textAlign: 'center'}}>ADVERTISER</th>
                                                <th style={{textAlign: 'center'}}>START DATE</th>
                                                <th style={{textAlign: 'center'}}>EXPIRE DATE</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan="4">
                                                    <center><h2>Advertisements are available !</h2></center>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    }
                                </div>
                                <form onSubmit={handleSubmit(this.formSubmit)}>
                                    <Row>
                                        <Col lgOffset={3} lg={9}>
                                            <div id="error_message" style={{marginLeft: '20px', color: 'red', fontSize: '16px', fontWeight: 'bold'}}></div>
                                        </Col>
                                        &nbsp;
                                    </Row>
                                    <Row style={{width: '100%', marginLeft: '14px'}}>
                                        <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                            <strong>Discount </strong>
                                        </Col>
                                        <Col lg={9}>
                                            <Field name="discount" type="text" component={FormField} label="Discount" icon="fa fa-percent" />
                                        </Col>
                                    </Row>

                                    <Row style={{width: '100%', marginLeft: '14px'}}>
                                        <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                            <strong>Duration <span style={{color: 'red'}}>*</span></strong>
                                        </Col>
                                        <Col lg={9}>
                                            <Field name="duration" type="text" component={FormTextBox} handleChange={this.handleChange} values={this.state.value} label="Period of Month" icon="fa fa-clock-o" />
                                        </Col>
                                    </Row>

                                    <Row style={{width: '100%', marginLeft: '14px'}}>
                                        <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                            <strong>Start Date <span style={{color: 'red'}}>*</span></strong>
                                        </Col>
                                        <Col lg={9}>
                                            <Field name="startDate" component={FormDatePicker} placeholder="Start Date" defaultDate={this.state.start} handleChange={this.handleStartDate} />
                                        </Col>
                                    </Row>
                                    <Row style={{width: '100%', marginLeft: '14px'}}>
                                        <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                            <strong>End Date : </strong>
                                        </Col>
                                        <Col lg={9}>
                                            <Field name="endDate" component={FormTextBox} values={eDate !== 'Invalid date' ? eDate : ''} label="End Date" icon="fa fa-calendar" disabled />
                                        </Col>
                                    </Row>

                                    <Row style={{marginRight: '45px'}}>
                                        <Col mdOffset={10} md={2} lg={12}>
                                            <Button type="submit" disabled={submitting} style={{background: '#ff6903', color: 'white', fontWeight: 'normal', height: '40px', width: '104px'}}>
                                                SAVE
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        }
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

ModalRenew = reduxForm({
    form: 'form_modal_renew',
    validate: function (values) {
        const errors = {};
        let regex_duration = /^\d+$/;
        let regex_price=/^(([1-9]\d*)|0)(\.\d{1,2})?$/;

        if(values.discount != "" && values.discount != undefined){
            if(!regex_price.test(values.discount) || values.discount > 100){
                errors.discount = "Discount must in between (0-100) and contain only number !!"
            }
        }else {}

        if(!regex_duration.test(values.duration) || values.duration <= 0 || values.duration > 24){
            errors.duration = "Duration must in between (1-24) and contain only number !!"
        }
        if(values.startDate == undefined) {
            errors.startDate = 'Date is invalid !!'
        }
        return errors
    }
})(ModalRenew);

function mapStateToProps(state) {
    return {
        advertiserRenew: state.advertiserRenew,
        initialValues:{
            duration: '',
            discount: ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({renewAdvertiserAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalRenew);