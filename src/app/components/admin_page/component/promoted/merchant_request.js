import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Table, Image, Pagination } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormField from './../../../shared_component/redux_form_fields/form_field';
import LocationField from './components/location_filed';
import ProductTypeField from  './components/type_field';
import StatusField from './components/status_field';
import MinPriceFiled from './components/min_price_field';
import MaxPriceFiled from './components/max_price_field';
import NameField from './components/name_field';
import FormSubmit from './../../../shared_component/redux_form_fields/form_submit';
import FormDatePicker from './../../../shared_component/redux_form_fields/form_datepicker';
import './../../../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import { actionAdminListUsers, actionAdminApprovePromoteProduct, actionAdminDeleteUserRequest } from './../../../../actions/admin/product/product';
import { actionPostNotification } from '../../../../actions/notification/notification';
import { loadState  } from './../../../../localstorages/local_storage';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import moment from 'moment';

let users = {
    page: 1,
    limit: 10,
    user: {
        city:"",
        fromDate: "2017-1-1",
        toDate:"2017-12-31",
        name:""
    }
};

let id = '';
let ids = [];
let promoteType = "";
let userId = {};
let d_id = "";
let status = {};
let approve_status = {};
let promoteDescription = "";

class MerchantRequest extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            startDate: null,
            endDate: null,
            activePage: 1,
            approve:{
                show: false,
                hide: false
            },
            sweetPropsApprove: {
                type:"warning",
                title:"Approve Request?",
                text:"Are you sure want to approve this user request?",
                showCancelButton:true
            },
            deleted:{
                show: false,
                hide: false
            },
            sweetPropsDeleted: {
                type:"warning",
                title:"Delete Request?",
                text:"Are you sure want to delete this user request?",
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
        }
        this.handleFromDate = this.handleFromDate.bind(this);
        this.handleToDate = this.handleToDate.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    componentWillMount() {
        this.props.actionAdminListUsers(users);
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

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        users.page = eventKey;
        users.limit = 10;
        this.props.actionAdminListUsers(users);
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

    /* approve user request */
    openApproveUserRequest(_id, _ids, _promoteType, user){
        _ids.forEach((item, index, array) => {
            ids.push(Object.values(item)[0])
        });
        id = _id;
        promoteType = _promoteType;
        userId = user.userId
        promoteDescription = 'សួស្តី ' + user.lowName + ','
            + "\r\n" + 'រាល់ទំនិញដែលលោកអ្នកបានធ្វើការស្នើរសុំគឺត្រូវបានតំឡើងទៅជា "'+ _promoteType 
            + '" គឺមានចំនួន ' + user.total_products + ' និងមានរយៈពេល ' + user.duration + ' សប្តាហ៍ប៉ុណ្ណោះ គិតចាប់ពីថ្ងៃទី '
            + moment(user.startDate).format('DD-MM-YYYY') + ' រហូលដល់ ' + moment(user.endDate).format('DD-MM-YYYY') + ' ដែលមានតម្លៃសរុប ' 
            + (user.total_products * user.price) + '$ ។ '
            + "\r\n" + 'អរគុណសំរាប់ការប្រើប្រាស់នូវសេវាកម្ម Promote Product ៕'
            + "\r\n"
            + "\r\n"
            + "\r\n" + 'Hi ' + user.lowName + ','
            + "\r\n" + 'Products that you requested, it has been promoted to be "' + _promoteType 
            + '", total ' + user.total_products + ' items, duration only ' + user.duration
            + ' weeks, starting from ' + moment(user.startDate).format('DD-MM-YYYY') + ' until ' + moment(user.endDate).format('DD-MM-YYYY') 
            + ' and total price ' + (user.total_products * user.price) + '$.'
            + "\r\n" + 'Thanks for using services Promote product.'

        this.setState({
            approve: {
                show: true,
                hide: true
            }
        })
    }

    /* delete user request */
    openDeleteUserRequest(_id){
        d_id = _id;
        this.setState({
            deleted: {
                show: true,
                hide: true
            }
        })
    }

    formSubmit(value) {
        let userLocation = "";
        let userName = "";
        let startDate = "2017-1-1";
        let endDate = "2017-12-31";

        if (value.userName != undefined) {
            userName = value.userName;
        }
        if (value.userLocation != undefined) {
            userLocation = value.userLocation;
        }
        if (value.startDate != undefined && value.endDate != undefined) {
            startDate = value.startDate;
            endDate = value.endDate;
        }
        this.setState({
            activePage: 1
        });
        users.user = {
            city:userLocation,
            fromDate: startDate,
            toDate: endDate,
            name: userName
        };
        this.props.actionAdminListUsers(users);
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
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="userLocation" type="select" component={LocationField} placeholder="All Locations" values={this.state.provinces} icon="fa fa-map-marker"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="startDate" component={FormDatePicker} placeholder="From Date"
                                       defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="endDate" component={FormDatePicker} placeholder="To Date"
                                       defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-3">
                                <Field name="userName" type="text" component={NameField} label="Name" icon="fa fa-user"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-5">
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-5">
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
                            <th style={{textAlign: 'center'}}>NO</th>
                            <th style={{textAlign: 'center'}}>IMAGE</th>
                            <th style={{textAlign: 'center'}}>NAME</th>
                            <th style={{textAlign: 'center'}}>LOCATION</th>
                            <th style={{textAlign: 'center'}}>PROMOTED TYPE</th>
                            <th style={{textAlign: 'center'}}>TOTAL PRODUCTS</th>
                            <th style={{textAlign: 'center'}}>PRICE</th>
                            <th style={{textAlign: 'center'}}>START DATE</th>
                            <th style={{textAlign: 'center'}}>EXPIRED DATE</th>
                            <th style={{textAlign: 'center'}}>INCOME</th>
                            <th colSpan="3" style={{textAlign: 'center'}}>ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.adminListUsers.users == undefined ?
                            <tr>
                                <td colSpan="11">
                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                </td>
                            </tr>
                            :
                            this.props.adminListUsers.users.map((user, index) => {
                                total = user.total;
                                return (
                                    <tr key={index}>
                                        {this.state.activeIndex == 1 ?
                                            <td style={{textAlign: 'center'}}>{index+1}</td> :
                                            <td style={{textAlign: 'center'}}>{index+((this.state.activePage-1)*10)+1}</td>
                                        }
                                        {user.promote_users.profileImage != undefined && user.promote_users.profileImage != "" ?
                                            <td>
                                                <Image src={"/images/profiles/" + user.promote_users.profileImage} circle width="25" height="25"/>
                                            </td>
                                            :
                                            <td>
                                                <Image src="/profile/default-profile.png" circle width="25" height="25"/>
                                            </td>
                                        }
                                        <td>{user.promote_users.userName}</td>
                                        <td>{user.promote_users.city}</td>
                                        <td>{user.typePromote +" "+ user.duration + " weeks"}</td>
                                        <td style={{textAlign: 'center'}}>{user.total_products}</td>
                                        <td style={{textAlign: 'center'}}>$ {user.price}</td>
                                        <td>{MerchantRequest.dateFormat(user.startDate)}</td>
                                        <td>{MerchantRequest.dateFormat(user.endDate)}</td>
                                        <td>{"$ " + (user.total_products * user.price)}</td>
                                        <td style={{textAlign: 'center'}}>
                                            <Link to={"/admin/promote/list-promote-products/"+user._id.$oid+"/"+user.userId.$oid} style={{"color":"#03A9F4"}}>
                                                <i className="fa fa-eye" aria-hidden="true">&nbsp;View</i>
                                            </Link>
                                        </td>
                                        <td style={{textAlign: 'center'}}>
                                            <Link to="" onClick={() => this.openApproveUserRequest(user._id.$oid,user.productId,user.typePromote, user)} style={{"color":"green"}}>
                                                <i className="fa fa-check-square-o" aria-hidden="true">&nbsp;Approve</i>
                                            </Link>
                                        </td>
                                        <td style={{textAlign: 'center'}}>
                                            <Link to="" onClick={() => this.openDeleteUserRequest(user._id.$oid)} style={{"color":"red"}}>
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
                                    items={MerchantRequest.handleItem(total)}
                                    maxButtons={5}
                                    activePage={this.state.activePage}
                                    onSelect={this.handleSelect}
                        />
                    }
                </div>
                {/* sweet alert to approved product */}
                <SweetAlert
                    show={this.state.approve.show}
                    type={this.state.sweetPropsApprove.type}
                    title={this.state.sweetPropsApprove.title}
                    text={this.state.sweetPropsApprove.text}
                    showCancelButton={this.state.sweetPropsApprove.showCancelButton}
                    confirmButtonColor="#ff5a00"
                    onConfirm={
                            () => {
                                if(this.state.approve.show && this.state.approve.hide) {
                                    this.props.actionAdminApprovePromoteProduct(
                                        {
                                            id,
                                            ids,
                                            promoteType
                                        }
                                    );
                                    setTimeout(function() {
                                        if(approve_status != undefined){
                                            if(approve_status.code == 200){
                                                this.setState({
                                                    sweetPropsApprove: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"User request has been approve successfully",
                                                        showCancelButton:false
                                                    },
                                                    approve: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });

                                                this.props.actionPostNotification({
                                                    token: loadState().token,
                                                    notification: {
                                                        userId: userId,
                                                        notificationType: "Promote Product",
                                                        description: promoteDescription,
                                                        isView: false,
                                                        isDirty: false
                                                    }
                                                });

                                                setTimeout(function(){
                                                    window.location.assign('/admin/promote/list-boot-products');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsApprove: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot approve this user request",
                                                        showCancelButton:false
                                                    },
                                                    approve: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                })
                                            }
                                        }}.bind(this), 200);
                                }else {
                                    this.setState({
                                        sweetPropsApprove: {
                                            type:"warning",
                                            title:"Are you sure?",
                                            text:"You want to approve this user request?",
                                            showCancelButton:true
                                        },
                                        approve: {
                                            show: false,
                                            hide: false
                                        }
                                    })
                                }
                            }
                        }
                    onCancel={() => this.setState({approve: {show: false, hide: false}})}
                />
                {/* sweet alert to delete product */}
                <SweetAlert
                    show={this.state.deleted.show}
                    type={this.state.sweetPropsDeleted.type}
                    title={this.state.sweetPropsDeleted.title}
                    text={this.state.sweetPropsDeleted.text}
                    showCancelButton={this.state.sweetPropsDeleted.showCancelButton}
                    confirmButtonColor="#ff5a00"
                    onConfirm={
                            () => {
                                if(this.state.deleted.show && this.state.deleted.hide) {
                                    this.props.actionAdminDeleteUserRequest(d_id);
                                    setTimeout(function() {
                                        if(status != undefined){
                                            if(status.code == 200){
                                                this.setState({
                                                    sweetPropsDeleted: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"User request has been deleted successfully",
                                                        showCancelButton:false
                                                    },
                                                    deleted: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });
                                                setTimeout(function(){
                                                    window.location.assign('/admin/promote/list-boot-products');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsDeleted: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot deleted this user request",
                                                        showCancelButton:false
                                                    },
                                                    deleted: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                })
                                            }
                                        }}.bind(this), 200);
                                }else {
                                    this.setState({
                                        sweetPropsDeleted: {
                                            type:"warning",
                                            title:"Are you sure?",
                                            text:"You want to delete this user request?",
                                            showCancelButton:true
                                        },
                                        deleted: {
                                            show: false,
                                            hide: false
                                        }
                                    })
                                }
                            }
                        }
                    onCancel={() => this.setState({deleted: {show: false, hide: false}})}
                />
            </div>
        );
    }
}
MerchantRequest = reduxForm({
    form: 'form_admin_list_users',
    validate: function (values) {
        const errors = {};
        if (new Date(values.startDate).getTime() > new Date(values.endDate).getTime()) {
            errors.endDate = 'End Date must greater or equal Start Date !!'
        }
        return errors
    }
})(MerchantRequest);

function mapStateToProps(state) {
    if(state.adminDeleteUserRequest.code != undefined){
        status = state.adminDeleteUserRequest
    }
    if(state.adminApprovePromoteProduct.code != undefined){
        approve_status = state.adminApprovePromoteProduct
    }
    return {
        adminListUsers: state.adminListUsers,
        adminApprovePromoteProduct: state.adminApprovePromoteProduct,
        adminDeleteUserRequest: state.adminDeleteUserRequest,
        postNotification: state.postNotification
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionAdminListUsers, actionAdminApprovePromoteProduct, actionAdminDeleteUserRequest, actionPostNotification }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MerchantRequest)