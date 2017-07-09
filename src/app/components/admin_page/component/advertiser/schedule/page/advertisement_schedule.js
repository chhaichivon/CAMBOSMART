import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Row, Col, Panel, Table } from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import FormSelectField from './../../../../../shared_component/redux_form_fields/form_select_field';
import ScheduleList from './schedule_list';
import FormHomePage from './form_home_page';
import FormCategoryPage from './form_category_page';
import FormLocationPage from './form_location_page';
import FormDetailPage from './form_detail_page';
import {scheduleAdvertisementAction, validateAdvertisementAction} from './../../../../../../actions/admin/advertisement/advertisement';
import {loadState} from './../../../../../../localstorages/local_storage';

let advertisement = {
    token: loadState() != undefined ? loadState().token : '',
    page: '',
    location: '',
    price: 0,
    description: '',
    start: 1,
    limit: 10
};
let page = '';

class AdvertisementSchedule extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pages: [
                'Home page', 'Category page',
                'Location page', 'Detail page'
            ],
            ads: false
        };
        this.handlePage = this.handlePage.bind(this);
        this.handleAdvertisement = this.handleAdvertisement.bind(this);
    }

    handlePage(event) {
        advertisement.page = event.target.value;
        page = event.target.value;
        this.setState({ads: false});
        this.props.validateAdvertisementAction({
            token: loadState() != undefined ? loadState().token : "",
            page: event.target.value
        });
    }

    handleClick(data) {
        advertisement.location = data.location;
        advertisement.price = data.price;
        advertisement.description = data.description;
        this.setState({ads: true});
        this.props.scheduleAdvertisementAction(advertisement);
    }

    renderAdvertisement(advertisements) {
        if(advertisement.page == 'Home page') {
            return(
                <div>
                    <FormHomePage handleClick={this.handleClick.bind(this)} advertisements={advertisements}/>
                </div>
            )
        } else if (advertisement.page == 'Detail page') {
            return(
                <div>
                    <FormDetailPage handleClick={this.handleClick.bind(this)} advertisements={advertisements}/>
                </div>
            );
        } else if (advertisement.page == 'Location page') {
            return(
                <div>
                    <FormLocationPage handleClick={this.handleClick.bind(this)} advertisements={advertisements}/>
                </div>
            );
        } else if (advertisement.page == 'Category page') {
            return(
                <div>
                    <FormCategoryPage handleClick={this.handleClick.bind(this)} advertisements={advertisements}/>
                </div>
            );
        }else {return null}
    }

    handleAdvertisement(data){
        this.props.advertisementInfo({
            back: data.back,
            page: advertisement.page,
            location: advertisement.location,
            price: advertisement.price,
            description: advertisement.description,
            duration: data.duration,
            startDate: data.startDate,
            expireDate: data.expireDate
        });
    }

    render() {
        return(
            <div>
                <br/>
                <Panel className="advertisement" header={<strong>Advertisement Schedule</strong>}>
                    <Row>
                        <Col md={4} style={{marginLeft: '-35px', marginTop: '10px', textAlign: 'right'}}>
                            <strong>Please choose advertisement's page <span style={{color: 'red'}}>*</span> </strong>
                        </Col>
                        <Col md={4}>
                            <Field name="page" type="select"
                                   onChange={this.handlePage}
                                   component={FormSelectField}
                                   placeholder="Advertising page wanted?"
                                   values={this.state.pages} icon="fa fa-globe"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Row>
                                {this.renderAdvertisement(this.props.advertisementValidate.advertisements)}
                            </Row>
                        </Col>
                        <Col md={6} lg={6}>
                            { this.props.schedule.advertisements != undefined && this.state.ads ?
                                <ScheduleList advertisements={this.props.schedule.advertisements} handleAdvertisement={this.handleAdvertisement} location={advertisement.location}/>
                                :
                                null
                            }
                            </Col>
                    </Row>
                </Panel>
            </div>
        );
    }
}

AdvertisementSchedule = reduxForm({
    form: 'form_ads_schedule',
    validate: function (values) {
        const errors = {};

        if (values.page == undefined || values.page == "") {
            errors.page = "Please select ads page you wanted !!";
        }
        return errors
    }
})(AdvertisementSchedule);

function mapStateToProps(state) {
    console.log("SCHEDULE : " + JSON.stringify(state.advertisementSchedule));
    return {
        advertisementValidate: state.advertisementValidate,
        schedule: state.advertisementSchedule
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({scheduleAdvertisementAction, validateAdvertisementAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementSchedule);