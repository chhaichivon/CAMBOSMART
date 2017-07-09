import React from 'react';
import {Row, Col, Table, Button} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FormSelectField from './../../../shared_component/redux_form_fields/form_select_field';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import {fetchAdvertisementsAction, scheduleAdvertisementAction} from './../../../../actions/admin/advertisement/advertisement';
import {loadState} from './../../../../localstorages/local_storage';
import FormHomePage from './schedule/form_home_page';
import FormCategoryPage from './schedule/form_category_page';
import FormLocationPage from './schedule/form_location_page';
import FormDetailPage from './schedule/form_detail_page';
//import { renderRemainingTime } from './easy_form/remain_time';
import {renderRemainingTime} from './../../../../utils/remain_time';

let advertisement = {
    token: loadState() != undefined ? loadState().token : '',
    page: '',
    location: '',
    start: 1,
    limit: 10
};

class AdvertisementSchedule extends React.Component {
    constructor() {
        super();
        this.state = {
            activePage: 1,
            pages: [
                'Home page', 'Category page',
                'Location page', 'Detail page'
            ],
            location: [],
            check: true,
            list: false
        };

        this.handlePage = this.handlePage.bind(this);
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
        return day.toString().concat("-", monthNames[monthIndex], "-", year.toString());
    }

    handlePage(event) {
        if(event.target.value != ''){
            console.log("Value1 : " + event.target.value);
            this.setState({check: false, list: false});
            this.props.fetchAdvertisementsAction({
                token: loadState() != undefined ? loadState().token : "",
                page: event.target.value
            });
        }else {
            console.log("Value2 : " + event.target.value);
            this.setState({check: true, list: false});
        }
        advertisement.page = event.target.value;
    }

    handleClick(data) {
        this.setState({list: data.list});
        advertisement.location = data.location;
        console.log(data.location);
        this.props.scheduleAdvertisementAction(advertisement);
    }

    static handlePrint(){
        let divToPrint = document.getElementById('schedule');
        let htmlToPrint = '' +
            '<style type="text/css">' +
            'table th, table td {' +
            'border:1px solid #000;' +
            'padding;0.5em;' +
            '}' +
            '</style>';
        htmlToPrint += divToPrint.outerHTML;
        let newWin = window.open("");
        newWin.document.write(htmlToPrint);
        newWin.print();
        newWin.close();

    }

    render() {
        return (
            <div>
                <br/>
                <form>
                    <Row style={{marginLeft: "-15px"}}>
                        <Col xs={6} sm={6} lg={4}>
                            <h4 style={{fontWeight: 'bold'}}>Please select advertisement page <span style={{color: 'red'}}>*</span></h4>
                        </Col>
                        <Col xs={6} sm={6} lg={4}>
                            <Field name="page" type="select" onChange={this.handlePage} component={FormSelectField} placeholder="Advertisement page ..." values={this.state.pages} icon="fa fa-globe"/>
                        </Col>
                    </Row>
                </form>
                {advertisement.page == "Home page" ?
                    <div>
                        <FormHomePage handleClick={this.handleClick.bind(this)} advertisements={this.props.ads.advertisements}/>
                    </div>
                    :null
                }
                {advertisement.page == "Category page" ?
                    <div>
                        <FormCategoryPage handleClick={this.handleClick.bind(this)} advertisements={this.props.ads.advertisements}/>
                    </div>
                    :null
                }
                {advertisement.page == "Location page" ?
                    <div>
                        <FormLocationPage handleClick={this.handleClick.bind(this)} advertisements={this.props.ads.advertisements}/>
                    </div>
                    :null
                }
                {advertisement.page == "Detail page" ?
                    <div>
                        <FormDetailPage handleClick={this.handleClick.bind(this)} advertisements={this.props.ads.advertisements}/>
                    </div>
                    :null
                }
                <br/>
                { this.props.schedule.advertisements != undefined ?
                    <div>
                        <div className="row">
                            <Button style={{background: '#232f3e', color: 'white', width: '100px', height: '40px', float: 'right'}} onClick={AdvertisementSchedule.handlePrint}>Print</Button>
                        </div>
                        <div className="row">
                            <Table responsive bordered hover id="schedule">
                                <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                                <tr>
                                    <th rowSpan={2} style={{textAlign: 'center'}}>No</th>
                                    <th style={{textAlign: 'center'}}>LOCATION</th>
                                    <th style={{textAlign: 'center'}}>PRICE ($)</th>
                                    <th style={{textAlign: 'center'}}>ADVERTISER</th>
                                    <th style={{textAlign: 'center'}}>PHONES</th>
                                    <th style={{textAlign: 'center'}}>START DATE</th>
                                    <th style={{textAlign: 'center'}}>EXPIRE DATE</th>
                                    <th style={{textAlign: 'center'}}>TIME REMAINING</th>
                                </tr>
                                </thead>
                                <tbody>
                                { this.props.schedule.advertisements.length > 0 && this.state.list ?
                                    this.props.schedule.advertisements.map((advertisement, index) => {
                                        return (
                                            <tr key={index}>
                                                {this.state.activeIndex == 1 ?
                                                    <td style={{textAlign: 'center'}}>{index + 1}</td> :
                                                    <td style={{textAlign: 'center'}}>{index + ((this.state.activePage - 1) * 5) + 1}</td>
                                                }
                                                <td style={{textAlign: 'center'}}>{advertisement.location}</td>
                                                <td style={{textAlign: 'center'}}>{advertisement.price}</td>
                                                <td style={{textAlign: 'center'}}>{advertisement.name}</td>
                                                { advertisement.phones.length > 1 ?
                                                    <td style={{textAlign: 'center'}}>{advertisement.phones[0] + ' / ' + advertisement.phones[1]}</td>
                                                    :
                                                    <td style={{textAlign: 'center'}}>{advertisement.phones}</td>
                                                }
                                                <td style={{textAlign: 'center'}}>{AdvertisementSchedule.dateFormat(advertisement.startDate)}</td>
                                                <td style={{textAlign: 'center'}}>{AdvertisementSchedule.dateFormat(advertisement.expireDate)}</td>
                                                <td style={{textAlign: 'center', color: 'green'}}>
                                                    {renderRemainingTime(advertisement.expireDate)}
                                                    {/*<Countdown targetDate={new Date(advertisement.expireDate)}*/}
                                                    {/*interval={1000}*/}
                                                    {/*timeSeparator={':'}*/}
                                                    {/*format={{*/}
                                                    {/*day: 'DD',*/}
                                                    {/*hour: 'HH',*/}
                                                    {/*minute: 'MM',*/}
                                                    {/*second: 'SS'*/}
                                                    {/*}}*/}
                                                    {/*leadingZero*/}
                                                    {/*onFinished={() => this.handleFinish}/>*/}
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <tr>
                                        <td colSpan="8">
                                            <center><h2>No Record !</h2></center>
                                        </td>
                                    </tr>
                                }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    :
                    null
                }

            </div>
        );
    }
}

AdvertisementSchedule = reduxForm({
    form: 'form_advertisement_schedule'
})(AdvertisementSchedule);

function mapStateToProps(state) {
    return {
        ads: state.advertisements,
        schedule: state.advertisementSchedule,
        initialValues:{
            page: ''
        }
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAdvertisementsAction, scheduleAdvertisementAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementSchedule)
