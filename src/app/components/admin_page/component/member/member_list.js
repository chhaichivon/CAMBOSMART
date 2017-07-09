import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Table,Image,Pagination,Row,Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import FormSelectField from './../../../shared_component/redux_form_fields/form_select_field';
import FormSelectFieldStatus from './../../../shared_component/redux_form_fields/form_select_field_status';
import FormField from './../../../shared_component/redux_form_fields/form_field';
import './member.css';
import { fetchMembersAction, updateMemberStatusAction } from './../../../../actions/admin/common';
import FormDatePicker from './../../../shared_component/redux_form_fields/form_datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormSubmit from './../../../shared_component/redux_form_fields/form_submit';
import { loadState  } from './../../../../localstorages/local_storage';

let member = {
    start: 1,
    limit: 10,
    token: loadState() == undefined ? '' : loadState().token,
    user: {
        userType: 'normal',
        name: '',
        location: '',
        status: -2,
        fromDate: '1970-1-1',
        toDate: '1970-1-1'
    }
};
let id='';
let status = {};

class MemberList extends React.Component{
        constructor(){
        super();
        this.state = {
            startDate: null,
            endDate: null,
            activePage: 1,
            block:{
                show: false,
                hide: false
            },
            sweetPropsBlock: {
                type:"warning",
                title:"Block?",
                text:"Are you sure want to block this user account?",
                showCancelButton:true
            },
            unblock:{
                show: false,
                hide: false
            },
            sweetPropsUnBlock: {
                type:"warning",
                title:"Unblock?",
                text:"Are you sure want to unblock this user account?",
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
        this.props.fetchMembersAction(member);
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

    static changeStatus(status) {
        if (status < 0) {
            return 'Block';
        } else if (status == 0) {
            return 'Inactive';
        } else {
            return 'Active';
        }
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
        let name = '';
        let location = '';
        let status = -2;
        let fromDate = '1970-1-1';
        let toDate = '1970-1-1';
        if (value.name != undefined) {
            name = value.name;
        }
        if (value.location != undefined) {
            location = value.location;
        }
        if (value.status != undefined) {
            status = Number(value.status);
        }
        if (value.fromDate != undefined && value.toDate != undefined) {
            fromDate = value.fromDate;
            toDate = value.toDate;
        }
        this.setState({
            activePage: 1
        });
        member = {
            start: 1,
            limit: 10,
            token: loadState() == undefined ? '' : loadState().token,
            user: {
                userType: 'normal',
                name: name,
                location: location,
                status: status,
                fromDate: fromDate,
                toDate: toDate
            }
        };
        this.props.fetchMembersAction(member);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        member.start = eventKey;
        this.props.fetchMembersAction(member);
        browserHistory.push('/admin/members/list/?page=' + eventKey)
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

    /* block member */
    openBlockMember(_id){
        id = _id;
        this.setState({
            block: {
                show: true,
                hide: true
            }
        })
    }

    /*unblock member */
    openUnblockMember(_id){
        id = _id;
        this.setState({
            unblock: {
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
                            <div className="col-xs-12 col-sm-12 col-lg-2">
                                <Field name="status" type="select" component={FormSelectFieldStatus}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="fromDate" component={FormDatePicker} placeholder="From Date" defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="toDate" component={FormDatePicker} placeholder="To Date" defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-10">
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
                                        <th style={{textAlign: 'center'}}>No</th>
                                        <th>NAME</th>
                                        <th style={{textAlign: 'center'}}>LOCATION</th>
                                        <th style={{textAlign: 'center'}}>CONTACT</th>
                                        <th style={{textAlign: 'center'}}>JOINED DATE</th>
                                        <th style={{textAlign: 'center'}}>STATUS</th>
                                        <th style={{textAlign: 'center'}}>ACTIONS</th>
                                    </tr>
                                    </thead>
                                    <tbody className="table-hover">
                                        { this.props.members.users == undefined ? null
                                            :
                                            this.props.members.users.length == 0  ?
                                            <tr>
                                                <td colSpan="7">
                                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                                </td>
                                            </tr>
                                            :
                                            this.props.members.users.map((member, index) => {
                                                total = member.total;
                                                return (
                                                    <tr key={index}>
                                                        {
                                                            this.state.activePage == 1 ?
                                                                <td style={{textAlign: 'center'}}> { index + 1}</td>
                                                                :
                                                                <td style={{textAlign: 'center'}}> { index + ((this.state.activePage - 1) * 10) + 1 } </td>
                                                        }

                                                        {member.profileImage != undefined && member.profileImage != "" ?
                                                            <td>
                                                                <Image src={'/images/profiles/' + member.profileImage} circle width="25" height="25"/>
                                                                &nbsp;{member.userName}
                                                            </td>
                                                            :
                                                            <td>
                                                                <Image src="/profile/default-profile.png" circle width="25" height="25"/>
                                                                &nbsp;{member.userName}
                                                            </td>
                                                        }

                                                        <td style={{textAlign: 'center'}}> {member.location }</td>
                                                        {member.phone != undefined && member.phone != '' ?
                                                            <td style={{textAlign: 'center'}}> {member.phone.replace("+855", "0")} </td> :
                                                            <td style={{textAlign: 'center'}}> {member.email} </td>
                                                        }
                                                        <td style={{textAlign: 'center'}}>{ MemberList.dateFormat(member.dateJoin)} </td>
                                                        <td style={{textAlign: 'center'}}>{ MemberList.changeStatus(member.status)} </td>
                                                        <td style={{textAlign: 'center'}}>
                                                            <Link
                                                                to={"/admin/members/detail/"+ member._id.$oid}
                                                                style={{"color":"#03A9F4"}}>
                                                                <i className="fa fa-eye"
                                                                   aria-hidden="true">&nbsp;View</i>
                                                            </Link>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                        {/* block or unblock */}
                                                        { loadState().user.userType !== 'editor' ? 
                                                            member.status != -1 ?
                                                                <Link to="" onClick={() => {this.openBlockMember(member._id.$oid)} }
                                                                      style={{"color": "red"}}>
                                                                    <i className="fa fa-ban" aria-hidden="true">&nbsp;Block</i>
                                                                </Link>
                                                                :
                                                                <Link to="" onClick={() => {this.openUnblockMember(member._id.$oid)} }
                                                                      style={{"color": "blue"}}>
                                                                    <i className="fa fa-unlock-alt" aria-hidden="true">&nbsp;Unblock</i>
                                                                </Link>
                                                            : null }
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
                                                items={MemberList.handleItem(total)}
                                                maxButtons={5}
                                                activePage={this.state.activePage}
                                                onSelect={this.handleSelect}
                                    />
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* sweet alert to block member to be merchant */}
                <SweetAlert
                    show={this.state.block.show}
                    type={this.state.sweetPropsBlock.type}
                    title={this.state.sweetPropsBlock.title}
                    text={this.state.sweetPropsBlock.text}
                    showCancelButton={this.state.sweetPropsBlock.showCancelButton}
                    confirmButtonColor="#ff5a00"
                    onConfirm={
                            () => {
                                if(this.state.block.show && this.state.block.hide) {
                                    this.props.updateMemberStatusAction({
                                        token: member.token,
                                        block: {
                                            _id: id,
                                            status: -1
                                        }
                                    });
                                    setTimeout(function() {
                                        if(status != undefined){
                                            if(status.code == 200){
                                                this.setState({
                                                    sweetPropsBlock: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"User account have been block successfully.",
                                                        showCancelButton:false
                                                    },
                                                    block: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });
                                                setTimeout(function(){
                                                    window.location.assign('/admin/members/list');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsBlock: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot block this user account.",
                                                        showCancelButton:false
                                                    },
                                                    block: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                })
                                            }
                                        }}.bind(this), 200);
                                }else {
                                    this.setState({
                                        sweetPropsBlock: {
                                            type:"warning",
                                            title:"Are you sure?",
                                            text:"You want to block this user account?",
                                            showCancelButton:true
                                        },
                                        block: {
                                            show: false,
                                            hide: false
                                        }
                                    })
                                }
                            }
                        }
                    onCancel={() => this.setState({block: {show: false, hide: false}})}
                />
                {/* sweet alert to unblock member to be merchant */}
                <SweetAlert
                    show={this.state.unblock.show}
                    type={this.state.sweetPropsUnBlock.type}
                    title={this.state.sweetPropsUnBlock.title}
                    text={this.state.sweetPropsUnBlock.text}
                    showCancelButton={this.state.sweetPropsUnBlock.showCancelButton}
                    confirmButtonColor="#ff5a00"
                    onConfirm={
                            () => {
                                if(this.state.unblock.show && this.state.unblock.hide) {
                                    this.props.updateMemberStatusAction({
                                        token: member.token,
                                        block: {
                                            _id: id,
                                            status: 1
                                        }
                                    });
                                    setTimeout(function() {
                                        if(status != undefined){
                                            if(status.code == 200){
                                                this.setState({
                                                    sweetPropsUnBlock: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"User account have been unblock successfully.",
                                                        showCancelButton:false
                                                    },
                                                    unblock: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });
                                                setTimeout(function(){
                                                    window.location.assign('/admin/members/list');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsUnBlock: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot unblock this user account.",
                                                        showCancelButton:false
                                                    },
                                                    unblock: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                })
                                            }
                                        }}.bind(this), 200);
                                }else {
                                    this.setState({
                                        sweetPropsUnBlock: {
                                            type:"warning",
                                            title:"Are you sure?",
                                            text:"You want to unblock this user account?",
                                            showCancelButton:true
                                        },
                                        unblock: {
                                            show: false,
                                            hide: false
                                        }
                                    })
                                }
                            }
                        }
                    onCancel={() => this.setState({unblock: {show: false, hide: false}})}
                />
            </div>

        );
    }
}

MemberList = reduxForm({
    form: 'form-member-list',
    validate: function (values) {
        const errors = {};
        if (new Date(values.fromDate).getTime() > new Date(values.toDate).getTime()) {
            errors.toDate = 'It must greater or equal FROM DATE !!'
        }
        return errors
    }
})(MemberList);

function mapStateToProps(state){
    if(state.status.code != undefined){
        status = state.status;
    }
    return ({
        members: state.members,
        memberStatus: state.status
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchMembersAction, updateMemberStatusAction },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);


