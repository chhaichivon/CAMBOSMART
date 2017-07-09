import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Table,Image,Pagination, Row, Col, Button } from 'react-bootstrap';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import './../member.css';
import { actionListMemberRequestsExpired, actionDeleteMemberRequestsExpired } from './../../../../../actions/admin/member/member';

let expired = {
    page: 1,
    limit: 10
};
class ListMemberRequestsExpired extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activePage: 1,
            success : false,
            error : false
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        this.props.actionListMemberRequestsExpired(expired);
    }

    componentWillReceiveProps(data) {
        if(data.deleteMemberRequestsExpired.code == 200){
            this.setState({success:true});
        }
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        expired.page = eventKey;
        this.props.actionListMemberRequestsExpired(expired);
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

    static dateFormat(date) {
        let monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        let newDate = new Date(date);
        let day = newDate.getDate();
        let monthIndex = newDate.getMonth();
        let year = newDate.getFullYear();
        return day.toString().concat(" ", monthNames[monthIndex], " ", year.toString());
    }

    deleteMemberRequests(value){
        this.props.actionDeleteMemberRequestsExpired();
    }

    render(){
        let total = 0;
        return(
            <div>
                <br/><br/><br/><br/>
                <Row>
                    <Col xs={12} sm={12} md={11} lg={11}></Col>
                    <Col xs={12} sm={12} md={1} lg={1}>
                        <Button bsStyle="primary" onClick={this.deleteMemberRequests.bind(this)}>DELETE</Button>
                    </Col>
                </Row>
                <br/><br/>
                <div className="row">
                    <Table bordered hover responsive striped>
                        <thead className="member-style-head">
                        <tr className="lg">
                            <th style={{textAlign: 'center'}}>NO</th>
                            <th style={{textAlign: 'center'}}>NAME</th>
                            <th style={{textAlign: 'center'}}>LOCATION</th>
                            <th style={{textAlign: 'center'}}>CONTACT</th>
                            <th style={{textAlign: 'center'}}>PROMOTED TYPE</th>
                            <th style={{textAlign: 'center'}}>REQUESTED DATE</th>
                            <th style={{textAlign: 'center'}}>EXPIRED DATE</th>
                        </tr>
                        </thead>
                        <tbody className="table-hover">
                        { this.props.listMemberRequestsExpired.users == undefined  ?
                            <tr>
                                <td colSpan="7">
                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                </td>
                            </tr>
                            :
                            this.props.listMemberRequestsExpired.users.map((member, index) => {
                                total = member.total;
                                return (
                                    <tr key={index}>
                                        {
                                            this.state.activePage == 1 ?
                                                <td style={{textAlign: 'center'}}> { index + 1}</td>
                                                :
                                                <td style={{textAlign: 'center'}}> { index + ((this.state.activePage - 1) * 10) + 1 } </td>
                                        }

                                        {member.users[0].profileImage != undefined && member.users[0].profileImage != "" ?
                                            <td>
                                                <Image src={"data:image/png;base64," + member.users[0].profileImage} circle width="25" height="25"/>
                                                &nbsp;{member.users[0].userName}
                                            </td>
                                            :
                                            <td>
                                                <Image src="/profile/default-profile.png" circle width="25" height="25"/>
                                                &nbsp;{member.users[0].userName}
                                            </td>
                                        }

                                        <td> {member.users[0].city }</td>
                                        {member.users[0].phone != undefined && member.users[0].phone != '' ?
                                            <td> {member.users[0].phone.replace("+855", "0")} </td> :
                                            <td> {member.users[0].email} </td>
                                        }
                                        <td> {member.packages[0].duration+" months with $ "+member.packages[0].price}</td>
                                        <td> {ListMemberRequestsExpired.dateFormat(member.startDate) }</td>
                                        <td> {ListMemberRequestsExpired.dateFormat(member.endDate) }</td>
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
                                    items={ListMemberRequestsExpired.handleItem(total)}
                                    maxButtons={5}
                                    activePage={this.state.activePage}
                                    onSelect={this.handleSelect}
                        />
                    }
                    <SweetAlert
                        show={this.state.success}
                        type="success"
                        title="Successfully"
                        text="Successfully deleted member requests expired"
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href ="/admin/members/list-request-expired"; }}
                    />
                    <SweetAlert
                        show={this.state.error}
                        type="error"
                        title="Something went wrong"
                        text="Fail with delete member requests expired"
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href ="/admin/members/list-request-expired"; }}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return ({
        listMemberRequestsExpired: state.listMemberRequestsExpired,
        deleteMemberRequestsExpired: state.deleteMemberRequestsExpired
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ actionListMemberRequestsExpired, actionDeleteMemberRequestsExpired },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMemberRequestsExpired);