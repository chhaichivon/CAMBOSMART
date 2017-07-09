import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class FormCategoryPage extends React.Component {

    handleClick(value){
        this.props.handleClick(value);
    }

    render(){
        return(
            this.props.advertisements != undefined ?
                <div>
                    <Row>
                        <Col lg={12}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CT1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '60px'}}>
                                        <h4 style={{marginTop: '20px'}}>
                                            CT1 (1122 x 300px)
                                        </h4>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CT1")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '60px'}}>
                                        <h4 style={{marginTop: '20px'}}>
                                            CT1 (1122 x 300px)
                                        </h4>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CL1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            CL1 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CL1")} title="L1 => Category page ads on the left side">
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            CL1 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CML1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CML1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CML1")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CML1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CMR1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CMR1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CMR1")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CMR1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CL2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            CL2 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CL2")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            CL2 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CML2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CML2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CML2")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CML2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CMR2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CMR2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CMR2")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CMR2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CL3") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            CL3 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CL3")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            CL3 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CML3") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CML3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CML3")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CML3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CMR3") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CMR3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CMR3")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CMR3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CL4") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            CL4 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CL4")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            CL4 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CML4") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CML4 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CML4")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CML4 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "CMR4") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CMR4 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("CMR4")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            CMR4 (409 x 245px)
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
