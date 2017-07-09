import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Table, Image, Pagination } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormField from './../../../../shared_component/redux_form_fields/form_field';
import FormSelectField from './../../../../shared_component/redux_form_fields/form_select_field';
import FormSelectFieldStatus from './../../../../shared_component/redux_form_fields/form_select_field_status';
import FormSubmit from './../../../../shared_component/redux_form_fields/form_submit';
import FormDatePicker from './../../../../shared_component/redux_form_fields/form_datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchMembersAction, updateMemberStatusAction } from './../../../../../actions/admin/common';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { loadState } from './../../../../../localstorages/local_storage';

let member = {
    start: 1,
    limit: 10,
    token: loadState() == undefined ? '6e1f1588-626b-4889-90a4-fc2cb7629b05' : loadState().token,
    user: {
        userType: 'merchant',
        name: '',
        location: '',
        status: -2,
        fromDate: '1970-1-1',
        toDate: '1970-1-1'
    }
};
let id='';
let status = {};
class MerchantList extends React.Component {
    constructor() {
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
        member.user = {
            userType: 'merchant',
            name: name,
            location: location,
            status: status,
            fromDate: fromDate,
            toDate: toDate
        };
        this.props.fetchMembersAction(member);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        member.start = eventKey;
        this.props.fetchMembersAction(member);
        browserHistory.push('/admin/merchants/list/?page=' + eventKey)
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
    openBlockMerchant(_id){
        id = _id;
        this.setState({
            block: {
                show: true,
                hide: true
            }
        })
    }

    /*unblock member */
    openUnblockMerchant(_id) {
        id = _id;
        this.setState({
            unblock: {
                show: true,
                hide: true
            }
        })
    }

    render() {
        const {handleSubmit, submitting} = this.props;
        let total = 0;
        return (
            <div>
                <br/>
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
                                <Field name="fromDate" component={FormDatePicker} placeholder="From Date"
                                       defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="toDate" component={FormDatePicker} placeholder="To Date"
                                       defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-10">
                                <Field name="name" type="text" component={FormField} label="Name" icon="fa fa-user"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-2">
                                <FormSubmit submitting={submitting} label="SEARCH" icon="fa fa-search"/>
                            </div>
                        </div>
                    </form>
                </div>
                <br/>
                <div className="row">
                    <Table responsive bordered hover>
                        <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                        <tr>
                            <th style={{textAlign: 'center'}}>No</th>
                            <th>NAME</th>
                            <th style={{textAlign: 'center'}}>LOCATION</th>
                            <th style={{textAlign: 'center'}}>CONTACT</th>
                            <th style={{textAlign: 'center'}}>JOINED DATE</th>
                            <th style={{textAlign: 'center'}}>STATUS</th>
                            <th colSpan="3" style={{textAlign: 'center'}}>ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.props.merchants.users == undefined ? null :
                            this.props.merchants.users.length == 0 ?
                            <tr>
                                <td colSpan="7">
                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                </td>
                            </tr>
                            :
                            this.props.merchants.users.map((merchant, index) => {
                                    total = merchant.total;
                                    return (
                                        <tr key={index}>
                                            {this.state.activeIndex == 1 ?
                                                <td style={{textAlign: 'center'}}>{index+1}</td> :
                                                <td style={{textAlign: 'center'}}>{index+((this.state.activePage-1)*10)+1}</td>
                                            }
                                            {merchant.profileImage != undefined && merchant.profileImage != "" ?
                                                <td>
                                                    <Image src={'/images/profiles/' + merchant.profileImage} circle width="25" height="25"/>
                                                    &nbsp;{merchant.userName}
                                                </td>
                                                :
                                                <td>
                                                    <Image src="/profile/default-profile.png" circle width="25" height="25"/>
                                                    &nbsp; {merchant.userName}
                                                </td>
                                            }
                                            <td style={{textAlign: 'center'}}>{merchant.location}</td>
                                            {merchant.phone != '' ?
                                                <td style={{textAlign: 'center'}}>{merchant.phone}</td> :
                                                <td style={{textAlign: 'center'}}>{merchant.otherPhones[0]}</td>}
                                            <td style={{textAlign: 'center'}}>{MerchantList.dateFormat(merchant.dateJoin)}</td>
                                            <td style={{textAlign: 'center'}}>{MerchantList.changeStatus(merchant.status)}</td>
                                            <td style={{textAlign: 'center'}}>
                                                <Link to={"/admin/merchants/detail/"+merchant._id.$oid} style={{"color":"#03A9F4"}}>
                                                    <i className="fa fa-eye" aria-hidden="true">&nbsp;View</i>
                                                </Link>
                                            </td>
                                            { loadState().user.userType !== 'editor' ? 
                                            <td style={{textAlign: 'center'}}>
                                                {/* Block or Unblock Merchant */}
                                                {   merchant.status != -1 ?
                                                    <Link to="" onClick={() => this.openBlockMerchant(merchant._id.$oid)} style={{"color": "red"}}>
                                                        <i className="fa fa-ban" aria-hidden="true">&nbsp;Block</i>
                                                    </Link>
                                                    :
                                                    <Link to="" onClick={() => this.openUnblockMerchant(merchant._id.$oid)} style={{"color": "blue"}}>
                                                        <i className="fa fa-unlock-alt" aria-hidden="true">&nbsp;Unblock </i>
                                                    </Link>
                                                }
                                            </td>
                                            : null }
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
                            items={MerchantList.handleItem(total)}
                            maxButtons={5}
                            activePage={this.state.activePage}
                            onSelect={this.handleSelect}
                        />
                    }
                    {/* sweet alert to block merchant */}
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
                                                    window.location.assign('/admin/merchants/list');
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
                    {/* sweet alert to unblock merchant */}
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
                                                    window.location.assign('/admin/merchants/list');
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
            </div>
        );
    }
}


MerchantList = reduxForm({
    form: 'form_merchant_list',
    validate: function (values) {
        const errors = {};
        if (new Date(values.fromDate).getTime() > new Date(values.toDate).getTime()) {
            errors.toDate = 'It must greater or equal FROM DATE !!'
        }
        return errors
    }
})(MerchantList);

function mapStateToProps(state) {
    if(state.status.code != undefined){
        status = state.status;
    }
    return {
        merchants: state.members,
        merchantStatus: state.status
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMembersAction, updateMemberStatusAction }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MerchantList)
