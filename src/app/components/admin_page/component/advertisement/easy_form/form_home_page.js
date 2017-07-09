import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class FormHomePage extends React.Component {

    handleClick(value){
        this.props.handleClick(value);
    }

    render(){
        return(
            this.props.advertisements != undefined ?
                <div>
                    <Row>
                        <Col lg={12}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "HT1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '60px'}}>
                                        <h4 style={{marginTop: '20px'}}>
                                            HT1 (1122 x 300px)
                                        </h4>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("HT1")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '60px'}}>
                                        <h4 style={{marginTop: '20px'}}>
                                            HT1 (1122 x 300px)
                                        </h4>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lgOffset={4} lg={8}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "HT2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HT2 (838 x 298px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("HT2")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HT2 (838 x 298px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "HML1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HML1 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("HML1")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HML1 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={6}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "HMR1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HMR1 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("HMR1")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HMR1 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "HML2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HML2 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("HML2")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HML2 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={6}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "HMR2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HMR2 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("HMR2")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HMR2 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "HML3") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HML3 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("HML3")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HML3 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={6}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "HMR3") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HMR3 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("HMR3")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HMR3 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "HML4") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HML4 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("HML4")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HML4 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={6}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "HMR4") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HMR4 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("HMR4")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            HMR4 (557 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                </div>
                : 
                null
        )
    }
}
