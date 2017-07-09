import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Table,Image,Pagination,Row,Col,FormGroup, ControlLabel ,FormControl  } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import FormSelectField from './../../../../shared_component/redux_form_fields/form_select_field';
import FormSelectFieldStatus from './../../../../shared_component/redux_form_fields/form_select_field_status';
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import './../member.css';
import { actionAdminListMemberRequest, promoteMemberAction, actionAdminDeleteMemberRequest } from './../../../../../actions/admin/member/member';
import { actionPostNotification } from '../../../../../actions/notification/notification';
import FormDatePicker from './../../../../shared_component/redux_form_fields/form_datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import { loadState  } from './../../../../../localstorages/local_storage';

let request = {
    page :1,
    limit: 10,
    token: loadState() == undefined ? '' : loadState().token,
    requested : {
        "name" : "",
        "location": "",
        "fromDate" : "2017-1-1",
        "toDate": "2017-12-31"
    }
};
let id = '';
let userId='';
let promoteDuration = 0;
let startDate = '';
let endDate = '';
let promote = {};
let status = {};
let promoteDescription = '';

class ListMemberRequest extends React.Component {
    constructor(){
        super();
        this.state = {
            startDate: null,
            endDate: null,
            packId: '',
            activePage: 1,
            promote: {
                show: false,
                hide: false
            },
            sweetProps: {
                type:"warning",
                title:"Promote to be Merchant?",
                text:"Are you sure want to promote this user as Merchant?",
                showCancelButton:true
            },
            delete:{
                show: false,
                hide: false
            },
            sweetPropsDelete: {
                type:"warning",
                title:"Delete?",
                text:"Are you sure want to delete this member request?",
                showCancelButton:true
            },
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
        this.handleSelect = this.handleSelect.bind(this);
    }
    componentWillMount() {
        this.props.actionAdminListMemberRequest(request);
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

    static getId(_id) {
        if (_id == undefined) {
            return 0;
        } else {
            return Object.values(_id);
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

    formSubmit(value) {
        let today = new Date();
        let name = '';
        let location = '';
        let fromDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
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
        request = {
            page :1,
            limit: 10,
            token: loadState() == undefined ? '' : loadState().token,
            requested : {
                "name" : name,
                "location": location,
                "fromDate" : fromDate,
                "toDate": toDate
            }
        };
        this.props.actionAdminListMemberRequest(request);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        request.start = eventKey;
        this.props.actionAdminListMemberRequest(request);
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

    /* promote member to be merchant */
    openPromoteMember(_id, uid, uname, _duration){
        id = _id.$oid;
        userId = uid.$oid;
        promoteDuration = _duration;
        // calculate new date
        let edd = '';
        let emm = '';
        let eyyyy = '';
        //calculate date
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();
        startDate =  yyyy+"-"+mm+"-"+dd;
        let totalmonth = mm + promoteDuration;
        if(totalmonth > 12){
            edd = dd;
            emm = totalmonth - 12;
            eyyyy = yyyy + 1;
            endDate =  eyyyy+"-"+emm+"-"+edd;
        }else{
            edd = dd;
            emm = totalmonth;
            eyyyy = yyyy;
            endDate = eyyyy+"-"+emm+"-"+edd;
        }
        promoteDescription = "សួស្តី " + uname + ", អបអរសាទរសំរាប់ការក្លាយទៅជាអ្នកជំនួញ។ គណនីជំនួញរបស់អ្នកមានសុពលភាពត្រឹមតែ " + _duration 
            + " ខែប៉ុណ្ណោះ គឺចាប់ថ្ងៃទី " + startDate + " រហូលដល់ថ្ងៃទី " + endDate + "។ "
            + "\r\n" + "អត្ថប្រយោជន៍ដែលទទួលបានមានដូចជា ៖ "
            + "\r\n" + " - ដាក់លក់ទំនិញបានចំនួន 200 នៅលើគេហទំព័រ"
            + "\r\n" + " - រាល់ទំនិញអាចឡើងលើទំព័រមុខដោយស្វ័យប្រវត្តចំនួន 20 ក្នុង 1 ថ្ងៃ"
            + "\r\n" + " - ដាក់បង្ហាញហាងទំនិញ នៅលើផលិតផលនីមួយៗ"
            + "\r\n" + " - ដាក់បង្ហាញបដាហាង នៅលើទំព័រលំអិតទំនិញនីមួយៗ"
            + "\r\n" + " - ទទួលបានគេហទំព័រផ្ទាល់មួយ សំរាប់បង្ហាញទំនិញទាំងអស់ដែលបានដាក់លក់។"
            + "\r\n"
            + "\r\n"
            + "Hi "+ uname +", Congratulations for becoming a Merchant. Your business account is valid for only " + _duration + " months, starting from "
            + startDate+" until "+ endDate + ". "
            + "\r\n" + "Benefits include: "
            + "\r\n" + " - Amount 200 products can post on our site"
            + "\r\n" + " - Push product automatically 20 products per day"
            + "\r\n" + " - Show shop on each product posting"
            + "\r\n" + " - Displaying banner on each page Details"
            + "\r\n" + " - Get a personal website for all the goods sold."
                            
        this.setState({
            promote: {
                show: true,
                hide: true
            }
        })
    }

    /* delete request */
    openDeleteRequest(_id){
        id = _id;
        this.setState({
            delete: {
                show: true,
                hide: true
            }
        })
    }

    render(){
        let total = 0;
        const {handleSubmit, submitting} = this.props;
        return(
            <div>
                <br />
                <div className="row">
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
                            <div className="col-xs-12 col-sm-12 col-lg-4"></div>
                            <div className="col-xs-12 col-sm-12 col-lg-6">
                                <Field name="name" type="text" component={FormField} label="Name" icon="fa fa-user"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2">
                                <FormSubmit submitting={submitting}  label="SEARCH" icon="fa fa-search"/>
                            </div>
                        </div>
                    </form>
                    <Row>
                        <Col>
                            <div className="table-responsive wrap-member-table">
                                <Table bordered hover responsive striped>
                                    <thead className="member-style-head">
                                    <tr className="lg">
                                        <th style={{textAlign: 'center'}}>NO</th>
                                        <th>NAME</th>
                                        <th style={{textAlign: 'center'}}>LOCATION</th>
                                        <th style={{textAlign: 'center'}}>CONTACT</th>
                                        <th style={{textAlign: 'center'}}>JOINED DATE</th>
                                        <th style={{textAlign: 'center'}}>TYPE</th>
                                        <th style={{textAlign: 'center'}}>START DATE</th>
                                        <th style={{textAlign: 'center'}}>EXPIRED DATE</th>
                                        <th style={{textAlign: 'center'}}>ACTIONS</th>
                                    </tr>
                                    </thead>
                                    <tbody className="table-hover">
                                    { this.props.listMemberRequest.requested == undefined  ?
                                        <tr>
                                            <td colSpan="10">
                                                <center><h3>RESULT NOT FOUND!</h3></center>
                                            </td>
                                        </tr>
                                        :
                                        this.props.listMemberRequest.requested.map((member, index) => {
                                            total = member.total;
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
                                                    <td> {ListMemberRequest.dateFormat(member.users[0].dateJoin) }</td>
                                                    <td style={{textAlign: 'center'}}> {member.duration + " months $ " + member.price }</td>
                                                    <td> {ListMemberRequest.dateFormat(member.startDate) }</td>
                                                    <td> {ListMemberRequest.dateFormat(member.endDate) }</td>
                                                    <td>
                                                        <Link
                                                            to={"/admin/members/detail-member/"+ member.userId.$oid}
                                                            style={{"color":"#03A9F4"}}>
                                                            <i className="fa fa-eye"
                                                               aria-hidden="true">&nbsp;View</i>
                                                        </Link> &nbsp;
                                                        <Link to="" onClick={() => {this.openPromoteMember(member._id, member.userId, member.users[0].userName, member.duration )} }
                                                             style={{"color": "green"}}>
                                                             <i className="fa fa-arrow-circle-up" aria-hidden="true">&nbsp;Promote</i>
                                                        </Link>
                                                        &nbsp;
                                                        {/* delete */}
                                                        <Link to="" onClick={() => {this.openDeleteRequest(member._id.$oid)} }
                                                            style={{"color": "red"}}>
                                                            <i className="fa fa-trash-o" aria-hidden="true">&nbsp;Delete</i>
                                                        </Link>
                                                    </td>
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
                                                items={ListMemberRequest.handleItem(total)}
                                                maxButtons={5}
                                                activePage={this.state.activePage}
                                                onSelect={this.handleSelect}
                                    />
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* sweet alert to promote member to be merchant */}
                <SweetAlert
                    show={this.state.promote.show}
                    type={this.state.sweetProps.type}
                    title={this.state.sweetProps.title}
                    text={this.state.sweetProps.text}
                    showCancelButton={this.state.sweetProps.showCancelButton}
                    confirmButtonColor="#ff5a00"
                    onConfirm={
                            () => {
                                if(this.state.promote.show && this.state.promote.hide) {
                                    this.props.promoteMemberAction({
                                        token: request.token,
                                        promote: {
                                            id: id,
                                            userId: userId,
                                            userType: "merchant",
                                            startDate: startDate,
                                            endDate: endDate
                                        }
                                    });
                                    setTimeout(function() {
                                        if(promote != undefined){
                                            if(promote.code == 200){
                                                this.setState({
                                                    sweetProps: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"Successfully promote to be Merchant.",
                                                        showCancelButton:false
                                                    },
                                                    promote: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });

                                                this.props.actionPostNotification({
                                                    token: request.token,
                                                    notification: {
                                                        userId: {"$oid": userId},
                                                        notificationType: "Promote Member",
                                                        description: promoteDescription,
                                                        isView: false,
                                                        isDirty: false
                                                    }
                                                });

                                                setTimeout(function(){
                                                    window.location.assign('/admin/members/list-request');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetProps: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot promote this user account.",
                                                        showCancelButton:false
                                                    },
                                                    promote: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                })
                                            }
                                        }}.bind(this), 200);
                                }else {
                                    this.setState({
                                        sweetProps: {
                                            type:"warning",
                                            title:"Are you sure?",
                                            text:"You want to promote this user to be Merchant?",
                                            showCancelButton:true
                                        },
                                        promote: {
                                            show: false,
                                            hide: false
                                        }
                                    })
                                }
                            }
                        }
                    onCancel={() => this.setState({promote: {show: false, hide: false}})}
                />
                {/* delete member request */}
                <SweetAlert
                    show={this.state.delete.show}
                    type={this.state.sweetPropsDelete.type}
                    title={this.state.sweetPropsDelete.title}
                    text={this.state.sweetPropsDelete.text}
                    showCancelButton={this.state.sweetPropsDelete.showCancelButton}
                    confirmButtonColor="#ff5a00"
                    onConfirm={
                            () => {
                                if(this.state.delete.show && this.state.delete.hide) {
                                    this.props.actionAdminDeleteMemberRequest(id);
                                    setTimeout(function() {
                                        if(status != undefined){
                                            if(status.code == 200){
                                                this.setState({
                                                    sweetPropsDelete: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"Request has been deleted successfully.",
                                                        showCancelButton:false
                                                    },
                                                    delete: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });
                                                setTimeout(function(){
                                                    window.location.assign('/admin/members/list-request');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsDelete: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot delete this request.",
                                                        showCancelButton:false
                                                    },
                                                    delete: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                })
                                            }
                                        }}.bind(this), 200);
                                }else {
                                    this.setState({
                                        sweetPropsDelete: {
                                            type:"warning",
                                            title:"Are you sure?",
                                            text:"You want to delete this request?",
                                            showCancelButton:true
                                        },
                                        delete: {
                                            show: false,
                                            hide: false
                                        }
                                    })
                                }
                            }
                        }
                    onCancel={() => this.setState({delete: {show: false, hide: false}})}
                />
            </div>
        )
    }
}

ListMemberRequest = reduxForm({
    form: 'form-list-request',
    validate: function (values) {
        const errors = {};
        if (new Date(values.fromDate).getTime() > new Date(values.toDate).getTime()) {
            errors.toDate = 'It must greater or equal FROM DATE !!'
        }
        return errors
    }
})(ListMemberRequest);

function mapStateToProps(state){
    if(state.promotedMember.code != undefined){
        promote = state.promotedMember;
    }
    if(state.deleteMemberRequest.code != undefined){
        status = state.deleteMemberRequest;
    }
    return ({
        promotedMember: state.promotedMember,
        deleteMemberRequest: state.deleteMemberRequest,
        listMemberRequest: state.listMemberRequest,
        postNotification: state.postNotification
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionAdminListMemberRequest, promoteMemberAction, actionAdminDeleteMemberRequest, actionPostNotification },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMemberRequest);