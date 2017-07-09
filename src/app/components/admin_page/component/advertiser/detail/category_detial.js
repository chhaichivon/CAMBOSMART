import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Row, Col, Thumbnail, Table, Panel} from 'react-bootstrap';
import {fetchCategoryAdvertiserAction} from './../../../../../actions/admin/advertisement/category_advertisement';
import {loadState} from '../../../../../localstorages/local_storage';
import {formatDate} from './../../../../../utils/format_date';

class CategoryAdvertiserDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchCategoryAdvertiserAction({
                token: loadState() != undefined ? loadState().token : '',
                id: this.props.location.query.id,
                startDate: Number(this.props.location.query.s),
                expireDate: Number(this.props.location.query.e)
            }
        )
    }

    render() {
        const advertiser = this.props.categoryAdvertiserDetail.advertiser;
        return (
            <div >
                <br />
                <Link to="/admin/advertisers/list/categories">
                    <i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight: "bold"}}>&nbsp;Back</i>
                </Link>
                <br/><br/>
                { advertiser != undefined ?
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
                                            <td style={{textAlign: 'left'}}><strong>Name</strong></td>
                                            <td>{advertiser.name}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Description</strong></td>
                                            <td>{advertiser.descriptionPackage}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Price ($)</strong></td>
                                            <td>{advertiser.oPrice}</td>
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
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        categoryAdvertiserDetail: state.categoryAdvertiserDetail
    });
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchCategoryAdvertiserAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdvertiserDetail);