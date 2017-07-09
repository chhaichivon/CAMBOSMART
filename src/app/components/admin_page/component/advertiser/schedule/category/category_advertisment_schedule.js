import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Table, Button} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import FormSelectCategory from './../../../../../shared_component/redux_form_fields/form_select_category';
import FormSimpleTextbox from './../../../../../shared_component/redux_form_fields/form_simple_textbox';
import FormTextBox from './../../../../../shared_component/redux_form_fields/form_simple_textbox';
import FormDatePicker from './../../../../../shared_component/redux_form_fields/form_datepicker';
import {fetchParentCategoriesAction} from './../../../../../../actions/admin/category/category';
import {fetchScheduleCategoryAdvertisementsAction, fetchCategoryAdvertisementAction} from './../../../../../../actions/admin/advertisement/category_advertisement';
import {loadState} from './../../../../../../localstorages/local_storage';
import {formatDate} from './../../../../../../utils/format_date';
import moment from 'moment';

let categories = [];
let advertisementPackage = {};

class CategoryAdvertisementSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            value: '',
            start: null,
            end: null
        };
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
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

        this.props.advertisementInfo({
            back: true,
            id: advertisementPackage.id.$oid,
            name: advertisementPackage.name,
            price: advertisementPackage.price,
            duration: parseInt(this.state.value),
            startDate: value.startDate,
            expireDate: expireDate,
            description: advertisementPackage.description
        });
    }

    componentWillMount(){
        this.props.fetchParentCategoriesAction({
            token: loadState() != undefined ? loadState.token : '',
            start: 1,
            limit: 0
        });
    }

    handleSelect(event) {
        if(event.target.value != ""){
            this.setState({status: true});
        }else {
            this.setState({status: false});
        }

        this.props.fetchScheduleCategoryAdvertisementsAction({
            token: loadState() != undefined ? loadState().token : '',
            id: event.target.value
        });
        this.props.fetchCategoryAdvertisementAction({
            token: loadState() != undefined ? loadState().token : '',
            id: event.target.value
        });
    }

    render() {
        //TODO: to print end date in to textbox
        let periodOfMonth = parseInt(this.state.value);
        let formatStartDate = new Date(this.state.start);
        let result = formatStartDate.setMonth(formatStartDate.getMonth() + periodOfMonth);
        let eDate = moment(result).format("YYYY-MM-DD");

        const {handleSubmit, submitting} = this.props;
        const advertisements = this.props.scheduleCategoryAdvertisements.advertisements;
        const advertisement = this.props.categoryAdvertisement.advertisement;
        if(advertisement != undefined){
            if(advertisement != null){
                advertisementPackage = {
                    id: advertisement.categoryId,
                    name: advertisement.name,
                    price: advertisement.price,
                    description: advertisement.description
                };
            }
        }

        return (
            <div className="container-fluid">
                <br />
                <form onSubmit={handleSubmit(this.formSubmit)}>
                    <Row>
                        <Col lg={3} style={{marginTop: '7px', textAlign: 'right'}}>
                            <strong>Choose advertisement <span style={{color: 'red'}}> *</span></strong>
                        </Col>
                        <Col lg={4}>
                            <Field name="category" type="select" onChange={this.handleSelect} component={FormSelectCategory} placeholder="Choose advertisement ..." values={categories} icon="fa fa-indent"/>
                        </Col>
                    </Row>
                </form>
                <div>
                    { advertisement == undefined ? null :
                        advertisement == null ? null :
                            advertisements == undefined ? null :
                                this.state.status ?
                                    advertisements.length == 0 ?
                                        <div>
                                            <Table responsive bordered hover>
                                                <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                                                <tr>
                                                    <th style={{textAlign: 'center'}}>No</th>
                                                    <th style={{textAlign: 'center'}}>COMPANY</th>
                                                    <th style={{textAlign: 'center'}}>CONTACT</th>
                                                    <th style={{textAlign: 'center'}}>ADS NAME</th>
                                                    <th style={{textAlign: 'center'}}>PRICE</th>
                                                    <th style={{textAlign: 'center'}}>START DATE</th>
                                                    <th style={{textAlign: 'center'}}>EXPIRE DATE</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td colSpan="7">
                                                        <center><h3>Space available !</h3></center>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                            <form onSubmit={handleSubmit(this.formSubmit)}>
                                                <Row>
                                                    <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                                        <strong>Price <span style={{color: 'red'}}>*</span></strong>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Field name="price" type="text" component={FormSimpleTextbox} disabled={true} values={advertisement.price} icon="fa fa-usd"/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                                        <strong>Duration <span style={{color: 'red'}}>*</span></strong>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Field name="duration" type="text"
                                                               component={FormTextBox}
                                                               handleChange={this.handleChange}
                                                               values={this.state.value}
                                                               label="Period of Month" icon="fa fa-clock-o"/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                                        <strong>Start Date <span style={{color: 'red'}}>*</span></strong>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Field name="startDate"
                                                               component={FormDatePicker}
                                                               placeholder="Start Date"
                                                               defaultDate={this.state.start}
                                                               handleChange={this.handleStartDate}/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                                        <strong>Expire Date <span style={{color: 'red'}}>*</span></strong>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Field name="endDate"
                                                               component={FormTextBox}
                                                               values={eDate !== 'Invalid date' ? eDate : ''}
                                                               label="End Date"
                                                               icon="fa fa-calendar" disabled
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row style={{marginLeft: '53px'}}>
                                                    <Col lgOffset={5} lg={2} >
                                                        <Button type="submit" disabled={submitting} style={{background: '#ff6903', color: 'white', fontWeight: 'normal', height: '40px'}}>
                                                            <i className="fa fa-plus"/>{'  '}Add New
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                        :
                                    advertisements.length > 1 ?
                                        <div>
                                            <Table responsive bordered hover>
                                                <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                                                <tr>
                                                    <th style={{textAlign: 'center'}}>No</th>
                                                    <th style={{textAlign: 'center'}}>COMPANY</th>
                                                    <th style={{textAlign: 'center'}}>CONTACT</th>
                                                    <th style={{textAlign: 'center'}}>ADS NAME</th>
                                                    <th style={{textAlign: 'center'}}>PRICE ($)</th>
                                                    <th style={{textAlign: 'center'}}>START DATE</th>
                                                    <th style={{textAlign: 'center'}}>EXPIRE DATE</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                { advertisements.map((advertisement, index) => {
                                                    return(
                                                        <tr key={index}>
                                                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.company}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.phones}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.name}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.uPrice}</td>
                                                            <td style={{textAlign: 'center'}}>{formatDate(advertisement.startDate)}</td>
                                                            <td style={{textAlign: 'center'}}>{formatDate(advertisement.expireDate)}</td>
                                                        </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </Table>
                                        </div>
                                        :
                                        <div>
                                            <Table responsive bordered hover>
                                                <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                                                <tr>
                                                    <th style={{textAlign: 'center'}}>No</th>
                                                    <th style={{textAlign: 'center'}}>COMPANY</th>
                                                    <th style={{textAlign: 'center'}}>CONTACT</th>
                                                    <th style={{textAlign: 'center'}}>ADS NAME</th>
                                                    <th style={{textAlign: 'center'}}>PRICE</th>
                                                    <th style={{textAlign: 'center'}}>START DATE</th>
                                                    <th style={{textAlign: 'center'}}>EXPIRE DATE</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                { advertisements.map((advertisement, index) => {
                                                    return(
                                                        <tr key={index}>
                                                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.company}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.phones}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.name}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.uPrice}</td>
                                                            <td style={{textAlign: 'center'}}>{formatDate(advertisement.startDate)}</td>
                                                            <td style={{textAlign: 'center'}}>{formatDate(advertisement.expireDate)}</td>
                                                        </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </Table>
                                            <form onSubmit={handleSubmit(this.formSubmit)}>
                                                <Row>
                                                    <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                                        <strong>Price <span style={{color: 'red'}}>*</span></strong>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Field name="price" type="text" component={FormSimpleTextbox} disabled={true} values={advertisement.price} icon="fa fa-usd"/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                                        <strong>Duration <span style={{color: 'red'}}>*</span></strong>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Field name="duration" type="text"
                                                               component={FormTextBox}
                                                               handleChange={this.handleChange}
                                                               values={this.state.value}
                                                               label="Period of Month" icon="fa fa-clock-o"/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                                        <strong>Start Date <span style={{color: 'red'}}>*</span></strong>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Field name="startDate"
                                                               component={FormDatePicker}
                                                               placeholder="Start Date"
                                                               defaultDate={this.state.start}
                                                               handleChange={this.handleStartDate}/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={3} style={{marginTop: '10px', textAlign: 'right'}}>
                                                        <strong>Expire Date <span style={{color: 'red'}}>*</span></strong>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Field name="endDate"
                                                               component={FormTextBox}
                                                               values={eDate !== 'Invalid date' ? eDate : ''}
                                                               label="End Date"
                                                               icon="fa fa-calendar" disabled
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row style={{marginLeft: '53px'}}>
                                                    <Col lgOffset={5} lg={2} >
                                                        <Button type="submit" disabled={submitting} style={{background: '#ff6903', color: 'white', fontWeight: 'normal', height: '40px'}}>
                                                            <i className="fa fa-plus"/>{'  '}Add New
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                    : null
                    }

                </div>
            </div>
        );
    }
}

CategoryAdvertisementSchedule = reduxForm({
    form: 'form_category_advertisement_schedule',
    validate: function (values) {
        const errors = {};
        let regex_duration = /^\d+$/;

        if (values.category == undefined || values.category == "") {
            errors.category = "Please select category !!";
        }

        if(!regex_duration.test(values.duration) || Number(values.duration) <= 0 || Number(values.duration) > 24){
            errors.duration = "Duration must in between (1-24) !!"
        }
        if(values.startDate == undefined) {
            errors.startDate = 'Date is invalid !!'
        }

        return errors
    }
})(CategoryAdvertisementSchedule);

function mapStateToProps(state) {
    if(state.parentCategories.categories != undefined){
        state.parentCategories.categories.map((category, index) => {
            categories[index] = {
                categoryId: category._id.$oid,
                categoryName: category.categoryName
            };
        })
    }
    console.log(JSON.stringify(state.scheduleCategoryAdvertisements));
    return {
        parentCategories: state.parentCategories,
        scheduleCategoryAdvertisements: state.scheduleCategoryAdvertisements,
        categoryAdvertisement: state.categoryAdvertisement,
        initialValues: {
            category: '',
            duration: ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchParentCategoriesAction, fetchScheduleCategoryAdvertisementsAction, fetchCategoryAdvertisementAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdvertisementSchedule);