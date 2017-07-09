import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs ,Tab , Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Radio } from 'react-bootstrap';
import { actionGetPromoteUserPackage } from './../../../../actions/admin/promote_user_package/promote_user_package';
import { actionMemberRequestPromote } from './../../../../actions/member/common';
import { loadState,loadLanguage, saveProduct } from './../../../../localstorages/local_storage';


let price = 0;
let duration = 0;
let startDate = '';
let endDate = '';
let packageId = null;
let token = loadState() != undefined ? loadState().token : '';
let userId = {"$oid": loadState() != undefined ? loadState().user.userId : ''};

class PromoteMerchantPayment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            online : false,
            cash : false
        }
    }

    componentWillMount(){
        this.props.actionGetPromoteUserPackage(this.props.params.id);
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

    getTypePayment(event){
        packageId = {$oid: this.props.params.id};
        if(event.target.value == "cash"){
            this.setState({cash : true});
            this.setState({online : false});
            // save data into database
            let requested = {
                token : token,
                promoted: {
                    userId: userId,
                    packageId: packageId,
                    duration : duration,
                    price: price,
                    startDate: startDate,
                    endDate: endDate,
                    status: 0
                }
            }
            this.props.actionMemberRequestPromote(requested);
        }else{
            this.setState({online: true});
            this.setState({cash : false});
        }
    }

    render(){
        let edd = '';
        let emm = '';
        let eyyyy = '';
        //calculate date
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();
        startDate =  yyyy+"-"+mm+"-"+dd;
        let totalmonth = mm + duration;
        if(totalmonth > 12){
            edd = dd;
            emm = totalmonth - 12;
            eyyyy = yyyy + 1;
            endDate =  eyyyy+"-"+emm+"-"+edd;
        }else{
            edd = dd;
            emm = totalmonth;
            eyyyy = yyyy;
            endDate = eyyyy+"-"+emm+"-"+edd;
        }

        return(
            <div className="container">
                {
                    loadLanguage()=="en" || loadLanguage == undefined ?
                        <div>
                            <br/><br/><br/>
                            <Row>
                                <Col xs={12} sm={12} md={2} lg={2}></Col>
                                <Col xs={12} sm={12} md={8} lg={8}>
                                    <center>
                                        <h3><b style={{color:'blue'}}>Pay By: </b></h3>
                                        <FormGroup onChange={this.getTypePayment.bind(this)}>
                                            <Radio name="paid" value="cash" inline style={{fontSize:'14pt'}}>Cash</Radio>{' '}
                                            <Radio name="paid" value="online" inline style={{fontSize:'14pt'}}>Online</Radio>
                                        </FormGroup>
                                        <div style={{border:'groove', width:'50%'}}>
                                            <h4>Package Type: <b style={{color:'#E91E63'}}>{ duration + " Months with $ "+price}</b></h4>
                                            <h4>Start Date: <b style={{color:'green'}}>{PromoteMerchantPayment.dateFormat(startDate)}</b></h4>
                                            <h4>Expired Date: <b style={{color:'green'}}>{PromoteMerchantPayment.dateFormat(endDate)}</b></h4>
                                            <h4>Price: <b style={{color:'#E91E63'}}>{"$ " +price}</b></h4>
                                        </div>
                                    </center>
                                </Col>
                                <Col xs={12} sm={12} md={2} lg={2}>
                                    {
                                        loadState().user.userType == "normal" ?
                                            <Link to="/normal/form-promote-tobe-merchant"><Button bsStyle="info">Back</Button></Link>
                                            :
                                            <Link to="/merchant/form-promote-tobe-merchant"><Button bsStyle="info">Back</Button></Link>
                                    }
                                </Col>
                            </Row>
                            {/* calculation */}
                            { this.state.cash ?
                                <div>
                                    <br/><br/>
                                    <Row>
                                        <Col xs={12} sm={12} md={3} lg={3}></Col>
                                        <Col xs={12} sm={12} md={6} lg={6}>
                                            <div style={{border:"groove red", backgroundColor: '#FCE4EC'}}>
                                                <h4 style={{marginLeft: '10px', fontWeight: 'bold'}}>Please contact to Admin to approve your request.</h4>
                                                <h4 style={{marginLeft: '10px'}}>Tell: 097 93 93 007</h4>
                                                <h4 style={{marginLeft: '10px'}}>Email: admin@gmail.com</h4>
                                                <h4 style={{marginLeft: '10px', fontWeight: 'bold', color: 'red'}}>Note:</h4>
                                                <h4 style={{marginLeft: '10px'}}>You must contact to Admin before one week after you requested.
                                                    If you do not contact to Admin, your request will be expired.
                                                </h4>
                                                <h4 style={{marginLeft: '10px'}}>Thanks</h4>
                                            </div>
                                            <br/>
                                            {
                                                loadState().user.userType == "normal" ?
                                                    <Button bsStyle="success" onClick={ () => {location.href="/normal"}}>
                                                        Finish
                                                    </Button>
                                                    :
                                                    <Button bsStyle="success" onClick={ () => {location.href="/merchant"}}>
                                                        Finish
                                                    </Button>
                                            }
                                        </Col>
                                        <Col xs={12} sm={12} md={3} lg={3}></Col>
                                    </Row>
                                </div>
                                :
                                null
                            }
                            <br/>
                            {/* pay money by online */}
                            { this.state.online ?
                                <div>
                                    <br/><br/>
                                    <Row>
                                        <Col xs={12} sm={12} md={2} lg={2}></Col>
                                        <Col xs={12} sm={12} md={8} lg={8}>
                                            <div>
                                                <div>
                                                    <Tabs defaultActiveKey={this.state.key} animation={false} id="controlled-tab-example" className="tab-special-category-merchant" >
                                                        <Tab eventKey={1} className="tab-title" title={<i className="fa fa-address-card-o" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;Wing</i>}>
                                                            <h2>Pay by Wing</h2>
                                                            <Button bsStyle="warning" onClick={() => { location.href="/merchant"}}>Cancel</Button>
                                                        </Tab>
                                                        <Tab eventKey={2} title={<i className="fa fa-address-card-o" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;E-Money</i>}>
                                                            <h2>Pay by E-Money</h2>
                                                            <Button bsStyle="warning" onClick={() => { location.href="/merchant"}}>Cancel</Button>
                                                        </Tab>
                                                        <Tab eventKey={3} title={<i className="fa fa-address-card-o" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;Smart Luy</i>}>
                                                            <h2>Pay by Smart Luy</h2>
                                                            <Button bsStyle="warning" onClick={() => { location.href="/member"}}>Cancel</Button>
                                                        </Tab>
                                                    </Tabs>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={2} lg={2}></Col>
                                    </Row>
                                </div>
                                :
                                null
                            }
                        </div>
                        :
                        <div>
                            <br/><br/><br/>
                            <Row>
                                <Col xs={12} sm={12} md={2} lg={2}></Col>
                                <Col xs={12} sm={12} md={8} lg={8}>
                                    <center>
                                        <h3><b style={{color:'blue'}}>បង់លុយតាម: </b></h3>
                                        <FormGroup onChange={this.getTypePayment.bind(this)}>
                                            <Radio name="paid" value="cash" inline style={{fontSize:'14pt'}}>ផ្ទាល់</Radio>{' '}
                                            <Radio name="paid" value="online" inline style={{fontSize:'14pt'}}>អនឡាញ</Radio>
                                        </FormGroup>
                                        <div style={{border:'groove', width:'50%'}}>
                                            <h4>ប្រភេទ ផេកខេក: <b style={{color:'#E91E63'}}>{ duration + " ខែ ជាមួយ $ "+price}</b></h4>
                                            <h4>ថ្ងៃចាប់ផ្ដើម: <b style={{color:'green'}}>{PromoteMerchantPayment.dateFormat(startDate)}</b></h4>
                                            <h4>ថ្ងៃផុតកំណត់: <b style={{color:'green'}}>{PromoteMerchantPayment.dateFormat(endDate)}</b></h4>
                                            <h4>តម្លៃ: <b style={{color:'#E91E63'}}>{"$ " +price}</b></h4>
                                        </div>
                                    </center>
                                </Col>
                                <Col xs={12} sm={12} md={2} lg={2}>
                                    {
                                        loadState().user.userType == "normal" ?
                                            <Link to="/normal/form-promote-tobe-merchant"><Button bsStyle="info">ថយក្រោយ</Button></Link>
                                            :
                                            <Link to="/merchant/form-promote-tobe-merchant"><Button bsStyle="info">ថយក្រោយ</Button></Link>
                                    }

                                </Col>
                            </Row>
                            {/* calculation */}
                            { this.state.cash ?
                                <div>
                                    <br/><br/>
                                    <Row>
                                        <Col xs={12} sm={12} md={3} lg={3}></Col>
                                        <Col xs={12} sm={12} md={6} lg={6}>
                                            <div style={{border:"groove red", backgroundColor: '#FCE4EC'}}>
                                                <h4 style={{marginLeft: '10px', fontWeight: 'bold'}}>សូមទំនាក់ទំនង ទៅកាន់Admin ដើម្បីទទូលសំណើររបស់លោកអ្នក</h4>
                                                <h4 style={{marginLeft: '10px'}}>លេខទួរស័ព្ទ: 097 93 93 007</h4>
                                                <h4 style={{marginLeft: '10px'}}>អីមែល: admin@gmail.com</h4>
                                                <h4 style={{marginLeft: '10px', fontWeight: 'bold', color: 'red'}}>សំគាល់:</h4>
                                                <h4 style={{marginLeft: '10px'}}>លោកអ្នកត្រួវតែទាក់ទងទៅ Admin មុន ចំនូនមួយសប្ដារ បន្ទាប់ពីលោកអ្នកបានស្នើរសំ
                                                    ការស្នើរសំរបស់លោកអ្នកនិងផុតកំណត់ បើសិនជាលោកអ្នកមិនបានធ្វើការទំនាក់ទំនងទៅកាន់
                                                </h4>
                                                <h4 style={{marginLeft: '10px'}}>សួមអរគុណ</h4>
                                            </div>
                                            <br/>
                                            {
                                                loadState().user.userType == "normal" ?
                                                    <Button bsStyle="success" onClick={ () => {location.href="/normal"}}>
                                                        រួចរាល់
                                                    </Button>
                                                    :
                                                    <Button bsStyle="success" onClick={ () => {location.href="/merchant"}}>
                                                        រួចរាល់
                                                    </Button>
                                            }
                                        </Col>
                                        <Col xs={12} sm={12} md={3} lg={3}></Col>
                                    </Row>
                                </div>
                                :
                                null
                            }
                            <br/>
                            {/* pay money by online */}
                            { this.state.online ?
                                <div>
                                    <br/><br/>
                                    <Row>
                                        <Col xs={12} sm={12} md={2} lg={2}></Col>
                                        <Col xs={12} sm={12} md={8} lg={8}>
                                            <div>
                                                <div>
                                                    <Tabs defaultActiveKey={this.state.key} animation={false} id="controlled-tab-example" className="tab-special-category-merchant" >
                                                        <Tab eventKey={1} className="tab-title" title={<i className="fa fa-address-card-o" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;វីង</i>}>
                                                            <h2>បង់តាម វីង</h2>
                                                            <Button bsStyle="warning" onClick={() => { location.href="/merchant"}}>បោះបង់</Button>
                                                        </Tab>
                                                        <Tab eventKey={2} title={<i className="fa fa-address-card-o" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;អី-ម៉ានី</i>}>
                                                            <h2>បង់តាម អី-ម៉ានី</h2>
                                                            <Button bsStyle="warning" onClick={() => { location.href="/merchant"}}>បោះបង់</Button>
                                                        </Tab>
                                                        <Tab eventKey={3} title={<i className="fa fa-address-card-o" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;ស្មាតលុយ</i>}>
                                                            <h2>បង់តាម ស្មាតលុយ</h2>
                                                            <Button bsStyle="warning" onClick={() => { location.href="/member"}}>បោះបង់</Button>
                                                        </Tab>
                                                    </Tabs>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={2} lg={2}></Col>
                                    </Row>
                                </div>
                                :
                                null
                            }
                        </div>
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    //console.log("REQUEST", state.memberRequestPromoted);
    //console.log("PACKAGE", state.getPromoteUserPackage);
    if(state.getPromoteUserPackage.code != undefined){
        price = state.getPromoteUserPackage.packages.price;
        duration = state.getPromoteUserPackage.packages.duration;
    }
    return {
        getPromoteUserPackage: state.getPromoteUserPackage,
        memberRequestPromoted: state.memberRequestPromoted
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actionGetPromoteUserPackage, actionMemberRequestPromote }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PromoteMerchantPayment)