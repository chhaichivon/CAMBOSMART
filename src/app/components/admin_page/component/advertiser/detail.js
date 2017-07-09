import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Row, Col, Thumbnail, Table, Panel, Button} from 'react-bootstrap';
import ModalRenew from './modal_renew';
import { fetchAdvertiserAction } from './../../../../actions/admin/advertisement/advertiser';
import {loadState} from '../../../../localstorages/local_storage';
import {formatDate} from './../../../../utils/format_date';
import {scheduleAdvertisementAction} from './../../../../actions/admin/advertisement/advertisement';

let advertisements = [];

class AdvertiserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renew:{
                modalShow: false,
                id: '',
                page: '',
                location: '',
                price: 0
            }
        };
    }
    componentWillMount() {
        const param = this.props.location.query;
        this.props.fetchAdvertiserAction({
                token: loadState() != undefined ? loadState().token : '',
                advertiser: {
                    id: {$oid: param.id},
                    location: param.l,
                    startDate: Number(param.s),
                    expireDate: Number(param.e)
                }
            }
        )
    }

    componentWillReceiveProps(data){
        if(data.schedule.advertisements != undefined){
            advertisements = data.schedule.advertisements;
        }
    }

    openRenewAdvertiser(data){
        this.setState({
            renew: {
                modalShow: true,
                id: data.id,
                page: data.page,
                location: data.location,
                price: data.price
            }
        });
        this.props.scheduleAdvertisementAction({
            token: loadState() != undefined ? loadState().token : '',
            page: data.page,
            location: data.location,
            start: 1,
            limit: 10
        })
    }

    render() {
        const advertiser = this.props.advertiserFetch.advertiser;
        return (
            <div >
                <br />
                <Link to="/admin/advertisers/list">
                    <i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight: "bold"}}>&nbsp;Back</i>
                </Link>
                <br/><br/>
                {advertiser != undefined ?
                    <div style={{marginLeft: '-15px'}}>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <Panel className="advertisement" header={<strong>Advertiser Information</strong>} style={{textAlign: 'center'}}>
                                    <Table responsive>
                                        <tbody>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Company</strong></td>
                                            <td>{advertiser.company}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Description</strong></td>
                                            <td>{advertiser.description}</td>
                                        </tr>
                                        { advertiser.phones.length > 1 ?
                                            <tr>
                                                <td style={{textAlign: 'left'}}><strong>Phone</strong></td>
                                                <td>{advertiser.phones[0] + ' / ' + advertiser.phones[1]}</td>
                                            </tr>
                                            :
                                            <tr>
                                                <td style={{textAlign: 'left'}}><strong>Phone</strong></td>
                                                <td>{advertiser.phones}</td>
                                            </tr>
                                        }
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Email</strong></td>
                                            <td>{advertiser.email}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Website</strong></td>
                                            <td>{advertiser.url}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Location</strong></td>
                                            <td>{advertiser.city}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Address</strong></td>
                                            <td>{advertiser.address}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left', width: '105px'}}><strong>Created date</strong></td>
                                            <td>{formatDate(advertiser.createDate)}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Status</strong></td>
                                            <td>
                                                {advertiser.status == -1 ?
                                                    <span style={{color: 'red'}}>Block</span>
                                                    :
                                                    <span style={{color: 'green'}}>Active</span>
                                                }
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Panel>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <Panel className="advertisement" header={<strong>Advertisement Information</strong>} style={{textAlign: 'center'}}>
                                    <Table responsive>
                                        <tbody>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Page</strong></td>
                                            <td>{advertiser.page}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Location</strong></td>
                                            <td>{advertiser.location}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Price ($)</strong></td>
                                            <td>{advertiser.price}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Discount (%)</strong></td>
                                            <td>{advertiser.discount}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left', width: '140px'}}><strong>Duration (month)</strong></td>
                                            <td>{advertiser.duration}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Start date</strong></td>
                                            <td>{formatDate(advertiser.startDate)}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Expire date</strong></td>
                                            <td>{formatDate(advertiser.expireDate)}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Status</strong></td>
                                            <td>
                                                {advertiser.expireDate < new Date().getTime() ?
                                                    <span style={{color: 'red'}}>Expired</span>
                                                    :
                                                    <span style={{color: 'green'}}>Active</span>
                                                }
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <Row>
                                        <Col lg={4}>
                                            <Button onClick={() => this.openRenewAdvertiser({
                                                id: advertiser.id.$oid,
                                                page: advertiser.page,
                                                location: advertiser.location,
                                                price: advertiser.price
                                            })} style={{marginLeft: '-45px', background: '#ff6903', color: 'white', fontWeight: 'normal', height: '40px', width: '104px'}}>
                                                <i className="fa fa-plus">&nbsp;Add More</i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Panel>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Thumbnail href="#" alt="848x250" src={advertiser.image != "" ? `/images/advertisements/${advertiser.image}` : "/not_available.gif"} />
                        </Row>
                        <br />
                    </div>
                    :
                    <div style={{textAlign: 'center'}}><img src="/icon/spinner/default.gif" /></div>
                }
                <ModalRenew renew={this.state.renew} advertisements={advertisements} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return ({
        advertiserFetch: state.advertiserFetch,
        schedule: state.advertisementSchedule
    });
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAdvertiserAction, scheduleAdvertisementAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdvertiserDetail);