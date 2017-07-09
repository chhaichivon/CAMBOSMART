import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Image, Row, Col, Table,Panel } from 'react-bootstrap';
import './../member.css';
import { actionDetailMemberAction } from './../../../../../actions/admin/member/member';
import moment from 'moment';

class DetailMember extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.actionDetailMemberAction(this.props.params.memberId)
    }

    render(){
        return(
            <div >
                <br />
                <Link to="/admin/members/list-request"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                <br/><br/>
                {
                    this.props.detailMember.user == undefined ? null :
                        <Row>
                            <Col xs={12} sm={12} md={2} lg={2}>
                                {this.props.detailMember.user.profileImage != "" ?
                                    <center><Image src={"/images/profiles/" + this.props.detailMember.user.profileImage} thumbnail /></center>
                                    :
                                    <center> <Image src="/profile/default-profile.png" thumbnail /></center>
                                }
                            </Col>
                            <Col xs={12} sm={12} md={9} lg={9}>
                                <Panel header="Member Information">
                                    <Table responsive>
                                        <tbody>
                                        <tr>
                                            <td><strong>Username</strong></td>
                                            <td>{this.props.detailMember.user.userName}</td>
                                        </tr>
                                        {this.props.detailMember.user.phone != "" ?
                                            <tr>
                                                <td><strong>Phone</strong></td>
                                                <td>{this.props.detailMember.user.phone.replace("+855","0")}</td>
                                            </tr>
                                            :
                                            <tr>
                                                <td><strong>Phone</strong></td>
                                                <td>{ this.props.detailMember.user.phone }</td>
                                            </tr>
                                        }
                                        {this.props.detailMember.user.otherPhones.length > 0 && this.props.detailMember.user.otherPhones.length > 1 ?
                                            <tr>
                                                <td>Phone 2</td>
                                                <td>{this.props.detailMember.user.otherPhones[0] + ' / ' + this.props.detailMember.user.otherPhones[1]}</td>
                                            </tr>
                                            :
                                            <tr>
                                                <td>Phone 2</td>
                                                <td>{this.props.detailMember.user.otherPhones}</td>
                                            </tr>
                                        }
                                        <tr>
                                            <td><strong>Email</strong></td>
                                            <td>{this.props.detailMember.user.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Location</td>
                                            <td>{this.props.detailMember.user.location}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Address</strong></td>
                                            <td>{this.props.detailMember.user.address}</td>
                                        </tr>
                                        <tr>
                                            <td>Date Join</td>
                                            <td>{moment(this.props.detailMember.user.dateJoin).format("YYYY-MM_DD")}</td>
                                        </tr>
                                        {this.props.detailMember.user.dateBlock > 0 ?
                                            <tr>
                                                <td>Date Block</td>
                                                <td>{moment(this.props.detailMember.user.dateBlock).format("YYYY-MM-DD")}</td>
                                            </tr>
                                            :
                                            null
                                        }
                                        <tr>
                                            <td><strong>User Type</strong></td>
                                            <td>{this.props.detailMember.user.userType}</td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td>
                                                {this.props.detailMember.user.status == -1 ? "Block" : null }
                                                {this.props.detailMember.user.status == 0 ? "Inactive" : null }
                                                {this.props.detailMember.user.status == 1 ? "Active" : null }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Online</td>
                                            <td>
                                                {this.props.detailMember.user.online == 0 ? "False" : null }
                                                {this.props.detailMember.user.online == 1 ? "True" : null }
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Panel>
                            </Col>
                        </Row>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return ({
        detailMember: state.detailMember
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionDetailMemberAction },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMember);