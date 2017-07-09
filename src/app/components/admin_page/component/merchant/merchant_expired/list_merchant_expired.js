import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Table, Image, Pagination, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionListExpiredMerchant, actionUpdateExpiredMerchant } from './../../../../../actions/admin/merchant/merchant';
import SweetAlert from 'sweetalert-react';
import './../../../../../../../node_modules/sweetalert/dist/sweetalert.css';

let expired = {
    page: 1,
    limit: 10
}
class ListMerchantExpired extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activePage: 1,
            success : false,
            error : false
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        this.props.actionListExpiredMerchant(expired);
    }

    componentWillReceiveProps(data) {
        if(data.updateExpiredMerchants.code == 200){
            this.setState({success:true});
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

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        expired.page = eventKey;
        this.props.actionListExpiredMerchant(expired);
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

    updateMerchantType(value){
        this.props.actionUpdateExpiredMerchant();
    }

    render(){
        let total = 0;
        return(
            <div>
                <br/><br/><br/><br/>
                <h1 style={{textAlign:'center', color: 'green', textDecoration:'underline'}}>List Merchants Expired</h1>
                <br/>
                <Row>
                    <Col xs={12} sm={12} md={11} lg={11}></Col>
                    <Col xs={12} sm={12} md={1} lg={1}>
                        <Button bsStyle="primary" onClick={this.updateMerchantType.bind(this)}>UPDATE</Button>
                    </Col>
                </Row>
                <br/>
                <div className="row">
                    <Table responsive bordered hover>
                        <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                        <tr>
                            <th style={{textAlign: 'center'}}>No</th>
                            <th style={{textAlign: 'center'}}>NAME</th>
                            <th style={{textAlign: 'center'}}>LOCATION</th>
                            <th style={{textAlign: 'center'}}>CONTACT</th>
                            <th style={{textAlign: 'center'}}>JOINED DATE</th>
                            <th style={{textAlign: 'center'}}>EXPIRED DATE</th>
                            <th style={{textAlign: 'center'}}>PROMOTE TYPES</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.listExpiredMerchants.users == undefined ?
                            <tr>
                                <td colSpan="7">
                                    <center><h3>RESULT NOT FOUND!</h3></center>
                                </td>
                            </tr>
                            :
                            this.props.listExpiredMerchants.users.map((merchant, index) => {
                                total = merchant.total;
                                return (
                                    <tr key={index}>
                                        {this.state.activeIndex == 1 ?
                                            <td style={{textAlign: 'center'}}>{index+1}</td> :
                                            <td style={{textAlign: 'center'}}>{index+((this.state.activePage-1)*10)+1}</td>
                                        }
                                        {merchant.users[0].profileImage != undefined && merchant.users[0].profileImage != "" ?
                                            <td>
                                                <Image src={"data:image/png;base64," + merchant.users[0].profileImage} circle width="25" height="25"/>
                                                &nbsp;{merchant.users[0].userName}
                                            </td>
                                            :
                                            <td>
                                                <Image src="/profile/default-profile.png" circle width="25" height="25"/>
                                                &nbsp; {merchant.users[0].userName}
                                            </td>
                                        }
                                        <td>{merchant.users[0].city}</td>
                                        {merchant.users[0].otherPhones != '' ?
                                            <td style={{textAlign: 'center'}}>{merchant.users[0].otherPhones[0]}</td> :
                                            <td style={{textAlign: 'center'}}>{merchant.users[0].phone}</td>
                                        }
                                        <td>{ListMerchantExpired.dateFormat(merchant.startDate)}</td>
                                        <td>{ListMerchantExpired.dateFormat(merchant.endDate)}</td>
                                        <td>{merchant.packages[0].duration+ " months $ "+merchant.packages[0].price}</td>
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
                                    items={ListMerchantExpired.handleItem(total)}
                                    maxButtons={5}
                                    activePage={this.state.activePage}
                                    onSelect={this.handleSelect}
                        />
                    }
                    <SweetAlert
                        show={this.state.success}
                        type="success"
                        title="Successfully"
                        text="Successfully updated expired merchants."
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href ="/admin/merchants/list-merchants-expired"; }}
                    />
                    <SweetAlert
                        show={this.state.error}
                        type="error"
                        title="Something went wrong"
                        text="Fail with update expired merchants to be normal members."
                        confirmButtonColor="#ff5a00"
                        onConfirm={() => { location.href ="/admin/merchants/list-merchants-expired"; }}
                    />
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        listExpiredMerchants: state.listExpiredMerchants,
        updateExpiredMerchants : state.updateExpiredMerchants
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionListExpiredMerchant, actionUpdateExpiredMerchant }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ListMerchantExpired)
