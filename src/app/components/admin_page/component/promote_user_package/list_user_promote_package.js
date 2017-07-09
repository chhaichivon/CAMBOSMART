import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Row, Col, Form, Pagination, Table , FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionListPromoteUserPackage, actionDeletePromoteUserPackage } from './../../../../actions/admin/promote_user_package/promote_user_package';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { loadState } from './../../../../localstorages/local_storage';

let d_id = "";
let status = {};
let page = 1;
let limit = 10;

class ListUserPromotePackage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            activePage: 1,
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
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        let packaged ={
            page: page,
            limit: limit
        }
        this.props.actionListPromoteUserPackage(packaged);
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
        this.props.actionListPromoteUserPackage(packaged);
    }
    openDeletePromoted(_id){
        d_id = _id;
        this.setState({
            deleted: {
                show: true,
                hide: true
            }
        })
    }

    render(){
        let total = 0;
        return(
            <div>
                <br />
                <br />
                <br />
                <center><h3 style={{fontWeight:'bold',color:'green'}}><u>List Promoted User Packages</u></h3></center>
                <br/>
                <div className="row">
                    <Row>
                        <Col>
                            <div className="table-responsive wrap-member-table">
                                <Table bordered hover responsive striped>
                                    <thead className="member-style-head">
                                    <tr className="lg">
                                        <th style={{textAlign: 'center'}}>NO</th>
                                        <th style={{textAlign: 'center'}}>DURATION</th>
                                        <th style={{textAlign: 'center'}}>PRICE</th>
                                        <th style={{textAlign: 'center'}}>DESCRIPTION</th>
                                        <th style={{textAlign: 'center'}}>ACTIONS</th>
                                    </tr>
                                    </thead>
                                    <tbody className="table-hover">
                                    { this.props.listPromoteUserPackage.packages == undefined  ?
                                        <tr>
                                            <td colSpan="7">
                                                <center><h3>RESULT NOT FOUND!</h3></center>
                                            </td>
                                        </tr>
                                        :
                                        this.props.listPromoteUserPackage.packages.map((packaged, index) => {
                                            total = packaged.total;
                                            return (
                                                <tr key={index}>
                                                    {
                                                        this.state.activePage == 1 ?
                                                            <td style={{textAlign: 'center'}}> { index + 1}</td>
                                                            :
                                                            <td style={{textAlign: 'center'}}> { index + ((this.state.activePage - 1) * 10) + 1 } </td>
                                                    }
                                                    <td style={{textAlign: 'center'}}> {packaged.duration + " Months"}</td>
                                                    <td style={{textAlign: 'center'}}> {"$ "+packaged.price}</td>
                                                    <td>{packaged.description} </td>
                                                    <td style={{textAlign: 'center'}}>
                                                        <Link to={"/admin/user-package/detail-user-package/"+packaged._id.$oid} style={{"color": "green"}}>
                                                            <i className="fa fa-eye" aria-hidden="true">&nbsp;View</i>
                                                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <Link to={"/admin/user-package/edit-user-package/"+packaged._id.$oid} style={{"color": "orange"}}>
                                                            <i className="fa fa-pencil-square-o" aria-hidden="true">&nbsp;Edit</i>
                                                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                                        { loadState().user.userType !== 'editor' ?
                                                        <Link to="" onClick={() => this.openDeletePromoted(packaged._id.$oid)} style={{"color": "red"}}>
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
                                                items={ListUserPromotePackage.handleItem(total)}
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
                                    this.props.actionDeletePromoteUserPackage(d_id);
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
                                                    window.location.assign('/admin/user-package/list-user-package');
                                                },1000);
                                            }else {
                                                this.setState({
                                                        sweetPropsDeleted: {
                                                        type:"error",
                                                        title:"Something Wrong !",
                                                        text:"Cannot deleted this product.",
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
                                            text:"You want to delete this product?",
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

function mapStateToProps(state) {
    if(state.deletePromoteUserPackage.code != undefined ){
        status = state.deletePromoteUserPackage
    }
    return {
        listPromoteUserPackage: state.listPromoteUserPackage,
        deletePromoteUserPackage: state.deletePromoteUserPackage
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionListPromoteUserPackage, actionDeletePromoteUserPackage }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ListUserPromotePackage)