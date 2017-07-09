import React from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Image, Row, Col, Panel, Form, FormGroup, Button, FormControl } from 'react-bootstrap';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import './member.css';
import { actionChangeMemberStatus } from './../../../../actions/member';

let new_status = 1;
class EditMember extends React.Component {

    constructor(props){
        super(props);
        this.state={
            update_status: {
                show: false,
                hide: false
            },
            sweetProps: {
                type:"success",
                title:"Success",
                text:"Successfully update member's status",
            }
        };
        new_status = 1;
        this.updateStatus = this.updateStatus.bind(this);
        this.waiting = this.waiting.bind(this);
        this.openResultUpdateStatus = this.openResultUpdateStatus.bind(this);
    }

    /* result message after update status member */
    openResultUpdateStatus(){
        this.setState({
            update_status: {
                show: true,
                hide: true
            }
        })
    }

    waiting(){
        if(this.props.changedMemberStatus.code == 200) this.openResultUpdateStatus();
    }

    updateStatus(){
        let status={
            _id: this.props.params.memberId,
            status: new_status
        };
        this.props.actionChangeMemberStatus(status);
        setTimeout(this.waiting, 1000);
    }

    handleStatusChange(e){
        if(e.target.value == '-1') new_status = -1;
        else if(e.target.value == '0') new_status = 0;
        else new_status = 1;
    }

    render(){
        return(
            <div >
                <br/><br/>
                <Link to="/admin/members/list"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                <br/><br/>
                <Row>
                    <Col xs={12} sm={12} md={3} lg={3}>
                        <Image src="/icon/kid.jpg" thumbnail />
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <Panel header="Change Member Status" bsStyle="primary">
                            <p>&nbsp;&nbsp;&nbsp;This process may take 5 second to finish.</p>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col sm={1}></Col>
                                    <Col sm={10}>
                                        <FormGroup controlId="memberStatus">
                                            <FormControl
                                                componentClass="select"
                                                placeholder="status"
                                                onChange={this.handleStatusChange.bind(this)}
                                            >
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                                <option value="-1">Block</option>
                                            </FormControl>
                                        </FormGroup>
                                        <FormGroup>
                                            <Button bsStyle="success" onClick={this.updateStatus}>Save</Button>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={1}></Col>
                                </FormGroup>
                            </Form>
                        </Panel>
                    </Col>
                    <Col xs={6} sm={6} md={5} lg={5}></Col>
                </Row>
                {/*sweet alert to show result after update status member */}
                <SweetAlert
                    show={this.state.update_status.show}
                    type={this.state.sweetProps.type}
                    title={this.state.sweetProps.title}
                    text={this.state.sweetProps.text}
                    confirmButtonColor="#53a318"
                    onConfirm={
                        () => { this.setState({update_status: false}) }
                    }
                />

            </div>
        )
    }
}

function mapStateToProps(state){
    return ({
        changedMemberStatus: state.changedMemberStatus
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({actionChangeMemberStatus},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMember);