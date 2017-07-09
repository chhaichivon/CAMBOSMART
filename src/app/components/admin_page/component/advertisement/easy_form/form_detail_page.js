import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class FormDetailPage extends React.Component {

    handleClick(value){
        this.props.handleClick(value);
    }

    render(){
        return(
            this.props.advertisements != undefined ?
                <div>
                    <Row>
                        <Col lg={12}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DT1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '60px'}}>
                                        <h4 style={{marginTop: '20px'}}>
                                            DT1 (1122 x 300px)
                                        </h4>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DT1")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '60px'}}>
                                        <h4 style={{marginTop: '20px'}}>
                                            DT1 (1122 x 300px)
                                        </h4>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DL1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            DL1 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DL1")} title="L1 => Category page ads on the left side">
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            DL1 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DML1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DML1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DML1")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DML1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DMR1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DMR1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DMR1")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DMR1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DL2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            DL2 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DL2")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            DL2 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DML2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DML2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DML2")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DML2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DMR2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DMR2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DMR2")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DMR2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DL3") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            DL3 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DL3")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            DL3 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DML3") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DML3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DML3")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DML3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DMR3") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DMR3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DMR3")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DMR3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DL4") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            DL4 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DL4")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            DL4 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DML4") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DML4 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DML4")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DML4 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "DMR4") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DMR4 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("DMR4")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            DMR4 (409 x 245px)
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
