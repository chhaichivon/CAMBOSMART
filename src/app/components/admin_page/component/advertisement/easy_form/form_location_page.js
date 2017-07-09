import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class FormLocationPage extends React.Component {

    handleClick(value){
        this.props.handleClick(value);
    }

    render(){
        return(
            this.props.advertisements != undefined ?
                <div>
                    <Row>
                        <Col lg={12}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LT1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '60px'}}>
                                        <h4 style={{marginTop: '20px'}}>
                                            LT1 (1122 x 300px)
                                        </h4>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LT1")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '60px'}}>
                                        <h4 style={{marginTop: '20px'}}>
                                            LT1 (1122 x 300px)
                                        </h4>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LL1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            LL1 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LL1")} title="L1 => Category page ads on the left side">
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            LL1 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LML1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LML1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LML1")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LML1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LMR1") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LMR1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LMR1")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LMR1 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LL2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            LL2 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LL2")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            LL2 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LML2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LML2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LML2")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LML2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LMR2") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LMR2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LMR2")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LMR2 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LL3") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            LL3 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LL3")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            LL3 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LML3") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LML3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LML3")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LML3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LMR3") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LMR3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LMR3")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LMR3 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LL4") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            LL4 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LL4")}>
                                    <div style={{ textAlign: 'center', border: '1px solid #ccc', height: '130px'}}>
                                        <h5 style={{marginTop: '55px'}}>
                                            LL4 (283 x 443px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={4}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LML4") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LML4 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LML4")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LML4 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                            }
                        </Col>
                        <Col lg={5}>
                            {this.props.advertisements.find(advertisement => advertisement.location == "LMR4") != null ?
                                <a style={{pointerEvents: "none", cursor: "not-allowed"}}>
                                    <div style={{ marginTop: '40px', background: '#ddd', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LMR4 (409 x 245px)
                                        </h5>
                                    </div>
                                </a>
                                :
                                <a onClick={() => this.handleClick("LMR4")}>
                                    <div style={{ marginTop: '40px', textAlign: 'center', border: '1px solid #ccc', height: '50px'}}>
                                        <h5 style={{marginTop: '15px'}}>
                                            LMR4 (409 x 245px)
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
