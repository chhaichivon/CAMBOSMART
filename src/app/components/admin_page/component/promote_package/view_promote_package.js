import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Table, Panel   } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionAdminGetPromotedPackage } from './../../../../actions/admin/promoted_package/promote_product_package';

class ViewPromotePackage extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.actionAdminGetPromotedPackage(this.props.params.id)
    }

    render(){
        let packaged = this.props.getPromotedProductPackage.packages;
        return(
            <div >
                <br />
                <br/><br/>
                {
                    packaged == undefined ? null :
                        <Row>
                            <Col xs={12} sm={12} md={2} lg={2}>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={8}>
                                <Link to="/admin/package/list-package"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                                <br/>
                                <br/>
                                <Panel header="Promoted Product Package Information">
                                    <Table responsive>
                                        <tbody>
                                        <tr>
                                            <td><strong>Promoted Type</strong></td>
                                            <td>{packaged.typePromote}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Duration</strong></td>
                                            <td>{packaged.duration +" week"}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Price</strong></td>
                                            <td>{"$ "+ packaged.price }</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Description</strong></td>
                                            <td>{packaged.description }</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Panel>
                            </Col>
                            <Col xs={12} sm={12} md={2} lg={2}>
                            </Col>
                        </Row>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return ({
        getPromotedProductPackage: state.getPromotedProductPackage,
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionAdminGetPromotedPackage },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPromotePackage);