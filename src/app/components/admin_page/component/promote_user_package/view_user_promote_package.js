import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Table, Panel   } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionGetPromoteUserPackage } from './../../../../actions/admin/promote_user_package/promote_user_package';

class DetailUserPromotePackage extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.actionGetPromoteUserPackage(this.props.params.id)
    }

    render(){
        let packaged = this.props.getPromoteUserPackage.packages;
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
                                <Link to="/admin/user-package/list-user-package"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                                <br/>
                                <br/>
                                <Panel header="Promoted User Package Information">
                                    <Table responsive>
                                        <tbody>
                                        <tr>
                                            <td><strong>Duration</strong></td>
                                            <td>{packaged.duration +" months"}</td>
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
        getPromoteUserPackage: state.getPromoteUserPackage
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionGetPromoteUserPackage },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailUserPromotePackage);