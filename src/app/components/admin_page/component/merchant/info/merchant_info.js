import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Row, Col, Image, Table, Panel} from 'react-bootstrap';
import './../list/style.css';
import { fetchMemberDetailAction } from'./../../../../../actions/admin/common';
import {formatDate} from './../../../../../utils/format_date';

class MerchantDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchMemberDetailAction(this.props.params.merchantId)
    }

    render() {
        const merchant = this.props.merchantDetail.user;
        return (
            <div >
                <br />
                <Link to="/admin/merchants/list"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                <br/><br/>
                {merchant != undefined ?
                    <Row>
                        <Col xs={12} sm={12} md={2} lg={2}>
                            {merchant.profileImage != "" ?
                                <center><Image src={'/images/profiles/' + merchant.profileImage} thumbnail /></center>
                                :
                                <center><Image src="/profile/default-profile.png" thumbnail /></center>
                            }
                        </Col>
                        <Col xs={12} sm={12} md={9} lg={9}>
                            <Panel header="Merchant Information">
                                <Table responsive>
                                    <tbody>
                                    <tr>
                                        <td><strong>Username</strong></td>
                                        <td>{merchant.userName}</td>
                                    </tr>
                                    {merchant.phone != "" ?
                                        <tr>
                                            <td><strong>Phone 1</strong></td>
                                            <td>{merchant.phone.replace("+855","0")}</td>
                                        </tr>
                                        :
                                        <tr>
                                            <td><strong>Phone 1</strong></td>
                                            <td>{merchant.phone}</td>
                                        </tr>
                                    }
                                    {merchant.otherPhones.length > 0 && merchant.otherPhones.length > 1 ?
                                        <tr>
                                            <td>Phone 2</td>
                                            <td>{merchant.otherPhones[0] + ' / ' + merchant.otherPhones[1]}</td>
                                        </tr>
                                        :
                                        <tr>
                                            <td>Phone 2</td>
                                            <td>{merchant.otherPhones}</td>
                                        </tr>
                                    }
                                    <tr>
                                        <td><strong>Email</strong></td>
                                        <td>{merchant.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <td>{merchant.city}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Address</strong></td>
                                        <td>{merchant.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Date Join</td>
                                        <td>{formatDate(merchant.dateJoin)}</td>
                                    </tr>
                                    {merchant.dateBlock > 0 ?
                                        <tr>
                                            <td>Date Block</td>
                                            <td>{formatDate(merchant.dateBlock)}</td>
                                        </tr>
                                        :
                                        null
                                    }
                                    <tr>
                                        <td><strong>User Type</strong></td>
                                        <td>{merchant.userType}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>
                                            {merchant.status == -1 ? "Block" : null }
                                            {merchant.status == 0 ? "Inactive" : null }
                                            {merchant.status == 1 ? "Active" : null }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Online</td>
                                        <td>
                                            {merchant.online == 0 ? "False" : null }
                                            {merchant.online == 1 ? "True" : null }
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Panel>
                        </Col>
                    </Row>
                    :
                    null
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return ({
        merchantDetail: state.member
    });
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMemberDetailAction }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MerchantDetail);