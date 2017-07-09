import React from 'react';
import { Link } from 'react-router';
import { loadLanguage } from './../../../../localstorages/local_storage';
import { Button, Row, Col, PageHeader, Thumbnail, Table } from 'react-bootstrap';
import { loadState } from './../../../../localstorages/local_storage';

import './../form_search.css';
export default class PromoteDescription extends React.Component {
    render(){
        return(
            <div className="container promote">
                {
                    loadLanguage() == "en" || loadLanguage == undefined ?
                        <div>
                            <br/><br/>
                            <Row>
                                <Col xs={11} sm={11} md={11} lg={11}></Col>
                                <Col xs={1} sm={1} md={1} lg={1}>
                                    {
                                        loadState().user.userType == 'normal' ?
                                            <Link to="/normal"><Button bsStyle="info">Back</Button></Link>
                                            :
                                            <Link to="/merchant"><Button bsStyle="info">Back</Button></Link>
                                    }
                                </Col>
                            </Row>
                            <p className="head-title" style={{textAlign:'center'}}>How Can We Help You?</p>
                            <p className="title" style={{textAlign:'center'}}>We're glad you're here! With more than a million local businesses on our platform to date, we understand how to help you increase your revenue, lower your costs, and grow your business. Let's join with us today.</p>
                            <br/>
                            <p className="head-title" style={{textAlign: 'center'}}>
                                Advantages of Business Account
                            </p>
                            <Row className="wrap-promote-content">
                                <Col xs={2} sm={2} md={2} lg={2}></Col>
                                <Col xs={3} sm={3} md={3} lg={4}>
                                    <Thumbnail className="upgrade" src="/images/others/marketing.jpg" alt="242x200">
                                        <p className="head-title">Increase Selling</p>
                                        <p className="title">We provide you with storage until 200 products.</p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={4}>
                                    <Thumbnail className="upgrade" src="/images/others/171304084924Backup.jpg" alt="242x200">
                                        <p className="head-title">Manage Capacity of Storage</p>
                                        <p className="title">We provide you a feature to delete your products so you can delete your unnecessary products.
                                        </p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={2} sm={2} md={2} lg={2}></Col>
                            </Row>
                            <br/>
                            <p className="head-title" style={{textAlign: 'center'}}>
                                What Is Different between Normal Account and Business Account?
                            </p>

                            <div className="col-lg-4 col-xs-4 col-md-4 col-sm-4 blue">
                                <div className="panel blue-panel">
                                    <div className="panel-heading blue-panel">
                                        <h3 className="text-center hprice">FEATURES</h3>
                                    </div>
                                    <ul className="list-group list-group-flush text-center">
                                        <li className="list-group-item">
                                            <h4 className="text-center">  Amount of products</h4>
                                        </li>
                                        <li className="list-group-item">
                                            <h4 className="text-center"> Delete products</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-4 col-md-4 col-sm-4 blue">
                                <div className="panel blue-panel">
                                    <div className="panel-heading black-panel">
                                        <h3 className="text-center hprice">NORMAL ACCOUNT</h3>
                                        <h4 className="text-center">FREE</h4>
                                    </div>
                                    <ul className="list-group list-group-flush text-center">
                                        <li className="list-group-item">
                                            <h4 className="text-center">5 products</h4>
                                        </li>
                                        <li className="list-group-item">
                                            <h4 className="text-center"> <i className="fa fa-times fa-2x" style={{color:'red'}} aria-hidden="true"></i></h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-4 col-md-4 col-sm-4 blue">
                                <div className="panel blue-panel">
                                    <div className="panel-heading orange-panel">
                                        <h3 className="text-center hprice">BUSINESS ACCOUNT</h3>
                                        <h4 className="text-center">6 months $ 15</h4>
                                        <h4 className="text-center">12 months $ 30</h4>
                                    </div>
                                    <ul className="list-group list-group-flush text-center">
                                        <li className="list-group-item">
                                            <h4  className="text-center"> 200 products</h4>
                                        </li>
                                        <li className="list-group-item">
                                            <h4 className="text-center"> <i className="fa fa-check-square fa-2x" style={{color:'green'}} aria-hidden="true"></i></h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-offset-8 col-xs-4">
                                    {
                                        loadState().user.userType == 'normal' ?
                                            <Link to="/normal/form-promote-tobe-merchant">
                                                <Button className="request" style={{width: '300px', height:'70px'}}><img src="/icon/Buttons/Request-Button.gif"/> </Button>
                                            </Link>
                                            :
                                            <Link to="/merchant/form-promote-tobe-merchant">
                                                <Button className="request" style={{width: '300px', height:'70px'}}><img src="/icon/Buttons/Request-Button.gif"/> </Button>
                                            </Link>
                                    }
                            </div>
                            <br/>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <div style={{border:'groove red', padding:'20px', backgroundColor:'pink'}}>
                                        <h4 style={{fontWeight:'bold'}}>Posting Rule: </h4>
                                        <ul className="post-role">
                                            <li>1. Do not post duplicate products.</li>
                                            <li>2. Do not create many accounts.</li>
                                            <li>3. Do not post products with wrong category.</li>
                                            <li>4. Do not add your contacts in product's description.</li>
                                            <li>5. Use real product's photos.</li>
                                            <li>6. Use real product's information.</li>
                                            <br/>
                                            <li><Link to="/help/post-rule">More detail ...</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        :
                        <div>
                            <br/><br/>
                            <Row>
                                <Col xs={12} sm={12} md={11} lg={11}></Col>
                                <Col xs={12} sm={12} md={1} lg={1}>
                                    <Link to="/normal"><Button bsStyle="info">ថយក្រោយ</Button></Link>
                                </Col>
                            </Row>
                            <p className="head-title" style={{textAlign:'center'}}>តើ​យើង​អាច​ជួយលោក​អ្នក​ដោយ​របៀបណា​?</p>
                            <p className="title" style={{textAlign:'center'}}>
                                យើងខ្ញុំរីករាយណាស់ដែលលោកអ្នកមានវត្តមាននៅទីនេះ!ជាមួយនឹង អ្នកធ្វើអាជីវកម្មក្នុងស្រុកជាងមួយលាននាក់ យើងយល់ពីរវិធីសាស្រ្តដើម្បីជួយបង្កើនប្រាក់ចំណូលរបស់លោកអ្នក, ក៏ដូចជា ការជួយកាត់បន្ថយលើការចំណាយរបស់លោកអ្នក, និងធ្វើឧ្យជំនួញរបស់អ្នកមានការរីកលូតលាស់យ៉ាងឆាប់រហ័ស សូមចូលរួមជាមួយនិងយើងខ្ញុំនៅថ្ងៃនេះ។
                            </p>
                            <br/>
                            <p className="head-title" style={{textAlign: 'center'}}>
                                អត្ថប្រយោជន៏ គណនេយ្យអាជីវកម្ម
                            </p>
                            <Row className="wrap-promote-content">
                                <Col xs={2} sm={2} md={2} lg={2}></Col>
                                <Col xs={4} sm={4} md={4} lg={4}>
                                    <Thumbnail className="upgrade" src="/images/others/marketing.jpg" alt="242x200">
                                        <p className="head-title">បង្កើនការលក់</p>
                                        <p className="title">យើងខ្ញុំអនុញ្ញាតិឲ្យលោអ្នកអាច ដាក់លក់ផលិតផលរបស់លោកអ្នករហូតដល់ ២០០ ផលិតផល ។ ព្រមទាំ មាន រូបសញ្ញាបញ្ជាក់ហាងឡូហ្គូ លើផលិតផលដែលលោកអ្នកបានដាក់លក់។</p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4}>
                                    <Thumbnail className="upgrade" src="/images/others/171304084924Backup.jpg" alt="242x200">
                                        <p className="head-title">គ្រប់គ្រងទំហំនៃការផ្ទុក</p>
                                        <p className="title"> យើងបានផ្ដល់ ជូនលោកអ្នកនូវលក្ខណៈពិសេស មួយសំរាប់អោយលោកអ្នកលុបចោលនូវ ផលិតផល ដែលលោកអ្នកមិនត្រូវការ ឬ មិនចាំបាច់។
                                        </p>
                                    </Thumbnail>
                                </Col>
                            </Row>
                            <br/>
                            <p className="head-title" style={{textAlign: 'center'}}>
                                តើអ្វីទៅជាភាពខុសគ្នារវាងគណនីធម្មតា និងគណនីអាជីវកម្ម?
                            </p>
                            <div className="col-lg-4 col-xs-4 col-md-4 col-sm-4 blue">
                                <div className="panel blue-panel">
                                    <div className="panel-heading blue-panel">
                                        <h3 className="text-center hprice">លក្ខណៈពិសេស</h3>
                                    </div>
                                    <ul className="list-group list-group-flush text-center">
                                        <li className="list-group-item">
                                            <h4 className="text-center">  ចំនួន ផលិតផលទាំអស់</h4>
                                        </li>
                                        <li className="list-group-item">
                                            <h4 className="text-center"> លុបផលិតផលចេញ</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-4 col-md-4 col-sm-4 blue">
                                <div className="panel blue-panel">
                                    <div className="panel-heading black-panel">
                                        <h3 className="text-center hprice">គណនីធម្មតា</h3>
                                        <h4 className="text-center">ហ្វ្រី គ្មានការគិតប្រាក់</h4>
                                    </div>
                                    <ul className="list-group list-group-flush text-center">
                                        <li className="list-group-item">
                                            <h4 className="text-center">5 ផលិតផល</h4>
                                        </li>
                                        <li className="list-group-item">
                                            <h4 className="text-center"> <i className="fa fa-times fa-2x" style={{color:'red'}} aria-hidden="true"></i></h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-4 col-md-4 col-sm-4 blue">
                                <div className="panel blue-panel">
                                    <div className="panel-heading orange-panel">
                                        <h3 className="text-center hprice">គណនីអាជីវកម្ម</h3>
                                        <h4 className="text-center">សំរាប់ 6 ខែ តម្លៃ​ $ 15</h4>
                                        <h4 className="text-center">សំរាប់ 12 ខែ តម្លៃ $ 30</h4>
                                    </div>
                                    <ul className="list-group list-group-flush text-center">
                                        <li className="list-group-item">
                                            <h4  className="text-center"> 200 ផលិតផល</h4>
                                        </li>
                                        <li className="list-group-item">
                                            <h4 className="text-center"> <i className="fa fa-check-square fa-2x" style={{color:'green'}} aria-hidden="true"></i></h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-offset-8 col-xs-4">
                                {
                                    loadState().user.userType == 'normal' ?
                                        <Link to="/normal/form-promote-tobe-merchant">
                                            <Button className="request" style={{width: '300px', height:'70px'}}><img src="/icon/Buttons/Request-Button(Kh).gif"/> </Button>
                                        </Link>
                                        :
                                        <Link to="/merchant/form-promote-tobe-merchant">
                                            <Button className="request" style={{width: '300px', height:'70px'}}><img src="/icon/Buttons/Request-Button(Kh).gif"/> </Button>
                                        </Link>
                                }
                            </div>
                            <br/>
                            <Row>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <div style={{border:'groove red', padding:'20px', backgroundColor:'pink'}}>
                                        <h4 style={{fontWeight:'bold'}}>ច្បាប់នៅក្នុងការផុសផលិតផល: </h4>
                                        <ul className="post-role">
                                            <li>1. កុំផុសផលិតផលស្ទួន</li>
                                            <li>2. កុំបង្កើតគណនីច្រើន</li>
                                            <li>3. កុំផុសផលិតផលខុស ប្រភេទផលិតផល </li>
                                            <li>4. កុំដាក់អាស័យដ្ធានទំនាក់ទំនងរបស់អ្នកនៅកន្លែងពិពណ៏នាផលិតផល</li>
                                            <li>5. ប្រើប្រាស់រូបផលិតផលពិតប្រាកដ</li>
                                            <li>6. ពត៏មានផលិតផលត្រូវតែពិតប្រាកដនិងជាក់ស្ដែង</li>
                                            <br/>
                                            <li><Link to="/help/post-rule">ពត៏មានលម្អិត ...</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                }

            </div>
        )
    }
}