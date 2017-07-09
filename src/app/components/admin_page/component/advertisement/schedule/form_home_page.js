import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class FormHomePage extends React.Component {

    constructor(props){
        super(props);
    }

    handleClick(location){
        window.scrollTo(0,document.body.scrollHeight);
        this.props.handleClick({list: true, location: location});
    }

    render(){
        const advertisements = this.props.advertisements;
        const getAdvertisement = (advertisements, location) => {
            return advertisements.find(advertisement => advertisement.location == location)
        };
        return(
            advertisements != undefined ?
                <div>
                    <Row>
                        <Col lg={12}>
                            <a onClick={() => this.handleClick("HT1")}>
                                <div className="schedule-div">
                                    <h4>
                                        HT1 (1122 x 300px)
                                    </h4>
                                    {getAdvertisement(advertisements, "HT1") != null ?
                                        <span className="schedule-current">Current advertisements : {getAdvertisement(advertisements, "HT1").advertise.length} &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : {20 - getAdvertisement(advertisements, "HT1").advertise.length}
                                            </span>
                                        </span>
                                        :
                                        <span className="schedule-current">Current advertisements : 0 &nbsp; => &nbsp;
                                           <span className="schedule-available">
                                                Available advertisements : 20
                                           </span>
                                        </span>
                                    }
                                </div>
                            </a>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lgOffset={4} lg={8}>
                            <a onClick={() => this.handleClick("HT2")}>
                                <div className="schedule-div-ht2">
                                    <h5 style={{marginTop: '15px'}}>
                                        HT2 (838 x 298px)
                                    </h5>
                                    {getAdvertisement(advertisements, "HT2") != null ?
                                        <span className="schedule-current">Current advertisements : {getAdvertisement(advertisements, "HT2").advertise.length} &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : {20 - getAdvertisement(advertisements, "HT2").advertise.length}
                                            </span>
                                        </span>
                                        :
                                        <span className="schedule-current">Current advertisements : 0 &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : 20
                                            </span>
                                        </span>
                                    }
                                </div>
                            </a>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            <a onClick={() => this.handleClick("HML1")}>
                                <div className="schedule-div">
                                    <h5 style={{marginTop: '15px'}}>
                                        HML1 (557 x 245px)
                                    </h5>
                                    {getAdvertisement(advertisements, "HML1") != null ?
                                        <span className="schedule-current">Current advertisements : {getAdvertisement(advertisements, "HML1").advertise.length} &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : {20 - getAdvertisement(advertisements, "HML1").advertise.length}
                                            </span>
                                        </span>
                                        :
                                        <span className="schedule-current">Current advertisements : 0 &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : 20
                                            </span>
                                        </span>
                                    }
                                </div>
                            </a>
                        </Col>
                        <Col lg={6}>
                            <a onClick={() => this.handleClick("HMR1")}>
                                <div className="schedule-div-right">
                                    <h5 style={{marginTop: '15px'}}>
                                        HMR1 (557 x 245px)
                                    </h5>
                                    {getAdvertisement(advertisements, "HMR1") != null ?
                                        <span className="schedule-current">Current advertisements : {getAdvertisement(advertisements, "HMR1").advertise.length} &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : {20 - getAdvertisement(advertisements, "HMR1").advertise.length}
                                            </span>
                                        </span>
                                        :
                                        <span className="schedule-current">Current advertisements : 0 &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : 20
                                            </span>
                                        </span>
                                    }
                                </div>
                            </a>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            <a onClick={() => this.handleClick("HML2")}>
                                <div className="schedule-div">
                                    <h5 style={{marginTop: '15px'}}>
                                        HML2 (557 x 245px)
                                    </h5>
                                    {getAdvertisement(advertisements, "HML2") != null ?
                                        <span className="schedule-current">Current advertisements : {getAdvertisement(advertisements, "HML2").advertise.length} &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : {20 - getAdvertisement(advertisements, "HML2").advertise.length}
                                            </span>
                                        </span>
                                        :
                                        <span className="schedule-current">Current advertisements : 0 &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : 20
                                            </span>
                                        </span>
                                    }
                                </div>
                            </a>
                        </Col>
                        <Col lg={6}>
                            <a onClick={() => this.handleClick("HMR2")}>
                                <div className="schedule-div-right">
                                    <h5 style={{marginTop: '15px'}}>
                                        HMR2 (557 x 245px)
                                    </h5>
                                    {getAdvertisement(advertisements, "HMR2") != null ?
                                        <span className="schedule-current">Current advertisements : {getAdvertisement(advertisements, "HMR2").advertise.length} &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : {20 - getAdvertisement(advertisements, "HMR2").advertise.length}
                                            </span>
                                        </span>
                                        :
                                        <span className="schedule-current">Current advertisements : 0 &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : 20
                                            </span>
                                        </span>
                                    }
                                </div>
                            </a>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            <a onClick={() => this.handleClick("HML3")}>
                                <div className="schedule-div">
                                    <h5 style={{marginTop: '15px'}}>
                                        HML3 (557 x 245px)
                                    </h5>
                                    {getAdvertisement(advertisements, "HML3") != null ?
                                        <span className="schedule-current">Current advertisements : {getAdvertisement(advertisements, "HML3").advertise.length} &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                <span className="schedule-available">
                                                Available advertisements : {20 - getAdvertisement(advertisements, "HML3").advertise.length}
                                            </span>
                                            </span>
                                        </span>
                                        :
                                        <span className="schedule-current">Current advertisements : 0 &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : 20
                                            </span>
                                        </span>
                                    }
                                </div>
                            </a>
                        </Col>
                        <Col lg={6}>
                            <a onClick={() => this.handleClick("HMR3")}>
                                <div className="schedule-div-right">
                                    <h5 style={{marginTop: '15px'}}>
                                        HMR3 (557 x 245px)
                                    </h5>
                                    {getAdvertisement(advertisements, "HMR3") != null ?
                                        <span className="schedule-current">Current advertisements : {getAdvertisement(advertisements, "HMR3").advertise.length} &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : {20 - getAdvertisement(advertisements, "HMR3").advertise.length}
                                            </span>
                                        </span>
                                        :
                                        <span className="schedule-current">Current advertisements : 0 &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : 20
                                            </span>
                                        </span>
                                    }
                                </div>
                            </a>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={6}>
                            <a onClick={() => this.handleClick("HML4")}>
                                <div className="schedule-div">
                                    <h5 style={{marginTop: '15px'}}>
                                        HML4 (557 x 245px)
                                    </h5>
                                    {getAdvertisement(advertisements, "HML4") != null ?
                                        <span className="schedule-current">Current advertisements : {getAdvertisement(advertisements, "HML4").advertise.length} &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : {20 - getAdvertisement(advertisements, "HML4").advertise.length}
                                            </span>
                                        </span>
                                        :
                                        <span className="schedule-current">Current advertisements : 0 &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : 20
                                            </span>
                                        </span>
                                    }
                                </div>
                            </a>
                        </Col>
                        <Col lg={6}>
                            <a onClick={() => this.handleClick("HMR4")}>
                                <div className="schedule-div-right">
                                    <h5 style={{marginTop: '15px'}}>
                                        HMR4 (557 x 245px)
                                    </h5>
                                    {getAdvertisement(advertisements, "HMR4") != null ?
                                        <span className="schedule-current">Current advertisements : {getAdvertisement(advertisements, "HMR4").advertise.length} &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : {20 - getAdvertisement(advertisements, "HMR4").advertise.length}
                                            </span>
                                        </span>
                                        :
                                        <span className="schedule-current">Current advertisements : 0 &nbsp; => &nbsp;
                                            <span className="schedule-available">
                                                Available advertisements : 20
                                            </span>
                                        </span>
                                    }
                                </div>
                            </a>
                        </Col>
                    </Row>
                </div>
                :
                null
        )
    }
}
