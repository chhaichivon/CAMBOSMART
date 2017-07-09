
import React from 'react';
import { Link } from 'react-router';
import {Row, Col, Form, FormGroup, Button, ControlLabel, FormControl, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadLanguage } from './../../../../localstorages/local_storage';
import { actionListAllPromoteUserPackage } from './../../../../actions/admin/promote_user_package/promote_user_package';
import { loadState } from './../../../../localstorages/local_storage';

class FormPromoteTobeMerchant extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            packId : ''
        }
    }

    componentWillMount() {
        this.props.actionListAllPromoteUserPackage();
    }

    getType(event){
        this.setState({packId : event.target.value});
    }

    render(){
        return(
            <div className="container">
                {
                    loadLanguage()=="en" || loadLanguage == undefined ?
                        <div>
                            <br/><br/>
                            <Row>
                                <Col xs={11} sm={11} md={11} lg={11}></Col>
                                <Col xs={1} sm={1} md={1} lg={1}>
                                    {
                                        loadState().user.userType == 'normal'?
                                            <Link to="/normal/promote-desc"><Button bsStyle="info">Back</Button></Link>
                                            :
                                            <Link to="/merchant/promote-desc"><Button bsStyle="info">Back</Button></Link>
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <div style={{border:'groove', padding:'40px'}}>
                                        <Form horizontal>
                                            <FormGroup controlId="types">
                                                <ControlLabel>Promoted Package</ControlLabel>
                                                <FormControl componentClass="select"
                                                             placeholder="types"
                                                             onChange={this.getType.bind(this)}
                                                >
                                                    <option value="">All Types</option>
                                                    {
                                                        this.props.listAllPromotedUserPackage.packages == undefined ? null :
                                                            this.props.listAllPromotedUserPackage.packages.map((pack,index) => {
                                                                return (
                                                                    <option key={index} value={pack._id.$oid}>{pack.duration + " months $ "+pack.price}</option>
                                                                )
                                                            })
                                                    }
                                                </FormControl>
                                            </FormGroup>
                                            <FormGroup>
                                                <Col xsOffset={2} xs={10} className="payment">
                                                    {
                                                        loadState().user.userType == "normal" ?
                                                            <div>
                                                                {this.state.packId == "" ?
                                                                    <Link to={"/normal/promote-merchant-payment/" + this.state.packId }><Button bsStyle="warning promote-package" disabled>Request</Button></Link>
                                                                    :
                                                                    <Link to={"/normal/promote-merchant-payment/" + this.state.packId }><Button bsStyle="warning promote-package">Request</Button></Link>
                                                                }
                                                            </div>
                                                            :
                                                            <div>
                                                                {this.state.packId == "" ?
                                                                    <Link to={"/merchant/promote-merchant-payment/" + this.state.packId }><Button bsStyle="warning promote-package" disabled>Request</Button></Link>
                                                                    :
                                                                    <Link to={"/merchant/promote-merchant-payment/" + this.state.packId }><Button bsStyle="warning promote-package">Request</Button></Link>
                                                                }
                                                            </div>
                                                    }

                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                    <h4 style={{fontWeight:'bold', color:'green', textAlign:'center'}}><u>PROMOTED PACKAGE PRICE</u></h4>
                                    <div className="table-responsive wrap-member-table">
                                        <Table bordered hover responsive striped>
                                            <thead className="member-style-head">
                                            <tr className="lg">
                                                <th style={{textAlign: 'center'}}>NO</th>
                                                <th style={{textAlign: 'center'}}>DURATION</th>
                                                <th style={{textAlign: 'center'}}>PRICE</th>
                                                <th style={{textAlign: 'center'}}>DESCRIPTION</th>
                                            </tr>
                                            </thead>
                                            <tbody className="table-hover">
                                            { this.props.listAllPromotedUserPackage.packages == undefined  ?
                                                <tr>
                                                    <td colSpan="6">
                                                        <center><h2>RESULT NOT FOUND!</h2></center>
                                                    </td>
                                                </tr>
                                                :
                                                this.props.listAllPromotedUserPackage.packages.map((packaged, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td style={{textAlign: 'center'}}> { index + 1}</td>
                                                            <td style={{textAlign: 'center'}}> {packaged.duration + " Months"}</td>
                                                            <td style={{textAlign: 'center'}}> {"$ "+packaged.price}</td>
                                                            <td>{packaged.description} </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        :
                        <div>
                            <br/><br/>
                            <Row>
                                <Col xs={11} sm={11} md={11} lg={11}></Col>
                                <Col xs={1} sm={1} md={1} lg={1}>
                                    {
                                        loadState().user.userType == "normal" ?
                                            <Link to="/normal/promote-desc"><Button bsStyle="info">ថយក្រោយ</Button></Link>
                                            :
                                            <Link to="/merchant/promote-desc"><Button bsStyle="info">ថយក្រោយ</Button></Link>
                                    }

                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <div style={{border:'groove', padding:'40px'}}>
                                        <Form horizontal>
                                            <FormGroup controlId="types">
                                                <ControlLabel>កញ្ជប់សេវាកម្ម</ControlLabel>
                                                <FormControl componentClass="select"
                                                             placeholder="types"
                                                             onChange={this.getType.bind(this)}
                                                >
                                                    <option value="">គ្រប់ប្រភេទ</option>
                                                    {
                                                        this.props.listAllPromotedUserPackage.packages == undefined ? null :
                                                            this.props.listAllPromotedUserPackage.packages.map((pack,index) => {
                                                                return (
                                                                    <option key={index} value={pack._id.$oid}>{pack.duration + " ខែ $ "+pack.price}</option>
                                                                )
                                                            })
                                                    }
                                                </FormControl>
                                            </FormGroup>
                                            <FormGroup>
                                                <Col xsOffset={2} xs={10} className="payment">
                                                    {
                                                        loadState().user.userType == "normal" ?
                                                            <div>
                                                                {this.state.packId == "" ?
                                                                    <Link to={"/normal/promote-merchant-payment/" + this.state.packId }><Button bsStyle="warning promote-package" disabled>ធ្វើការស្នើរសំ</Button></Link>
                                                                    :
                                                                    <Link to={"/normal/promote-merchant-payment/" + this.state.packId }><Button bsStyle="warning promote-package" >ធ្វើការស្នើ</Button></Link>
                                                                }
                                                            </div>
                                                            :
                                                            <div>
                                                                {this.state.packId == "" ?
                                                                    <Link to={"/merchant/promote-merchant-payment/" + this.state.packId }><Button bsStyle="warning promote-package" disabled>ធ្វើការស្នើរសំ</Button></Link>
                                                                    :
                                                                    <Link to={"/merchant/promote-merchant-payment/" + this.state.packId }><Button bsStyle="warning promote-package">ធ្វើការស្នើ</Button></Link>
                                                                }
                                                            </div>

                                                    }
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <h4 style={{fontWeight:'bold', color:'green', textAlign:'center'}}><u>តម្លៃ​កញ្ជប់សេវាកម្ម</u></h4>
                                    <div className="table-responsive wrap-member-table">
                                        <Table bordered hover responsive striped>
                                            <thead className="member-style-head">
                                            <tr className="lg">
                                                <th style={{textAlign: 'center'}}>ល.រ</th>
                                                <th style={{textAlign: 'center'}}>អម្លង់ពេល</th>
                                                <th style={{textAlign: 'center'}}>តម្លៃ</th>
                                                <th style={{textAlign: 'center'}}>ពីពណ៏នា</th>
                                            </tr>
                                            </thead>
                                            <tbody className="table-hover">
                                            { this.props.listAllPromotedUserPackage.packages == undefined  ?
                                                <tr>
                                                    <td colSpan="6">
                                                        <center><h2>មិនមាន ការស្នើរសំ របស់លោកអ្នកឡើយ!</h2></center>
                                                    </td>
                                                </tr>
                                                :
                                                this.props.listAllPromotedUserPackage.packages.map((packaged, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td style={{textAlign: 'center'}}> { index + 1}</td>
                                                            <td style={{textAlign: 'center'}}> {packaged.duration + " ខែ"}</td>
                                                            <td style={{textAlign: 'center'}}> {"$ "+packaged.price}</td>
                                                            <td>{packaged.description} </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listAllPromotedUserPackage: state.listAllPromotedUserPackage
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionListAllPromoteUserPackage }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(FormPromoteTobeMerchant)