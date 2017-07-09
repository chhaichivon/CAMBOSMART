import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Row, Col, Image, Table, Panel} from 'react-bootstrap';
import {fetchAdvertisementAction} from './../../../../actions/admin/advertisement/advertisement';
import {loadState} from './../../../../localstorages/local_storage';

class AdvertisementDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchAdvertisementAction({
            token: loadState() != undefined ? loadState().token : '',
            id: this.props.params.id
        })
    }

    render() {
        return (
            <div >
                <br />
                <Link to="/admin/advertisements/list">
                    <i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight: "bold"}}>
                        &nbsp;Back
                    </i>
                </Link>
                <br/><br/>
                {this.props.ads.advertisement != undefined ?
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Panel className="advertisement-detail" header={<strong>Advertisement Information</strong>} style={{textAlign: 'center'}}>
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Page</strong></td>
                                            <td style={{textAlign: 'left'}}>{this.props.ads.advertisement.page}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Location</strong></td>
                                            <td style={{textAlign: 'left'}}>{this.props.ads.advertisement.location}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Price ($)</strong></td>
                                            <td style={{textAlign: 'left'}}>{this.props.ads.advertisement.price}</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}><strong>Description</strong></td>
                                            <td style={{textAlign: 'left'}}>{this.props.ads.advertisement.description}</td>
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
    console.log("ADS : " + JSON.stringify(state.advertisement));
    return ({
        ads: state.advertisement
    });
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAdvertisementAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementDetail);