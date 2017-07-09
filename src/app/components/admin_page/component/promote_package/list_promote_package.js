import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Row, Col, Form, Pagination, Table , FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import TypeField from './component/promote_type_field';
import FormSubmit from './../../../shared_component/redux_form_fields/form_submit';
import { actionAdminListPromotedPackage, actionAdminDeletePromotedPackage } from './../../../../actions/admin/promoted_package/promote_product_package';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { loadState } from './../../../../localstorages/local_storage';

let d_id = "";
let status = {};
let page = 1;
let limit = 10;
let typePromote = "";

class ListPromotePackage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            activePage: 1,
            types: ['hot', 'gold'],
            deleted:{
                show: false,
                hide: false
            },
            sweetPropsDeleted: {
                type:"warning",
                title:"Delete Package?",
                text:"Are you sure want to delete this package?",
                showCancelButton:true
            }
        }
        this.formSubmit = this.formSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        let packaged ={
            typePromote: typePromote,
            page: page,
            limit: limit
        }
        this.props.actionAdminListPromotedPackage(packaged);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        page = eventKey;
        let packaged ={
            page: page,
            limit: limit
        }
        this.props.actionAdminListPromotedPackage(packaged);
    }
    static changeStatus(status) {
        if (status > 0) {
            return 'Active';
        }else {
            return 'Delete';
        }
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
    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        page = eventKey;
        let packaged = {
            page: page,
            limit: limit
        }
        this.props.actionAdminListPromotedPackage(packaged);
    }
    openDeletePromoted(_id){
        d_id = Object.values(_id)[0];
        console.log("ID",d_id)
        this.setState({
            deleted: {
                show: true,
                hide: true
            }
        })
    }
    formSubmit(value) {
        console.log("type promoted",value.status);
        typePromote = "";
        if (value.status != undefined) {
            typePromote = value.status;
        }
        this.setState({
            activePage: 1
        });
        let packaged ={
            typePromote: typePromote,
            page: page,
            limit: limit
        }
        this.props.actionAdminListPromotedPackage(packaged);
    }

    render(){
        let total = 0;
        const {handleSubmit, submitting} = this.props;
        return(
                <div>
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <form onSubmit={handleSubmit(this.formSubmit)}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-7"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-3">
                                    <Field name="status" type="select" component={TypeField} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-2">
                                    <FormSubmit submitting={submitting}  label="SEARCH" icon="fa fa-search"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <center><h3 style={{fontWeight:'bold',color:'green'}}><u>List Promoted Product Packages</u></h3></center>
                    <br/>
                    <div className="row">
                        <Row>
                            <Col>
                                <div className="table-responsive wrap-member-table">
                                    <Table bordered hover responsive striped>
                                        <thead className="member-style-head">
                                        <tr className="lg">
                                            <th style={{textAlign: 'center'}}>NO</th>
                                            <th style={{textAlign: 'center'}}>PROMOTED TYPE</th>
                                            <th style={{textAlign: 'center'}}>DURATION</th>
                                            <th style={{textAlign: 'center'}}>PRICE</th>
                                            <th style={{textAlign: 'center'}}>DESCRIPTION</th>
                                            <th style={{textAlign: 'center'}}>ACTIONS</th>
                                        </tr>
                                        </thead>
                                        <tbody className="table-hover">
                                        { this.props.listPromotedProductPackage.packages == undefined  ?
                                            <tr>
                                                <td colSpan="7">
                                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                                </td>
                                            </tr>
                                            :
                                            this.props.listPromotedProductPackage.packages.map((packaged, index) => {
                                                total = packaged.total;
                                                return (
                                                    <tr key={index}>
                                                        {
                                                            this.state.activePage == 1 ?
                                                                <td style={{textAlign: 'center'}}> { index + 1}</td>
                                                                :
                                                                <td style={{textAlign: 'center'}}> { index + ((this.state.activePage - 1) * 10) + 1 } </td>
                                                        }
                                                        <td style={{textAlign: 'center'}}> {packaged.typePromote }</td>
                                                        <td style={{textAlign: 'center'}}> {packaged.duration + " Week"}</td>
                                                        <td style={{textAlign: 'center'}}> {"$ "+packaged.price}</td>
                                                        <td>{packaged.description} </td>
                                                        <td style={{textAlign: 'center'}}>
                                                            <Link to={"/admin/package/detail-package/"+Object.values(packaged._id)[0]} style={{"color": "green"}}>
                                                                <i className="fa fa-eye" aria-hidden="true">&nbsp;View</i>
                                                            </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <Link to={"/admin/package/edit-package/"+Object.values(packaged._id)[0]} style={{"color": "orange"}}>
                                                                <i className="fa fa-pencil-square-o" aria-hidden="true">&nbsp;Edit</i>
                                                            </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                                            { loadState().user.userType !== 'editor' ? 
                                                            <Link to="" onClick={() => this.openDeletePromoted(packaged._id)} style={{"color": "red"}}>
                                                                <i className="fa fa-trash-o" aria-hidden="true">&nbsp;Delete</i>
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
                                                    items={ListPromotePackage.handleItem(total)}
                                                    maxButtons={5}
                                                    activePage={this.state.activePage}
                                                    onSelect={this.handleSelect}
                                        />
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>
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
                                    this.props.actionAdminDeletePromotedPackage(d_id);
                                    setTimeout(function() {
                                        if(status != undefined){
                                            if(status.code == 200){
                                                this.setState({
                                                    sweetPropsDeleted: {
                                                        type:"success",
                                                        title:"Successful",
                                                        text:"Package have been deleted successfully.",
                                                        showCancelButton:false
                                                    },
                                                    deleted: {
                                                        show: true,
                                                        hide: false
                                                    }
                                                });
                                                setTimeout(function(){
                                                    window.location.assign('/admin/package/list-package');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsDeleted: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot deleted this package.",
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
                                            text:"You want to delete this package?",
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
        )
    }
}

ListPromotePackage = reduxForm({
    form: 'form-promote-products-list',
    validate: function (values) {
        const errors = {};
        if (new Date(values.fromDate).getTime() > new Date(values.toDate).getTime()) {
            errors.toDate = 'It must greater or equal FROM DATE !!'
        }
        return errors
    }
})(ListPromotePackage);

function mapStateToProps(state) {
    if(state.deletePromotedProductPackage.code != undefined ){
        status = state.deletePromotedProductPackage
    }
    return {
        listPromotedProductPackage: state.listPromotedProductPackage,
        deletePromotedProductPackage: state.deletePromotedProductPackage
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionAdminListPromotedPackage, actionAdminDeletePromotedPackage }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ListPromotePackage)